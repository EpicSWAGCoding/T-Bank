import {Alert, Pressable, TextInput, View} from 'react-native';
import {useState} from 'react';
import {useAuth} from "../../../hooks/useAuth";
import tw from "tailwind-rn";
import {FontAwesome5} from "@expo/vector-icons";
import {addDoc, serverTimestamp} from "firebase/firestore";
import {collection} from "@firebase/firestore";
import {db} from "../../../firebase";

export const FieldMessage = () => {
    const {user} = useAuth();
    const [message, setMessage] = useState('');

    const handleSendMessage = async () => {
        try {
            await addDoc(collection(db, 'messages'), {
                timestamp: serverTimestamp(),
                userId: user?.uid,
                text: message,
            });
        } catch (error: any) {
            Alert.alert('Err add new msg: ', error);
        } finally {
            setMessage('');
        }
    };

    return (
        <View style={tw('mt-30 flex-row items-center justify-between py-1')}>
            <TextInput
                style={tw('bg-gray-100 rounded-xl p-3 w-5/6 h-10 rounded-2xl')}
                placeholder="Enter your message"
                onChangeText={setMessage}
                value={message}
                autoCapitalize="none"
                showSoftInputOnFocus={false}
            />
            <Pressable onPress={handleSendMessage}>
            {/*<Pressable onPress={() => {}}>*/}
                <FontAwesome5 name="arrow-up" size={24} style={tw('text-blue-300')} />
            </Pressable>
        </View>
    );
};
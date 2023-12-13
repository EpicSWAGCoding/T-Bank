import {ScrollView, View} from 'react-native';
import {FC} from 'react';
import {useContacts} from "./useContacts";
import {SubHeading} from "../../ui/SubHeading";
import Loader from "../../ui/Loader";
import tw from "tailwind-rn";
import {ContactItem} from "./ContactItem";

export const Contacts: FC = () => {
    const {contacts, isLoading} = useContacts();

    return (
        <View style={tw('my-8')}>
            <SubHeading text="Phone transfers" />
            {isLoading ? (
                <Loader />
            ) : (
                <ScrollView
                    style={tw('mt-5')}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}>
                    {contacts.map(c => (
                        <ContactItem key={c._id} contact={c} />
                    ))}
                </ScrollView>
            )}
        </View>
    );
};
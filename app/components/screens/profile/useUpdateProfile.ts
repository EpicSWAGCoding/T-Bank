import {useState} from "react";
import {Alert} from "react-native";
import {useAuth} from "../../../hooks/useAuth";

export const useUpdateProfile = () => {

    const {user} = useAuth()

    const [isLoading, setIsLoading] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    const updateProfile = async () => {
        setIsLoading(true)

        if(!user ) return

        try {

            // const docRef = doc(db, 'users', docId)

            // await updateDoc(docRef, {
            //     displayName: name
            // })

            setIsSuccess(true)

            setTimeout(() => setIsLoading(false), 3000)

        } catch (error: any) {
            Alert.alert('Error update profile', error.massage)
        } finally {
            setIsLoading(false)
        }
    }

    return {isLoading, updateProfile, isSuccess}
}
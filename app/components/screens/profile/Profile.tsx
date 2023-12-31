import React, { FC } from 'react';
import {useProfile} from "./useProfile";
import Layout from "../../layout/Layout";
import Heading from "../../ui/Heading";
import Padding from "../../ui/Padding";
import Loader from "../../ui/Loader";
import Field from "../../ui/Field";
import Button from "../../ui/Button";
import {useAuth} from "../../../hooks/useAuth";
import {useUpdateProfile} from "./useUpdateProfile";
import {Text, View} from "react-native";
import tw from "tailwind-rn";

const Profile: FC = () => {
    const { logout } = useAuth()
    const { isLoading: isProfileLoading, user, setUser, profile} = useProfile()

    const {isLoading, isSuccess, updateProfile} = useUpdateProfile()

    return (
        <Layout>
            <Heading text="Profile" isCenter={true} />
            <Padding>
                {isSuccess && (
                    <View style={tw('bg-green-500 p-3 py-2 rounded-lg')}>
                        <Text style={tw('text-white text-center')}>
                            Profile updated successfully
                        </Text>
                    </View>
                )}
                {
                    (isProfileLoading || isLoading) ? ( <Loader /> ) : (<>

                        <Field
                            onChange={(newValue: string) =>
                                setUser((prevUser) => ({
                                    ...(prevUser as { name: string }),
                                    name: newValue,
                                }))
                            }
                            val={user?.name ?? ''}
                            placeholder="Enter name"
                        />
                    <Button onPress={updateProfile} title="Update profile" />
                    <Button onPress={logout} title="Logout" colors={['bg-gray-200', '#D6D8DB']} />

                    </>)
                }
            </Padding>
        </Layout>
    );
};

export default Profile;
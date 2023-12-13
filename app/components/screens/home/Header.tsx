import React, { FC, useEffect, useState } from 'react';
import tw from 'tailwind-rn';
import Padding from "../../ui/Padding";
import Avatar from "../../ui/Avatar";
import { Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from '@expo/vector-icons';
import Loader from "../../ui/Loader";
import { getUser } from "../../../hooks/queries";
// import { useAuthContext } from "../../../providers/AuthContext";

const Header: FC = () => {
    // const { email } = useAuthContext();
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getUser();

                if (data && Array.isArray(data) && data.length > 0) {
                    const fetchedUser = data.find((userData) => userData.email === 'test@test.ru'); //тут вместо записи должно быть получение email с страницы Auth

                    console.log("Fetched user:", fetchedUser);

                    if (fetchedUser) {
                        setUser(fetchedUser);
                    } else {
                        console.error("Пользователь с таким email не найден");
                    }
                } else {
                    console.error("Данные пользователя не найдены");
                }

                setIsLoading(false);
            } catch (error) {
                console.error("Ошибка при получении данных", error);
                setIsLoading(false);
            }
        };

        fetchData();
    }, []); // Добавил зависимость от email, чтобы useEffect запускался при изменении email

    const { navigate } = useNavigation();

    return isLoading ? <Loader /> : (
        <Padding style={tw('flex-row items-center')}>
            <Avatar name='Egor' />
            <TouchableOpacity onPress={() => navigate('Profile')} style={tw('flex-row items-end')}>
                {user ? (
                    <Text style={tw('text-2xl text-gray-800 font-bold')}>{user.name}</Text>
                ) : (
                    <Text style={tw('text-2xl text-gray-800 font-bold')}>No User Name</Text>
                )}
                <Entypo name='chevron-small-right' size={28} style={tw('text-gray-800')} />
            </TouchableOpacity>
        </Padding>
    );
};

export default Header;

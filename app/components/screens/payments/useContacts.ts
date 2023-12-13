import {useEffect, useState} from 'react';
import {IContact} from "./types";
import client from "../../../hooks/sanity";

export const useContacts = () => {
    const [contacts, setContacts] = useState<IContact[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    //Get users
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const query = '*[_type == "user"]'; // Простой запрос, замените его на ваш запрос Sanity
                const result = await client.fetch(query);

                setContacts(result);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching users:', error);
                setIsLoading(false);
            }
        };

        fetchUsers();
    }, []); // Пустой массив зависимостей гарантирует выполнение useEffect только один раз при монтировании компонента

    return {contacts, isLoading};
};
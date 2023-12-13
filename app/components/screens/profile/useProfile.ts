import {useEffect, useState} from "react";
import {getUser} from "../../../hooks/queries";


export const useProfile = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState<{ name: string } | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getUser();

                if (data && Array.isArray(data) && data.length > 0) {
                    const fetchedUser = data[0];
                    setUser(fetchedUser);
                    setIsLoading(false);
                } else {
                    console.error("Данные пользователя не найдены");
                    setIsLoading(false);
                }
            } catch (error) {
                console.error("Ошибка при получении данных", error);
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    return { isLoading, user, setUser };
};
import { useEffect, useState } from "react";
import {getAccounts} from "../../../../hooks/queries";

const useAccounts = () => {
    const [accounts, setAccounts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Вызов функции получения данных аккаунтов
                const data = await getAccounts();

                // Обработка данных
                if (data && Array.isArray(data) && data.length > 0) {
                    setAccounts(data);
                    setIsLoading(false);
                } else {
                    console.error("Данные аккаунтов не найдены");
                    setIsLoading(false);
                }
            } catch (error) {
                console.error("Ошибка при получении данных аккаунтов", error);
                setIsLoading(false);
            }
        };

        fetchData(); // Вызываем функцию fetchData, чтобы она выполнялась при монтировании компонента
    }, []); // Пустой массив зависимостей гарантирует выполнение useEffect только один раз при монтировании компонента

    return { isLoading, accounts };
};

export default useAccounts;

import {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import {ICurrency} from "./types";
import { URL } from "./API";

export const useCurrencies = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [currencies, setCurrencies] = useState<ICurrency[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${URL}&currencies=EUR%2CUSD%2CCNY&base_currency=RUB`);
                const result = await response.json(); //обязательно

                setCurrencies([
                    {
                      name: 'USD',
                      value: (1 / result.data.USD).toFixed(2),
                    },
                    {
                      name: 'EUR',
                      value: (1 / result.data.EUR).toFixed(2),
                    },
                    {
                      name: 'CNY',
                      value: (1 / result.data.CNY).toFixed(2),
                    },
                ])

            } catch (error: any) {
                Alert.alert('Fetch currencies', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    return {isLoading, currencies};
};
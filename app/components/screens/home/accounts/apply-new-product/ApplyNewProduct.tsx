import {Alert, View} from 'react-native';
import {useAuth} from "../../../../../hooks/useAuth";
import {asyncAlert} from "./asyncAlert";
import Button from "../../../../ui/Button";
import {getRandomCardNumber} from "./getRandomCardNumber";
import client from "../../../../../hooks/sanity";
import tw from "tailwind-rn";

export const ApplyNewProduct = () => {
    const {user} = useAuth();

    const createAccount = async ({ currency, cardType }) => {
        const data = {
            userId: user?.uid,
            balance: 0,
            cardNumber: getRandomCardNumber(),
            currency,
            name: cardType,
        };

        try {
            // Используйте `create` для добавления новой записи в Sanity
            await client.create({
                _type: 'accounts', // Имя вашего типа документа в Sanity
                ...data,
            });

        } catch (error) {
            throw new Error(`Error creating account: ${error.message}`);
        }
    };

    const registerHandler = async () => {
        try {
            const currency = await asyncAlert({
                title: 'Currency',
                msg: 'Select account currency:',
                buttons: {
                    text: 'RUB',
                    resolveValue: 'RUB',
                    textSecond: 'USD',
                    resolveValueSecond: 'USD',
                },
            });

            const cardType = await asyncAlert({
                title: 'Card type',
                msg: 'Select card type:',
                buttons: {
                    text: 'Black',
                    resolveValue: 'Tinkoff Black',
                    textSecond: 'All airlines',
                    resolveValueSecond: 'Tinkoff All Airlines',
                },
            });

            // Вызов метода для добавления аккаунта
            await createAccount({ currency, cardType });

        } catch (error) {
            Alert.alert('Error apply new product', error.message);
        }
    };

    return (
        <View style={tw('mt-6')}>
            <View>
                <Button onPress={registerHandler} title="Apply for a new product" />
            </View>
        </View>
    );
};
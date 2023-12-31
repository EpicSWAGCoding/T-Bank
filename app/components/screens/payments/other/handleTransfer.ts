//перевод по номеру карты

import {Alert} from 'react-native';
import {IAccount} from "../../home/accounts/types";

export const handleTransfer = async (
    fromAccount: IAccount,
    cardNumber: string,
) => {
    Alert.prompt('Sum transfer', 'Enter the transfer amount:', async sum => {
        try {
            // //идентификация кому переводим
            // let accountToId = '';
            // let currentToBalance = '';
            //
            // const querySnapshop = await getDocs(
            //     query(
            //         collection(db, 'accounts'),
            //         where('cardNumber', '==', cardNumber),
            //         limit(1),
            //     ),
            // );
            //
            // // eslint-disable-next-line @typescript-eslint/no-shadow
            // querySnapshop.docs.forEach(doc => {
            //     accountToId = doc.id;
            // });
            //
            // //референс для работы с балансом
            // const docRefTo = doc(db, 'accounts', accountToId);
            // const docSnapTo = await getDoc(docRefTo);
            //
            // if (docSnapTo.exists()) {
            //     currentToBalance = docSnapTo.data().balance;
            // } else {
            //     Alert.alert('The card where you are sending money was not found');
            //     return;
            // }
            //
            // console.log(docSnapTo.id);
            //
            // await updateDoc(docRefTo, {
            //     balance: currentToBalance + Number(sum),
            // });
            //
            // //тот кто отправляет деньги
            // const docRefFrom = doc(db, 'accounts', fromAccount._id);
            // await updateDoc(docRefFrom, {
            //     balance: fromAccount.balance - Number(sum),
            // });

            console.log(`Simulated transfer: ${sum} transferred from ${fromAccount._id} to ${cardNumber}`);
            return;
        } catch (error: any) {
            Alert.alert('Error transfer', error);
        }
    });
};
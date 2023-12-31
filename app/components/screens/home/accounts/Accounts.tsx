import React, { FC, Fragment } from 'react';
import { Text, View } from 'react-native';
import Padding from "../../../ui/Padding";
import Loader from "../../../ui/Loader";
import AccountItem from "./item/AccountItem";
import useAccounts from "./useAccounts";

const Accounts: FC = () => {
    const {accounts, isLoading} = useAccounts()

    return (
        <Padding>
            {isLoading ? <Loader /> : accounts.length ? accounts.map((account, idx) => (
                <Fragment key={account._id}>
                    <AccountItem account={account} />
                    {idx + 1 === accounts.length && <View style={{ borderBottomColor: '#E0E1E2', borderBottomWidth: 1, marginBottom: 24 }} />}
                </Fragment>
            )) : <Text>You don`t have a card</Text>}
        </Padding>
    );
};

export default Accounts;
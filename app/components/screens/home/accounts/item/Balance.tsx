import React, {FC} from 'react';
import {Text, View} from "react-native";
import {IAccount} from "../types";
import tw from "tailwind-rn";

const Balance: FC<{ account: IAccount }> = ({ account: { balance, currency, name } }) => {
    return (
        <View style={tw('w-8/12')}>
            <Text style={{ fontSize: 15 }}>{name}</Text>
            <Text style={{ ...tw('font-bold'), marginTop: 2, fontSize: 15 }}>
                {Intl.NumberFormat(undefined, {
                    currency,
                    style: 'currency'
                }).format(balance)}
            </Text>
        </View>
    );
};

export default Balance;
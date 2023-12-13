import {Pressable, Text} from 'react-native';
import {FC} from 'react';
import {IOtherItem} from "../types";
import useAccounts from "../../../home/accounts/useAccounts";
import {BOX_SHADOW} from "../../../../../style";
import tw from "tailwind-rn";
import {Icon} from "./Icon";

// const CASH_CARD_NUMBER = '4917 2154 8691 5737';

export const OtherItem: FC<{item: IOtherItem}> = ({item}) => {
    const {accounts} = useAccounts();
    return (
        <Pressable
            style={{ ...tw('ml-4 rounded-xl p-2 w-24 h-24 bg-white'), ...BOX_SHADOW }}
            // onPress={handleTransfer.bind(this, accounts[0], CASH_CARD_NUMBER)}>
            onPress={() => {}}>
            <Icon iconName={item.iconName} />
            <Text style={{ ...tw('text-xs'), marginTop: 6 }}>{item.title}</Text>
        </Pressable>
    );
};
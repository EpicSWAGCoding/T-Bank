import {Pressable, Text} from 'react-native';
import {FC} from 'react';
import {IContact} from "./types";
import useAccounts from "../home/accounts/useAccounts";
import tw from "tailwind-rn";
import Avatar from "../../ui/Avatar";

export const ContactItem: FC<{contact: IContact}> = ({contact}) => {
    const {accounts} = useAccounts();
    return (
        <Pressable
            style={tw('ml-4 mr-1 items-center')}
            // onPress={handleTransfer.bind(this, accounts[0], contact.cardNumber)}>
            onPress={() => {}}>
            <Avatar name={contact.name} size="large" />
            <Text style={tw('text-base leading-6 mt-4')}>{contact.name}</Text>
        </Pressable>
    );
};
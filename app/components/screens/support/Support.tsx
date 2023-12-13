import {ScrollView, View} from 'react-native';
import tw from "tailwind-rn";
import Layout from "../../layout/Layout";
import {HeaderSupport} from "./HeaderSupport";
import {Message} from "./Message";
import {FieldMessage} from "./FieldMessage";
import Padding from "../../ui/Padding";
import {useMessages} from "./useMessages";

export const Support = () => {
    const {messages} = useMessages();

    return (
        <Layout isScrollView={false}>
            <Padding>
                <HeaderSupport />
                <ScrollView style={{ height: '83%' }}>
                    {messages.map(msg => (
                        <Message key={msg._id} message={msg} />
                    ))}
                </ScrollView>
                <FieldMessage />
            </Padding>
        </Layout>
    );
};
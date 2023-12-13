import {Text, View} from 'react-native';
import Layout from "../../layout/Layout";
import Heading from "../../ui/Heading";
import tw from "tailwind-rn";
import {Currencies} from "./Currencies";
import Padding from "../../ui/Padding";
import {Menu} from "./menu/Menu";

export const More = () => {
    return (
        <Layout>
            <Heading text="More" />
            <Padding>
                <Currencies />
                <Menu />
                <Text style={tw('text-center text-gray-500 opacity-50 my-4')}>Version 1.0.6</Text>
            </Padding>
        </Layout>
    );
};
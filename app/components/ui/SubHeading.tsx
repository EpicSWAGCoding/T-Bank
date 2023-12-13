import React, {FC} from 'react';
import {Text, View} from 'react-native';
import tw from "tailwind-rn";
import Padding from "./Padding";

interface ISubHeading {
    text: string;
}
export const SubHeading: FC<{ text: string }> = ({text}: ISubHeading) => {
    return (
        <Padding>
            <Text style={tw('text-xl text-gray-800 font-bold')}>{text}</Text>
        </Padding>
    );
};
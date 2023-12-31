import React, { FC } from 'react';
import { TouchableHighlight, Text } from 'react-native';
import tw from 'tailwind-rn';

interface IButton {
    onPress: () => void;
    title: string;
    colors?: [string, string];
}

const Button: FC<IButton> = ({ onPress, title, colors = ['bg-yellow-300', '#FBBF24'] }) => {
    const [backgroundColor, underlayColor] = colors;

    return (
        <TouchableHighlight
            onPress={onPress}
            underlayColor={underlayColor}
            style={tw(`${backgroundColor} text-gray-800 rounded-xl w-full my-4 py-3`)}
        >
            <Text style={tw('text-center')}>{title}</Text>
        </TouchableHighlight>
    );
};

export default Button;

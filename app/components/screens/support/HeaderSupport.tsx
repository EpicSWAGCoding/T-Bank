import {Image, Text, View} from 'react-native';
import {FC} from 'react';
import tw from "tailwind-rn";

export const HeaderSupport: FC = () => {
    return (
        <View style={tw('flex-row items-center py-1 mb-2 -mt-4')}>
            <Image
                source={require('../../../../assets/tinkoff.png')}
                style={tw('w-20 h-20 rounded-full mr-8')}
            />
            <View>
                <Text style={tw('text-sm text-gray-800 font-medium')}>Support</Text>
                <Text style={tw('text-xs text-gray-500')}>We are there 24/7</Text>
            </View>
        </View>
    );
};
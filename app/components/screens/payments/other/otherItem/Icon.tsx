import {View} from 'react-native';
import {FC} from 'react';
import {IFooterItem} from "../../../../layout/footer/types";
import {FontAwesome5} from "@expo/vector-icons";
import tw from "tailwind-rn";

interface IIcon extends Pick<IFooterItem, 'iconName'> {}

export const Icon: FC<IIcon> = ({iconName}) => {
    return (
        <View style={tw('rounded-full bg-blue-500 w-8 h-8 items-center justify-center')}>
            <FontAwesome5 name={iconName} size={19} color='#EDF4FE' />
        </View>
    );
};
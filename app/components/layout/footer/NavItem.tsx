import {FC} from 'react';
import {Pressable, Text} from 'react-native';
import {IFooterItem} from "./types";
import {TypeRootStackParamList} from "../../../navigation/types";
import {FontAwesome5} from "@expo/vector-icons";
import tw from "tailwind-rn";

interface INavItem {
    item: IFooterItem;
    navigate: (screenName: keyof TypeRootStackParamList) => void;
    currentRoute: string;
}

export const NavItem: FC<INavItem> = ({
                                          item,
                                          navigate,
                                          currentRoute,
                                      }: INavItem) => {
    const isActive = currentRoute === item.title;

    return (
        <Pressable style={{ ...tw('items-center'), width: '20%' }} onPress={() => navigate(item.title)}>
            <FontAwesome5
                name={item.iconName}
                style={tw(`text-xl ${isActive ? 'text-blue-500' : 'text-gray-500'}`)}
            />
            <Text style={{ ...tw(`text-xs ${isActive ? 'text-blue-500' : 'text-gray-500'}`), marginTop: 1 }}>
                {item.title}
            </Text>
        </Pressable>
    );
};
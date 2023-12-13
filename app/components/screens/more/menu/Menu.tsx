import {View} from 'react-native';
import {FC} from 'react';
import {menu} from "./list";
import {MenuItem} from "./MenuItem";

export const Menu: FC = () => {
    return (
        <View>
            {menu.map(item => (
                <MenuItem key={item.title} item={item} />
            ))}
        </View>
    );
};
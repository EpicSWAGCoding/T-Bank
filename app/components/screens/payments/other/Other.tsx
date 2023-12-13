import {ScrollView, View} from 'react-native';
import {SubHeading} from "../../../ui/SubHeading";
import {FC} from "react";
import tw from "tailwind-rn";
import {otherItems} from "./data";

export const Other: FC = () => {
    return (
        <View>
            <SubHeading text="Important transfers" />
            <ScrollView
                style={tw('py-5')}
                showsHorizontalScrollIndicator={false}
                horizontal={true}>
                {otherItems.map(item => (
                    <OtherItem key={item.title} item={item} />
                ))}
            </ScrollView>
        </View>
    );
};
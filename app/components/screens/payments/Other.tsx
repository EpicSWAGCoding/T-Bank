import {ScrollView, View} from 'react-native';
import {SubHeading} from "../../ui/SubHeading";
import tw from "tailwind-rn";
import {otherItems} from "./other/data";
import {OtherItem} from "./other/otherItem/OtherItem";

export const Other = () => {
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
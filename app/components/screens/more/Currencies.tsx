import {Text, View} from 'react-native';
import {FC} from 'react';
import {useCurrencies} from "./useCurrencies";
import tw from "tailwind-rn";
import {BOX_SHADOW} from "../../../style";
import Loader from "../../ui/Loader";

export const Currencies: FC = () => {
    const {currencies, isLoading} = useCurrencies();

    return (
        <View style={{ ...tw('mt-5 flex-row rounded-2xl bg-white py-3 justify-center'), ...BOX_SHADOW, }}>
            {isLoading ? (
                <Loader />
            ) : (
                currencies.map(cur => (
                    <View key={cur.name} style={{ ...tw('text-xs w-1/3 flex-row justify-center'), ...BOX_SHADOW, }}>
                        <Text style={tw('text-gray-400 mr-1')}>{cur.name}</Text>
                        <Text style={tw('text-gray-800')}>{cur.value}</Text>
                    </View>
                ))
            )}
        </View>
    );
};
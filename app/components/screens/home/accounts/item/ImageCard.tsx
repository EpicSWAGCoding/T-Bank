import React, {FC} from 'react';
import {ImageBackground, ImageSourcePropType, Text, View} from "react-native";
import {IAccount} from "../types";
import tw from "tailwind-rn";

const ImageCard: FC<{ account: IAccount }> = ({ account: {name, cardNumber} }) => {

    // const imageBlack:ImageSourcePropType = require('../../../../../../../WebstormProjects/T-Bank/assets/card/tinkoffBlack.png')
    // const imageAirlines:ImageSourcePropType = require('../../../../../../../WebstormProjects/T-Bank/assets/card/tinkofAirlines.png')

    const imageBlack:ImageSourcePropType = require('../../../../../../assets/card/tinkoffBlack.png')
    const imageAirlines:ImageSourcePropType = require('../../../../../../assets/card/tinkofAirlines.png')

    return (
        <ImageBackground source={name === 'Tinkoff Ultima' ? imageAirlines : imageBlack} resizeMode='contain' style={{ ...tw('justify-end w-14 h-10'), padding:4.5 }}>
            <Text style={{ ...tw('text-white font-medium'), fontSize: 11 }}>{cardNumber.slice(-4)}</Text>
        </ImageBackground>
    );
};

export default ImageCard;
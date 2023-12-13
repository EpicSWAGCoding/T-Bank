import React from 'react';
import {Text, View} from 'react-native';
import {FC} from 'react';
import {IService} from "../types";
import tw from "tailwind-rn";
import {getRandomGradient} from "./getRandomGradient";
import { LinearGradient } from 'expo-linear-gradient';
import {FontAwesome5} from "@expo/vector-icons";
import {Percent} from "./Percent";

export const ServiceItem: FC<{service: IService}> = ({service}) => {
    return (
        <View style={tw('mb-4')}>
            <View style={tw('rounded-xl overflow-hidden w-14 h-14 mx-4')}>
                <LinearGradient
                    colors={getRandomGradient()}
                    style={tw('w-full h-full items-center justify-center')}>
                    <Percent percent={service.percent} />
                    <FontAwesome5 name={service.iconName} size={25} color="#fff" />
                </LinearGradient>
            </View>
            <Text style={{ ...tw('text-xs text-center'), marginTop: 6 }}>{service.title}</Text>
        </View>
    );
};
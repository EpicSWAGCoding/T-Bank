import React, { FC } from 'react';
import {ScrollView, View} from "react-native";
import tw from 'tailwind-rn';

interface ILayoyt {
    isScrollView?: boolean
}

export const styleCenter = tw('h-full w-full bg-white pt-16')

const Layout:FC<ILayoyt> = ({ children, isScrollView= true }) => {
    return (
        <View style={styleCenter}>
            {isScrollView ? <ScrollView>{children}</ScrollView> : children}
        </View>
    )
}

export default Layout;
import React, {FC, useEffect, useState} from 'react';
import {NavigationContainer, useNavigationContainerRef} from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Auth from "../components/screens/auth/Auth";
import Home from "../components/screens/home/Home";
import Profile from "../components/screens/profile/Profile";
import {useAuth} from "../hooks/useAuth";
import {AuthProvider} from "../providers/AuthContext";
import {Footer} from "../components/layout/footer/Footer";
import {Payments} from "../components/screens/payments/Payments";
import {Services} from "../components/screens/services/Services";
import {Support} from "../components/screens/support/Support";
import {More} from "../components/screens/more/More";

const Stack = createNativeStackNavigator()

const Navigation: FC = () => {

    const { user } = useAuth()

    const ref = useNavigationContainerRef();

    const [name, setName] = useState<string | undefined>(undefined);

    // для выделения главной, при загрузке приложения
    useEffect(() => {
        // @ts-ignore
        const timeout = setTimeout(() => setName(ref.getCurrentRoute()?.name), 100);

        // @ts-ignore
        return () => clearTimeout(timeout);
    }, [ref]);

    //для выделения других страниц помимо меню
    useEffect(() => {
        const listener = ref.addListener('state', () =>
            setName(ref.getCurrentRoute()?.name),
        );
        return () => {
            ref.removeListener('state', listener);
        };
    }, []);


    return (
        <>
            <NavigationContainer ref={ref}>
                <AuthProvider>
                    <Stack.Navigator screenOptions={{headerShown: false}} >
                        {user ? (
                            <>
                                <Stack.Screen name='Home' component={Home} />
                                <Stack.Screen name='Profile' component={Profile} />
                                <Stack.Screen name='Payments' component={Payments} />
                                <Stack.Screen name='Services' component={Services} />
                                <Stack.Screen name='Support' component={Support} />
                                <Stack.Screen name='More' component={More} />
                            </>
                                ) : ( <Stack.Screen name='Auth' component={Auth} />
                                )}
                    </Stack.Navigator>
                </AuthProvider>
            </NavigationContainer>
        {user && name && <Footer navigate={ref.navigate} currentRoute={name} />}
        </>
    );
}

export default Navigation;
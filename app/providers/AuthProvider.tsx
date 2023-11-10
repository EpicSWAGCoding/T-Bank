import React, { createContext, FC, useEffect, useMemo, useState } from 'react';
import { Alert } from 'react-native';
import {
    auth,
    db,
    login as firebaseLogin,
    logout as firebaseLogout,
    register as firebaseRegister,
} from '../firebase';
import {
    addDoc,
    collection,
    CollectionReference,
    DocumentData,
} from '@firebase/firestore';
import { onAuthStateChanged, User } from 'firebase/auth';

interface IUser {
    _id: string;
    displayName: string;
}

interface IContex {
    user: User | null;
    isLoading: boolean;
    register: (email: string, password: string) => Promise<void>;
    login: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
}

export const AuthContext = createContext<IContex>({} as IContex);

export const AuthProvider: FC = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoadingInitial, setIsLoadingInitial] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const registerHandler = async (email: string, password: string) => {
        setIsLoading(true);
        try {
            const { user } = await firebaseRegister(email, password);

            const usersCollection: CollectionReference<IUser> = collection<IUser>(db, 'users');

            await addDoc(usersCollection, {
                _id: user.uid,
                displayName: 'No name',
            });
        } catch (error: any) {
            Alert.alert('Error registration', error);
        } finally {
            setIsLoading(false);
        }
    };

    const loginHandler = async (email: string, password: string) => {
        setIsLoading(true);
        try {
            await firebaseLogin(email, password);
        } catch (error: any) {
            Alert.alert('Error login', error);
        } finally {
            setIsLoading(false);
        }
    };

    const logoutHandler = async () => {
        setIsLoading(true);
        try {
            await firebaseLogout();
        } catch (error: any) {
            Alert.alert('Error logout', error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => onAuthStateChanged(auth, (user) => {
        setUser(user || null);
        setIsLoadingInitial(false);
    }), []);

    const value = useMemo(
        () => ({
            user,
            isLoading,
            login: loginHandler,
            logout: logoutHandler,
            register: registerHandler,
        }),
        [user, isLoading]
    );

    return (
        <AuthContext.Provider value={value}>
            {!isLoadingInitial && children}
        </AuthContext.Provider>
    );
};

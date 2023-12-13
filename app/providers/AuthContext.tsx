import React, { createContext, useContext, FC, ReactNode, useState } from 'react';

interface AuthContextType {
    email: string;
    setAuthEmail: (email: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [email, setEmail] = useState('');

    const setAuthEmail = (newEmail: string) => {
        setEmail(newEmail);
    };

    return (
        <AuthContext.Provider value={{ email, setAuthEmail }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = (): AuthContextType => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error('useAuthContext must be used within an AuthProvider');
    }

    return context;
};

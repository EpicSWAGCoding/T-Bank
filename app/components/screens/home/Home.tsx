import React, { FC } from 'react';
import { Text, View } from "react-native";
import Layout from "../../layout/Layout";
import Header from "./Header";
import Stories from "./stories/Stories";
import Accounts from "./accounts/Accounts";

const Home: FC = () => {
    return (
        <Layout>
            <Header />
            <Stories />
            <Accounts />
            <Text>Home</Text>
        </Layout>
    );
};

export default Home;
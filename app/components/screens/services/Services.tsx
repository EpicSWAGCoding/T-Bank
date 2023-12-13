import {Text, View} from 'react-native';
import Layout from "../../layout/Layout";
import tw from "tailwind-rn";
import {services} from "./data";
import {ServiceItem} from "./serviceItem/ServiceItem";

export const Services = () => {
    return (
        <Layout>
            <Text style={tw('text-center text-lg mb-6')}>Moscow</Text>
            <View style={tw('flex-row flex-wrap justify-center')}>
                {services.map(service => (
                    <ServiceItem key={service.title + Date.now()} service={service} />
                ))}
            </View>
        </Layout>
    );
};
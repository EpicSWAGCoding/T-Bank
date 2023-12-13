import Layout from "../../layout/Layout";
import Heading from "../../ui/Heading";
import {Contacts} from "./Contacts";
import {Other} from "./Other";

export const Payments = () => {
    return (
        <Layout>
            <Heading text="Payment" />
            <Contacts />
            <Other />
        </Layout>
    );
};
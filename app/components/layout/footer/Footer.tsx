import {TypeRootStackParamList} from "../../../navigation/types";
import tw from "tailwind-rn";
import {menu} from "./menu";
import {NavItem} from "./NavItem";
import Padding from "../../ui/Padding";

interface IFooter {
    navigate: (screenName: keyof TypeRootStackParamList) => void;
    currentRoute: string;
}

export const Footer = ({navigate, currentRoute}: IFooter) => {
    return (
        <Padding style={{ ...tw('flex-row justify-between items-center w-full bg-gray-50 px-0 pb-5 pt-2'), borderTopColor: '#E1E1E1', borderTopWidth: 1 }}>
            {menu.map(item => (
                <NavItem
                    key={item.title}
                    item={item}
                    navigate={navigate}
                    currentRoute={currentRoute}
                />
            ))}
        </Padding>
    );
};
import React, {FC} from 'react';
import {useStories} from "./useStories";
import {ScrollView, Text, View} from "react-native";
import tw from "tailwind-rn";
import Loader from "../../../ui/Loader";
import StoryItem from "./StoryItem";
import {storiess} from "../../../../data/getData";

const Stories: FC = () => {

    const {stories, isLoading} = useStories()

    return (
        <View style={tw('my-7')}>
            {isLoading ? (
                <Loader />
            ) : (
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {storiess.map(story => (
                        <StoryItem key={story.header} story={story} />
                    ))}
                </ScrollView>
            )}
        </View>
    );
};

export default Stories;
import React, { useState, useCallback } from 'react';
import {
    View,
    TouchableOpacity,
    LayoutAnimation,
} from 'react-native';
import Text from '../Text';

const ExpandableDescription = ({ title, releaseDate, overview }) => {
    const [seeMoreButton, setSeeMoreButton] = useState(false); // see more button visibility
    const [textEnlarged, setTextEnlarged] = useState(false);
    const MAX_NUM_OF_LINES = 4; // maximum lines to be displayed while collapsed

    // toggled to alternate between see more and see less
    const toggleDescriptionLength = () => {
        // animate components transitions
        LayoutAnimation.configureNext(
            LayoutAnimation.create(
                300,
                LayoutAnimation.Types.linear,
                LayoutAnimation.Properties.opacity,
            )
        );
        setTextEnlarged(!textEnlarged);
    }
    // Determine if see more button should be displayed or not
    // based on number of lines returned by text layout change event
    const onTextLayout = useCallback(
        textLayoutEvent => {
            setSeeMoreButton(textLayoutEvent.nativeEvent.lines.length >= MAX_NUM_OF_LINES);
        }, []);

    return (
        <View>
            {/* Title */}
            <Text bold size={18} color='#D73B3B'>{title}</Text>
            {/* Release Date */}
            <Text size={13} color='#D88282' style={{ marginVertical: 3 }}>{releaseDate}</Text>
            {/* Main overview text */}
            <Text
                light
                size={14}
                color='#988989'
                // zero is the default value for numberOfLines ~ show all text
                numberOfLines={textEnlarged ? 0 : MAX_NUM_OF_LINES}
                selectable={true}
                onTextLayout={onTextLayout}
                style={{ lineHeight: 18 }}
            >
                {overview}
            </Text >
            {/* See more / See less button */}
            {seeMoreButton &&
                <TouchableOpacity
                    style={{ alignSelf: 'flex-end', padding: 5 }}
                    onPress={toggleDescriptionLength}
                >
                    <Text medium
                        size={14}
                        color='#fff'
                    >{textEnlarged ? "See less" : "See more"}</Text>
                </TouchableOpacity >
            }
        </View>
    );
}
export default ExpandableDescription;
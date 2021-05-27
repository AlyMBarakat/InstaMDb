import React, { useState, useCallback } from 'react';
import {
    View,
    TouchableOpacity,
    LayoutAnimation,
} from 'react-native';
import Text from '../Text';

const ExpandableDescription = ({ text }) => {
    const [seeMoreButton, setSeeMoreButton] = useState(false); // see more button visibility
    const [textEnlarged, setTextEnlarged] = useState(false);
    const MAX_NUM_OF_LINES = 4; // maximum lines to be displayed while collapsed

    // toggled to alternate between see more and see less
    const toggleDescriptionLength = () => {
        // animate components transitions
        LayoutAnimation.configureNext(
            LayoutAnimation.create(
                150,
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
            {/* Main description text */}
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
                {text}
            </Text >
            {/* See more / See less button */}
            {seeMoreButton &&
                <TouchableOpacity
                    style={{ alignSelf: 'flex-end' }}
                    onPress={toggleDescriptionLength}
                >
                    <Text light
                        size={14}
                        color='#fff'
                    >{textEnlarged ? "See less" : "See more"}</Text>
                </TouchableOpacity >
            }
        </View>
    );
}
export default ExpandableDescription;
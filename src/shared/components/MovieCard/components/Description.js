import React, { useState, useCallback } from 'react';
import { View, TouchableOpacity, LayoutAnimation } from 'react-native';
import Text from '../../Text';

const Description = ({ text }) => {
    const [seeMoreButton, setSeeMoreButton] = useState(false); // see more button visibility
    const [textEnlarged, setTextEnlarged] = useState(false);
    const maxNumOfLines = 4; // maximum lines to be displayed while collapsed

    // toggled to alternate between see more and see less
    const toggleDescriptionLength = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring); // animate components transitions
        setTextEnlarged(!textEnlarged);
    }
    // view see more button for lines > maxNumOfLines
    const onTextLayout = useCallback(
        textLayoutEvent => {
            setSeeMoreButton(textLayoutEvent.nativeEvent.lines.length >= maxNumOfLines);
        }, []);

    return (
        <View>
            {/* Main description text */}
            < Text
                light
                size={14}
                color='#988989'
                // zero is the default value for numberOfLines ~ show all text
                numberOfLines={textEnlarged ? 0 : maxNumOfLines}
                selectable={true}
                onTextLayout={onTextLayout}
                style={{ lineHeight: 18 }}
            >
                {text}
            </Text >
            {/* See more / See less button */}
            { seeMoreButton &&
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
export default Description;
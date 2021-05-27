import React from "react";
import { Text, StyleSheet } from "react-native";

const CustomText = ({ size, color, style, children, regular, light, bold, ...rest }) => {
    // Determine font weight
    let fontFamily = "Rubik-Medium"; // Default
    if (regular) fontFamily = "Rubik-Regular";
    if (light) fontFamily = "Rubik-Light";
    if (bold) fontFamily = "Rubik-Bold";

    //Determine font size
    let fontSize = 16;
    if (size) fontSize = size;

    //Determine font color
    let textColor = "white";
    if (color) textColor = color;

    return (
        <Text
            {...rest}
            style={[{ fontFamily, fontSize, color: textColor }, style]}
        >{children}</Text>
    );
}

export default CustomText;
/**
 *
 *
 * Root Features Router
 *
 * 
 */
import React from 'react';
import {
    View,
    Text,
} from 'react-native';
// Navigation
import { createStackNavigator } from '@react-navigation/stack';
// Features here
const Temp = () => (
    <View>
        <Text>InstaMDb React Native Mobile Application</Text>
    </View>
)

const RootStack = createStackNavigator();

const Router = () => {
    return (
        <RootStack.Navigator>
            <RootStack.Screen
                name="Home"
                component={Temp}

            />
        </RootStack.Navigator>
    );
}

export default Router;


/**
 *
 *
 * Root Features Router
 *
 * 
 */
import React from 'react';
// Navigation
import { createStackNavigator } from '@react-navigation/stack';
// Features here
import Movies from './features/Movies';

const RootStack = createStackNavigator();

const Router = () => {
    return (
        <RootStack.Navigator>
            <RootStack.Screen
                name="Movies"
                component={Movies}
                options={{
                    headerStyle: {
                        backgroundColor: '#A71E1E',
                        shadowColor: "transparent",
                    },
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        color: '#fff',
                        fontFamily: "Rubik-Bold",
                    },
                }
                }
            />
        </RootStack.Navigator>
    );
}

export default Router;


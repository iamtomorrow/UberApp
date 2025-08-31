
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Home } from "../screens/Home/Home";
import { NavigationContainer } from "@react-navigation/native";
import { Activity } from "../screens/Activity/Activity";
import { Account } from "../screens/Account/Account";

import Icon from "react-native-remix-icon";
import { MaterialIcons } from "@expo/vector-icons";
import { View } from "react-native";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext/ThemeContext";
import { Services } from "../screens/Services/Services";
import { PlanYourRide } from "../screens/PlanYourRide/PlanYourRide";

const Stack = createNativeStackNavigator( );
const Tabs = createBottomTabNavigator( );

const HomeStack = ( ) => {

    return (
        <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Home" component={ Home } />
            <Stack.Screen name="Activity" component={ Activity } />
            <Stack.Screen name="Account" component={ Account } />
            <Stack.Screen name="PlanYourRide" component={ PlanYourRide } />

        </Stack.Navigator>
    )
}

export const AppNavigation = ( ) => {
    const { theme } = useContext( ThemeContext );

    return (
        <NavigationContainer>
            <Tabs.Navigator
            screenOptions={({ route }) => ({
                tabBarHideOnKeyboard: true,
                headerShown: false,
                tabBarStyle: {
                    height: 110,
                    paddingLeft: 10,
                    paddingRight: 10,
                    backgroundColor: "#ffffff"
                },
            })}>
                <Tabs.Screen
                    name="Home"
                    component={ HomeStack }
                    options={{
                        tabBarLabelStyle: {
                            fontSize: 13,
                            color: theme.colors.fonts.default
                        },
                        tabBarIcon: ({ }) => (
                            <Icon 
                                name="home-2-fill" 
                                size={28}
                            />
                        ),
                        tabBarIconStyle: {
                            width: 40,
                            height: 40,
                            borderRadius: 6,
                            // backgroundColor: "red"
                        }
                    }}/>

                <Tabs.Screen 
                    name="Serices"
                    component={ Services }
                    options={{
                        tabBarLabelStyle: {
                            fontSize: 13,
                            color: theme.colors.fonts.default
                        },
                        tabBarIcon: ({ }) => (
                            <Icon 
                                name="grid-fill" 
                                size={28}
                            />
                        ),
                        tabBarIconStyle: {
                            width: 40,
                            height: 40,
                            borderRadius: 6,
                            // backgroundColor: "red"
                        }
                    }}/>

                <Tabs.Screen 
                    name="Activity"
                    component={ Activity }
                    options={{
                        tabBarLabelStyle: {
                            fontSize: 13,
                            color: theme.colors.fonts.default
                        },
                        tabBarIcon: ({ }) => (
                            <Icon 
                                name="list-check" 
                                size={28}
                            />
                        ),
                        tabBarIconStyle: {
                            width: 40,
                            height: 40,
                            borderRadius: 6,
                            // backgroundColor: "red"
                        }
                    }}/>

                <Tabs.Screen 
                name="Account"
                component={ Account }
                options={{
                    tabBarLabelStyle: {
                        fontSize: 13,
                        color: theme.colors.fonts.default
                    },
                    tabBarIcon: ({ }) => (
                        <Icon 
                            name="user-fill" 
                            size={28}
                        />
                    ),
                    tabBarIconStyle: {
                        width: 40,
                        height: 40,
                        borderRadius: 6,
                        // backgroundColor: "red"
                    }
                }}/>
            </Tabs.Navigator>
        </NavigationContainer>
    )
}
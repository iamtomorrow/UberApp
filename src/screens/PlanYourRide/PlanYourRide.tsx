
import { useContext, useEffect } from "react";
import { TextInput, View } from "react-native"
import { ThemeContext } from "../../../contexts/ThemeContext/ThemeContext";
import { Header } from "../../components/Header/__Header";
import { Dropdown } from "../../components/Dropdowns/Dropdown";
import Icon from "react-native-remix-icon"
import { requestLocationPermission } from "../../permissions/Permission.Location";

export const PlanYourRide = ( ) => {
    const { theme } = useContext( ThemeContext );

    useEffect(( ) => {
        requestLocationPermission( );
    }, [ ])

    return (
        <View
        style={{
            width: "100%",
            height: "100%",
            backgroundColor: theme.colors.surface.primary
        }}>
            <Header title="Plan your ride" screenName="PlanYourRide"/>

            <View
            style={{    
                // backgroundColor: "green",
                height: 120,
                padding: 24,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                columnGap: 10,
                justifyContent: "flex-start",
                width: "100%"
            }}>
                <Dropdown name="Pickup now" iconName={ "time-fill" } />
                <Dropdown name="For me" iconName={"user-3-fill" } />
            </View>

            <View
            style={{
                width: "100%",
                height: 160,
                padding: 20,
            }}>
                <View
                style={{
                    flex: 1,
                    borderWidth: 2,
                    borderRadius: 30,
                    display: "flex",
                    paddingLeft: 6,
                    paddingRight: 12,
                    flexDirection: "row",
                    borderColor: theme.colors.border.default
                }}>
                    <View
                    style={{
                        width: 60,
                        height: "100%",
                        display: "flex",
                        padding: 10,
                        flexDirection: "column",
                        justifyContent: "space-between",
                        alignItems: "center",
                        // backgroundColor: "red"
                    }}>
                        <Icon name="record-circle-fill" size={36} />
                        
                        <Icon name="stop-circle-line" size={36} />
                    </View>

                    <View
                    style={{
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-around"
                    }}>
                        <TextInput
                        placeholder="From?"
                        style={{
                            fontSize: 20,
                            borderWidth: 0,
                            paddingLeft: 10,
                            height: "46%"
                            // backgroundColor: "red"
                        }}>

                        </TextInput>

                        <View
                        style={{
                            height: 1,
                            width: "100%",
                            backgroundColor: theme.colors.border.default
                        }}>

                        </View>

                        <TextInput
                        placeholder="Where to?"
                        style={{
                            fontSize: 20,
                            borderWidth: 0,
                            paddingLeft: 10,
                            height: "46%"
                            // backgroundColor: "red"
                        }}>

                        </TextInput>
                    </View>
                </View>
            </View>
        </View>
    )
}
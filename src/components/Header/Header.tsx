import { useContext } from "react"
import { Image, StatusBar, Text, View } from "react-native"
import Icon from "react-native-remix-icon"
import { ThemeContext } from "../../../contexts/ThemeContext/ThemeContext"

export const Header = ( ) => {
    const {theme} = useContext( ThemeContext );

    return (
        <View
        style={{
            marginTop: StatusBar.currentHeight,
            width: "100%",
            height: 90,
            padding: 6,
            backgroundColor: theme.colors.surface.primary
        }}>
            <View
            style={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "center"
            }}>
                <Image 
                    source={require("../../../assets/images/logo.png")}
                    style={{
                        width: 100,
                        height: 40
                    }}
                />
            </View>
        </View>
    )
}
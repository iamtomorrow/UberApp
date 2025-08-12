import { StatusBar, Text, View } from "react-native"
import { Header } from "../../components/Header/_Header"
import { useContext } from "react"
import { ThemeContext } from "../../../contexts/ThemeContext/ThemeContext"

export const Activity = ( ) => {
    const { theme } = useContext( ThemeContext );

    return (
        <View
        style={{
            width: "100%",
            height: "100%",
            backgroundColor: theme.colors.surface.primary
        }}>
            <View
            style={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
            }}>
                <Header screenName="Activity" title="Activity" key={"Activity"} />

                <View
                style={{

                }}>

                </View>
            </View>
        </View>
    )
}

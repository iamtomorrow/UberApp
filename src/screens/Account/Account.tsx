import { useContext } from "react"
import { Text, View } from "react-native"
import { ThemeContext } from "../../../contexts/ThemeContext/ThemeContext"
import { Header } from "../../components/Header/_Header";

export const Account = ( ) => {
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
                <Header screenName="Account" title="Account" key={"Account"} />
            </View>
        </View>
    )
}


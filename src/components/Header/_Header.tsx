
import { useContext } from "react"
import { StatusBar, Text, View } from "react-native"
import { ThemeContext } from "../../../contexts/ThemeContext/ThemeContext";

interface HeaderProps {
    title: string;
    screenName: string;
}

export const Header = ({ title, screenName }: HeaderProps) => {
    const { theme } = useContext( ThemeContext );

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
                justifyContent: "center",
                paddingLeft: 14,
                paddingRight: 14,
            }}>
                <Text
                style={{
                    fontSize: 34,
                    fontWeight: "600",
                }}>{ title }</Text>
            </View>
        </View>
    )
}
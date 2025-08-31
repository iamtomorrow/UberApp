
import { useContext } from "react"
import { Pressable, StatusBar, Text, View } from "react-native"
import { ThemeContext } from "../../../contexts/ThemeContext/ThemeContext";
import { GoBackButton } from "../Buttons/Button.GoBack";

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
            // backgroundColor: "green"
            backgroundColor: theme.colors.surface.primary
        }}>
            <View
            style={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingLeft: 14,
                paddingRight: 14,
            }}>
                <GoBackButton />
                
                <Text
                style={{
                    fontSize: 30,
                    fontWeight: "600",
                }}>{ title }</Text>

                <View
                style={{
                    width: 60,
                    height: 60,
                }}>

                </View>
            </View>
        </View>
    )
}
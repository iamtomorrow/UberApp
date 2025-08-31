
import { useContext } from "react"
import { Pressable, Text } from "react-native"
import Icon from "react-native-remix-icon"
import { ThemeContext } from "../../../contexts/ThemeContext/ThemeContext"

interface DropdownProps {
    name: string 
    iconName: string
}

export const Dropdown = ({ name, iconName }: DropdownProps ) => {
    const { theme } = useContext( ThemeContext );

    return (
        <Pressable
        style={{
            display: "flex",
            paddingLeft: 16,
            paddingRight: 16,
            paddingTop: 14,
            paddingBottom: 14,
            borderRadius: 40,
            flexDirection: "row",
            justifyContent: "center",
            backgroundColor: theme.colors.surface.secondary,
            columnGap: 10,
        }}>
            <Icon name={ iconName as any } size={36} />
            <Text
            style={{
                fontSize: 20
            }}>{ name }</Text>
             <Icon name={"arrow-down-s-line"} size={30} />
        </Pressable>
    )
}
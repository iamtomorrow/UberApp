
import { useNavigation } from "@react-navigation/native"
import { Pressable } from "react-native"
import Icon from "react-native-remix-icon"

export const GoBackButton = ( ) => {
    const nav = useNavigation( );

    const navigateTo = ( ) => {
        nav.goBack( );
    }

    return (
        <Pressable
        onPress={ navigateTo }
        style={{
            width: 60,
            height: 60,
            borderRadius: "50%",
            // backgroundColor: "red",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }}>
            <Icon 
                name="arrow-left-line"
                size={40}
            />
        </Pressable>
    )
}
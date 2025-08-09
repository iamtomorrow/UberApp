
import { useContext } from "react"
import { Image, Pressable, Text, TouchableOpacity, View } from "react-native"
import { ThemeContext } from "../../../contexts/ThemeContext/ThemeContext"

interface ServiceCardProps {
    title: string 
    icon: string 
}

export const ServiceCard = ({ title, icon }: ServiceCardProps) => {
    const { theme } = useContext( ThemeContext );

    return (
        <TouchableOpacity
        style={{
            width: 140,
            height: 220,
            borderRadius: 30,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: theme.colors.surface.secondary
        }}>
            <View
            style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                // backgroundColor: "green"
            }}>
                <Image 
                    // source={{uri:icon}}
                    source={require("../../../assets/images/services/UberX.webp")}
                    width={100}
                    height={50}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        // backgroundColor: "green",
                        width: 130,
                        height: 100
                    }}
                />
            </View>
            
            <View
            style={{
                width: "100%",
                height: 70,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                // backgroundColor: "red"
            }}>
                <Text
                style={{
                    fontWeight: "500"
                }}>{ title }</Text>
            </View>
        </TouchableOpacity>
    )
}

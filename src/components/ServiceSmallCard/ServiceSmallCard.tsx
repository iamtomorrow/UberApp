
import { useContext } from "react"
import { Image, Text, TouchableOpacity, View } from "react-native"
import { ThemeContext } from "../../../contexts/ThemeContext/ThemeContext"

interface ServiceSnallCardProps {
    title: string 
    icon: string 
}

export const ServiceSmallCard = ({ title, icon }: ServiceSnallCardProps ) => {
    const { theme } = useContext( ThemeContext );

    return (
        <TouchableOpacity
        style={{
            width: 120,
            height: 180,
            borderRadius: 20,
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
                justifyContent: "center",
                alignItems: "center",
            }}>
                <Image 
                    source={{ uri: "https://github.com/iamtomorrow/UberApp/blob/iamtomorrow/assets/images/services/Black_v1.png" }}
                    width={1000}
                    height={1000}
                    style={{
                        width: 120,
                        height: 90
                    }}
                />
            </View>

            <View
            style={{
                width: "100%",
                height: 40,
                display: "flex",
                alignItems: "center",
                // backgroundColor: "green"
            }}>
                <Text
                style={{
                    fontSize: 16,
                    fontWeight: "600",
                }}>{ title }</Text>
            </View>
        </TouchableOpacity>
    )
}
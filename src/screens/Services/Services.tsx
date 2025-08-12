
import { Text, View } from "react-native"
import { Header } from "../../components/Header/_Header"
import { useContext } from "react"
import { ThemeContext, ThemeContextProvider } from "../../../contexts/ThemeContext/ThemeContext"
import { ServiceSmallCard } from "../../components/ServiceSmallCard/ServiceSmallCard"

export const Services = ( ) => {
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
                <Header screenName="Services" title="Services" key={"Services"} />

                <View
                style={{
                    flex: 1,
                    padding: 16,
                }}>
                    <View
                    style={{
                        width: "100%",
                        height: "auto",
                        paddingBottom: 24,
                        /// backgroundColor: "green"
                    }}>
                        <Text
                        style={{
                            fontSize: 24,
                            fontWeight: "600",
                        }}>
                            Go anywhere, get anything
                        </Text>
                    </View>

                    <View
                    style={{
                        width: "100%",
                        height: "auto",
                        display: "flex",
                        flexDirection: "row",
                        flexWrap: "wrap",
                        gap: 16,
                        justifyContent: "flex-start"
                    }}>
                        <ServiceSmallCard 
                            icon="v" title="Ride" key={"uber_connect"}
                        />
                        <ServiceSmallCard 
                            icon="fv" title="Order Food" key={"order_food"}
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}
import { Text, View } from "react-native"
import { Header } from "../../components/Header/Header"
import { ThemeContext } from "../../../contexts/ThemeContext/ThemeContext";
import { useContext } from "react";
import { HomeSearchBar } from "../../components/HomeSearchBar/HomeSearchBar";
import { ServiceCard } from "../../components/ServiceCard/ServiceCard";
import { services } from "../../../data/services";

export const Home = ( ) => {
    const { theme } = useContext( ThemeContext );

    return (
        <View
        style={{
            width: "100%",
            height: "100%",
            backgroundColor: theme.colors.surface.primary
        }}>
            <Header />
            <HomeSearchBar />

            <View
            style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                padding: 20,
            }}>
                <View
                style={{
                    width: "100%",
                    height: "auto",
                }}>
                    <Text
                    style={{
                        fontSize: 20,
                        fontWeight: "500"
                    }}>Services</Text>
                </View>

                <View
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    flexDirection: "row",
                    columnGap: 14,
                    paddingTop: 20
                }}>
                    {
                        services.map( (item) => (
                            <ServiceCard 
                                title={ item.title }
                                icon={ item.icon }
                                key={ item.id }
                            />  
                        ))
                    }                  
                </View>
            </View>
        </View>
    )
}


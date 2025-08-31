
import { Text, TextInput, View } from "react-native"
import { ThemeContext } from "../../../contexts/ThemeContext/ThemeContext";
import { useContext, useEffect, useState } from "react";
import Icon from "react-native-remix-icon"
import { SearchContext } from "../../../contexts/SearchContext/SearchContext";
import { useNavigation } from "@react-navigation/native";

export const HomeSearchBar = ( ) => {
    const [ textInput, setTextInput ] = useState<string>(""); 
    const { theme } = useContext( ThemeContext );
    const { query, result, updateQuery } = useContext( SearchContext );
    const nav = useNavigation( );

    const navigateTo = ( ) => {
        nav.navigate({ screen: "PlanYourRide", name: "PlanYourRide" } as never)
    }
    
    useEffect(( ) => {  
        updateQuery( textInput );
    }, [ textInput ]);

    return (
        <View
        style={{
            width: "100%",
            height: "auto",
            paddingLeft: 14,
            paddingRight: 14,
            paddingTop: 10,
            paddingBottom: 10,
        }}>
            <View
            style={{
                height: 54,
                borderRadius: 20,
                paddingLeft: 16,
                display: 'flex',
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: theme.colors.surface.secondary
            }}>
                <Icon 
                    name="search-line"
                    size={28}
                />
                <TextInput
                onPress={ navigateTo }
                value={ textInput }
                onChangeText={ (text) => setTextInput(text)}
                placeholder="Where to?"
                style={{
                    fontSize: 16,
                    flex: 1,
                    borderRadius: 20,
                    paddingLeft: 12,
                }}>

                </TextInput>
            </View>

            { result && query != ""
            ? <View
            style={{
                position: "static",
                height: "auto",
                width: "100%",
                display: "flex",
                backgroundColor: "red",
                flexDirection: "column"
            }}>
                { result.map((item) => (
                    <View
                    style={{            
                        width: "100%",
                        height: "auto",
                        padding: 6,
                        display: "flex",
                        flexDirection: "column",
                    }}>
                        <View>
                            <Text>{ item?.UF } - { item?.Name }</Text>
                        </View>
                        <View>
                            <Text
                            style={{
                                fontSize: 8
                            }}>{ item?.Centroide }</Text>
                        </View>
                    </View>
                ))}
            </View>
            : <View>
                <Text>No content</Text>
            </View>
            }
        </View>
    )
}
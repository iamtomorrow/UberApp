
import { Text, TextInput, View } from "react-native"
import { ThemeContext } from "../../../contexts/ThemeContext/ThemeContext";
import { useContext, useEffect, useState } from "react";
import Icon from "react-native-remix-icon"
import { SearchContext } from "../../../contexts/SearchContext/SearchContext";

export const HomeSearchBar = ( ) => {
    const [ textInput, setTextInput ] = useState<string>(""); 

    const {theme} = useContext( ThemeContext );
    const { query, updateQuery } = useContext( SearchContext );

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
        </View>
    )
}
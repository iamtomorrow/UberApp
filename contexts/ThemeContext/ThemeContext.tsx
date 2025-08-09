
import { createContext, useState } from "react";
import { themeProps } from "../../types/theme";
import { darkTheme, lightTheme } from "../../themes/theme";
import { ChildrenProps } from "../../types/children";

interface ThemeContextProps {
    theme: themeProps
    name: "Light" | "Dark"
    updateTheme: ( name: "Light" | "Dark" ) => void
}

const ThemeContextInitialState: ThemeContextProps = {
    theme: lightTheme,
    name: "Light",
    updateTheme: ( ) => { }
}

export const ThemeContext = createContext<ThemeContextProps>(ThemeContextInitialState);

export const ThemeContextProvider = ({ children }: ChildrenProps ) => {
    const [ theme, setTheme ] = useState<themeProps>(lightTheme);
    const [ name, setName ] = useState<"Light"|"Dark">("Light");

    const updateTheme = ( name: "Light" | "Dark" ) => {
        if ( name === "Light" ) {
            setName("Light");
            setTheme( lightTheme );
        } else {
            setName("Dark");
            setTheme( darkTheme );
        }
    }

    return (
        <ThemeContext.Provider
        value={{
            theme: lightTheme,
            name: "Light",
            updateTheme
        }}>
            { children }
        </ThemeContext.Provider>
    )
}
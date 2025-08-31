

export interface themeProps {
    colors: {
        surface: colorsProps
        background: colorsProps
        border: colorsProps
        fonts: colorsProps
        icons: colorsProps
    }
}

interface colorsProps {
    default: string 
    primary: string 
    secondary: string
}

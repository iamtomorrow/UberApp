
import { createContext, useEffect, useState } from "react";
import { ChildrenProps } from "../../types/children";

interface SearchContextProps {
    query: string 
    search: ( ) => void 
    updateQuery: ( input: string ) => void
}

const SearchContextInitialState: SearchContextProps = {
    query: "",
    search: ( ) => { },
    updateQuery: ( ) => { }
}

export const SearchContext = createContext<SearchContextProps>( SearchContextInitialState );

export const SearchContextProvider = ({ children }: ChildrenProps) => {
    const [ query, setQuery ] = useState<string>("");

    useEffect(( ) => {
        search( );
    }, [ query ])

    const search = ( ) => {

    }

    const updateQuery = ( input: string ) => {
        setQuery( prev => input );
    }

    return (
        <SearchContext.Provider
        value={{
            query,
            search,
            updateQuery
        }}>
            { children  }
        </SearchContext.Provider>
    )
}
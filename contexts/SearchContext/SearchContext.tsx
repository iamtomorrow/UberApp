
import { createContext, useEffect, useState } from "react";
import { ChildrenProps } from "../../types/children";

interface SearchContextProps {
    query: string 
    result: any[]
    search: ( ) => void 
    updateQuery: ( input: string ) => void
}

const SearchContextInitialState: SearchContextProps = {
    query: "",
    result: [],
    search: ( ) => { },
    updateQuery: ( ) => { }
}

export const SearchContext = createContext<SearchContextProps>( SearchContextInitialState );

export const SearchContextProvider = ({ children }: ChildrenProps) => {
    const gateway = "http://192.168.18.8:4000/"
    
    const [ result, setResult ] = useState<any[]>([]);
    const [ query, setQuery ] = useState<string>("");

    useEffect(( ) => {
        search( );
    }, [ query ])

    const search = async ( ) => {
        try{
            let response = await fetch(`${gateway}locations`);
            let data = await response.json( );

            setResult(prev => data);
        }catch(err){
            console.log("ERROR trying to search")
        }
    }

    const updateQuery = ( input: string ) => {
        setQuery( prev => input );
    }

    return (
        <SearchContext.Provider
        value={{
            query,
            result,
            search,
            updateQuery
        }}>
            { children  }
        </SearchContext.Provider>
    )
}

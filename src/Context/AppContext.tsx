import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from 'react';

type AppContextProviderProps = {
    children: ReactNode
}

export type AppContext = {
    hasHeaderBackground: boolean;
    isNavActive: boolean;
    delayLoading: number;
    isLogoActive: boolean;
    isHeaderActive: boolean;
    setIsNavActive: Dispatch<SetStateAction<boolean>>;
    setIsHeaderActive: Dispatch<SetStateAction<boolean>>;
    setIsLogoActive: Dispatch<SetStateAction<boolean>>;
    setHasHeaderBackground: Dispatch<SetStateAction<boolean>>;
}

export const AppContext = createContext({} as AppContext);

export function useAppContext(){
    return useContext(AppContext);
}
export function AppContextProvider({ children } : AppContextProviderProps){
    const [isLogoActive, setIsLogoActive] = useState(false);
    const [isHeaderActive, setIsHeaderActive] = useState(true);
    const [isNavActive, setIsNavActive] = useState(false);
    const [hasHeaderBackground, setHasHeaderBackground] = useState(false);

    const delayLoading = 3000;

    return(
        <AppContext.Provider value={{
            hasHeaderBackground,
            delayLoading,
            isHeaderActive,
            isLogoActive,
            isNavActive,
            setIsHeaderActive,
            setIsLogoActive,
            setIsNavActive,
            setHasHeaderBackground,

        }}>
            {children}
        </AppContext.Provider>
    );
}
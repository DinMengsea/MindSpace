"use client";

import {createContext,ReactNode,useContext,useState, useEffect} from "react";

export type ThemeMode= "light" | "dark";
export type FontSize = "small" | "medium" | "large";

interface AppSettingContextType{
    theme: ThemeMode;
    setTheme: React.Dispatch<React.SetStateAction<ThemeMode>>;

    fontSize: FontSize;
    setFontSize: React.Dispatch<React.SetStateAction<FontSize>>;
}

const AppSettingContext = createContext<AppSettingContextType | null>(null);

export function AppSettingProvider({children}:{children: ReactNode}){
    const [theme,setTheme] = useState<ThemeMode>("light");
    const [fontSize,setFontSize] = useState<FontSize>("medium");
    
    useEffect(() => {
    const root = document.documentElement;

    const sizes = {
        small: {
        xs: "0.7rem",
        sm: "0.8rem",
        base: "0.9rem",
        lg: "1rem",
        xl: "1.15rem",
        "2xl": "1.35rem",
        "3xl": "1.7rem",
        },
        medium: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        },
        large: {
        xs: "0.85rem",
        sm: "1rem",
        base: "1.125rem",
        lg: "1.25rem",
        xl: "1.45rem",
        "2xl": "1.7rem",
        "3xl": "2.1rem",
        },
    };

    const current = sizes[fontSize];

    root.style.setProperty("--text-xs", current.xs);
    root.style.setProperty("--text-sm", current.sm);
    root.style.setProperty("--text-base", current.base);
    root.style.setProperty("--text-lg", current.lg);
    root.style.setProperty("--text-xl", current.xl);
    root.style.setProperty("--text-2xl", current["2xl"]);
    root.style.setProperty("--text-3xl", current["3xl"]);
    }, [fontSize]);

    useEffect(() => {
        const html = document.documentElement;

        if (theme === "dark") {
            html.classList.add("dark");
        } else {
            html.classList.remove("dark");
        }
    }, [theme]);
    
    return(
        <AppSettingContext.Provider
            value={{
                theme,
                setTheme,
                fontSize,
                setFontSize,
            }}
        >
            {children}
        </AppSettingContext.Provider>
    );
}

export function useAppSetting(){
    const context = useContext(AppSettingContext);

    if(!context){
        throw new Error(
            "useAppSettings must be used inside AppSettingProvider"
        );
    }
    return context;
}
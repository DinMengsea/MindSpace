"use client";

import {createContext,ReactNode,useContext,useState, useEffect} from "react";

export type ThemeMode= "light" | "dark";
export type FontSize = "small" | "medium" | "large";

interface AppSettingContextType{
    theme: ThemeMode;
    setTheme: React.Dispatch<React.SetStateAction<ThemeMode>>;

    fontSize: FontSize;
    setFontSize: React.Dispatch<React.SetStateAction<FontSize>>;

    fontScale: number;
    setFontScale: React.Dispatch<React.SetStateAction<number>>;
}

const AppSettingContext = createContext<AppSettingContextType | null>(null);

export function AppSettingProvider({children}:{children: ReactNode}){
    const [fontScale, setFontScale] = useState(100);
    const [fontSize,setFontSize] = useState<FontSize>("medium");
    const [theme, setTheme] = useState<ThemeMode>(() => {
        if (typeof window !== "undefined") {
            const savedTheme = localStorage.getItem("theme") as ThemeMode | null;

            if (savedTheme) {
            return savedTheme;
            }
        }

        return "light";
        });
    
    useEffect(() => {
        const root = document.documentElement;

        const sizes = {
            small: {
            xs: 0.7,
            sm: 0.8,
            base: 0.9,
            lg: 1,
            xl: 1.15,
            "2xl": 1.35,
            "3xl": 1.7,
            },
            medium: {
            xs: 0.75,
            sm: 0.875,
            base: 1,
            lg: 1.125,
            xl: 1.25,
            "2xl": 1.5,
            "3xl": 1.875,
            },
            large: {
            xs: 0.85,
            sm: 1,
            base: 1.125,
            lg: 1.25,
            xl: 1.45,
            "2xl": 1.7,
            "3xl": 2.1,
            },
        };

        const current = sizes[fontSize];

        const scale = fontScale / 100;

        root.style.setProperty("--text-xs", `${current.xs * scale}rem`);
        root.style.setProperty("--text-sm", `${current.sm * scale}rem`);
        root.style.setProperty("--text-base", `${current.base * scale}rem`);
        root.style.setProperty("--text-lg", `${current.lg * scale}rem`);
        root.style.setProperty("--text-xl", `${current.xl * scale}rem`);
        root.style.setProperty("--text-2xl", `${current["2xl"] * scale}rem`);
        root.style.setProperty("--text-3xl", `${current["3xl"] * scale}rem`);
        }, [fontSize, fontScale]);

    useEffect(() => {
        const html = document.documentElement;

        if (theme === "dark") {
            html.classList.add("dark");
        } else {
            html.classList.remove("dark");
        }
    }, [theme]);
    
    {/* Save local theme */}
    useEffect(() => {
    localStorage.setItem("theme", theme);
    }, [theme]);

    return(
        <AppSettingContext.Provider
            value={{
                theme,
                setTheme,
                fontSize,
                setFontSize,
                fontScale,
                setFontScale,
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
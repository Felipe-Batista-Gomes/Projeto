import { createContext, useState } from "react";
import React from "react";
import { ThemeProvider as ThemeProviderStyled } from "styled-components";
import darkTheme from "./dark";
import lightTheme from "./light";

interface Props {
    children: React.ReactNode;
  }
  
export enum ThemeType {
    light = 'light',
    dark = 'dark'
}

export const themes = {
    dark: darkTheme,
    light: lightTheme
}

export const ThemeContext = createContext({
    theme: ThemeType.light,
    toggleTheme: () => {},
});



export const ThemeProvider: React.FC<Props> = ({ children }) => {
    const [theme, setTheme] = useState(ThemeType.light);

     function toggleTheme() {
        if(theme == ThemeType.light){
            setTheme(ThemeType.dark)
        } else {
            setTheme(ThemeType.light)
        }
    }

    return (
      <ThemeContext.Provider value={{theme, toggleTheme}}>
          <ThemeProviderStyled theme={themes[theme]}>
            {children}
          </ThemeProviderStyled>
      </ThemeContext.Provider>
    )
}
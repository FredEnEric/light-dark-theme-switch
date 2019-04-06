import React, {
  createContext,
  Dispatch,
  FunctionComponent,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import theme from './themes';

interface IThemeContext {
  dark: boolean;
  toggle: () => void;
}

interface IThemeState {
  dark: boolean;
  hasThemeLoaded: boolean;
}

type DarkModeHook = [IThemeState, Dispatch<SetStateAction<IThemeState>>];

const defaultContextData: IThemeContext = {
  dark: false,
  toggle: () => {},
};

const ThemeContext = createContext(defaultContextData);
const useTheme = () => useContext(ThemeContext);

const useDarkMode = (): DarkModeHook => {
  const [themeState, setTheme] = useState({
    dark: false,
    hasThemeLoaded: false,
  } as IThemeState);

  useEffect(() => {
    const isDark = localStorage.getItem('dark') === 'true';
    setTheme({ ...themeState, dark: isDark, hasThemeLoaded: true });
  }, []);

  return [themeState, setTheme];
};

const ThemeProvider: FunctionComponent = ({ children }) => {
  const [themeState, setTheme] = useDarkMode();

  // * To prevent theme flashing, return nothing until loaded
  if (!themeState.hasThemeLoaded) {
    return null;
  }

  const toggle = () => {
    const dark = !themeState.dark;
    localStorage.setItem('dark', JSON.stringify(dark));
    setTheme({ ...themeState, dark });
  };

  const computedTheme = themeState.dark ? theme('dark') : theme('light');

  return (
    <StyledThemeProvider theme={computedTheme}>
      <ThemeContext.Provider value={{ dark: themeState.dark, toggle }}>{children}</ThemeContext.Provider>
    </StyledThemeProvider>
  );
};

export default ThemeProvider;
export { useTheme };

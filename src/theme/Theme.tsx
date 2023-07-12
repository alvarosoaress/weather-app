/* eslint-disable no-shadow */
import React, {
  type Dispatch,
  type SetStateAction,
  createContext,
  useMemo,
  useState,
} from 'react';
import { ThemeProvider as ThemeProviderStyled } from 'styled-components';
import light from './light';
import dark from './dark';

// Enumerando as possibilidades de temas
enum ThemeType {
  light = 'light',
  dark = 'dark',
}

// Objeto para referência dos temas sendo passados para o Theme Provider do Styled
const themes = {
  light,
  dark,
};

// Criando tipos para o useState
type ThemeContextProps = {
  currentTheme: string;
  setCurrentTheme: Dispatch<SetStateAction<ThemeType>>;
};

// Função createContext com generic e default values para seus atributos
export const ThemeContext = createContext<ThemeContextProps>({
  currentTheme: ThemeType.dark,
  setCurrentTheme: () => {},
});

// Novo ThemeProvider personalizado recebendo uma children
// Typing children
// (Atributos{props} : {propsNome: Type propsNome})
export function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const [currentTheme, setCurrentTheme] = useState(ThemeType.dark);

  // useMemo para vários render
  const themesMemo = useMemo(
    () => ({ currentTheme, setCurrentTheme }),
    [currentTheme, setCurrentTheme],
  );

  return (
    // Context provider com generics de ThemeContextProps
    // e ThemeProvider com theme para a const Theme com seu índice no state currentTheme
    <ThemeContext.Provider value={themesMemo}>
      <ThemeProviderStyled theme={themes[currentTheme]}>
        {children}
      </ThemeProviderStyled>
    </ThemeContext.Provider>
  );
}

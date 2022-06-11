import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import { ColorScheme } from './types';

interface ColorSchemeContextProps {
  colorScheme: ColorScheme;
  toggleColorScheme(colorScheme?: ColorScheme): void;
  disableTransitions?: boolean;
}

const ColorSchemeContext = createContext<ColorSchemeContextProps>(null);

const disableTransition = () => {
  const css = document.createElement('style');
  css.appendChild(
    document.createTextNode(
      '*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}'
    )
  );
  document.head.appendChild(css);
  return () => {
    (() => window.getComputedStyle(document.body))();
    setTimeout(() => {
      document.head.removeChild(css);
    }, 1);
  };
};

export function useMantineColorScheme() {
  const ctx = useContext(ColorSchemeContext);
  const [scheme, setScheme] = useState<ColorScheme>(ctx.colorScheme);
  const mounted = useRef(false);

  if (!ctx) {
    throw new Error(
      'useMantineColorScheme hook was called outside of context, make sure your app is wrapped with ColorSchemeProvider component'
    );
  }

  const applyTheme = (colorScheme?: ColorScheme) => {
    setScheme(colorScheme ?? scheme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
      return;
    }
    const disable = ctx.disableTransitions ? disableTransition() : null;

    if (ctx.colorScheme !== scheme) ctx.toggleColorScheme(scheme);
    disable?.();
  }, [scheme]);

  return { ...ctx, toggleColorScheme: applyTheme };
}

interface ColorSchemeProviderProps extends ColorSchemeContextProps {
  children: React.ReactNode;
}

export function ColorSchemeProvider({
  colorScheme,
  toggleColorScheme,
  disableTransitions = false,
  children,
}: ColorSchemeProviderProps) {
  return (
    <ColorSchemeContext.Provider value={{ colorScheme, toggleColorScheme, disableTransitions }}>
      {children}
    </ColorSchemeContext.Provider>
  );
}

ColorSchemeProvider.displayName = '@mantine/core/ColorSchemeProvider';

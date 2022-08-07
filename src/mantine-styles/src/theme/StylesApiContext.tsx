import React, { createContext, useContext } from 'react';

interface StylesApiContextValue {
  classNames: Record<string, string>;
  styles: Record<string, any>;
  unstyled: boolean;
  staticSelector?: string;
}

const StylesApiContext = createContext<StylesApiContextValue>({
  classNames: {},
  styles: {},
  unstyled: false,
});

export function StylesApiProvider({
  children,
  classNames,
  unstyled,
  styles,
  staticSelector,
}: StylesApiContextValue & { children: React.ReactNode }) {
  return (
    <StylesApiContext.Provider value={{ classNames, styles, unstyled, staticSelector }}>
      {children}
    </StylesApiContext.Provider>
  );
}

export function useContextStylesApi() {
  return useContext(StylesApiContext);
}

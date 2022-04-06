import React, { createContext, useContext } from 'react';

interface StylesApiContextValue {
  classNames: Record<string, string>;
  styles: Record<string, any>;
}

const StylesApiContext = createContext<StylesApiContextValue>({ classNames: {}, styles: {} });

export function StylesApiProvider({
  children,
  classNames,
  styles,
}: StylesApiContextValue & { children: React.ReactNode }) {
  return (
    <StylesApiContext.Provider value={{ classNames, styles }}>{children}</StylesApiContext.Provider>
  );
}

export function useContextStylesApi() {
  return useContext(StylesApiContext);
}

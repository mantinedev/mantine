import React, { PropsWithChildren, createContext, useEffect } from 'react';
import { HLJSApi } from 'highlight.js';

interface HighlightContextType {
  highlight?: HLJSApi;
}

export const HighlightContext = createContext<HighlightContextType>({
  highlight: undefined,
});

export const HighlightProvider = ({
  children,
  highlightInstance,
}: PropsWithChildren<{
  highlightInstance: HLJSApi;
}>) => {
  const [highlight, setHighlight] = React.useState(highlightInstance);

  useEffect(() => {
    setHighlight(highlightInstance);
  }, [highlightInstance]);

  return <HighlightContext.Provider value={{ highlight }}>{children}</HighlightContext.Provider>;
};

import React, { PropsWithChildren, createContext, useEffect } from 'react';
import { HLJSApi } from 'highlight.js';

interface HighlightContextType {
  hljs?: HLJSApi;
}

export const HighlightContext = createContext<HighlightContextType>({
  hljs: undefined,
});

export const HighlightProvider = ({
  children,
  hljsInstance,
}: PropsWithChildren<{
  hljsInstance: HLJSApi;
}>) => {
  const [hljs, setHljs] = React.useState(hljsInstance);

  useEffect(() => {
    setHljs(hljsInstance);
  }, [hljsInstance]);

  return <HighlightContext.Provider value={{ hljs }}>{children}</HighlightContext.Provider>;
};

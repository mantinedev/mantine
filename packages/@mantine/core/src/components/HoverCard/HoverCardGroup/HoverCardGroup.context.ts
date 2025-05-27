import { createContext, useContext } from 'react';

const HoverCardGroupContext = createContext(false);

export const HoverCardGroupProvider = HoverCardGroupContext.Provider;
export const useHoverCardGroupContext = () => useContext(HoverCardGroupContext);

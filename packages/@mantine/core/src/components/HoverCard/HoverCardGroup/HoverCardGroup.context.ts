import { createContext, use } from 'react';

const HoverCardGroupContext = createContext(false);

export const HoverCardGroupProvider = HoverCardGroupContext.Provider;
export const useHoverCardGroupContext = () => use(HoverCardGroupContext);

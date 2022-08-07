import { createContext, useContext } from 'react';

const TooltipGroupContext = createContext(false);

export const TooltipGroupProvider = TooltipGroupContext.Provider;
export const useTooltipGroupContext = () => useContext(TooltipGroupContext);

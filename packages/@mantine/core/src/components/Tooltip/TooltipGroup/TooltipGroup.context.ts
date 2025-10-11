import { createContext, use } from 'react';

const TooltipGroupContext = createContext(false);

export const TooltipGroupProvider = TooltipGroupContext.Provider;
export const useTooltipGroupContext = () => use(TooltipGroupContext);

import { createContext } from 'react';

export interface AvatarGroupContextValue {
  withinGroup: boolean;
}

export const AvatarGroupContext = createContext<AvatarGroupContextValue>({ withinGroup: false });

import { createContext, use } from 'react';

const AvatarGroupContext = createContext<true | null>(null);
export const AvatarGroupProvider = AvatarGroupContext.Provider;

export function useAvatarGroupContext() {
  const ctx = use(AvatarGroupContext);
  return { withinGroup: !!ctx };
}

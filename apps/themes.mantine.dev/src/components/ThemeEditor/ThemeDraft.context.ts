import { createContext, use } from 'react';
import type { ThemeOverrides } from '@/preview';

export type ThemeDraft = Partial<ThemeOverrides>;

interface ThemeDraftContextValue {
  draft: ThemeDraft | null;
  setDraft: (draft: ThemeDraft | null) => void;
}

export const ThemeDraftContext = createContext<ThemeDraftContextValue>({
  draft: null,
  setDraft: () => {},
});

export function useThemeDraft() {
  return use(ThemeDraftContext);
}

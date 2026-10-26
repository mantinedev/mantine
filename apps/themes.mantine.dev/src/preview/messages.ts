import type { PresetThemeInfo, ThemeOverrides } from './overrides';

export type PreviewColorScheme = 'light' | 'dark';

export type EditorMessage = {
  type: 'theme-editor:state';
  overrides: ThemeOverrides;
  colorScheme: PreviewColorScheme;
};

export type PreviewMessage =
  | { type: 'theme-editor:ready'; info: PresetThemeInfo }
  | { type: 'theme-editor:applied' }
  | { type: 'theme-editor:color-scheme'; colorScheme: PreviewColorScheme };

export function isEditorMessage(data: unknown): data is EditorMessage {
  return (
    typeof data === 'object' &&
    data !== null &&
    (data as { type?: unknown }).type === 'theme-editor:state'
  );
}

export function isPreviewMessage(data: unknown): data is PreviewMessage {
  const type = typeof data === 'object' && data !== null && (data as { type?: unknown }).type;
  return (
    type === 'theme-editor:ready' ||
    type === 'theme-editor:applied' ||
    type === 'theme-editor:color-scheme'
  );
}

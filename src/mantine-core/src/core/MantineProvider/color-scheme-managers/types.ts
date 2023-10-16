import type { MantineColorScheme } from '../theme.types';

export interface MantineColorSchemeManager {
  /** Function to retrieve color scheme value from external storage, for example window.localStorage */
  get: (defaultValue: MantineColorScheme) => MantineColorScheme;

  /** Function to set color scheme value in external storage, for example window.localStorage */
  set: (value: MantineColorScheme) => void;

  /** Function to subscribe to color scheme changes triggered by external events */
  subscribe: (onUpdate: (colorScheme: MantineColorScheme) => void) => void;

  /** Function to unsubscribe from color scheme changes triggered by external events */
  unsubscribe: () => void;

  /** Function to clear value from external storage */
  clear: () => void;
}

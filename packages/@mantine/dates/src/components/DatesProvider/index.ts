import type { DatesProviderProps, DatesProviderSettings } from './DatesProvider';

export { DATES_PROVIDER_DEFAULT_SETTINGS, DatesProvider } from './DatesProvider';
export { useDatesContext } from './use-dates-context';

export type { DatesProviderProps, DatesProviderSettings };

export namespace DatesProvider {
  export type Props = DatesProviderProps;
  export type Settings = DatesProviderSettings;
}

export { useSpotlight } from './Spotlight.context';
export { SpotlightProvider } from './SpotlightProvider';
export {
  openSpotlight,
  closeSpotlight,
  toggleSpotlight,
  triggerSpotlightAction,
  registerSpotlightActions,
  removeSpotlightActions,
} from './events';

export type { SpotlightAction } from './types';
export type { SpotlightProviderProps } from './SpotlightProvider';
export type { DefaultActionProps as SpotlightActionProps } from './DefaultAction/DefaultAction';
export type { SpotlightStylesNames } from './Spotlight/Spotlight';

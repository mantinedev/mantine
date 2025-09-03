export {
  spotlight,
  createSpotlight,
  createSpotlightStore,
  useSpotlight,
  openSpotlight,
  closeSpotlight,
  toggleSpotlight,
} from './spotlight.store.js';
export type { SpotlightState, SpotlightStore } from './spotlight.store.js';

export { isActionsGroup } from './is-actions-group.js';

export { Spotlight } from './Spotlight.js';
export { SpotlightRoot } from './SpotlightRoot.js';
export { SpotlightAction } from './SpotlightAction.js';
export { SpotlightActionsGroup } from './SpotlightActionsGroup.js';
export { SpotlightActionsList } from './SpotlightActionsList.js';
export { SpotlightEmpty } from './SpotlightEmpty.js';
export { SpotlightFooter } from './SpotlightFooter.js';
export { SpotlightSearch } from './SpotlightSearch.js';

export type {
  SpotlightFactory,
  SpotlightFilterFunction,
  SpotlightActionData,
  SpotlightActionGroupData,
  SpotlightProps,
  SpotlightStylesNames,
} from './Spotlight';
export type { SpotlightActionProps, SpotlightActionStylesNames } from './SpotlightAction';
export type {
  SpotlightActionsGroupProps,
  SpotlightActionsGroupStylesNames,
} from './SpotlightActionsGroup';
export type {
  SpotlightActionsListProps,
  SpotlightActionsListStylesNames,
} from './SpotlightActionsList';
export type { SpotlightEmptyProps, SpotlightEmptyStylesNames } from './SpotlightEmpty';
export type { SpotlightFooterProps, SpotlightFooterStylesNames } from './SpotlightFooter';
export type { SpotlightSearchProps, SpotlightSearchStylesNames } from './SpotlightSearch';
export type { SpotlightRootProps, SpotlightRootStylesNames } from './SpotlightRoot';

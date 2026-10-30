import type {
  SpotlightActionData,
  SpotlightActionGroupData,
  SpotlightFactory,
  SpotlightFilterFunction,
  SpotlightProps,
  SpotlightStylesNames,
} from './Spotlight.js';
import type { SpotlightActionProps, SpotlightActionStylesNames } from './SpotlightAction.js';
import type {
  SpotlightActionsGroupProps,
  SpotlightActionsGroupStylesNames,
} from './SpotlightActionsGroup.js';
import type {
  SpotlightActionsListProps,
  SpotlightActionsListStylesNames,
} from './SpotlightActionsList.js';
import type { SpotlightEmptyProps, SpotlightEmptyStylesNames } from './SpotlightEmpty.js';
import type { SpotlightFooterProps, SpotlightFooterStylesNames } from './SpotlightFooter.js';
import type { SpotlightRootProps, SpotlightRootStylesNames } from './SpotlightRoot.js';
import type { SpotlightSearchProps, SpotlightSearchStylesNames } from './SpotlightSearch.js';

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
  SpotlightProps,
  SpotlightStylesNames,
  SpotlightFactory,
  SpotlightFilterFunction,
  SpotlightActionData,
  SpotlightActionGroupData,
  SpotlightActionProps,
  SpotlightActionStylesNames,
  SpotlightActionsGroupProps,
  SpotlightActionsGroupStylesNames,
  SpotlightActionsListProps,
  SpotlightActionsListStylesNames,
  SpotlightEmptyProps,
  SpotlightEmptyStylesNames,
  SpotlightFooterProps,
  SpotlightFooterStylesNames,
  SpotlightSearchProps,
  SpotlightSearchStylesNames,
  SpotlightRootProps,
  SpotlightRootStylesNames,
};

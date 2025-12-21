import type {
  SpotlightActionData,
  SpotlightActionGroupData,
  SpotlightFactory,
  SpotlightFilterFunction,
  SpotlightProps,
  SpotlightStylesNames,
} from './Spotlight';
import type { SpotlightActionProps, SpotlightActionStylesNames } from './SpotlightAction';
import type {
  SpotlightActionsGroupProps,
  SpotlightActionsGroupStylesNames,
} from './SpotlightActionsGroup';
import type {
  SpotlightActionsListProps,
  SpotlightActionsListStylesNames,
} from './SpotlightActionsList';
import type { SpotlightEmptyProps, SpotlightEmptyStylesNames } from './SpotlightEmpty';
import type { SpotlightFooterProps, SpotlightFooterStylesNames } from './SpotlightFooter';
import type { SpotlightRootProps, SpotlightRootStylesNames } from './SpotlightRoot';
import type { SpotlightSearchProps, SpotlightSearchStylesNames } from './SpotlightSearch';

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

export namespace Spotlight {
  export type Props = SpotlightProps;
  export type StylesNames = SpotlightStylesNames;
  export type Factory = SpotlightFactory;
  export type FilterFunction = SpotlightFilterFunction;
  export type ActionData = SpotlightActionData;
  export type ActionGroupData = SpotlightActionGroupData;

  export namespace Action {
    export type Props = SpotlightActionProps;
    export type StylesNames = SpotlightActionStylesNames;
  }

  export namespace ActionsGroup {
    export type Props = SpotlightActionsGroupProps;
    export type StylesNames = SpotlightActionsGroupStylesNames;
  }

  export namespace ActionsList {
    export type Props = SpotlightActionsListProps;
    export type StylesNames = SpotlightActionsListStylesNames;
  }

  export namespace Empty {
    export type Props = SpotlightEmptyProps;
    export type StylesNames = SpotlightEmptyStylesNames;
  }

  export namespace Footer {
    export type Props = SpotlightFooterProps;
    export type StylesNames = SpotlightFooterStylesNames;
  }

  export namespace Search {
    export type Props = SpotlightSearchProps;
    export type StylesNames = SpotlightSearchStylesNames;
  }

  export namespace Root {
    export type Props = SpotlightRootProps;
    export type StylesNames = SpotlightRootStylesNames;
  }
}

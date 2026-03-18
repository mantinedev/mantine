import {
  factory,
  Factory,
  getDefaultZIndex,
  ScrollAreaAutosizeProps,
  useProps,
} from '@mantine/core';
import { useUncontrolled } from '@mantine/hooks';
import { defaultSpotlightFilter } from './default-spotlight-filter';
import { isActionsGroup } from './is-actions-group';
import { limitActions } from './limit-actions';
import classes from './Spotlight.module.css';
import { spotlight, spotlightStore } from './spotlight.store';
import { SpotlightAction, SpotlightActionProps } from './SpotlightAction';
import { SpotlightActionsGroup } from './SpotlightActionsGroup';
import { SpotlightActionsList } from './SpotlightActionsList';
import { SpotlightEmpty } from './SpotlightEmpty';
import { SpotlightFooter } from './SpotlightFooter';
import { SpotlightRoot, SpotlightRootProps, SpotlightRootStylesNames } from './SpotlightRoot';
import { SpotlightSearch, SpotlightSearchProps } from './SpotlightSearch';

export type SpotlightFilterFunction = (
  query: string,
  actions: SpotlightActions[]
) => SpotlightActions[];

export interface SpotlightActionData extends SpotlightActionProps {
  id: string;
  group?: string;
}

export interface SpotlightActionGroupData {
  group: string;
  actions: SpotlightActionData[];
}

export type SpotlightActions = SpotlightActionData | SpotlightActionGroupData;

export type SpotlightStylesNames = SpotlightRootStylesNames;

export interface SpotlightProps extends SpotlightRootProps {
  /** Props passed down to the `Spotlight.Search` */
  searchProps?: SpotlightSearchProps;

  /** Actions data, passed down to `Spotlight.Action` component */
  actions: SpotlightActions[];

  /** Function to filter actions data based on search query, by default actions are filtered by title, description and keywords */
  filter?: SpotlightFilterFunction;

  /** Message displayed when none of the actions match given `filter` */
  nothingFound?: React.ReactNode;

  /** Determines whether search query should be highlighted in action label @default `false` */
  highlightQuery?: boolean;

  /** Maximum number of actions displayed at a time @default `Infinity` */
  limit?: number;

  /** Props passed down to the `ScrollArea` component */
  scrollAreaProps?: Partial<ScrollAreaAutosizeProps>;
}

export type SpotlightFactory = Factory<{
  props: SpotlightProps;
  ref: HTMLDivElement;
  stylesNames: SpotlightStylesNames;
  staticComponents: {
    Search: typeof SpotlightSearch;
    ActionsList: typeof SpotlightActionsList;
    Action: typeof SpotlightAction;
    Empty: typeof SpotlightEmpty;
    Footer: typeof SpotlightFooter;
    ActionsGroup: typeof SpotlightActionsGroup;
    Root: typeof SpotlightRoot;
    open: typeof spotlight.open;
    close: typeof spotlight.close;
    toggle: typeof spotlight.toggle;
  };
}>;

const defaultProps = {
  size: 600,
  yOffset: 80,
  limit: Infinity,
  zIndex: getDefaultZIndex('max'),
  overlayProps: { backgroundOpacity: 0.35, blur: 7 },
  transitionProps: { duration: 200, transition: 'pop' },
  store: spotlightStore,
  filter: defaultSpotlightFilter,
  clearQueryOnClose: true,
  closeOnActionTrigger: true,
  shortcut: 'mod + K',
} satisfies Partial<SpotlightProps>;

export const Spotlight = factory<SpotlightFactory>((_props, ref) => {
  const props = useProps('Spotlight', defaultProps, _props);
  const {
    searchProps,
    filter,
    query,
    onQueryChange,
    actions,
    nothingFound,
    highlightQuery,
    limit,
    scrollAreaProps,
    ...others
  } = props;

  const [_query, setQuery] = useUncontrolled({
    value: query,
    defaultValue: '',
    finalValue: '',
    onChange: onQueryChange,
  });

  const filteredActions = limitActions(filter(_query, actions), limit).map((item) => {
    if (isActionsGroup(item)) {
      const items = item.actions.map(({ id, ...actionData }) => (
        <SpotlightAction key={id} highlightQuery={highlightQuery} {...actionData} />
      ));

      return (
        <SpotlightActionsGroup key={item.group} label={item.group}>
          {items}
        </SpotlightActionsGroup>
      );
    }

    return <SpotlightAction key={item.id} highlightQuery={highlightQuery} {...item} />;
  });

  return (
    <SpotlightRoot {...others} query={_query} onQueryChange={setQuery} ref={ref}>
      <SpotlightSearch {...searchProps} />
      {filteredActions.length > 0 && (
        <SpotlightActionsList {...(scrollAreaProps as any)}>{filteredActions}</SpotlightActionsList>
      )}
      {filteredActions.length === 0 && nothingFound && (
        <SpotlightEmpty>{nothingFound}</SpotlightEmpty>
      )}
    </SpotlightRoot>
  );
});

Spotlight.classes = classes;
Spotlight.displayName = '@mantine/spotlight/Spotlight';
Spotlight.Search = SpotlightSearch;
Spotlight.ActionsList = SpotlightActionsList;
Spotlight.Action = SpotlightAction;
Spotlight.Empty = SpotlightEmpty;
Spotlight.ActionsGroup = SpotlightActionsGroup;
Spotlight.Footer = SpotlightFooter;
Spotlight.Root = SpotlightRoot;
Spotlight.open = spotlight.open;
Spotlight.close = spotlight.close;
Spotlight.toggle = spotlight.toggle;

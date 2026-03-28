import type {
  TabsCssVariables,
  TabsFactory,
  TabsProps,
  TabsStylesNames,
  TabsVariant,
} from './Tabs';
import type { TabsContextValue } from './Tabs.context';
import type { TabsListProps, TabsListStylesNames } from './TabsList/TabsList';
import type { TabsPanelProps, TabsPanelStylesNames } from './TabsPanel/TabsPanel';
import type { TabsTabProps, TabsTabStylesNames } from './TabsTab/TabsTab';

export { Tabs } from './Tabs';
export { TabsList } from './TabsList/TabsList';
export { TabsTab } from './TabsTab/TabsTab';
export { TabsPanel } from './TabsPanel/TabsPanel';
export { useTabsContext } from './Tabs.context';

export type {
  TabsProps,
  TabsStylesNames,
  TabsCssVariables,
  TabsFactory,
  TabsVariant,
  TabsTabProps,
  TabsTabStylesNames,
  TabsPanelProps,
  TabsPanelStylesNames,
  TabsListProps,
  TabsListStylesNames,
  TabsContextValue,
};

export namespace Tabs {
  export type Props = TabsProps;
  export type StylesNames = TabsStylesNames;
  export type CssVariables = TabsCssVariables;
  export type Factory = TabsFactory;
  export type Variant = TabsVariant;
  export type ContextValue = TabsContextValue;

  export namespace Tab {
    export type Props = TabsTabProps;
    export type StylesNames = TabsTabStylesNames;
  }

  export namespace Panel {
    export type Props = TabsPanelProps;
    export type StylesNames = TabsPanelStylesNames;
  }

  export namespace List {
    export type Props = TabsListProps;
    export type StylesNames = TabsListStylesNames;
  }
}

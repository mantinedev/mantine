import { useCallback, useRef } from 'react';
import { useForceUpdate, useId, useUncontrolled } from '@mantine/hooks';
import {
  Box,
  BoxProps,
  createVarsResolver,
  ElementProps,
  factory,
  Factory,
  getAutoContrastValue,
  getContrastColor,
  getRadius,
  getSafeId,
  getThemeColor,
  MantineColor,
  MantineRadius,
  StylesApiProps,
  useProps,
  useStyles,
} from '../../core';
import { TabsProvider, TabsContextValue } from './Tabs.context';
import { TabsList, TabsListStylesNames, TabsListProps } from './TabsList/TabsList';
import { TabsPanel, TabsPanelStylesNames, TabsPanelProps } from './TabsPanel/TabsPanel';
import { TabsTab, TabsTabStylesNames, TabsTabProps } from './TabsTab/TabsTab';
import classes from './Tabs.module.css';
export type TabsStylesNames =
  | 'root'
  | TabsListStylesNames
  | TabsPanelStylesNames
  | TabsTabStylesNames;

export type TabsVariant =
  | 'default'
  | 'outline'
  | 'pills'
  | 'inset'
  | 'pill-compact'
  | 'contained'
  | 'enclosed';
export type TabsCssVariables = {
  root: '--tabs-color' | '--tabs-radius';
};

export interface TabsProps
  extends
    BoxProps,
    StylesApiProps<TabsFactory>,
    ElementProps<'div', 'defaultValue' | 'value' | 'onChange'> {
  /** Uncontrolled component default value @category state */
  defaultValue?: string | null;

  /** Controlled component value @category state */
  value?: string | null;

  /** Called when value changes @category state */
  onChange?: (value: string | null) => void;

  /** Tabs orientation @default 'horizontal' @category appearance */
  orientation?: 'vertical' | 'horizontal';

  /** `Tabs.List` placement relative to `Tabs.Panel`, applicable only when `orientation="vertical"` @default 'left' @category appearance */
  placement?: 'left' | 'right';

  /** Base id, used to generate ids to connect labels with controls, generated randomly by default */
  id?: string;

  /** If set, arrow key presses loop though items (first to last and last to first) @default true @category behavior */
  loop?: boolean;

  /** If set, tab is activated with arrow key press @default true @category behavior */
  activateTabWithKeyboard?: boolean;

  /** If set, tab can be deactivated @default false @category behavior */
  allowTabDeactivation?: boolean;

  /** Tabs content @category appearance */
  children?: React.ReactNode;

  /** Changes colors of `Tabs.Tab` components when variant is `default`, `pills`, `inset` or `pill-compact`, does nothing for other variants @category appearance */
  color?: MantineColor;

  /** Key of `theme.radius` or any valid CSS value to set `border-radius` @default theme.defaultRadius @category appearance */
  radius?: MantineRadius;

  /** Determines whether tabs should have inverted styles @default false @category appearance */
  inverted?: boolean;

  /** If set to `false`, `Tabs.Panel` content will be unmounted when the associated tab is not active @default true */
  keepMounted?: boolean;

  /** Controls how inactive tabs content is hidden when `keepMounted` is `true`, `'activity'` – hidden with `Activity` component, `'display-none'` – hidden with `display: none` styles @default 'activity' */
  keepMountedMode?: 'activity' | 'display-none';

  /** If set, adjusts text color based on background color for `pills` variant @category appearance */
  autoContrast?: boolean;
}

export type TabsFactory = Factory<{
  props: TabsProps;
  ref: HTMLDivElement;
  variant: TabsVariant;
  stylesNames: TabsStylesNames;
  vars: TabsCssVariables;
  staticComponents: {
    Tab: typeof TabsTab;
    Panel: typeof TabsPanel;
    List: typeof TabsList;
  };
}>;

const VALUE_ERROR =
  'Tabs.Tab or Tabs.Panel component was rendered with invalid value or without value';

const defaultProps = {
  keepMounted: true,
  keepMountedMode: 'activity',
  orientation: 'horizontal',
  loop: true,
  activateTabWithKeyboard: true,
  variant: 'default',
  placement: 'left',
} satisfies Partial<TabsProps>;

const varsResolver = createVarsResolver<TabsFactory>(
  (theme, { radius, color, autoContrast, variant }) => ({
    root: {
      '--tabs-radius': getRadius(radius ?? (variant === 'pill-compact' ? 'xl' : undefined)),
      '--tabs-color': getThemeColor(color, theme),
      '--tabs-text-color': getAutoContrastValue(autoContrast, theme)
        ? getContrastColor({ color, theme, autoContrast })
        : undefined,
    },
  })
);

export const Tabs = factory<TabsFactory>((_props) => {
  const props = useProps('Tabs', defaultProps, _props);
  const {
    defaultValue,
    value,
    onChange,
    orientation,
    children,
    loop,
    id,
    activateTabWithKeyboard,
    allowTabDeactivation,
    variant,
    color,
    radius,
    inverted,
    placement,
    keepMounted,
    keepMountedMode,
    classNames,
    styles,
    unstyled,
    className,
    style,
    vars,
    autoContrast,
    mod,
    attributes,
    ...others
  } = props;

  const uid = useId(id);
  const mountedPanels = useRef(new Set<string>());
  const forceUpdate = useForceUpdate();

  const setMountedPanel = useCallback((panelValue: string, mounted: boolean) => {
    const panels = mountedPanels.current;
    if (mounted && !panels.has(panelValue)) {
      panels.add(panelValue);
      forceUpdate();
    } else if (!mounted && panels.has(panelValue)) {
      panels.delete(panelValue);
      forceUpdate();
    }
  }, []);

  const [currentTab, setCurrentTab] = useUncontrolled({
    value,
    defaultValue,
    finalValue: null,
    onChange,
  });

  const getStyles = useStyles<TabsFactory>({
    name: 'Tabs',
    props,
    classes,
    className,
    style,
    classNames,
    styles,
    unstyled,
    attributes,
    vars,
    varsResolver,
  });

  return (
    <TabsProvider
      value={{
        placement,
        value: currentTab,
        orientation,
        id: uid,
        loop,
        activateTabWithKeyboard,
        getTabId: getSafeId(`${uid}-tab`, VALUE_ERROR),
        getPanelId: getSafeId(`${uid}-panel`, VALUE_ERROR),
        onChange: setCurrentTab,
        allowTabDeactivation,
        variant,
        color,
        radius,
        inverted,
        keepMounted,
        keepMountedMode,
        unstyled,
        getStyles,
        mountedPanels,
        setMountedPanel,
      }}
    >
      <Box
        id={uid}
        variant={variant}
        mod={[
          {
            orientation,
            inverted: orientation === 'horizontal' && inverted,
            placement: orientation === 'vertical' && placement,
          },
          mod,
        ]}
        {...getStyles('root')}
        {...others}
      >
        {children}
      </Box>
    </TabsProvider>
  );
});

Tabs.classes = classes;
Tabs.varsResolver = varsResolver;
Tabs.displayName = '@mantine/core/Tabs';
Tabs.Tab = TabsTab;
Tabs.Panel = TabsPanel;
Tabs.List = TabsList;

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

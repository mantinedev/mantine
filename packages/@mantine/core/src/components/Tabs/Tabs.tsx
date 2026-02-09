import { useId, useUncontrolled } from '@mantine/hooks';
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
import { TabsProvider } from './Tabs.context';
import classes from './Tabs.module.css';
import { TabsList, TabsListStylesNames } from './TabsList/TabsList';
import { TabsPanel, TabsPanelStylesNames } from './TabsPanel/TabsPanel';
import { TabsTab, TabsTabStylesNames } from './TabsTab/TabsTab';

export type TabsStylesNames =
  | 'root'
  | TabsListStylesNames
  | TabsPanelStylesNames
  | TabsTabStylesNames;

export type TabsVariant = 'default' | 'outline' | 'pills';
export type TabsCssVariables = {
  root: '--tabs-color' | '--tabs-radius';
};

export interface TabsProps
  extends
    BoxProps,
    StylesApiProps<TabsFactory>,
    ElementProps<'div', 'defaultValue' | 'value' | 'onChange'> {
  /** Uncontrolled component default value */
  defaultValue?: string | null;

  /** Controlled component value */
  value?: string | null;

  /** Called when value changes */
  onChange?: (value: string | null) => void;

  /** Tabs orientation @default 'horizontal' */
  orientation?: 'vertical' | 'horizontal';

  /** `Tabs.List` placement relative to `Tabs.Panel`, applicable only when `orientation="vertical"` @default 'left' */
  placement?: 'left' | 'right';

  /** Base id, used to generate ids to connect labels with controls, generated randomly by default */
  id?: string;

  /** If set, arrow key presses loop though items (first to last and last to first) @default true */
  loop?: boolean;

  /** If set, tab is activated with arrow key press @default true */
  activateTabWithKeyboard?: boolean;

  /** If set, tab can be deactivated @default false */
  allowTabDeactivation?: boolean;

  /** Tabs content */
  children?: React.ReactNode;

  /** Changes colors of `Tabs.Tab` components when variant is `pills` or `default`, does nothing for other variants */
  color?: MantineColor;

  /** Key of `theme.radius` or any valid CSS value to set `border-radius` @default theme.defaultRadius */
  radius?: MantineRadius;

  /** Determines whether tabs should have inverted styles @default false */
  inverted?: boolean;

  /** If set to `false`, `Tabs.Panel` content will be unmounted when the associated tab is not active @default true */
  keepMounted?: boolean;

  /** If set, adjusts text color based on background color for `pills` variant */
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
  orientation: 'horizontal',
  loop: true,
  activateTabWithKeyboard: true,
  variant: 'default',
  placement: 'left',
} satisfies Partial<TabsProps>;

const varsResolver = createVarsResolver<TabsFactory>((theme, { radius, color, autoContrast }) => ({
  root: {
    '--tabs-radius': getRadius(radius),
    '--tabs-color': getThemeColor(color, theme),
    '--tabs-text-color': getAutoContrastValue(autoContrast, theme)
      ? getContrastColor({ color, theme, autoContrast })
      : undefined,
  },
}));

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
        unstyled,
        getStyles,
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

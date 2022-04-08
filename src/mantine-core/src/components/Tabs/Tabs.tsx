import React, { forwardRef } from 'react';
import {
  DefaultProps,
  ForwardRefWithStaticComponents,
  useMantineDefaultProps,
  StylesApiProvider,
  ClassNames,
} from '@mantine/styles';
import { Box } from '../Box';
import { TabsList, TabsListStylesNames } from './TabsList/TabsList';
import { TabsPanel, TabsPanelStylesNames } from './TabsPanel/TabsPanel';
import { Tab, TabStylesNames } from './Tab/Tab';
import { TabsProvider, TabsProviderProps } from './TabsProvider';
import useStyles from './Tabs.styles';

export type TabsStylesNames =
  | ClassNames<typeof useStyles>
  | TabsListStylesNames
  | TabsPanelStylesNames
  | TabStylesNames;

export interface TabsProps
  extends TabsProviderProps,
    DefaultProps<TabsStylesNames>,
    Omit<React.ComponentPropsWithoutRef<'div'>, keyof TabsProviderProps> {}

type TabsComponent = ForwardRefWithStaticComponents<
  TabsProps,
  {
    List: typeof TabsList;
    Tab: typeof Tab;
    Panel: typeof TabsPanel;
  }
>;

const defaultProps: Partial<TabsProps> = {
  orientation: 'horizontal',
  loop: true,
  activateTabWithKeyboard: true,
  allowTabDeactivation: false,
  unstyled: false,
  variant: 'default',
};

export const Tabs: TabsComponent = forwardRef<HTMLDivElement, TabsProps>((props, ref) => {
  const {
    defaultValue,
    value,
    orientation,
    loop,
    activateTabWithKeyboard,
    allowTabDeactivation,
    children,
    id,
    onTabChange,
    variant,
    color,
    className,
    unstyled,
    classNames,
    styles,
    radius,
    ...others
  } = useMantineDefaultProps('Tabs', defaultProps, props);

  const { classes, cx } = useStyles(
    { orientation, color, variant, radius },
    { unstyled, name: 'Tabs', classNames, styles }
  );

  return (
    <StylesApiProvider classNames={classNames} styles={styles} unstyled={unstyled}>
      <TabsProvider
        activateTabWithKeyboard={activateTabWithKeyboard}
        defaultValue={defaultValue}
        orientation={orientation}
        onTabChange={onTabChange}
        value={value}
        id={id}
        loop={loop}
        allowTabDeactivation={allowTabDeactivation}
        color={color}
        variant={variant}
        radius={radius}
      >
        <Box {...others} className={cx(classes.root, className)} id={id} ref={ref}>
          {children}
        </Box>
      </TabsProvider>
    </StylesApiProvider>
  );
}) as any;

Tabs.List = TabsList;
Tabs.Tab = Tab;
Tabs.Panel = TabsPanel;

Tabs.displayName = '@mantine/core/Tabs';

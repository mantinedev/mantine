import React, { forwardRef } from 'react';
import { DefaultProps, useComponentDefaultProps, Selectors } from '@mantine/styles';
import { ForwardRefWithStaticComponents } from '@mantine/utils';
import { Box } from '../Box';
import { TabsList, TabsListStylesNames } from './TabsList/TabsList';
import { TabsPanel, TabsPanelStylesNames } from './TabsPanel/TabsPanel';
import { Tab, TabStylesNames } from './Tab/Tab';
import { TabsProvider, TabsProviderProps } from './TabsProvider';
import { TabsStylesParams } from './Tabs.types';
import useStyles from './Tabs.styles';

export type TabsStylesNames =
  | Selectors<typeof useStyles>
  | TabsListStylesNames
  | TabsPanelStylesNames
  | TabStylesNames;

export interface TabsProps
  extends TabsProviderProps,
    DefaultProps<TabsStylesNames, TabsStylesParams>,
    Omit<React.ComponentPropsWithRef<'div'>, keyof TabsProviderProps> {}

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
  inverted: false,
  variant: 'default',
  placement: 'left',
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
    inverted,
    keepMounted,
    placement,
    ...others
  } = useComponentDefaultProps('Tabs', defaultProps, props);

  const { classes, cx } = useStyles(
    { orientation, color, radius, inverted, placement },
    { unstyled, name: 'Tabs', classNames, styles, variant }
  );

  return (
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
      inverted={inverted}
      keepMounted={keepMounted}
      placement={placement}
      classNames={classNames}
      styles={styles}
      unstyled={unstyled}
    >
      <Box {...others} className={cx(classes.root, className)} id={id} ref={ref}>
        {children}
      </Box>
    </TabsProvider>
  );
}) as any;

Tabs.List = TabsList;
Tabs.Tab = Tab;
Tabs.Panel = TabsPanel;

Tabs.displayName = '@mantine/core/Tabs';

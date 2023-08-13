import React, { forwardRef } from 'react';
import { DefaultProps, Selectors, MantineColor, useComponentDefaultProps } from '@mantine/styles';
import { createScopedKeydownHandler } from '@mantine/utils';
import { UnstyledButton } from '../../UnstyledButton';
import { useTabsContext } from '../Tabs.context';
import useStyles from './Tab.styles';

export type TabStylesNames = Selectors<typeof useStyles>;

export interface TabProps extends DefaultProps, React.ComponentPropsWithoutRef<'button'> {
  /** Value that is used to connect Tab with associated panel */
  value: string;

  /** Tab label */
  children?: React.ReactNode;

  /** Section of content displayed after label */
  rightSection?: React.ReactNode;

  /** Section of content displayed before label */
  icon?: React.ReactNode;

  /** Key of theme.colors */
  color?: MantineColor;
}

const defaultProps: Partial<TabProps> = {};

export const Tab = forwardRef<HTMLButtonElement, TabProps>((props, ref) => {
  const { value, children, onKeyDown, onClick, className, icon, rightSection, color, ...others } =
    useComponentDefaultProps('TabsTab', defaultProps, props);
  const ctx = useTabsContext();

  const hasIcon = !!icon;
  const hasRightSection = !!rightSection;

  const { theme, classes, cx } = useStyles(
    {
      withIcon: hasIcon || (hasRightSection && !children),
      withRightSection: hasRightSection || (hasIcon && !children),
      orientation: ctx.orientation,
      color: color || ctx.color,
      radius: ctx.radius,
      inverted: ctx.inverted,
      placement: ctx.placement,
    },
    {
      name: 'Tabs',
      unstyled: ctx.unstyled,
      classNames: ctx.classNames,
      styles: ctx.styles,
      variant: ctx.variant,
    }
  );

  const isActive = value === ctx.value;
  const panelId = ctx.getPanelId(value);
  const ariaControls = ctx.mountedPanelIds.includes(value) ? panelId : undefined;
  const activateTab = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    ctx.onTabChange(ctx.allowTabDeactivation ? (value === ctx.value ? null : value) : value);
    onClick?.(event);
  };

  return (
    <UnstyledButton<'button'>
      {...others}
      unstyled={ctx.unstyled}
      className={cx(classes.tab, className)}
      data-active={isActive || undefined}
      ref={ref}
      type="button"
      role="tab"
      id={ctx.getTabId(value)}
      aria-selected={isActive}
      tabIndex={isActive || ctx.value === null ? 0 : -1}
      aria-controls={ariaControls}
      onClick={activateTab}
      onKeyDown={createScopedKeydownHandler({
        siblingSelector: '[role="tab"]',
        parentSelector: '[role="tablist"]',
        activateOnFocus: ctx.activateTabWithKeyboard,
        loop: ctx.loop,
        dir: theme.dir,
        orientation: ctx.orientation,
        onKeyDown,
      })}
    >
      {icon && <span className={classes.tabIcon}>{icon}</span>}
      {children && <span className={classes.tabLabel}>{children}</span>}
      {rightSection && <span className={classes.tabRightSection}>{rightSection}</span>}
    </UnstyledButton>
  );
});

Tab.displayName = '@mantine/core/Tab';

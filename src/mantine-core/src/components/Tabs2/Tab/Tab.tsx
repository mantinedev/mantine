import React, { forwardRef } from 'react';
import { DefaultProps, ClassNames } from '@mantine/styles';
import { createScopedKeydownHandler } from '@mantine/utils';
import { UnstyledButton } from '../../Button';
import { useTabsContext } from '../Tabs.context';
import useStyles from './Tab.styles';

export type TabStylesNames = ClassNames<typeof useStyles>;

export interface TabProps
  extends DefaultProps<TabStylesNames>,
    React.ComponentPropsWithoutRef<'button'> {
  value: string;
  children: React.ReactNode;
  rightSection?: React.ReactNode;
  icon?: React.ReactNode;
}

export const Tab = forwardRef<HTMLButtonElement, TabProps>(
  ({ value, children, onKeyDown, onClick, className, icon, rightSection, ...others }, ref) => {
    const ctx = useTabsContext();

    const { theme, classes, cx } = useStyles(
      {
        withIcon: !!icon,
        withRightSection: !!rightSection,
        orientation: ctx.orientation,
        color: ctx.color,
        variant: ctx.variant,
      },
      { name: 'Tabs', unstyled: ctx.unstyled }
    );

    const isActive = value === ctx.value;
    const activateTab = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      ctx.onTabChange(ctx.allowTabDeactivation ? (value === ctx.value ? null : value) : value);
      onClick?.(event);
    };

    return (
      <UnstyledButton<'button'>
        {...others}
        unstyled={ctx.unstyled}
        className={cx(classes.tab, { [classes.tabActive]: isActive }, className)}
        ref={ref}
        type="button"
        role="tab"
        id={ctx.getTabId(value)}
        aria-selected={isActive}
        tabIndex={isActive || ctx.value === null ? 0 : -1}
        aria-controls={ctx.getPanelId(value)}
        onClick={activateTab}
        onKeyDown={createScopedKeydownHandler({
          siblingSelector: '[role="tab"]',
          parentSelector: '[role="tablist"]',
          activateOnFocus: ctx.activateTabWithKeyboardEvents,
          loop: ctx.loop,
          dir: theme.dir,
          orientation: ctx.orientation,
          onKeyDown,
        })}
      >
        {icon && <div className={classes.tabIcon}>{icon}</div>}
        {children && <div className={classes.tabLabel}>{children}</div>}
        {rightSection && <div className={classes.tabRightSection}>{rightSection}</div>}
      </UnstyledButton>
    );
  }
);

Tab.displayName = '@mantine/core/Tab';

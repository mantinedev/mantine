import React, { forwardRef } from 'react';
import { DefaultProps, ClassNames, useContextStylesApi, MantineColor } from '@mantine/styles';
import { createScopedKeydownHandler } from '@mantine/utils';
import { UnstyledButton } from '../../Button';
import { useTabsContext } from '../Tabs.context';
import useStyles from './Tab.styles';

export type TabStylesNames = ClassNames<typeof useStyles>;

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

export const Tab = forwardRef<HTMLButtonElement, TabProps>(
  (
    { value, children, onKeyDown, onClick, className, icon, rightSection, color, ...others },
    ref
  ) => {
    const ctx = useTabsContext();
    const { classNames, styles, unstyled } = useContextStylesApi();

    const hasIcon = !!icon;
    const hasRightSection = !!rightSection;

    const { theme, classes, cx } = useStyles(
      {
        withIcon: hasIcon || (hasRightSection && !children),
        withRightSection: hasRightSection || (hasIcon && !children),
        orientation: ctx.orientation,
        color: color || ctx.color,
        variant: ctx.variant,
        radius: ctx.radius,
      },
      { name: 'Tabs', unstyled, classNames, styles }
    );

    const isActive = value === ctx.value;
    const activateTab = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      ctx.onTabChange(ctx.allowTabDeactivation ? (value === ctx.value ? null : value) : value);
      onClick?.(event);
    };

    return (
      <UnstyledButton<'button'>
        {...others}
        unstyled={unstyled}
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

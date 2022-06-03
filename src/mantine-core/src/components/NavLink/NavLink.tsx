/* eslint-disable react/no-unused-prop-types */
import React, { forwardRef } from 'react';
import { DefaultProps, Selectors, useComponentDefaultProps } from '@mantine/styles';
import { createPolymorphicComponent } from '@mantine/utils';
import { UnstyledButton } from '../UnstyledButton';
import useStyles from './NavLink.styles';
import { Text } from '../Text';

export type NavLinkStylesNames = Selectors<typeof useStyles>;

export interface NavLinkProps extends DefaultProps<NavLinkStylesNames> {
  /** Main link content */
  label?: React.ReactNode;

  /** Secondary link description */
  description?: React.ReactNode;

  /** Icon displayed on the left side of the label */
  icon?: React.ReactNode;

  /** Section displayed on the right side of the label */
  rightSection?: React.ReactNode;
}

export const _NavLink = forwardRef<HTMLButtonElement, NavLinkProps>((props, ref) => {
  const {
    label,
    description,
    icon,
    rightSection,
    className,
    classNames,
    styles,
    unstyled,
    ...others
  } = useComponentDefaultProps('NavLink', {}, props);

  const { classes, cx } = useStyles(null, { name: 'NavLink', classNames, styles, unstyled });

  return (
    <UnstyledButton ref={ref} className={cx(classes.root, className)} {...others}>
      <span className={classes.icon}>{icon}</span>
      <span className={classes.body}>
        <Text component="span" size="sm" className={classes.label}>
          {label}
        </Text>
        <Text component="span" color="dimmed" size="xs" className={classes.description}>
          {description}
        </Text>
      </span>
      <span className={classes.rightSection}>{rightSection}</span>
    </UnstyledButton>
  );
});

export const NavLink = createPolymorphicComponent<'button', NavLinkProps>(_NavLink);

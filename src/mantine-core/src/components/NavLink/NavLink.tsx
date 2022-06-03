/* eslint-disable react/no-unused-prop-types */
import React, { forwardRef } from 'react';
import { DefaultProps, MantineColor, Selectors, useComponentDefaultProps } from '@mantine/styles';
import { createPolymorphicComponent } from '@mantine/utils';
import { useUncontrolled } from '@mantine/hooks';
import { UnstyledButton } from '../UnstyledButton';
import { ChevronIcon } from '../Accordion';
import { Collapse } from '../Collapse';
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

  /** Determines whether link should have active styles */
  active?: boolean;

  /** Key of theme.colors, active link color */
  color?: MantineColor;

  /** Active link variant */
  variant?: 'filled' | 'light' | 'subtle';

  /** If prop is set then label and description will not wrap on the next line */
  noWrap?: boolean;

  /** Child links */
  children?: React.ReactNode;

  /** Controlled nested items collapse state */
  opened?: boolean;

  /** Uncontrolled nested items collapse initial state */
  defaultOpened?: boolean;

  /** Called when open state changes */
  onChange?(opened: boolean): void;

  /** If set to true, right section will not rotate when collapse is opened */
  disableRightSectionRotation?: boolean;
}

const defaultProps: Partial<NavLinkProps> = {
  variant: 'light',
};

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
    active,
    color,
    variant,
    noWrap,
    children,
    opened,
    defaultOpened,
    onChange,
    // @ts-expect-error
    onClick,
    disableRightSectionRotation,
    ...others
  } = useComponentDefaultProps('NavLink', defaultProps, props);

  const { classes, cx } = useStyles(
    { color, variant, noWrap },
    { name: 'NavLink', classNames, styles, unstyled }
  );

  const [_opened, setOpened] = useUncontrolled({
    value: opened,
    defaultValue: defaultOpened,
    finalValue: false,
    onChange,
  });

  const withChildren = !!children;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (withChildren) {
      event.preventDefault();
      onClick?.(event);
      setOpened(!_opened);
    } else {
      onClick?.(event);
    }
  };

  return (
    <>
      <UnstyledButton
        ref={ref}
        className={cx(classes.root, className)}
        data-active={active || undefined}
        onClick={handleClick}
        {...others}
      >
        <span className={classes.icon}>{icon}</span>
        <span className={classes.body}>
          <Text component="span" size="sm" className={classes.label}>
            {label}
          </Text>
          <Text
            component="span"
            color="dimmed"
            size="xs"
            data-active={active || undefined}
            className={classes.description}
          >
            {description}
          </Text>
        </span>
        <span
          className={classes.rightSection}
          data-rotate={(_opened && !disableRightSectionRotation) || undefined}
        >
          {withChildren
            ? rightSection || (
                <ChevronIcon width={14} height={14} style={{ transform: 'rotate(-90deg)' }} />
              )
            : rightSection}
        </span>
      </UnstyledButton>
      <Collapse in={_opened}>{children}</Collapse>
    </>
  );
});

export const NavLink = createPolymorphicComponent<'button', NavLinkProps>(_NavLink);

import React, { forwardRef } from 'react';
import {
  PolymorphicComponentProps,
  PolymorphicRef,
  DefaultProps,
  useExtractedMargins,
  MantineSize,
  ClassNames,
} from '@mantine/styles';
import useStyles from './NavbarLink.styles';

export type NavbarLinkStylesNames = ClassNames<typeof useStyles>;

interface _NavbarLinkProps extends DefaultProps {
  icon?: React.ReactNode;
  rightSection?: React.ReactNode;
  size?: MantineSize;
  active?: boolean;
}

export type NavbarLinkProps<C extends React.ElementType> = PolymorphicComponentProps<
  C,
  _NavbarLinkProps
>;

type NavbarLinkComponent = <C extends React.ElementType = 'a'>(
  props: NavbarLinkProps<C>
) => React.ReactElement;

export const NavbarLink: NavbarLinkComponent & { displayName?: string } = forwardRef(
  <C extends React.ElementType = 'a'>(
    {
      component,
      icon,
      children,
      className,
      rightSection,
      style,
      classNames,
      styles,
      size = 'sm',
      active = false,
      ...others
    }: NavbarLinkProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const { classes, cx } = useStyles({ size }, { classNames, styles, name: 'NavbarLink' });
    const { rest, mergedStyles } = useExtractedMargins({ others, style });
    const Element = component || 'a';

    return (
      <Element
        {...rest}
        className={cx(classes.link, { [classes.linkActive]: active }, className)}
        style={mergedStyles}
        ref={ref}
      >
        <div className={classes.linkBody}>
          {icon && <div className={classes.linkIcon}>{icon}</div>}
          <span className={classes.linkLabel}>{children}</span>
        </div>
        {rightSection && <div className={classes.linkRightSection}>{rightSection}</div>}
      </Element>
    );
  }
);

NavbarLink.displayName = '@mantine/core/NavbarLink';

import React from 'react';
import { ClassNames, DefaultProps, useExtractedMargins, MantineNumberSize } from '@mantine/styles';
import { NavbarSection } from './NavbarSection/NavbarSection';
import { NavbarLink } from './NavbarLink/NavbarLink';
import { NavbarLinksGroup } from './NavbarLinksGroup/NavbarLinksGroup';
import { NavbarContext } from './Navbar.context';
import useStyles, { NavbarPosition, NavbarSize } from './Navbar.styles';

export type NavbarStylesNames = ClassNames<typeof useStyles>;

interface NavbarProps extends DefaultProps<NavbarStylesNames> {
  /** Navbar width and height with breakpoints */
  size?: NavbarSize;

  /** Navbar content */
  children?: React.ReactNode;

  /** Navbar padding from theme.spacing or number to set padding in px */
  padding?: MantineNumberSize;

  /** Set position to fixed */
  fixed?: boolean;

  /** Position for fixed Navbar */
  position?: NavbarPosition;

  /** Breakpoint at which navbar will be hidden if hidden prop is true */
  hiddenBreakpoint?: MantineNumberSize;

  /** Set to true to hide breakpoint at hiddenBreakpoint */
  hidden?: boolean;
}

export function Navbar({
  size = { width: 300, height: '100vh' },
  padding = 0,
  fixed = false,
  position = { top: 0, left: 0 },
  hiddenBreakpoint = 'md',
  hidden = false,
  className,
  classNames,
  style,
  styles,
  children,
  ...others
}: NavbarProps) {
  const { classes, cx } = useStyles(
    { size, padding, fixed, position, hiddenBreakpoint },
    { classNames, styles, name: 'Navbar' }
  );

  const { mergedStyles, rest } = useExtractedMargins({ others, style });
  return (
    <NavbarContext.Provider value={{ padding }}>
      <nav
        className={cx(classes.root, { [classes.hidden]: hidden }, className)}
        style={mergedStyles}
        {...rest}
      >
        {children}
      </nav>
    </NavbarContext.Provider>
  );
}

Navbar.Section = NavbarSection;
Navbar.Link = NavbarLink;
Navbar.LinksGroup = NavbarLinksGroup;

Navbar.displayName = '@mantine/core/Navbar';

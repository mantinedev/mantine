import React, { useState, cloneElement } from 'react';
import { DotsHorizontalIcon } from '@modulz/radix-icons';
import { DefaultProps } from '@mantine/theme';
import { useId, useClickOutside } from '@mantine/hooks';
import cx from 'clsx';
import { ActionIcon } from '../../ActionIcon/ActionIcon';
import { Menu } from '../Menu';
import useStyles from './ConnectedMenu.styles';

type MenuProps = Omit<
  React.ComponentPropsWithoutRef<typeof Menu>,
  'opened' | 'onClose' | 'children'
>;

interface ConnectedMenuProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  children: React.ReactNode;
  control?: React.ReactElement;
  opened?: boolean;
  onClose?(): void;
  onOpen?(): void;
  menuProps?: MenuProps;
  menuPosition?: {
    top?: number | string;
    bottom?: number | string;
    left?: number | string;
    right?: number | string;
  };
}

export function ConnectedMenu({
  control = (
    <ActionIcon>
      <DotsHorizontalIcon />
    </ActionIcon>
  ),
  children,
  onClose,
  onOpen,
  opened,
  menuProps,
  themeOverride,
  className,
  menuPosition = { top: 0, left: 0 },
}: ConnectedMenuProps) {
  const classes = useStyles();
  const _menuProps = menuProps || ({} as MenuProps);
  const uuid = useId(_menuProps.id);
  const controlled = typeof opened === 'boolean';
  const [_opened, setOpened] = useState(false);
  const menuOpened = controlled ? opened : _opened;

  const handleClose = () => {
    setOpened(false);
    typeof onClose === 'function' && onClose();
  };

  const handleOpen = () => {
    setOpened(true);
    typeof onOpen === 'function' && onOpen();
  };

  const wrapperRef = useClickOutside(handleClose);

  const toggleMenu = () => (opened || _opened ? handleClose() : handleOpen());

  const menuControl = cloneElement(control, {
    onClick: toggleMenu,
    role: 'button',
    'aria-haspopup': 'menu',
    'aria-expanded': menuOpened,
    'aria-controls': uuid,
  });

  return (
    <div className={cx(classes.wrapper, className)} ref={wrapperRef}>
      {menuControl}

      <Menu
        {...menuProps}
        className={cx(classes.menu, _menuProps.className)}
        opened={menuOpened}
        onClose={handleClose}
        id={uuid}
        themeOverride={themeOverride}
        closeOnClickOutside={false}
        style={{ ..._menuProps.style, ...menuPosition }}
      >
        {children}
      </Menu>
    </div>
  );
}

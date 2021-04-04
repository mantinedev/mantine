import React, { useState, cloneElement } from 'react';
import { DotsHorizontalIcon } from '@modulz/radix-icons';
import { DefaultProps } from '@mantine/theme';
import { useId, useClickOutside } from '@mantine/hooks';
import { ActionIcon } from '../ActionIcon/ActionIcon';
import { MenuBody } from './MenuBody/MenuBody';
import { sizes } from './MenuBody/MenuBody.styles';
import { MenuItem } from './MenuItem/MenuItem';

export { MenuBody, MenuItem };
export const MENU_SIZES = sizes;

type MenuBodyProps = Omit<
  React.ComponentPropsWithoutRef<typeof MenuBody>,
  'opened' | 'onClose' | 'children'
>;

interface MenuProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  children: React.ReactNode;
  control?: React.ReactElement;
  opened?: boolean;
  onClose?(): void;
  onOpen?(): void;
  menuProps?: MenuBodyProps;
  menuPosition?: {
    top?: number | string;
    bottom?: number | string;
    left?: number | string;
    right?: number | string;
  };
}

export function Menu({
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
  menuPosition = { top: 0, left: 0 },
  style,
  ...others
}: MenuProps) {
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
    <div
      ref={wrapperRef}
      style={{ display: 'inline-block', position: 'relative', ...style }}
      {...others}
    >
      {menuControl}

      <MenuBody
        {...menuProps}
        opened={menuOpened}
        onClose={handleClose}
        id={uuid}
        themeOverride={themeOverride}
        closeOnClickOutside={false}
        style={{ ..._menuProps.style, ...menuPosition }}
      >
        {children}
      </MenuBody>
    </div>
  );
}

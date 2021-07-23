import type { MenuBodyStylesNames } from './MenuBody/MenuBody';
import type { MenuButtonStylesNames } from './MenuButton/MenuButton';

export const Menu: Record<MenuBodyStylesNames, string> = {
  menu: 'Menu body',
  divider: 'Divider inside menu body',
  label: 'Menu label wrapper (Text component)',
};

export const MenuItem: Record<MenuButtonStylesNames, string> = {
  root: 'Root element',
  hovered: 'Hovered item',
  inner: 'Wrapper around icon and body',
  body: 'Wrapper around label and right section',
  icon: 'Icon on the left of the label',
  label: 'Label element',
};

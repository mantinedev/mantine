import type { MenuBodyStylesNames } from './MenuBody/MenuBody';
import type { MenuButtonStylesNames } from './MenuButton/MenuButton';

export const Menu: Record<MenuBodyStylesNames, string> = {
  menu: 'Menu body',
  hr: 'Divider inside menu body',
};

export const MenuItem: Record<MenuButtonStylesNames, string> = {
  root: 'Root element',
  hovered: 'Hover item',
  inner: 'Wrapper around icon and body',
  body: 'Wrapper around label and right section',
  icon: 'Icon on the left of the label',
  label: 'Label element',
};

import { createElement } from 'react';
import type { IconProps } from '@tabler/icons-react';
import { getIconComponent, type IconStyle } from './icon-index';

interface IconByNameProps extends IconProps {
  name: string;
  iconStyle: IconStyle;
}

export function IconByName({ name, iconStyle, ...others }: IconByNameProps) {
  const component = getIconComponent(name, iconStyle);
  return component ? createElement(component, others) : null;
}

import { AvatarStylesNames } from './Avatar';
import { AvatarsGroup } from './AvatarsGroup/styles.api';

export { AvatarsGroup };

export const Avatar: Record<AvatarStylesNames, string> = {
  root: 'Root element',
  image: 'Main img tag, rendered when src is set to valid image url',
  placeholder: 'Placeholder element, rendered when src is null or image cannot be loaded',
  placeholderIcon: 'Default placeholder icon',
};

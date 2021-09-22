import { AvatarStylesNames } from './Avatar';

export { AvatarsGroup } from './AvatarsGroup/styles.api';

export const Avatar: Record<AvatarStylesNames, string> = {
  root: 'Root element',
  image: 'Main img tag, rendered when src is set to valid image url',
  placeholder: 'Placeholder element, rendered when src is null or image cannot be loaded',
  placeholderIcon: 'Default placeholder icon',
};

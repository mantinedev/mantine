import type { AvatarStylesNames, AvatarsGroupStylesNames } from '@mantine/core';

export const AvatarsGroup: Record<AvatarsGroupStylesNames, string> = {
  root: 'Root element',
  child: 'Child Avatar component',
  truncated: 'Truncated avatars count label',
};

export const Avatar: Record<AvatarStylesNames, string> = {
  root: 'Root element',
  image: 'Main img tag, rendered when src is set to valid image url',
  placeholder: 'Placeholder element, rendered when src is null or image cannot be loaded',
  placeholderIcon: 'Default placeholder icon',
};

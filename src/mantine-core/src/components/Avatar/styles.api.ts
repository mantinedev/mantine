import useStyles from './Avatar.styles';

export const Avatar: MantineClasses<typeof useStyles> = {
  root: 'Root element',
  image: 'Main img tag, rendered when src is set to valid image url',
  placeholder: 'Placeholder element, rendered when src is null or image cannot be loaded',
  placeholderIcon: 'Default placeholder icon',
};

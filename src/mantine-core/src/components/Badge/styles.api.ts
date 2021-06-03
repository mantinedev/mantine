import useStyles from './Badge.styles';

export const Badge: MantineClasses<typeof useStyles> = {
  root: 'Root element',
  inner: 'Badge label container, contains children',
  leftSection: 'Left section, controlled by leftSectionProp',
  rightSection: 'Right section, controlled by rightSectionProp',
  outline: 'Outline badge variant, styles added to root element',
  filled: 'Filled badge variant, styles added to root element',
  light: 'Light badge variant, styles added to root element',
  dot: 'Dot badge variant, styles added to root element',
};

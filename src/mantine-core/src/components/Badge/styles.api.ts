import useStyles from './Badge.styles';
import { BadgeVariant } from './Badge';

export const Badge: Omit<MantineClasses<typeof useStyles>, BadgeVariant> = {
  root: 'Root element',
  inner: 'Badge label container, contains children',
  leftSection: 'Left section, controlled by leftSectionProp',
  rightSection: 'Right section, controlled by rightSectionProp',
};

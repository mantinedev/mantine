import { createUseStyles } from 'react-jss';
import { MantineTheme } from '@mantine/theme';

interface SpoilerStylesProps {
  theme: MantineTheme;
  transitionDuration: number;
}

export default createUseStyles({
  spoiler: {
    position: 'relative',
  },

  content: ({ transitionDuration, theme }: SpoilerStylesProps) => ({
    overflow: 'hidden',
    transitionProperty: 'max-height',
    transitionTimingFunction: theme.transitionTimingFunction,
    transitionDuration: transitionDuration || 0,
  }),
});

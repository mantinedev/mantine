import { createUseStyles } from 'react-jss';
import { MantineTheme } from '@mantine/theme';

interface SpoilerStylesProps {
  theme: MantineTheme;
  transitionDuration: number;
}

export default createUseStyles(
  {
    spoiler: {
      position: 'relative',
    },

    content: ({ transitionDuration }: SpoilerStylesProps) => ({
      overflow: 'hidden',
      transitionProperty: 'max-height',
      transitionTimingFunction: 'ease',
      transitionDuration: transitionDuration || 0,
    }),
  },
  { link: true }
);

import { createMemoStyles, MantineTheme } from '@mantine/theme';

interface SpoilerStylesProps {
  theme: MantineTheme;
  transitionDuration: number;
}

export default createMemoStyles({
  spoiler: {
    position: 'relative',
  },

  content: ({ transitionDuration }: SpoilerStylesProps) => ({
    overflow: 'hidden',
    transitionProperty: 'max-height',
    transitionTimingFunction: 'ease',
    transitionDuration: transitionDuration || 0,
  }),
});

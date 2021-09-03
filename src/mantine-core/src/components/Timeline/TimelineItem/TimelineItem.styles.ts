import { createMemoStyles, MantineTheme } from '../../../theme';

interface TimelineItemStyles {
  theme: MantineTheme;
}

export default createMemoStyles({
  item: ({ theme }: TimelineItemStyles) => ({
    color: theme.colors.gray[7],
  }),
});

import { createMemoStyles, MantineTheme } from '../../theme';

interface CollapseStyles {
  theme: MantineTheme;
  transitionDuration: number;
  transitionTimingFunction: string;
}

export default createMemoStyles({
  root: ({ theme, transitionDuration, transitionTimingFunction }: CollapseStyles) => ({
    transition: `height ${transitionDuration}ms ${transitionTimingFunction || theme.transitionTimingFunction}`,
    overflow: 'hidden',
  }),

  content: ({ theme, transitionDuration, transitionTimingFunction }: CollapseStyles) => ({
    transition: `opacity ${transitionDuration}ms ${transitionTimingFunction || theme.transitionTimingFunction}`,
  }),
});

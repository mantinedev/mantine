import { createUseStyles } from 'react-jss';
import { MantineTheme } from '@mantine/theme';

interface SegmentedControlStyles {
  theme: MantineTheme;
  fullWidth: boolean;
  color: string;
}

export default createUseStyles({
  wrapper: ({ theme, fullWidth }: SegmentedControlStyles) => ({
    display: fullWidth ? 'flex' : 'inline-flex',
    backgroundColor: theme.colors.gray[0],
  }),
});

import { createUseStyles } from 'react-jss';
import { MantineTheme } from '@mantine/theme';

interface MenuStylesProps {
  theme: MantineTheme;
}

export default createUseStyles({
  menu: ({ theme }: MenuStylesProps) => ({
    position: 'absolute',
    width: 220,
    overflow: 'hidden',
    border: `1px solid ${theme.colors.gray[3]}`,
    paddingTop: theme.spacing.xs / 2,
    paddingBottom: theme.spacing.xs / 2,
  }),
});

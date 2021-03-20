import { createUseStyles } from 'react-jss';
import { MantineTheme } from '@mantine/theme';

interface HrStylesProps {
  theme: MantineTheme;
}

export default createUseStyles({
  hr: ({ theme }: HrStylesProps) => ({
    border: 0,
    borderTopWidth: 1,
    borderTopColor: theme.colors.gray[5],
  }),
});

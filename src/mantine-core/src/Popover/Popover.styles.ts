import { createUseStyles } from 'react-jss';
import { MantineTheme } from '@mantine/theme';

interface PopoverStyles {
  theme: MantineTheme;
}

export default createUseStyles({
  popover: {
    position: 'absolute',
  },

  arrow: ({ theme }: PopoverStyles) => ({
    width: 8,
    height: 8,
    position: 'absolute',
    top: -4,
    left: 'calc(50% - 6px)',
    transform: 'rotate(45deg)',
    border: `1px solid ${theme.colors.gray[2]}`,
    borderBottom: 0,
    borderRight: 0,
    background: 'white',
    zIndex: 1,
  }),

  body: ({ theme }: PopoverStyles) => ({
    position: 'relative',
    border: `1px solid ${theme.colors.gray[2]}`,
    boxShadow: theme.shadows.md,
    borderRadius: theme.radius.sm,
    padding: 20,
  }),
});

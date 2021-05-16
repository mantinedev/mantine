import { createUseStyles } from 'react-jss';
import { MantineTheme, getFontStyles } from '@mantine/core';

interface TagPickerStyles {
  theme: MantineTheme;
}

export default createUseStyles({
  tagsList: ({ theme }: TagPickerStyles) => ({
    paddingTop: theme.spacing.xs,
    paddingBottom: theme.spacing.xs,
  }),

  description: ({ theme }: TagPickerStyles) => ({
    marginTop: theme.spacing.xs,
    marginBottom: theme.spacing.xs,
    padding: [0, theme.spacing.xs],
  }),

  searchInput: ({ theme }: TagPickerStyles) => ({
    marginLeft: theme.spacing.xs,
    marginRight: theme.spacing.xs,
    marginBottom: theme.spacing.xs,
  }),

  createControl: ({ theme }: TagPickerStyles) => ({
    ...getFontStyles(theme),
    backgroundColor: 'transparent',
    border: 0,
    outline: 0,
    paddingLeft: theme.spacing.xs,
    paddingRight: theme.spacing.xs,
    width: '100%',
    textAlign: 'left',
    height: 32,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
  }),

  createControlBadge: {
    display: 'block !important',
  },

  createControlLabel: ({ theme }: TagPickerStyles) => ({
    marginRight: 10,
    fontSize: theme.fontSizes.sm,
  }),

  createControlHovered: ({ theme }: TagPickerStyles) => ({
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
  }),
});

import { createMemoStyles, MantineTheme } from '@mantine/core';

interface ToolbarButtonStyles {
  theme: MantineTheme;
}

export default createMemoStyles({
  control: ({ theme }: ToolbarButtonStyles) => ({
    backgroundColor: theme.white,
    border: `1px solid ${theme.colors.gray[3]}`,
    borderRadius: 0,

    '&.ql-active': {
      backgroundColor: theme.colors[theme.primaryColor][0],
      color: theme.colors[theme.primaryColor][7],

      '&:hover': {
        backgroundColor: theme.colors[theme.primaryColor][0],
      },
    },
  }),
});

import { createMemoStyles, MantineTheme } from '@mantine/core';

interface ToolbarButtonStyles {
  theme: MantineTheme;
}

export default createMemoStyles({
  control: ({ theme }: ToolbarButtonStyles) => ({
    backgroundColor: theme.colors.red[5],

    '&.ql-active': {
      backgroundColor: theme.colors.blue[5],
    },
  }),
});

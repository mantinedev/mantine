import { createStyles } from '@mantine/core';

interface ToolbarButtonStyles {
  noActive: boolean;
}

export default createStyles((theme, { noActive }: ToolbarButtonStyles) => {
  const colors = theme.fn.variant({ color: theme.primaryColor, variant: 'light' });

  return {
    control: {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.white,
      border: `1px solid ${theme.colorScheme === 'dark' ? 'transparent' : theme.colors.gray[3]}`,

      '&.ql-active': noActive
        ? {}
        : {
            backgroundColor:
              theme.colorScheme === 'dark'
                ? colors.background
                : theme.colors[theme.primaryColor][0],
            color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 2 : 7],

            '&:hover': {
              backgroundColor:
                theme.colorScheme === 'dark'
                  ? colors.background
                  : theme.colors[theme.primaryColor][0],
            },
          },
    },
  };
});

import { createStyles } from '@mantine/core';

export default createStyles((theme, { white }: { white: boolean }) => ({
  wrapper: {
    paddingTop: 120,
    paddingBottom: 60,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  description: {
    lineHeight: 1.6,
    opacity: 0.85,
    color: white || theme.colorScheme === 'dark' ? theme.white : theme.black,

    '@media (max-width: 960px)': {
      fontSize: theme.fontSizes.md,
    },
  },
}));

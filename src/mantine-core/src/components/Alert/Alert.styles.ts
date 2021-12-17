import { createStyles, MantineColor, MantineNumberSize } from '@mantine/styles';

interface AlertStyles {
  color: MantineColor;
  radius: MantineNumberSize;
}

export default createStyles((theme, { color, radius }: AlertStyles) => ({
  root: {
    ...theme.fn.fontStyles(),
    position: 'relative',
    overflow: 'hidden',
    padding: `${theme.spacing.sm}px ${theme.spacing.md}px`,
    borderRadius: theme.fn.size({ size: radius, sizes: theme.radius }),
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.fn.themeColor(color, 0),
  },

  wrapper: {
    display: 'flex',
  },

  body: {
    flex: 1,
  },

  title: {
    boxSizing: 'border-box',
    color: theme.fn.themeColor(color, theme.colorScheme === 'dark' ? 5 : 7),
    margin: 0,
    marginBottom: 7,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    lineHeight: theme.lineHeight,
    fontSize: theme.fontSizes.sm,
    fontWeight: 700,
  },

  label: {
    display: 'block',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },

  icon: {
    color: theme.fn.themeColor(color, theme.colorScheme === 'dark' ? 5 : 7),
    lineHeight: 1,
    width: 20,
    height: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginRight: theme.spacing.md,
    marginTop: 1,
  },

  message: {
    ...theme.fn.fontStyles(),
    lineHeight: theme.lineHeight,
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    fontSize: theme.fontSizes.sm,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
  },

  closeButton: {
    marginTop: 2,
  },
}));

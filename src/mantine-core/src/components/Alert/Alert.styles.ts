import { createStyles, MantineColor, MantineNumberSize } from '@mantine/styles';

export interface AlertStylesParams {
  color: MantineColor;
  radius: MantineNumberSize;
  variant: 'filled' | 'outline' | 'light';
}

export default createStyles((theme, { color, radius, variant }: AlertStylesParams, getRef) => ({
  root: {
    ...theme.fn.fontStyles(),
    position: 'relative',
    overflow: 'hidden',
    padding: `${theme.spacing.sm}px ${theme.spacing.md}px`,
    borderRadius: theme.fn.radius(radius),
    border: '1px solid transparent',
  },

  wrapper: {
    display: 'flex',
  },

  body: {
    flex: 1,
  },

  title: {
    boxSizing: 'border-box',
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

  light: {
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.fn.themeColor(color, 0),
    color: theme.fn.themeColor(color, theme.colorScheme === 'dark' ? 5 : 7),
  },

  filled: {
    backgroundColor: theme.fn.rgba(
      theme.fn.themeColor(color, 8),
      theme.colorScheme === 'dark' ? 0.65 : 1
    ),
    color: theme.white,

    [`& .${getRef('closeButton')}`]: {
      color: theme.white,
    },
  },

  outline: {
    color: theme.fn.themeColor(color, theme.colorScheme === 'dark' ? 5 : 6),
    borderColor: theme.fn.themeColor(color, theme.colorScheme === 'dark' ? 5 : 6),
  },

  icon: {
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
    color:
      variant === 'filled'
        ? theme.white
        : theme.colorScheme === 'dark'
        ? theme.colors.dark[0]
        : theme.black,
  },

  closeButton: {
    ref: getRef('closeButton'),
    marginTop: 2,
  },
}));

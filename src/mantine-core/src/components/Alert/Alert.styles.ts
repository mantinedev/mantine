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
    backgroundColor: theme.fn.variant({ variant: 'light', color }).background,
    color: theme.fn.variant({ variant: 'light', color }).color,
  },

  filled: {
    backgroundColor: theme.fn.variant({ variant: 'filled', color }).background,
    color: theme.white,

    [`& .${getRef('closeButton')}`]: {
      color: theme.white,
    },
  },

  outline: {
    color: theme.fn.variant({ variant: 'outline', color }).color,
    borderColor: theme.fn.variant({ variant: 'outline', color }).border,
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
        ? variant === 'light'
          ? theme.white
          : theme.colors.dark[0]
        : theme.black,
  },

  closeButton: {
    ref: getRef('closeButton'),
    marginTop: 2,
  },
}));

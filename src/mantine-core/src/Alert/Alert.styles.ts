import {
  createStyles,
  CSSObject,
  MantineColor,
  MantineNumberSize,
  MantineTheme,
  rem,
} from '@mantine/styles';

export type AlertVariant = 'filled' | 'outline' | 'light';

export interface AlertStylesParams {
  color: MantineColor;
  radius: MantineNumberSize;
}

interface GetVariantStylesInput {
  variant: string;
  color: MantineColor;
  theme: MantineTheme;
}

function getVariantStyles({ variant, color, theme }: GetVariantStylesInput): CSSObject {
  if (variant === 'filled') {
    const colors = theme.fn.variant({ variant: 'filled', color });
    return {
      backgroundColor: colors.background,
      color: theme.white,
    };
  }

  if (variant === 'outline') {
    const colors = theme.fn.variant({ variant: 'outline', color });
    return {
      color: colors.color,
      borderColor: colors.border,
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
    };
  }

  if (variant === 'light') {
    const colors = theme.fn.variant({ variant: 'light', color });

    return {
      backgroundColor: colors.background,
      color: colors.color,
    };
  }

  return null;
}

export default createStyles((theme, { radius, color }: AlertStylesParams, { variant }) => ({
  root: {
    ...theme.fn.fontStyles(),
    position: 'relative',
    overflow: 'hidden',
    paddingTop: theme.spacing.sm,
    paddingBottom: theme.spacing.sm,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.sm,
    borderRadius: theme.fn.radius(radius),
    border: `${rem(1)} solid transparent`,
    ...getVariantStyles({ variant, color, theme }),
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
    marginBottom: theme.spacing.xs,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    lineHeight: theme.lineHeight,
    fontSize: theme.fontSizes.sm,
    fontWeight: 700,

    '&[data-with-close-button]': {
      paddingRight: theme.spacing.md,
    },
  },

  label: {
    display: 'block',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },

  icon: {
    lineHeight: 1,
    width: rem(20),
    height: rem(20),
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
    width: rem(10),
    height: rem(10),
    color:
      variant === 'filled'
        ? theme.white
        : theme.colorScheme === 'dark'
        ? variant === 'light'
          ? theme.white
          : theme.colors.dark[0]
        : theme.black,
  },
}));

import { createStyles, MantineNumberSize, getSizeValue, MantineShadow } from '@mantine/styles';

interface PaperStyles {
  radius: MantineNumberSize;
  shadow: MantineShadow;
  padding: MantineNumberSize;
  withBorder: boolean;
}

export default createStyles((theme, { radius, shadow, padding, withBorder }: PaperStyles) => ({
  root: {
    ...theme.fn.focusStyles(),
    WebkitTapHighlightColor: 'transparent',
    display: 'block',
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    boxSizing: 'border-box',
    borderRadius: getSizeValue({ size: radius, sizes: theme.radius }),
    boxShadow: theme.shadows[shadow] || shadow || 'none',
    padding: getSizeValue({ size: padding, sizes: theme.spacing }),
    border: withBorder
      ? `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[2]}`
      : undefined,
  },
}));

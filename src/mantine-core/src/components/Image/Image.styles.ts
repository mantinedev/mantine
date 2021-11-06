import { createStyles, MantineNumberSize, getSizeValue, getFontStyles } from '@mantine/styles';

interface ImageStyles {
  radius: MantineNumberSize;
}

export default createStyles((theme, { radius }: ImageStyles) => ({
  root: {
    position: 'relative',
    overflow: 'hidden',
  },

  figure: {
    margin: 0,
  },

  image: {
    ...theme.fn.fontStyles(),
    display: 'block',
    width: '100%',
    height: '100%',
    border: 0,
    borderRadius: getSizeValue({ size: radius, sizes: theme.radius }),
  },

  caption: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[7],
    marginTop: theme.spacing.xs,
  },

  placeholder: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
    position: 'absolute',
    borderRadius: getSizeValue({ size: radius, sizes: theme.radius }),
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
}));

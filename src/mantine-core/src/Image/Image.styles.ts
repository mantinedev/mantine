import { createStyles, MantineNumberSize } from '@mantine/styles';

export interface ImageStylesParams {
  radius: MantineNumberSize;
}

export default createStyles((theme, { radius }: ImageStylesParams) => ({
  root: {},

  imageWrapper: {
    position: 'relative',
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
    borderRadius: theme.fn.radius(radius),
  },

  caption: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[7],
    marginTop: theme.spacing.xs,
  },

  placeholder: {
    ...theme.fn.cover(),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
    borderRadius: theme.fn.radius(radius),
  },
}));

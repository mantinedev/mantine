import { createStyles, rem } from '@mantine/core';

interface WavesStylesParams {
  height: number;
  width: number;
  flip?: boolean;
  alt?: boolean;
}

export default createStyles((theme, { width, height, flip, alt }: WavesStylesParams) => ({
  root: {
    overflow: 'hidden',
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[alt ? 8 : 7]
        : alt
        ? theme.white
        : theme.colors.gray[0],
  },

  waves: {
    fill:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[alt ? 7 : 8]
        : alt
        ? theme.colors.gray[0]
        : theme.white,
    width: `${width}%`,
    height: rem(height),
    transform: flip ? 'scaleX(-1)' : undefined,
    filter: alt ? undefined : `drop-shadow(${rem(10)} ${rem(5)} ${rem(5)} rgba(0, 0, 0, 0.03))`,

    [theme.fn.smallerThan('sm')]: {
      height: rem(18),
    },
  },
}));

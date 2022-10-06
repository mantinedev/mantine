import { createStyles } from '@mantine/styles';

export interface AspectRatioStylesParams {
  ratio: number;
}

export default createStyles((_theme, { ratio }: AspectRatioStylesParams) => ({
  root: {
    position: 'relative',
    maxWidth: '100%',

    '&::before': {
      content: '""',
      height: 0,
      display: 'block',
      paddingBottom: `${(1 / ratio) * 100}%`,
    },

    '&::after': {
      content: '""',
      display: 'table',
      clear: 'both',
    },

    '& > *:not(style)': {
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
    },

    '& > img, & > video': {
      objectFit: 'cover',
    },
  },
}));

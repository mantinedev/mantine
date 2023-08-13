import { createStyles, rem, getSize } from '@mantine/styles';

const sizes = {
  xs: rem(320),
  sm: rem(380),
  md: rem(440),
  lg: rem(620),
  xl: rem(780),
};

interface ModalRootStylesParams {
  yOffset: number | string;
  xOffset: number | string;
  centered: boolean;
  fullScreen: boolean;
}

export default createStyles(
  (theme, { yOffset, xOffset, centered, fullScreen }: ModalRootStylesParams, { size }) => ({
    content: {
      flex: fullScreen ? '0 0 100%' : `0 0 ${getSize({ size, sizes })}`,
      maxWidth: '100%',
      maxHeight: fullScreen ? undefined : `calc(100dvh - (${rem(yOffset)} * 2))`,
      height: fullScreen ? '100vh' : undefined,
      borderRadius: fullScreen ? 0 : undefined,
      overflowY: 'auto',
    },

    inner: {
      paddingTop: fullScreen ? 0 : yOffset,
      paddingBottom: fullScreen ? 0 : yOffset,
      paddingLeft: fullScreen ? 0 : xOffset,
      paddingRight: fullScreen ? 0 : xOffset,
      display: 'flex',
      justifyContent: 'center',
      alignItems: centered ? 'center' : 'flex-start',
    },
  })
);

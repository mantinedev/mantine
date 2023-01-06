import { createStyles } from '@mantine/styles';

const sizes = {
  xs: 320,
  sm: 380,
  md: 440,
  lg: 620,
  xl: 780,
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
      flex: fullScreen ? '0 0 100%' : `0 0 ${theme.fn.sizeUnit(theme.fn.size({ size, sizes }))}`,
      maxWidth: '100%',
      maxHeight: fullScreen ? undefined : `calc(100vh - (${theme.fn.sizeUnit(yOffset)} * 2))`,
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

import {
  createStyles,
  CSSObject,
  MantineColor,
  MantineNumberSize,
  keyframes,
} from '@mantine/styles';
import { IndicatorPosition } from './Indicator.types';

export interface IndicatorStylesParams {
  radius: MantineNumberSize;
  size: number;
  color: MantineColor;
  position: IndicatorPosition;
  offset: number;
  inline: boolean;
  withBorder: boolean;
  withLabel: boolean;
  zIndex: React.CSSProperties['zIndex'];
}

const processingAnimation = (color: string) =>
  keyframes({
    from: {
      boxShadow: `0 0 0.5px 0 ${color}`,
      opacity: 0.6,
    },
    to: {
      boxShadow: `0 0 0.5px 4.4px ${color}`,
      opacity: 0,
    },
  });

function getPositionStyles(_position: IndicatorPosition, offset = 0) {
  const styles: CSSObject = {};
  const [position, placement] = _position.split('-');
  let translateX = '';
  let translateY = '';

  if (position === 'top') {
    styles.top = offset;
    translateY = '-50%';
  }

  if (position === 'middle') {
    styles.top = '50%';
    translateY = '-50%';
  }

  if (position === 'bottom') {
    styles.bottom = offset;
    translateY = '50%';
  }

  if (placement === 'start') {
    styles.left = offset;
    translateX = '-50%';
  }

  if (placement === 'center') {
    styles.left = '50%';
    translateX = '-50%';
  }

  if (placement === 'end') {
    styles.right = offset;
    translateX = '50%';
  }

  styles.transform = `translate(${translateX}, ${translateY})`;

  return styles;
}

export default createStyles(
  (
    theme,
    {
      radius,
      size,
      color,
      position,
      offset,
      inline,
      withBorder,
      withLabel,
      zIndex,
    }: IndicatorStylesParams
  ) => {
    const { background } = theme.fn.variant({
      variant: 'filled',
      primaryFallback: false,
      color: color || theme.primaryColor,
    });
    return {
      root: {
        position: 'relative',
        display: inline ? 'inline-block' : 'block',
      },

      indicator: {
        ...getPositionStyles(position, offset),
        zIndex,
        position: 'absolute',
        [withLabel ? 'minWidth' : 'width']: size,
        height: size,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: theme.fontSizes.xs,
        paddingLeft: withLabel ? `calc(${theme.spacing.xs}px / 2)` : 0,
        paddingRight: withLabel ? `calc(${theme.spacing.xs}px / 2)` : 0,
        borderRadius: theme.fn.size({ size: radius, sizes: theme.radius }),
        backgroundColor: theme.fn.variant({
          variant: 'filled',
          primaryFallback: false,
          color: color || theme.primaryColor,
        }).background,
        border: withBorder
          ? `2px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white}`
          : undefined,
        color: theme.white,
        whiteSpace: 'nowrap',
      },

      processing: {
        animation: `${processingAnimation(background)} 1000ms linear infinite`,
      },

      common: {
        ...getPositionStyles(position, offset),
        position: 'absolute',
        [withLabel ? 'minWidth' : 'width']: size,
        height: size,
        borderRadius: theme.fn.size({ size: radius, sizes: theme.radius }),
      },
    };
  }
);

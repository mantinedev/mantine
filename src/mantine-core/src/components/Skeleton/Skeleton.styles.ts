import { createMemoStyles } from '../../theme';

export interface SkeletonStyles {
  /** Sets height css property */
  height: React.CSSProperties['height'];
  /** Controls appearance , defaults to rectangle*/
  type?: 'rectangle' | 'circle';
  /** True if it should be animated */
  animated?: boolean;
  /** Start color of the animation */
  startColor?: string;
  /** End color of the animation */
  endColor?: string;
}

export default createMemoStyles({
  '@keyframes skeletonAnimationName': {
    '0%': { opacity: 0.2 },
    '50%': { opacity: 1 },
    '100%': { opacity: 0.2 },
  },

  '@keyframes skeletonAnimationNameWithColors': {
    '0%': { backgroundPosition: '100%' },
    '60%, 100%': { backgroundPosition: '-100%' },
  },

  body: ({ height, type, animated, startColor, endColor }: SkeletonStyles) => {
    const width = type === 'circle' ? height : 'auto';
    const backgroundImage = animated
      ? `linear-gradient(90deg, ${startColor} 20%, ${endColor} 43%, ${startColor} 90%)`
      : 'none';
    const animationName = startColor
      ? '$skeletonAnimationNameWithColors'
      : '$skeletonAnimationName';

    return {
      height,
      cursor: 'default',
      margin: 10,
      width,
      borderRadius: type ? '50%' : 5,
      backgroundSize: '200%',
      background: 'rgb(160, 174, 192)',
      animation: animated ? `${animationName} 1s infinite linear` : 'none',
      backgroundImage,
    };
  },
});

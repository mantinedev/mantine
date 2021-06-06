import {
  createMemoStyles,
  MantineNumberSize,
  MantineTheme,
  getSizeValue,
  getThemeColor,
} from '../../../theme';
import { sizes } from '../Slider.styles';

interface MarksStyles {
  theme: MantineTheme;
  color: string;
  size: MantineNumberSize;
}

export default createMemoStyles({
  markWrapper: {
    position: 'absolute',
    top: 0,
  },

  mark: ({ theme, size }: MarksStyles) => {
    const MARK_SIZE = getSizeValue({ sizes, size });
    return {
      boxSizing: 'border-box',
      border: `2px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
      }`,
      zIndex: 1,
      height: MARK_SIZE,
      width: MARK_SIZE,
      borderRadius: 1000,
      transform: `translateX(-${MARK_SIZE / 2}px)`,
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.white,
    };
  },

  markFilled: ({ theme, color }: MarksStyles) => ({
    borderColor: getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 8 : 6 }),
  }),

  markLabel: ({ theme }: MarksStyles) => ({
    transform: 'translate(-50%, 0)',
    fontSize: theme.fontSizes.sm,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
    marginTop: theme.spacing.xs / 2,
  }),
});

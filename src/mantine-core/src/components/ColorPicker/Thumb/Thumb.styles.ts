import { createMemoStyles, MantineTheme } from '../../../theme';

interface ThumbStyles {
  theme: MantineTheme;
}

export default createMemoStyles({
  thumb: ({ theme }: ThumbStyles) => ({
    overflow: 'hidden',
    boxSizing: 'border-box',
    position: 'absolute',
    boxShadow: '0 0 1px rgba(0, 0, 0, .6)',
    border: `2px solid ${theme.white}`,
    backgroundColor: 'transparent',
    width: 12,
    height: 12,
    borderRadius: 12,
  }),
});

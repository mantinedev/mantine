import { createMemoStyles, MantineTheme } from '../../../theme';

interface ThumbStyles {
  theme: MantineTheme;
  type: 'slider' | 'move';
}

export default createMemoStyles({
  thumb: ({ theme, type }: ThumbStyles) => ({
    overflow: 'hidden',
    boxSizing: 'border-box',
    position: 'absolute',
    boxShadow: '0 0 1px rgba(0, 0, 0, .6)',
    border: `2px solid ${type === 'slider' ? 'transparent' : theme.white}`,
    backgroundColor: type === 'slider' ? theme.white : 'transparent',
    width: type === 'slider' ? 6 : 12,
    height: type === 'slider' ? 8 : 12,
    borderRadius: type === 'slider' ? 1 : 10,
  }),
});

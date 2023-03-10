import { createStyles, MantineColor, MantineTheme } from '@mantine/styles';

export interface AnchorStylesParams {
  color: MantineColor;
  underline: boolean;
}

interface GetAnchorColor {
  theme: MantineTheme;
  color: 'dimmed' | MantineColor;
}

function getAnchorColor({ theme, color }: GetAnchorColor) {
  if (color === 'dimmed') {
    return theme.fn.dimmed();
  }

  return theme.fn.themeColor(
    color || theme.primaryColor,
    theme.colorScheme === 'dark' ? 4 : 7,
    false,
    true
  );
}

export default createStyles((theme, { color, underline }: AnchorStylesParams) => ({
  root: {
    backgroundColor: 'transparent',
    cursor: 'pointer',
    padding: 0,
    border: 0,
    color: getAnchorColor({ theme, color }),
    ...theme.fn.hover({ textDecoration: underline ? 'underline' : 'none' }),
  },
}));

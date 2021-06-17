import { createUseStyles } from 'react-jss';
import { getFocusStyles, getFontStyles, MantineTheme } from '../../../theme';

interface UnstyledButtonStyles {
  theme: MantineTheme;
}

export default createUseStyles({
  button: ({ theme }: UnstyledButtonStyles) => ({
    ...getFocusStyles(theme),
    ...getFontStyles(theme),
    cursor: 'pointer',
    border: 0,
    padding: 0,
    appearance: 'none',
    fontSize: theme.fontSizes.md,
    backgroundColor: 'transparent',
  }),
});

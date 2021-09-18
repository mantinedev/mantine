import { createStyles } from '@mantine/tss';
import { getFocusStyles, getFontStyles } from '@mantine/theme';

export default createStyles((theme) => ({
  button: {
    ...getFocusStyles(theme),
    ...getFontStyles(theme),
    cursor: 'pointer',
    border: 0,
    padding: 0,
    appearance: 'none',
    fontSize: theme.fontSizes.md,
    backgroundColor: 'transparent',
    textAlign: 'left',
  },
}));

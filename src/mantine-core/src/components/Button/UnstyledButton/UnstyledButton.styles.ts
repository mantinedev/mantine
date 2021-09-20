import { createStyles, getFocusStyles, getFontStyles } from '@mantine/tss';

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

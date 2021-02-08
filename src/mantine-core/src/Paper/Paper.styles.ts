import OpenColor from 'open-color';
import { createUseStyles } from 'react-jss';
import { theming, MantineTheme, MantineSize } from '@mantine/theme';

export type PaperPadding = number | MantineSize;

export default createUseStyles(
  (theme: MantineTheme) => ({
    paper: {
      backgroundColor: OpenColor.white,
      boxSizing: 'border-box',
      borderRadius: 4,
      boxShadow: ({ shadow }: { shadow?: MantineSize }) => theme.shadows[shadow] || 'none',
      padding: ({ padding }: { padding: PaperPadding }) =>
        typeof padding === 'number' ? padding : theme.spacing[padding],
    },
  }),
  { theming }
);

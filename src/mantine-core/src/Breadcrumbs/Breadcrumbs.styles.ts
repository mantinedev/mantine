import { createUseStyles } from 'react-jss';
import { MantineTheme } from '@mantine/theme';

interface BreadcrumbsStylesProps {
  theme: MantineTheme;
}

export default createUseStyles(
  {
    breadcrumbs: {
      display: 'flex',
    },

    breadcrumb: {
      lineHeight: 1,
      whiteSpace: 'nowrap',
      WebkitTapHighlightColor: 'transparent',
    },

    separator: ({ theme }: BreadcrumbsStylesProps) => ({
      marginLeft: theme.spacing.xs,
      marginRight: theme.spacing.xs,
      color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[7],
      lineHeight: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }),
  },
  { link: true }
);

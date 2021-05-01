import { createUseStyles } from 'react-jss';
import { MantineTheme, getThemeColor, getFontStyles } from '@mantine/theme';

interface AlertStylesProps {
  color: string;
  theme: MantineTheme;
}

const LINE_WIDTH = 4;

export default createUseStyles(
  {
    alert: ({ color, theme }: AlertStylesProps) => ({
      position: 'relative',
      padding: [theme.spacing.xs, theme.spacing.md],
      paddingLeft: theme.spacing.md + theme.spacing.xs / 2 + LINE_WIDTH,
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.white,
      border: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]
      }`,

      '&::before': {
        content: '""',
        display: 'block',
        position: 'absolute',
        top: theme.spacing.xs,
        bottom: theme.spacing.xs,
        left: theme.spacing.xs,
        width: LINE_WIDTH,
        borderRadius: LINE_WIDTH,
        backgroundColor: getThemeColor({ theme, color, shade: 6 }),
      },
    }),

    title: ({ color, theme }: AlertStylesProps) => ({
      boxSizing: 'border-box',
      color: getThemeColor({ theme, color, shade: 6 }),
      margin: 0,
      marginBottom: theme.spacing.xs / 2,
      textOverflow: 'ellipsis',
      overflow: 'hidden',
    }),

    body: ({ theme }: AlertStylesProps) => ({
      ...getFontStyles(theme),
      lineHeight: theme.lineHeight,
      borderBottomLeftRadius: theme.radius.sm,
      borderBottomRightRadius: theme.radius.sm,
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      fontSize: theme.fontSizes.sm,
      color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

      '&:only-child': {
        borderTopRightRadius: theme.radius.sm,
        borderTopLeftRadius: theme.radius.sm,
      },
    }),
  },
  { link: true }
);

import { createMemoStyles, MantineTheme, MantineNumberSize, getSizeValue } from '../../theme';

interface CardStyles {
  theme: MantineTheme;
  radius: MantineNumberSize;
  padding: MantineNumberSize;
}

export default createMemoStyles({
  card: ({ theme, radius, padding }: CardStyles) => {
    const spacing = getSizeValue({ size: padding, sizes: theme.spacing });
    const borderRadius = getSizeValue({ size: radius, sizes: theme.radius });

    return {
      position: 'relative',
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,

      '& [data-mantine-image]': {
        width: `calc(100% + ${spacing * 2}px) !important`,
        marginLeft: -spacing,
        marginRight: -spacing,

        '&:first-child': {
          borderTopRightRadius: borderRadius,
          borderTopLeftRadius: borderRadius,
          marginBottom: spacing,
          marginTop: -spacing,
        },

        '&:last-child': {
          borderBottomRightRadius: borderRadius,
          borderBottomLeftRadius: borderRadius,
          marginTop: spacing,
          marginBottom: -spacing,
        },

        '&:first-child:last-child': {
          marginTop: -spacing,
          marginBottom: -spacing,
        },
      },

      '& [data-mantine-divider]': {
        borderTopColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2],
        marginLeft: -spacing,
        marginRight: -spacing,
        marginBottom: spacing / 2,
        marginTop: spacing / 2,
      },
    };
  },
});

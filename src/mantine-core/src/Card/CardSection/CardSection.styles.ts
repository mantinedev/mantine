import { createStyles, getSize, rem } from '@mantine/styles';

interface CardSectionStyles {
  padding: string | number;
  withBorder: boolean;
  inheritPadding: boolean;
}

export default createStyles((theme, { padding, withBorder, inheritPadding }: CardSectionStyles) => {
  const spacing = getSize({ size: padding, sizes: theme.spacing });
  const offset = `calc(-1 * ${spacing})`;
  const borderColor = theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3];

  return {
    cardSection: {
      display: 'block',
      marginLeft: offset,
      marginRight: offset,
      paddingLeft: inheritPadding ? spacing : undefined,
      paddingRight: inheritPadding ? spacing : undefined,
      borderTop: withBorder ? `${rem(1)} solid ${borderColor}` : undefined,
      borderBottom: withBorder ? `${rem(1)} solid ${borderColor}` : undefined,

      '& + &': {
        borderTop: 0,
      },

      '&[data-first]': {
        marginTop: offset,
        borderTop: 0,
        borderBottom: withBorder ? `${rem(1)} solid ${borderColor}` : undefined,
      },

      '&[data-last]': {
        marginBottom: offset,
        borderBottom: 0,
      },
    },
  };
});

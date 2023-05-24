import { createStyles, rem } from '@mantine/styles';

const sizes = {
  xs: { padding: `${rem(2)} ${rem(4)}`, fontSize: rem(10) },
  sm: { padding: `${rem(3)} ${rem(5)}`, fontSize: rem(12) },
  md: { padding: `${rem(4)} ${rem(7)}`, fontSize: rem(14) },
  lg: { padding: `${rem(5)} ${rem(9)}`, fontSize: rem(16) },
  xl: { padding: `${rem(8)} ${rem(14)}`, fontSize: rem(20) },
};

export default createStyles((theme, _params, { size }) => {
  const _size = size in sizes ? sizes[size] : sizes.sm;
  return {
    root: {
      lineHeight: theme.lineHeight,
      fontFamily: theme.fontFamilyMonospace,
      fontSize: _size.fontSize,
      fontWeight: 700,
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
      color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
      padding: _size.padding,
      borderRadius: theme.radius.sm,
      border: `${rem(1)} solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
      }`,
      borderBottom: `${rem(3)} solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
      }`,
    },
  };
});

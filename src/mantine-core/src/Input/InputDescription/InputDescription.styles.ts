import { createStyles, rem } from '@mantine/styles';

export default createStyles((theme, _params, { size }) => ({
  description: {
    wordBreak: 'break-word',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
    fontSize: `calc(${rem(theme.fn.size({ size, sizes: theme.fontSizes }))} - ${rem(2)})`,
    lineHeight: 1.2,
    display: 'block',
  },
}));

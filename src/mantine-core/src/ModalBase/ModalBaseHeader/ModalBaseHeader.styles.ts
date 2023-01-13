import { createStyles, MantineNumberSize } from '@mantine/styles';

interface ModalBaseHeaderStylesParams {
  padding: MantineNumberSize;
}

export default createStyles((theme, { padding }: ModalBaseHeaderStylesParams) => {
  const paddingValue = theme.fn.size({ size: padding, sizes: theme.spacing });
  return {
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: paddingValue,
      // paddingBottom: 0,
      paddingRight: theme.fn.calc(paddingValue, '- 5px'),
      position: 'sticky',
      top: 0,
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
      // background: 'red',
    },
  };
});

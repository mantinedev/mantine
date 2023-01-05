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
      borderBottom: `1px solid ${theme.colors.gray[2]}`,
      paddingTop: theme.fn.calc(paddingValue, '/ 2'),
      paddingBottom: theme.fn.calc(paddingValue, '/ 2'),
      paddingLeft: paddingValue,
      paddingRight: theme.fn.calc(paddingValue, '- 5px'),
      marginBottom: theme.fn.calc(paddingValue, '/ 2'),
    },
  };
});

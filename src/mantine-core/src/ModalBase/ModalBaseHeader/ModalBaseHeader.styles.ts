import { createStyles, MantineNumberSize } from '@mantine/styles';

interface ModalBaseHeaderStylesParams {
  padding: MantineNumberSize;
}

function numberToCss(value: unknown) {
  if (typeof value === 'number') {
    return `${value}px`;
  }

  return `${value}`;
}

export default createStyles((theme, { padding }: ModalBaseHeaderStylesParams) => {
  const paddingValue = numberToCss(theme.fn.size({ size: padding, sizes: theme.spacing }));
  return {
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: `1px solid ${theme.colors.gray[2]}`,
      paddingTop: `calc(${paddingValue} / 2)`,
      paddingBottom: `calc(${paddingValue} / 2)`,
      paddingLeft: paddingValue,
      paddingRight: paddingValue,
    },
  };
});

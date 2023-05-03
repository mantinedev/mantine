import { createStyles, rem } from '@mantine/styles';

export interface ButtonGroupStylesParams {
  orientation: 'vertical' | 'horizontal';
  buttonBorderWidth: number | string;
}

export default createStyles(
  (_theme, { orientation, buttonBorderWidth }: ButtonGroupStylesParams) => ({
    root: {
      display: 'flex',
      flexDirection: orientation === 'vertical' ? 'column' : 'row',

      '& [data-button]': {
        '&:first-child:not(:last-child)': {
          borderBottomRightRadius: 0,
          [orientation === 'vertical' ? 'borderBottomLeftRadius' : 'borderTopRightRadius']: 0,
          [orientation === 'vertical' ? 'borderBottomWidth' : 'borderRightWidth']: `calc(${rem(
            buttonBorderWidth
          )} / 2)`,
        },

        '&:last-child:not(:first-child)': {
          borderTopLeftRadius: 0,
          [orientation === 'vertical' ? 'borderTopRightRadius' : 'borderBottomLeftRadius']: 0,
          [orientation === 'vertical' ? 'borderTopWidth' : 'borderLeftWidth']: `calc(${rem(
            buttonBorderWidth
          )} / 2)`,
        },

        '&:not(:first-child):not(:last-child)': {
          borderRadius: 0,
          [orientation === 'vertical' ? 'borderTopWidth' : 'borderLeftWidth']: `calc(${rem(
            buttonBorderWidth
          )} / 2)`,
          [orientation === 'vertical' ? 'borderBottomWidth' : 'borderRightWidth']: `calc(${rem(
            buttonBorderWidth
          )} / 2)`,
        },

        '& + [data-button]': {
          [orientation === 'vertical'
            ? 'marginTop'
            : 'marginLeft']: `calc(${buttonBorderWidth} * -1)`,
          '@media (min-resolution: 192dpi)': {
            [orientation === 'vertical' ? 'marginTop' : 'marginLeft']: 0,
          },
        },
      },
    },
  })
);

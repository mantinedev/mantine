import { createStyles } from '@mantine/styles';

export interface ButtonGroupStylesParams {
  orientation: 'vertical' | 'horizontal';
  buttonBorderWidth: number;
}

export default createStyles(
  (_theme, { orientation, buttonBorderWidth }: ButtonGroupStylesParams) => ({
    root: {
      display: 'flex',
      flexDirection: orientation === 'vertical' ? 'column' : 'row',

      '& [data-button]': {
        '&:first-of-type': {
          borderBottomRightRadius: 0,
          [orientation === 'vertical' ? 'borderBottomLeftRadius' : 'borderTopRightRadius']: 0,
          [orientation === 'vertical' ? 'borderBottomWidth' : 'borderRightWidth']:
            buttonBorderWidth / 2,
        },

        '&:last-of-type': {
          borderTopLeftRadius: 0,
          [orientation === 'vertical' ? 'borderTopRightRadius' : 'borderBottomLeftRadius']: 0,
          [orientation === 'vertical' ? 'borderTopWidth' : 'borderLeftWidth']:
            buttonBorderWidth / 2,
        },

        '&:not(:first-of-type):not(:last-of-type)': {
          borderRadius: 0,
          [orientation === 'vertical' ? 'borderTopWidth' : 'borderLeftWidth']:
            buttonBorderWidth / 2,
          [orientation === 'vertical' ? 'borderBottomWidth' : 'borderRightWidth']:
            buttonBorderWidth / 2,
        },
      },
    },
  })
);

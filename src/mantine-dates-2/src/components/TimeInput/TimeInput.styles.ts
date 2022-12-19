import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  input: {
    paddingTop: 0,
    paddingBottom: 0,
    appearance: 'none',
    '&::-webkit-calendar-picker-indicator': {
      display: 'none',
    },

    '&::-webkit-clear-button': {
      display: 'none',
    },

    '&::-webkit-datetime-edit-hour-field, &::-webkit-datetime-edit-minute-field, &::-webkit-datetime-edit-second-field':
      {
        paddingTop: 0,
        maxHeight: 30,
        display: 'inline',
        '&:focus': {
          backgroundColor: theme.fn.variant({ variant: 'filled' }).background,
          color: theme.white,
        },
      },
  },
}));

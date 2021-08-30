import React from 'react';
import cx from 'clsx';
import { createUseStyles } from 'react-jss';
import { theming, Paper, PaperProps, Autocomplete, NumberInput, Button } from '@mantine/core';
import dayjs from 'dayjs';
import { DateRangePicker } from '@mantine/dates';

const useStyles = createUseStyles(
  (theme) => ({
    wrapper: {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.white,
      border: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
      }`,
    },

    fields: {
      display: 'flex',
      alignItems: 'flex-end',

      '@media (max-width: 755px)': {
        display: 'block',
      },
    },

    field: {
      flex: 1,

      '&:not(:last-of-type)': {
        marginRight: theme.spacing.md,
      },

      '@media (max-width: 755px)': {
        width: '100%',
        maxWidth: '100% !important',

        '&:not(:last-of-type)': {
          marginRight: 0,
          marginBottom: theme.spacing.md,
        },
      },
    },

    budgetField: {
      maxWidth: 120,
    },

    destinationField: {
      maxWidth: 280,
    },

    control: {
      marginLeft: theme.spacing.md,

      '@media (max-width: 755px)': {
        width: '100%',
        marginLeft: 0,
        marginTop: theme.spacing.lg,
      },
    },
  }),
  { theming }
);

export function InlineForm(props: PaperProps) {
  const classes = useStyles();

  return (
    <Paper
      shadow="md"
      padding="lg"
      radius="md"
      {...props}
      className={cx(classes.wrapper, props.className)}
    >
      <div className={classes.fields}>
        <Autocomplete
          data={['Australia', 'United Kingdom', 'Germany', 'Russia', 'Canada']}
          className={cx(classes.field, classes.destinationField)}
          placeholder="Destination country"
          label="Destination"
          variant="default"
        />
        <DateRangePicker
          className={classes.field}
          placeholder="Stay dates"
          label="Stay dates"
          minDate={new Date()}
          initialMonth={dayjs(new Date()).add(1, 'month').toDate()}
          inputFormat="MMMM D"
          variant="default"
        />
        <NumberInput
          className={cx(classes.field, classes.budgetField)}
          label="Budget, $"
          min={150}
          step={50}
          defaultValue={500}
          hideControls
          variant="default"
        />

        <Button className={classes.control}>Search</Button>
      </div>
    </Paper>
  );
}

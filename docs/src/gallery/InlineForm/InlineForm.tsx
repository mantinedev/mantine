import React from 'react';
import cx from 'clsx';
import { createStyles, Autocomplete, NumberInput, Button } from '@mantine/core';
import dayjs from 'dayjs';
import { DateRangePicker } from '@mantine/dates';

const useStyles = createStyles((theme) => ({
  wrapper: {
    '@media (max-width: 755px)': {
      padding: theme.spacing.lg,
    },
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

    '&:first-of-type $input': {
      borderTopLeftRadius: theme.radius.md,
      borderBottomLeftRadius: theme.radius.md,

      '&:not(:focus)': {
        borderLeftColor: theme.colors.gray[2],
      },
    },

    '& + &': {
      '& $input': {
        borderLeftWidth: 0,
        borderRightWidth: 0,

        '@media (max-width: 755px)': {
          borderLeftWidth: 1,
          borderRightWidth: 1,
        },
      },
    },

    '@media (max-width: 755px)': {
      width: '100%',
      maxWidth: '100% !important',

      '&:not(:last-of-type)': {
        marginBottom: theme.spacing.md,
      },
    },
  },

  input: {
    borderColor: [
      [theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]],
      '!important',
    ],
    height: 60,
    paddingLeft: theme.spacing.xl,
    fontSize: theme.fontSizes.md,
    borderLeftColor: theme.colors.gray[4],

    '@media (max-width: 755px)': {
      borderRadius: theme.radius.md,
    },
  },

  inputLabel: {
    marginBottom: 9,
  },

  budgetField: {
    maxWidth: 120,
  },

  destinationField: {
    maxWidth: 280,
  },

  control: {
    height: 60,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,

    '@media (max-width: 755px)': {
      width: '100%',
      marginLeft: 0,
      marginTop: theme.spacing.lg,
      borderTopLeftRadius: theme.radius.md,
      borderBottomLeftRadius: theme.radius.md,
    },
  },
}));

interface InlineFormProps extends React.ComponentPropsWithoutRef<'div'> {
  labelClassName?: string;
}

export function InlineForm({ labelClassName, ...props }: InlineFormProps) {
  const classes = useStyles();

  return (
    <div {...props} className={cx(classes.wrapper, props.className)}>
      <div className={classes.fields}>
        <Autocomplete
          radius={0}
          size="md"
          data={['Australia', 'United Kingdom', 'Germany', 'Russia', 'Canada']}
          className={cx(classes.field, classes.destinationField)}
          placeholder="Destination country"
          label="Destination"
          variant="default"
          classNames={{ input: classes.input, label: cx(classes.inputLabel, labelClassName) }}
        />

        <DateRangePicker
          radius={0}
          size="md"
          className={classes.field}
          placeholder="Stay dates"
          label="Stay dates"
          minDate={new Date()}
          initialMonth={dayjs(new Date()).add(1, 'month').toDate()}
          inputFormat="MMM D"
          variant="default"
          classNames={{ input: classes.input, label: cx(classes.inputLabel, labelClassName) }}
        />

        <NumberInput
          radius={0}
          size="md"
          className={cx(classes.field, classes.budgetField)}
          label="Budget"
          min={150}
          step={50}
          defaultValue={500}
          hideControls
          variant="default"
          classNames={{ input: classes.input, label: cx(classes.inputLabel, labelClassName) }}
        />

        <Button className={classes.control} radius="md" size="lg">
          Search
        </Button>
      </div>
    </div>
  );
}

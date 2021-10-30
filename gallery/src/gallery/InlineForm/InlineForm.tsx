import React from 'react';
import { MapPin, DollarSign, Calendar } from 'react-feather';
import { createStyles, Autocomplete, TextInput, Button, Tabs, Tab } from '@mantine/core';
import dayjs from 'dayjs';
import { DateRangePicker } from '@mantine/dates';

const useStyles = createStyles((theme, _params, getRef) => {
  const input = getRef('input');

  return {
    inputRoot: {
      position: 'relative',
    },

    input: {
      ref: input,
      borderColor: 'transparent',
      borderRadius: 0,
      borderRightColor: theme.colors.gray[3],

      '&:focus': {
        borderColor: 'transparent',
        borderRightColor: theme.colors.gray[3],
      },

      '&::placeholder': {
        color: theme.colors.gray[9],
      },
    },

    inputLabel: {
      position: 'absolute',
      pointerEvents: 'none',
      paddingLeft: 10,
      fontSize: 18,
      paddingTop: theme.spacing.sm / 2,
      zIndex: 3,
    },

    fields: {
      display: 'flex',
      alignItems: 'center',

      [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
        flexDirection: 'column',
        alignItems: 'stretch',
      },
    },

    field: {
      flex: 1,

      '&:last-of-type': {
        [`& .${input}`]: {
          borderRight: 0,
        },
      },

      '&:first-of-type': {
        [`& .${input}`]: {
          borderTopLeftRadius: theme.radius.md,
          borderBottomLeftRadius: theme.radius.md,
        },
      },
    },

    wrapper: {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
      padding: theme.spacing.lg,
      borderRadius: theme.radius.md,
      border: `1px solid ${theme.colors.gray[2]}`,
    },

    control: {
      marginLeft: theme.spacing.md,

      [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
        marginTop: theme.spacing.md,
        marginLeft: 12,
        marginRight: 12,
      },
    },
  };
});

interface InlineFormProps extends React.ComponentPropsWithoutRef<'div'> {
  labelClassName?: string;
}

export function InlineForm({ labelClassName, ...props }: InlineFormProps) {
  const { classes, cx } = useStyles();
  const inputClassNames = {
    input: classes.input,
    label: cx(classes.inputLabel, labelClassName),
  };

  return (
    <div {...props} className={cx(classes.wrapper, props.className)}>
      <Tabs variant="pills" mb="md">
        <Tab label="Hotels" />
        <Tab label="Flights" />
        <Tab label="Car rental" />
      </Tabs>

      <div className={classes.fields}>
        <Autocomplete
          icon={<MapPin size={16} />}
          data={['Australia', 'United Kingdom', 'Germany', 'Russia', 'Canada']}
          className={classes.field}
          placeholder="Destination country"
          variant="default"
          classNames={inputClassNames}
          sx={{ maxWidth: 200 }}
        />

        <TextInput
          type="number"
          icon={<DollarSign size={16} />}
          className={classes.field}
          placeholder="Budget"
          variant="default"
          classNames={inputClassNames}
          sx={{ maxWidth: 140 }}
        />

        <DateRangePicker
          icon={<Calendar size={16} />}
          className={classes.field}
          placeholder="Travel dates"
          minDate={new Date()}
          initialMonth={dayjs(new Date()).add(1, 'month').toDate()}
          variant="default"
          classNames={inputClassNames}
          clearable={false}
          transitionDuration={0}
        />

        <Button className={classes.control} radius="md" size="md">
          Find hotels
        </Button>
      </div>
    </div>
  );
}

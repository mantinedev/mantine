import React, { useState } from 'react';
import dayjs from 'dayjs';
import { createStyles, UnstyledButton, Text, Paper, Group } from '@mantine/core';
import { Swimming, Bike, Run, ChevronDown, ChevronUp } from 'tabler-icons-react';

const useStyles = createStyles((theme) => ({
  root: {
    backgroundImage: `linear-gradient(-60deg, ${theme.colors[theme.primaryColor][4]} 0%, ${
      theme.colors[theme.primaryColor][7]
    } 100%)`,
    padding: theme.spacing.xl,
    borderRadius: theme.radius.md,
    display: 'flex',

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
    },
  },

  icon: {
    marginLeft: 'auto',
    marginRight: 'auto',
    color: theme.colors[theme.primaryColor][6],
  },

  stat: {
    minWidth: 98,
    paddingTop: theme.spacing.xl,
    minHeight: 140,
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: theme.white,
  },

  label: {
    textTransform: 'uppercase',
    fontWeight: 700,
    fontSize: theme.fontSizes.xs,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    color: theme.colors.gray[6],
    lineHeight: 1.2,
  },

  value: {
    fontSize: theme.fontSizes.sm,
    fontWeight: 700,
    color: theme.black,
  },

  count: {
    color: theme.colors.gray[6],
  },

  day: {
    fontSize: 44,
    fontWeight: 700,
    color: theme.white,
    lineHeight: 1,
    textAlign: 'center',
    marginBottom: 5,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

  month: {
    fontSize: theme.fontSizes.sm,
    color: theme.white,
    lineHeight: 1,
    textAlign: 'center',
  },

  controls: {
    display: 'flex',
    flexDirection: 'column',
    marginRight: theme.spacing.xl * 2,

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 0,
      marginBottom: theme.spacing.xl,
    },
  },

  date: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },

  control: {
    height: 28,
    width: '100%',
    color: theme.colors[theme.primaryColor][2],
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: theme.radius.md,
    transition: 'background-color 50ms ease',

    [theme.fn.smallerThan('xs')]: {
      height: 34,
      width: 34,
    },

    '&:hover': {
      backgroundColor: theme.colors[theme.primaryColor][5],
      color: theme.white,
    },
  },

  controlIcon: {
    [theme.fn.smallerThan('xs')]: {
      transform: 'rotate(-90deg)',
    },
  },
}));

const data = [
  { icon: Run, label: 'Running' },
  { icon: Swimming, label: 'Swimming' },
  { icon: Bike, label: 'Bike' },
];

export function StatsControls() {
  const { classes } = useStyles();
  const [date, setDate] = useState(new Date(2021, 9, 24));

  const stats = data.map((stat) => (
    <Paper className={classes.stat} radius="md" shadow="md" padding="xs" key={stat.label}>
      <stat.icon size={32} className={classes.icon} />
      <div>
        <Text className={classes.label}>{stat.label}</Text>
        <Text size="xs" className={classes.count}>
          <span className={classes.value}>{Math.floor(Math.random() * 6 + 4)}km</span> / 10km
        </Text>
      </div>
    </Paper>
  ));

  return (
    <div className={classes.root}>
      <div className={classes.controls}>
        <UnstyledButton
          className={classes.control}
          onClick={() => setDate((current) => dayjs(current).add(1, 'day').toDate())}
        >
          <ChevronUp className={classes.controlIcon} />
        </UnstyledButton>

        <div className={classes.date}>
          <Text className={classes.day}>{dayjs(date).format('DD')}</Text>
          <Text className={classes.month}>{dayjs(date).format('MMMM')}</Text>
        </div>

        <UnstyledButton
          className={classes.control}
          onClick={() => setDate((current) => dayjs(current).subtract(1, 'day').toDate())}
        >
          <ChevronDown className={classes.controlIcon} />
        </UnstyledButton>
      </div>
      <Group sx={{ flex: 1 }}>{stats}</Group>
    </div>
  );
}

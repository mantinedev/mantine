import React from 'react';
import { createStyles, Avatar, Text, Button } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  root: {
    borderRadius: theme.radius.md,
    padding: theme.spacing.md,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
    boxShadow: theme.shadows.sm,
  },
}));

interface UserInfoActionProps {
  avatar: string;
  name: string;
  email: string;
  job: string;
}

export function UserInfoAction({ avatar, name, email, job }: UserInfoActionProps) {
  const { classes } = useStyles();
  return (
    <div className={classes.root}>
      <Avatar src={avatar} size={120} radius={120} mx="auto" />
      <Text align="center" size="lg" weight={500} mt="md">
        {name}
      </Text>
      <Text align="center" color="dimmed" size="sm">
        {email} • {job}
      </Text>

      <Button variant="default" fullWidth mt="md">
        Send message
      </Button>
    </div>
  );
}

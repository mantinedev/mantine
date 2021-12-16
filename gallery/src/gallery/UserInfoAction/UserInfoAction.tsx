import React from 'react';
import { createStyles, Avatar, Text, Button } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  root: {
    borderRadius: theme.radius.md,
    padding: theme.spacing.md,
    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,
  },
}));

interface UserInfoActionProps {
  avatar: string;
  name: string;
  email: string;
}

export function UserInfoAction({ avatar, name, email }: UserInfoActionProps) {
  const { classes } = useStyles();
  return (
    <div className={classes.root}>
      <Avatar src={avatar} size={120} radius={120} mx="auto" />
      <Text align="center" size="lg" weight={500} mt="md">
        {name}
      </Text>
      <Text align="center" color="dimmed" size="sm" mt={5}>
        {email}
      </Text>

      <Button variant="default" fullWidth mt="md">
        Send message
      </Button>
    </div>
  );
}

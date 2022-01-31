import React from 'react';
import {
  GitPullRequestIcon,
  IssueOpenedIcon,
  CommentDiscussionIcon,
  DatabaseIcon,
} from '@primer/octicons-react';
import { ThemeIcon, UnstyledButton, Group, Text, createStyles } from '@mantine/core';

interface MainLinkProps {
  icon: React.ReactNode;
  color: string;
  label: string;
}

const useStyles = createStyles((theme) => ({
  button: {
    display: 'block',
    width: '100%',
    padding: theme.spacing.xs,
    borderRadius: theme.radius.sm,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  },
}));

function MainLink({ icon, color, label }: MainLinkProps) {
  const { classes } = useStyles();

  return (
    <UnstyledButton className={classes.button}>
      <Group>
        <ThemeIcon color={color} variant="light">
          {icon}
        </ThemeIcon>

        <Text size="sm">{label}</Text>
      </Group>
    </UnstyledButton>
  );
}

const data = [
  { icon: <GitPullRequestIcon />, color: 'blue', label: 'Pull Requests' },
  { icon: <IssueOpenedIcon />, color: 'lime', label: 'Open Issues' },
  { icon: <CommentDiscussionIcon />, color: 'violet', label: 'Discussions' },
  { icon: <DatabaseIcon />, color: 'grape', label: 'Databases' },
];

export function MainLinks() {
  const links = data.map((link) => <MainLink {...link} key={link.label} />);
  return <div>{links}</div>;
}

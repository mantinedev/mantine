import React from 'react';
import { createStyles, Anchor, Group, UnstyledButton } from '@mantine/core';
import { GitHubLogoIcon, TwitterLogoIcon } from '@modulz/radix-icons';
import { MantineLogo } from '../../shared/MantineLogo';

const useStyles = createStyles((theme) => ({
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: `${theme.spacing.md}px ${theme.spacing.md}px`,

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
    },
  },

  socialButton: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[5],
    borderRadius: theme.radius.sm,
    padding: 5,

    '&:hover': {
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },

    '& > svg': {
      display: 'block',
      width: 18,
      height: 18,
    },
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.lg,
      marginBottom: theme.spacing.sm,
    },
  },
}));

interface FooterCenteredProps {
  links: { link: string; label: string }[];
}

export function FooterCentered({ links }: FooterCenteredProps) {
  const { classes } = useStyles();
  const items = links.map((link) => (
    <Anchor<'a'>
      color="dimmed"
      key={link.label}
      href={link.link}
      sx={{ lineHeight: 1 }}
      onClick={(event) => event.preventDefault()}
      size="sm"
    >
      {link.label}
    </Anchor>
  ));

  return (
    <div className={classes.footer}>
      <MantineLogo />

      <Group className={classes.links}>{items}</Group>

      <Group spacing={5}>
        <UnstyledButton color="dimmed" className={classes.socialButton}>
          <GitHubLogoIcon />
        </UnstyledButton>
        <UnstyledButton color="dimmed" className={classes.socialButton}>
          <TwitterLogoIcon />
        </UnstyledButton>
      </Group>
    </div>
  );
}

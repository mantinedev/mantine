import React from 'react';
import { createStyles, Header, Menu, Group, Center, Burger } from '@mantine/core';
import { useBooleanToggle } from '@mantine/hooks';
import { ChevronDownIcon } from '@modulz/radix-icons';
import { MantineLogo } from '../../shared/MantineLogo';

const useStyles = createStyles((theme) => ({
  header: {
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    marginBottom: theme.spacing.xl * 2,
  },

  inner: {
    height: 56,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },
  },

  linkLabel: {
    marginRight: 5,
  },
}));

interface HeaderSearchProps {
  links: { link: string; label: string; links: { link: string; label: string }[] }[];
}

export function HeaderMenu({ links }: HeaderSearchProps) {
  const [opened, toggleOpened] = useBooleanToggle(false);
  const { classes } = useStyles();

  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link}>{item.label}</Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu
          trigger="hover"
          delay={50}
          transitionDuration={0}
          placement="end"
          gutter={3}
          control={
            <a
              key={link.label}
              href={link.link}
              className={classes.link}
              onClick={(event) => event.preventDefault()}
            >
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <ChevronDownIcon width={12} height={12} />
              </Center>
            </a>
          }
        >
          {menuItems}
        </Menu>
      );
    }

    return (
      <a
        key={link.label}
        href={link.link}
        className={classes.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </a>
    );
  });

  return (
    <Header height={56} className={classes.header}>
      <div className={classes.inner}>
        <MantineLogo />
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>
        <Burger
          opened={opened}
          onClick={() => toggleOpened()}
          className={classes.burger}
          size="sm"
        />
      </div>
    </Header>
  );
}

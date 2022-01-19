import React, { useState } from 'react';
import { createStyles, Header, Container, Anchor, Group, Burger } from '@mantine/core';
import { useBooleanToggle } from '@mantine/hooks';
import { MantineLogo } from '../../shared/MantineLogo';

const HEADER_HEIGHT = 84;

const useStyles = createStyles((theme) => ({
  inner: {
    height: HEADER_HEIGHT,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  links: {
    paddingTop: theme.spacing.lg,
    height: HEADER_HEIGHT,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',

    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  mainLinks: {
    marginRight: -theme.spacing.sm,
  },

  mainLink: {
    textTransform: 'uppercase',
    fontSize: 13,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[6],
    padding: `7px ${theme.spacing.sm}px`,
    fontWeight: 700,
    borderBottom: '2px solid transparent',
    transition: 'border-color 100ms ease, color 100ms ease',

    '&:hover': {
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      textDecoration: 'none',
    },
  },

  secondaryLink: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
    fontSize: theme.fontSizes.xs,
    textTransform: 'uppercase',
    transition: 'color 100ms ease',

    '&:hover': {
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      textDecoration: 'none',
    },
  },

  mainLinkActive: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    borderBottomColor: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 5 : 6],
  },
}));

interface LinkProps {
  label: string;
  link: string;
}

interface DoubleHeaderProps {
  mainLinks: LinkProps[];
  userLinks: LinkProps[];
}

export function DoubleHeader({ mainLinks, userLinks }: DoubleHeaderProps) {
  const [opened, toggleOpened] = useBooleanToggle(false);
  const { classes, cx } = useStyles();
  const [active, setActive] = useState(0);

  const mainItems = mainLinks.map((item, index) => (
    <Anchor<'a'>
      href={item.link}
      key={item.label}
      className={cx(classes.mainLink, { [classes.mainLinkActive]: index === active })}
      onClick={(event) => {
        event.preventDefault();
        setActive(index);
      }}
    >
      {item.label}
    </Anchor>
  ));

  const secondaryItems = userLinks.map((item) => (
    <Anchor<'a'>
      href={item.link}
      key={item.label}
      onClick={(event) => event.preventDefault()}
      className={classes.secondaryLink}
    >
      {item.label}
    </Anchor>
  ));

  return (
    <Header height={HEADER_HEIGHT} mb={120}>
      <Container className={classes.inner}>
        <MantineLogo width={130} />
        <div className={classes.links}>
          <Group position="right">{secondaryItems}</Group>
          <Group spacing={0} position="right" className={classes.mainLinks}>
            {mainItems}
          </Group>
        </div>
        <Burger
          opened={opened}
          onClick={() => toggleOpened()}
          className={classes.burger}
          size="sm"
        />
      </Container>
    </Header>
  );
}

import React from 'react';
import { ArrowRightIcon } from '@modulz/radix-icons';
import { useClipboard } from '@mantine/hooks';
import { Title, Text, Anchor, ThemeIcon, Group, Button } from '@mantine/core';
import Head from '../Head/Head';
import { Footer } from '../Footer/Footer';
import { SocialButton } from '../SocialButton/SocialButton';
import { CONTRIBUTE_DATA } from './data';
import useStyles from './Contribute.styles';

export function Contribute() {
  const classes = useStyles();
  const clipboard = useClipboard({ timeout: 5000 });

  const items = CONTRIBUTE_DATA.map((item) => (
    <div className={classes.card} key={item.title}>
      <div className={classes.header}>
        <ThemeIcon color={item.color} size="lg">
          <item.icon width={20} height={20} />
        </ThemeIcon>
        <Text weight={500} style={{ marginLeft: 15 }}>
          {item.title}
        </Text>
      </div>
      <Text size="sm" className={classes.description}>
        {item.description}
      </Text>
      <Button
        className={classes.control}
        component="a"
        data-size="large"
        href={item.link}
        variant="outline"
        color="gray"
        size="sm"
        rightIcon={<ArrowRightIcon width={10} height={10} />}
      >
        {item.linkLabel}
      </Button>
    </div>
  ));

  return (
    <>
      <div className={classes.wrapper}>
        <Head title="Contribute to Mantine" disableTitleTemplate />

        <Title className={classes.title}>Contribute to Mantine</Title>
        <Text style={{ maxWidth: 600 }}>
          First of all, thank you for showing interest in contributing to Mantine, all your
          contributions are extremely valuable to the project!
        </Text>

        <Title order={2} className={classes.subtitle}>
          Ways to contribute
        </Title>

        <Group className={classes.cards} align="stretch">
          {items}
        </Group>

        <Title order={2} className={classes.subtitle}>
          Become a maintainer
        </Title>

        <Text style={{ maxWidth: 600, marginBottom: 15 }}>
          Mantine is a new fast growing React components and hooks library, we are always looking
          forward extending core team. If you want to be a part of open source project we will be
          happy to have you onboard.
        </Text>

        <Text weight={700}>What you will able to do as a maintainer:</Text>

        <ul style={{ maxWidth: 600, marginBottom: 15 }}>
          <li>
            Build new components and hooks for @mantine/core, @mantine/hooks and other packages
          </li>
          <li>Work on improvements of existing components</li>
          <li>Work on Mantine documentation website to improve UX</li>
          <li>
            Participate in{' '}
            <Anchor href="https://github.com/mantinedev/mantine/discussions">
              community discussions
            </Anchor>
          </li>
        </ul>

        <Text weight={700}>What you will need:</Text>
        <ul>
          <li>Good React knowledge (with hooks only, Mantine does not have class components)</li>
          <li>Basic understanding of TypeScript</li>
          <li>2-3 hours per week to devote to open source work</li>
        </ul>

        <Text>Sounds interesting? Let&apos;s contact and discuss all details:</Text>
        <Group style={{ marginTop: 10 }}>
          <SocialButton type="large" service="tg" />
          <Button
            style={{ height: 42, paddingLeft: 20, paddingRight: 20 }}
            onClick={() => clipboard.copy('rtivital@gmail.com')}
            color={clipboard.copied ? 'teal' : 'blue'}
          >
            {clipboard.copied ? 'Email copied to clipboard' : 'Contact via email'}
          </Button>
        </Group>
      </div>

      <Footer withNavbar />
    </>
  );
}

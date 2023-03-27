import React from 'react';
import { SimpleGrid, Group, Text, Card } from '@mantine/core';
import { GithubIcon, TwitterIcon, meta, DiscordIcon } from '@mantine/ds';
import useStyles from './Community.styles';

export function Community() {
  const { classes, cx } = useStyles();

  return (
    <SimpleGrid cols={3} spacing="xl" breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
      <Card
        padding="lg"
        component="a"
        radius="md"
        href={meta.discordLink}
        className={cx(classes.card, classes.discord)}
      >
        <Group noWrap>
          <DiscordIcon size={24} />
          <Text size="md" weight={600}>
            Join Discord community
          </Text>
        </Group>
        <Card.Section inheritPadding className={classes.description}>
          <Text size="xs" mt="sm">
            Ask questions, participate in new features discussions, see what people have built
          </Text>
        </Card.Section>
      </Card>

      <Card
        padding="lg"
        component="a"
        radius="md"
        href="https://twitter.com/mantinedev"
        className={cx(classes.card, classes.twitter)}
      >
        <Group noWrap>
          <TwitterIcon size={24} />
          <Text size="md" weight={600}>
            Follow on Twitter
          </Text>
        </Group>
        <Card.Section inheritPadding className={classes.description}>
          <Text size="xs" mt="sm">
            Get notified about new minor and major releases
          </Text>
        </Card.Section>
      </Card>

      <Card
        padding="lg"
        component="a"
        radius="md"
        href="https://github.com/mantinedev/mantine/discussions"
        className={cx(classes.card, classes.github)}
      >
        <Group noWrap>
          <GithubIcon size={24} />
          <Text size="md" weight={600}>
            Start a discussion
          </Text>
        </Group>
        <Card.Section inheritPadding className={classes.description}>
          <Text size="xs" mt="sm">
            Request new features, ask questions and provide feedback with GitHub discussions
          </Text>
        </Card.Section>
      </Card>
    </SimpleGrid>
  );
}

import React from 'react';
import { SimpleGrid, Group, Text, Card } from '@mantine/core';
import { MarkGithubIcon } from '@primer/octicons-react';
import { DiscordIcon } from '../SocialButton/DiscordIcon';
import useStyles from './Community.styles';
import { TwitterIcon } from '../SocialButton/TwitterIcon';

export function Community() {
  const { classes, cx } = useStyles();

  return (
    <SimpleGrid cols={3} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
      <Card
        p="lg"
        component="a"
        radius="md"
        href="https://discord.gg/eUZpPbpxb4"
        className={cx(classes.card, classes.discord)}
      >
        <Group noWrap>
          <DiscordIcon width={24} height={24} />
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
        p="lg"
        component="a"
        radius="md"
        href="https://twitter.com/mantinedev"
        className={cx(classes.card, classes.twitter)}
      >
        <Group noWrap>
          <TwitterIcon width={24} height={24} />
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
        p="lg"
        component="a"
        radius="md"
        href="https://twitter.com/mantinedev"
        className={cx(classes.card, classes.github)}
      >
        <Group noWrap>
          <MarkGithubIcon size={24} />
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

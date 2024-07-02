import { IconExternalLink } from '@tabler/icons-react';
import { ActionIcon, Avatar, Card, Group, Text } from '@mantine/core';
import { ReviewData } from '../reviews-data';
import classes from './Review.module.css';

interface ReviewProps {
  data: ReviewData;
}

export function Review({ data }: ReviewProps) {
  return (
    <Card className={classes.root} withBorder radius="lg">
      <Group justify="space-between" className={classes.header}>
        <Group gap="sm">
          <Avatar src={data.author.avatar} alt={data.author.nickname} size={30} />
          <Text
            component="a"
            href={`https://github.com/${data.author.nickname}`}
            className={classes.authorName}
          >
            @{data.author.nickname}
          </Text>
        </Group>

        <ActionIcon
          component="a"
          variant="subtle"
          color="gray"
          title="Open on GitHub"
          href={data.link}
          target="_blank"
        >
          <IconExternalLink size={18} />
        </ActionIcon>
      </Group>

      <Text className={classes.title}>{data.title}</Text>

      <div className={classes.body} dangerouslySetInnerHTML={{ __html: data.body }} />
    </Card>
  );
}

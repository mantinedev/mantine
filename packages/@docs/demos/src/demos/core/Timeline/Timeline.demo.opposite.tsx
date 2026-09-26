import {
  ChatCircleDotsIcon,
  GitBranchIcon,
  GitCommitIcon,
  GitPullRequestIcon,
} from '@phosphor-icons/react';
import { Text, Timeline } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Timeline, Text } from '@mantine/core';
import { GitBranchIcon, GitCommitIcon, GitPullRequestIcon, ChatCircleDotsIcon } from '@phosphor-icons/react';

function Demo() {
  return (
    <Timeline active={1} bulletSize={24} lineWidth={2}>
      <Timeline.Item
        bullet={<GitBranchIcon size={12} />}
        title="New branch"
        opposite={
          <Text size="sm" c="dimmed">
            2 hours ago
          </Text>
        }
      >
        <Text c="dimmed" size="sm">You&apos;ve created new branch <Text variant="link" component="span" inherit>fix-notifications</Text> from master</Text>
      </Timeline.Item>

      <Timeline.Item
        bullet={<GitCommitIcon size={12} />}
        title="Commits"
        opposite={
          <Text size="sm" c="dimmed">
            52 minutes ago
          </Text>
        }
      >
        <Text c="dimmed" size="sm">You&apos;ve pushed 23 commits to <Text variant="link" component="span" inherit>fix-notifications branch</Text></Text>
      </Timeline.Item>

      <Timeline.Item
        title="Pull request"
        bullet={<GitPullRequestIcon size={12} />}
        lineVariant="dashed"
        opposite={
          <Text size="sm" c="dimmed">
            34 minutes ago
          </Text>
        }
      >
        <Text c="dimmed" size="sm">You&apos;ve submitted a pull request <Text variant="link" component="span" inherit>Fix incorrect notification message (#187)</Text></Text>
      </Timeline.Item>

      <Timeline.Item title="Code review" bullet={<ChatCircleDotsIcon size={12} />}>
        <Text c="dimmed" size="sm"><Text variant="link" component="span" inherit>Robert Gluesticker</Text> left a code review on your pull request</Text>
      </Timeline.Item>
    </Timeline>
  );
}
`;

function Demo() {
  return (
    <Timeline active={1} bulletSize={24} lineWidth={2}>
      <Timeline.Item
        bullet={<GitBranchIcon size={12} />}
        title="New branch"
        opposite={
          <Text size="sm" c="dimmed">
            2 hours ago
          </Text>
        }
      >
        <Text c="dimmed" size="sm">
          You&apos;ve created new branch{' '}
          <Text variant="link" component="span" inherit>
            fix-notifications
          </Text>{' '}
          from master
        </Text>
      </Timeline.Item>

      <Timeline.Item
        bullet={<GitCommitIcon size={12} />}
        title="Commits"
        opposite={
          <Text size="sm" c="dimmed">
            52 minutes ago
          </Text>
        }
      >
        <Text c="dimmed" size="sm">
          You&apos;ve pushed 23 commits to{' '}
          <Text variant="link" component="span" inherit>
            fix-notifications branch
          </Text>
        </Text>
      </Timeline.Item>

      <Timeline.Item
        title="Pull request"
        bullet={<GitPullRequestIcon size={12} />}
        lineVariant="dashed"
        opposite={
          <Text size="sm" c="dimmed">
            34 minutes ago
          </Text>
        }
      >
        <Text c="dimmed" size="sm">
          You&apos;ve submitted a pull request{' '}
          <Text variant="link" component="span" inherit>
            Fix incorrect notification message (#187)
          </Text>
        </Text>
      </Timeline.Item>

      <Timeline.Item title="Code review" bullet={<ChatCircleDotsIcon size={12} />}>
        <Text c="dimmed" size="sm">
          <Text variant="link" component="span" inherit>
            Robert Gluesticker
          </Text>{' '}
          left a code review on your pull request
        </Text>
      </Timeline.Item>
    </Timeline>
  );
}

export const opposite: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
  maxWidth: 480,
};

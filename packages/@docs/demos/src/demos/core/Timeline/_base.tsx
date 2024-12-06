import {
  IconGitBranch,
  IconGitCommit,
  IconGitPullRequest,
  IconMessageDots,
} from '@tabler/icons-react';
import { Text, Timeline, TimelineProps } from '@mantine/core';

export function TimelineBase({ noIcon, ...props }: Partial<TimelineProps> & { noIcon?: boolean }) {
  const displayIcon = !noIcon;
  return (
    <Timeline active={1} bulletSize={24} lineWidth={2} {...props}>
      <Timeline.Item bullet={displayIcon ? <IconGitBranch size={13} /> : null} title="New branch">
        <Text c="dimmed" size="sm">
          You&apos;ve created new branch{' '}
          <Text variant="link" component="span" inherit>
            fix-notifications
          </Text>{' '}
          from master
        </Text>
        <Text size="xs" mt={4}>
          2 hours ago
        </Text>
      </Timeline.Item>

      <Timeline.Item bullet={displayIcon ? <IconGitCommit size={13} /> : null} title="Commits">
        <Text c="dimmed" size="sm">
          You&apos;ve pushed 23 commits to{' '}
          <Text variant="link" component="span" inherit>
            fix-notifications
          </Text>{' '}
          branch
        </Text>
        <Text size="xs" mt={4}>
          52 minutes ago
        </Text>
      </Timeline.Item>

      <Timeline.Item
        title="Pull request"
        bullet={displayIcon ? <IconGitPullRequest size={13} /> : null}
        lineVariant="dashed"
      >
        <Text c="dimmed" size="sm">
          You&apos;ve submitted a pull request{' '}
          <Text variant="link" component="span" inherit>
            Fix incorrect notification message (#187)
          </Text>{' '}
        </Text>
        <Text size="xs" mt={4}>
          34 minutes ago
        </Text>
      </Timeline.Item>

      <Timeline.Item
        title="Code review"
        bullet={displayIcon ? <IconMessageDots size={13} /> : null}
      >
        <Text c="dimmed" size="sm">
          <Text variant="link" component="span" inherit>
            Robert Gluesticker
          </Text>{' '}
          left a code review on your pull request
        </Text>
        <Text size="xs" mt={4}>
          12 minutes ago
        </Text>
      </Timeline.Item>
    </Timeline>
  );
}

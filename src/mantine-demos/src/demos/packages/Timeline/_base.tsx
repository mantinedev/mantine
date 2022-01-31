import React from 'react';
import {
  CommentDiscussionIcon,
  GitPullRequestIcon,
  GitCommitIcon,
  GitBranchIcon,
} from '@primer/octicons-react';
import { Text, Timeline, TimelineProps } from '@mantine/core';

export function TimelineBase(props: Partial<TimelineProps> & { noIcon?: boolean }) {
  const displayIcon = !props?.noIcon;
  return (
    <Timeline active={1} bulletSize={24} lineWidth={2} {...props}>
      <Timeline.Item bullet={displayIcon ? <GitBranchIcon size={12} /> : null} title="New branch">
        <Text color="dimmed" size="sm">
          You&apos;ve created new branch{' '}
          <Text variant="link" component="span" inherit>
            fix-notifications
          </Text>{' '}
          from master
        </Text>
        <Text size="xs" style={{ marginTop: 4 }}>
          2 hours ago
        </Text>
      </Timeline.Item>

      <Timeline.Item bullet={displayIcon ? <GitCommitIcon size={12} /> : null} title="Commits">
        <Text color="dimmed" size="sm">
          You&apos;ve pushed 23 commits to{' '}
          <Text variant="link" component="span" inherit>
            fix-notifications
          </Text>{' '}
          branch
        </Text>
        <Text size="xs" style={{ marginTop: 4 }}>
          52 minutes ago
        </Text>
      </Timeline.Item>

      <Timeline.Item
        title="Pull request"
        bullet={displayIcon ? <GitPullRequestIcon size={12} /> : null}
        lineVariant="dashed"
      >
        <Text color="dimmed" size="sm">
          You&apos;ve submitted a pull request{' '}
          <Text variant="link" component="span" inherit>
            Fix incorrect notification message (#187)
          </Text>{' '}
        </Text>
        <Text size="xs" style={{ marginTop: 4 }}>
          34 minutes ago
        </Text>
      </Timeline.Item>

      <Timeline.Item
        title="Code review"
        bullet={displayIcon ? <CommentDiscussionIcon size={12} /> : null}
      >
        <Text color="dimmed" size="sm">
          <Text variant="link" component="span" inherit>
            Robert Gluesticker
          </Text>{' '}
          left a code review on your pull request
        </Text>
        <Text size="xs" style={{ marginTop: 4 }}>
          12 minutes ago
        </Text>
      </Timeline.Item>
    </Timeline>
  );
}

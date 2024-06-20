import {
  IconGitBranch,
  IconGitCommit,
  IconGitPullRequest,
  IconMessageDots,
} from '@tabler/icons-react';
import { Text } from '../Text';
import { Timeline } from './Timeline';

export default { title: 'Timeline' };

export function Usage() {
  return (
    <div style={{ margin: 40 }}>
      <Timeline active={1}>
        <Timeline.Item bullet={<IconGitBranch size={12} />} title="New branch">
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

        <Timeline.Item bullet={<IconGitCommit size={12} />} title="Commits">
          <Text c="dimmed" size="sm">
            You&apos;ve pushed 23 commits to
            <Text variant="link" component="span" inherit>
              fix-notifications branch
            </Text>
          </Text>
          <Text size="xs" mt={4}>
            52 minutes ago
          </Text>
        </Timeline.Item>

        <Timeline.Item
          title="Pull request"
          bullet={<IconGitPullRequest size={12} />}
          lineVariant="dashed"
        >
          <Text c="dimmed" size="sm">
            You&apos;ve submitted a pull request
            <Text variant="link" component="span" inherit>
              Fix incorrect notification message (#187)
            </Text>
          </Text>
          <Text size="xs" mt={4}>
            34 minutes ago
          </Text>
        </Timeline.Item>

        <Timeline.Item title="Code review" bullet={<IconMessageDots size={12} />}>
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
    </div>
  );
}

export function AutoContrast() {
  return (
    <div style={{ margin: 40 }}>
      <Timeline active={1} autoContrast color="lime.3">
        <Timeline.Item bullet={<IconGitBranch size={12} />} title="New branch">
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

        <Timeline.Item bullet={<IconGitCommit size={12} />} title="Commits">
          <Text c="dimmed" size="sm">
            You&apos;ve pushed 23 commits to
            <Text variant="link" component="span" inherit>
              fix-notifications branch
            </Text>
          </Text>
          <Text size="xs" mt={4}>
            52 minutes ago
          </Text>
        </Timeline.Item>

        <Timeline.Item
          title="Pull request"
          bullet={<IconGitPullRequest size={12} />}
          lineVariant="dashed"
        >
          <Text c="dimmed" size="sm">
            You&apos;ve submitted a pull request
            <Text variant="link" component="span" inherit>
              Fix incorrect notification message (#187)
            </Text>
          </Text>
          <Text size="xs" mt={4}>
            34 minutes ago
          </Text>
        </Timeline.Item>

        <Timeline.Item title="Code review" bullet={<IconMessageDots size={12} />}>
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
    </div>
  );
}

export function Unstyled() {
  return (
    <div style={{ margin: 40 }}>
      <Timeline active={1} bulletSize={24} lineWidth={2} unstyled>
        <Timeline.Item bullet={<IconGitBranch size={12} />} title="New branch">
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

        <Timeline.Item bullet={<IconGitCommit size={12} />} title="Commits">
          <Text c="dimmed" size="sm">
            You&apos;ve pushed 23 commits to
            <Text variant="link" component="span" inherit>
              fix-notifications branch
            </Text>
          </Text>
          <Text size="xs" mt={4}>
            52 minutes ago
          </Text>
        </Timeline.Item>

        <Timeline.Item
          title="Pull request"
          bullet={<IconGitPullRequest size={12} />}
          lineVariant="dashed"
        >
          <Text c="dimmed" size="sm">
            You&apos;ve submitted a pull request
            <Text variant="link" component="span" inherit>
              Fix incorrect notification message (#187)
            </Text>
          </Text>
          <Text size="xs" mt={4}>
            34 minutes ago
          </Text>
        </Timeline.Item>

        <Timeline.Item title="Code review" bullet={<IconMessageDots size={12} />}>
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
    </div>
  );
}

export function WithoutIcons() {
  return (
    <div style={{ margin: 40 }}>
      <Timeline active={1} bulletSize={24}>
        <Timeline.Item title="New branch">
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

        <Timeline.Item title="Commits">
          <Text c="dimmed" size="sm">
            You&apos;ve pushed 23 commits to
            <Text variant="link" component="span" inherit>
              fix-notifications branch
            </Text>
          </Text>
          <Text size="xs" mt={4}>
            52 minutes ago
          </Text>
        </Timeline.Item>

        <Timeline.Item title="Pull request" lineVariant="dashed">
          <Text c="dimmed" size="sm">
            You&apos;ve submitted a pull request
            <Text variant="link" component="span" inherit>
              Fix incorrect notification message (#187)
            </Text>
          </Text>
          <Text size="xs" mt={4}>
            34 minutes ago
          </Text>
        </Timeline.Item>

        <Timeline.Item title="Code review">
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
    </div>
  );
}

export function AlignRight() {
  return (
    <div style={{ margin: 40 }}>
      <Timeline active={1} bulletSize={24} align="right">
        <Timeline.Item title="New branch">
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

        <Timeline.Item title="Commits">
          <Text c="dimmed" size="sm">
            You&apos;ve pushed 23 commits to
            <Text variant="link" component="span" inherit>
              fix-notifications branch
            </Text>
          </Text>
          <Text size="xs" mt={4}>
            52 minutes ago
          </Text>
        </Timeline.Item>

        <Timeline.Item title="Pull request" lineVariant="dashed">
          <Text c="dimmed" size="sm">
            You&apos;ve submitted a pull request
            <Text variant="link" component="span" inherit>
              Fix incorrect notification message (#187)
            </Text>
          </Text>
          <Text size="xs" mt={4}>
            34 minutes ago
          </Text>
        </Timeline.Item>

        <Timeline.Item title="Code review">
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
    </div>
  );
}

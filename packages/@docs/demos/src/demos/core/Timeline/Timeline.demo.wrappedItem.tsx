import { GitBranchIcon, GitCommitIcon, GitPullRequestIcon } from '@phosphor-icons/react';
import { Box, Text, Timeline, Tooltip } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Text, Timeline, Tooltip } from '@mantine/core';
import { GitBranchIcon, GitCommitIcon, GitPullRequestIcon } from '@phosphor-icons/react';

// Timeline cannot see through your component, so the index must reach
// Timeline.Item: either forward the props the wrapper receives, as here,
// or declare index={1} on Timeline.Item directly
function ReviewedItem({ index, children }: { index?: number; children?: React.ReactNode }) {
  return (
    <Tooltip label="Reviewed by Robert Gluesticker" position="right">
      <Timeline.Item index={index} bullet={<GitCommitIcon size={12} />} title="Commits">
        {children}
      </Timeline.Item>
    </Tooltip>
  );
}

function Demo() {
  return (
    <Timeline active={1} bulletSize={24} lineWidth={2}>
      <Timeline.Item bullet={<GitBranchIcon size={12} />} title="New branch">
        <Text c="dimmed" size="sm">You&apos;ve created a new branch</Text>
      </Timeline.Item>

      <ReviewedItem>
        <Text c="dimmed" size="sm">You&apos;ve pushed 23 commits</Text>
      </ReviewedItem>

      <Timeline.Item bullet={<GitPullRequestIcon size={12} />} title="Pull request">
        <Text c="dimmed" size="sm">You&apos;ve submitted a pull request</Text>
      </Timeline.Item>
    </Timeline>
  );
}
`;

function ReviewedItem({ index, children }: { index?: number; children?: React.ReactNode }) {
  return (
    <Tooltip label="Reviewed by Robert Gluesticker" position="right">
      <Timeline.Item index={index} bullet={<GitCommitIcon size={12} />} title="Commits">
        {children}
      </Timeline.Item>
    </Tooltip>
  );
}

function Demo() {
  return (
    <Box maw={320} mx="auto">
      <Timeline active={1} bulletSize={24} lineWidth={2}>
        <Timeline.Item bullet={<GitBranchIcon size={12} />} title="New branch">
          <Text c="dimmed" size="sm">
            You&apos;ve created a new branch
          </Text>
        </Timeline.Item>

        <ReviewedItem>
          <Text c="dimmed" size="sm">
            You&apos;ve pushed 23 commits
          </Text>
        </ReviewedItem>

        <Timeline.Item bullet={<GitPullRequestIcon size={12} />} title="Pull request">
          <Text c="dimmed" size="sm">
            You&apos;ve submitted a pull request
          </Text>
        </Timeline.Item>
      </Timeline>
    </Box>
  );
}

export const wrappedItem: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};

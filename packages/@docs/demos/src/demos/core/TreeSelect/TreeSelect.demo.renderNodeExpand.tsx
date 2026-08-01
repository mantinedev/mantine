import { CaretRightIcon } from '@phosphor-icons/react';
import { Group, TreeSelect, TreeSelectProps } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import { data, dataCode } from './data';

const code = `
import { CaretRightIcon } from '@phosphor-icons/react';
import { Group, TreeSelect, TreeSelectProps } from '@mantine/core';
import { data } from './data';

const renderTreeNode: TreeSelectProps['renderNode'] = ({ node, hasChildren, expanded, expand }) => (
  <Group gap="xs" wrap="nowrap">
    {hasChildren ? (
      <CaretRightIcon
        size={14}
        onClick={expand}
        style={{
          cursor: 'pointer',
          transform: expanded ? 'rotate(90deg)' : undefined,
          transition: 'transform 150ms ease',
        }}
      />
    ) : (
      <span style={{ display: 'inline-block', width: 14 }} />
    )}
    <span>{node.label}</span>
  </Group>
);

function Demo() {
  return (
    <TreeSelect
      label="Your favorite item"
      placeholder="Pick value"
      data={data}
      renderNode={renderTreeNode}
      expandOnClick={false}
    />
  );
}
`;

const renderTreeNode: TreeSelectProps['renderNode'] = ({ node, hasChildren, expanded, expand }) => (
  <Group gap="xs" wrap="nowrap">
    {hasChildren ? (
      <CaretRightIcon
        size={14}
        onClick={expand}
        style={{
          cursor: 'pointer',
          transform: expanded ? 'rotate(90deg)' : undefined,
          transition: 'transform 150ms ease',
        }}
      />
    ) : (
      <span style={{ display: 'inline-block', width: 14 }} />
    )}
    <span>{node.label}</span>
  </Group>
);

function Demo() {
  return (
    <TreeSelect
      label="Your favorite item"
      placeholder="Pick value"
      data={data}
      renderNode={renderTreeNode}
      expandOnClick={false}
    />
  );
}

export const renderNodeExpand: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { fileName: 'Demo.tsx', language: 'tsx', code },
    { fileName: 'data.ts', language: 'tsx', code: dataCode },
  ],
  maxWidth: 340,
  centered: true,
  defaultExpanded: false,
};

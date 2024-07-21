import { IconChevronDown } from '@tabler/icons-react';
import { Checkbox, Group, Tree } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import { data, dataCode } from './data';

const code = `
import { IconChevronDown } from '@tabler/icons-react';
import { Group, Tree } from '@mantine/core';
import { data } from './data';

function Demo() {
  return (
    <Tree
      data={data}
      levelOffset={23}
      renderNode={({ node, expanded, hasChildren, elementProps }) => (
        <Group gap={5} {...elementProps}>
          {hasChildren && (
            <IconChevronDown
              size={18}
              style={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
            />
          )}

          <span>{node.label}</span>
        </Group>
      )}
    />
  );
}
`;

function Demo() {
  return (
    <Tree
      data={data}
      levelOffset={23}
      expandOnClick={false}
      renderNode={({ node, expanded, hasChildren, elementProps, tree }) => (
        <Group gap="xs" {...elementProps}>
          <Checkbox.Indicator
            checked={tree.isNodeChecked(node.value)}
            indeterminate={tree.isNodeIndeterminate(node.value)}
            onClick={() => tree.toggleNodeCheck(node.value)}
          />

          <Group gap={5} onClick={() => tree.toggleExpanded(node.value)}>
            <span>{node.label}</span>

            {hasChildren && (
              <IconChevronDown
                size={14}
                style={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
              />
            )}
          </Group>
        </Group>
      )}
    />
  );
}

export const checked: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { fileName: 'Demo.tsx', language: 'tsx', code },
    { fileName: 'data.ts', language: 'tsx', code: dataCode },
  ],
};

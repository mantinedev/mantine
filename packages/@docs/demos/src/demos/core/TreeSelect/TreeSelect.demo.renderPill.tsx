import { FileTextIcon, FolderSimpleIcon } from '@phosphor-icons/react';
import { Group, Pill, TreeSelect, TreeSelectProps } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import { data, dataCode } from './data';

const code = `
import { FileTextIcon, FolderSimpleIcon } from '@phosphor-icons/react';
import { Group, Pill, TreeSelect, TreeSelectProps } from '@mantine/core';
import { data } from './data';

const renderTreePill: TreeSelectProps['renderPill'] = ({ node, onRemove, disabled, readOnly }) => (
  <Pill withRemoveButton={!readOnly} onRemove={onRemove} disabled={disabled}>
    <Group gap={4} wrap="nowrap">
      {node.children || node.hasChildren ? (
        <FolderSimpleIcon size={12} />
      ) : (
        <FileTextIcon size={12} />
      )}
      {node.label}
    </Group>
  </Pill>
);

function Demo() {
  return (
    <TreeSelect
      mode="checkbox"
      checkedStrategy="parent"
      label="Categories"
      placeholder="Pick categories"
      data={data}
      defaultValue={['phones', 'headphones']}
      defaultExpandAll
      renderPill={renderTreePill}
    />
  );
}
`;

const renderTreePill: TreeSelectProps['renderPill'] = ({ node, onRemove, disabled, readOnly }) => (
  <Pill withRemoveButton={!readOnly} onRemove={onRemove} disabled={disabled}>
    <Group gap={4} wrap="nowrap">
      {node.children || node.hasChildren ? (
        <FolderSimpleIcon size={12} />
      ) : (
        <FileTextIcon size={12} />
      )}
      {node.label}
    </Group>
  </Pill>
);

function Demo() {
  return (
    <TreeSelect
      mode="checkbox"
      checkedStrategy="parent"
      label="Categories"
      placeholder="Pick categories"
      data={data}
      defaultValue={['phones', 'headphones']}
      defaultExpandAll
      renderPill={renderTreePill}
    />
  );
}

export const renderPill: MantineDemo = {
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

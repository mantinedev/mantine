import { useState } from 'react';
import { Stack, TreeSelect } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import { data, dataCode } from './data';

const code = `
import { useState } from 'react';
import { Stack, TreeSelect } from '@mantine/core';
import { data } from './data';

function Demo() {
  const [childValue, setChildValue] = useState<string[]>([]);
  const [allValue, setAllValue] = useState<string[]>([]);
  const [parentValue, setParentValue] = useState<string[]>([]);

  return (
    <Stack>
      <TreeSelect
        label="checkedStrategy: child (default)"
        placeholder="Pick values"
        data={data}
        mode="checkbox"
        checkedStrategy="child"
        defaultExpandAll
        value={childValue}
        onChange={setChildValue}
      />
      <TreeSelect
        label="checkedStrategy: all"
        placeholder="Pick values"
        data={data}
        mode="checkbox"
        checkedStrategy="all"
        defaultExpandAll
        value={allValue}
        onChange={setAllValue}
      />
      <TreeSelect
        label="checkedStrategy: parent"
        placeholder="Pick values"
        data={data}
        mode="checkbox"
        checkedStrategy="parent"
        defaultExpandAll
        value={parentValue}
        onChange={setParentValue}
      />
    </Stack>
  );
}
`;

function Demo() {
  const [childValue, setChildValue] = useState<string[]>([]);
  const [allValue, setAllValue] = useState<string[]>([]);
  const [parentValue, setParentValue] = useState<string[]>([]);

  return (
    <Stack>
      <TreeSelect
        label="checkedStrategy: child (default)"
        placeholder="Pick values"
        data={data}
        mode="checkbox"
        checkedStrategy="child"
        defaultExpandAll
        value={childValue}
        onChange={setChildValue}
      />
      <TreeSelect
        label="checkedStrategy: all"
        placeholder="Pick values"
        data={data}
        mode="checkbox"
        checkedStrategy="all"
        defaultExpandAll
        value={allValue}
        onChange={setAllValue}
      />
      <TreeSelect
        label="checkedStrategy: parent"
        placeholder="Pick values"
        data={data}
        mode="checkbox"
        checkedStrategy="parent"
        defaultExpandAll
        value={parentValue}
        onChange={setParentValue}
      />
    </Stack>
  );
}

export const checkedStrategy: MantineDemo = {
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

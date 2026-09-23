import { useState } from 'react';
import { MultiSelect, MultiSelectProps, useMultiSelect } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useState } from 'react';
import { MultiSelect, MultiSelectProps, useMultiSelect } from '@mantine/core';

interface CreatableMultiSelectProps extends Omit<
  MultiSelectProps,
  'data' | 'store' | 'renderOption'
> {
  data: string[];
  onCreate: (item: string) => void;
}

function CreatableMultiSelect({
  data,
  onCreate,
  value,
  defaultValue,
  onChange,
  ...others
}: CreatableMultiSelectProps) {
  const store = useMultiSelect({
    value,
    defaultValue,
    onChange: (items) => {
      items.filter((item) => !data.includes(item)).forEach(onCreate);
      onChange?.(items);
    },
  });

  const search = store.getSearch().trim();
  const canCreate = search !== '' && !data.includes(search);

  return (
    <MultiSelect
      {...others}
      store={store}
      searchable
      data={canCreate ? [...data, search] : data}
      renderOption={({ option }) =>
        data.includes(option.value) ? option.label : \`+ Create \${option.label}\`
      }
    />
  );
}

function Demo() {
  const [data, setData] = useState(['Apples', 'Bananas', 'Broccoli', 'Carrots', 'Chocolate']);

  return (
    <CreatableMultiSelect
      label="Your favorite groceries"
      placeholder="Search or create"
      data={data}
      onCreate={(item) => setData((current) => [...current, item])}
    />
  );
}
`;

interface CreatableMultiSelectProps extends Omit<
  MultiSelectProps,
  'data' | 'store' | 'renderOption'
> {
  data: string[];
  onCreate: (item: string) => void;
}

function CreatableMultiSelect({
  data,
  onCreate,
  value,
  defaultValue,
  onChange,
  ...others
}: CreatableMultiSelectProps) {
  const store = useMultiSelect({
    value,
    defaultValue,
    onChange: (items) => {
      items.filter((item) => !data.includes(item)).forEach(onCreate);
      onChange?.(items);
    },
  });

  const search = store.getSearch().trim();
  const canCreate = search !== '' && !data.includes(search);

  return (
    <MultiSelect
      {...others}
      store={store}
      searchable
      data={canCreate ? [...data, search] : data}
      renderOption={({ option }) =>
        data.includes(option.value) ? option.label : `+ Create ${option.label}`
      }
    />
  );
}

function Demo() {
  const [data, setData] = useState(['Apples', 'Bananas', 'Broccoli', 'Carrots', 'Chocolate']);

  return (
    <CreatableMultiSelect
      label="Your favorite groceries"
      placeholder="Search or create"
      data={data}
      onCreate={(item) => setData((current) => [...current, item])}
    />
  );
}

export const creatable: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
  centered: true,
  maxWidth: 340,
};

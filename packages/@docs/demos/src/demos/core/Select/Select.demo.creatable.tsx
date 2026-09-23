import { useState } from 'react';
import { Select, SelectProps, useSelect } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useState } from 'react';
import { Select, SelectProps, useSelect } from '@mantine/core';

interface CreatableSelectProps extends Omit<SelectProps, 'data' | 'store' | 'renderOption'> {
  data: string[];
  onCreate: (item: string) => void;
}

function CreatableSelect({ data, onCreate, value, defaultValue, onChange, ...others }: CreatableSelectProps) {
  const store = useSelect({
    value,
    defaultValue,
    onChange: (item, option) => {
      if (item !== null && !data.includes(item)) {
        onCreate(item);
      }

      onChange?.(item, option);
    },
  });

  const search = store.getSearch().trim();
  const canCreate = search !== '' && !data.includes(search);

  return (
    <Select
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
    <CreatableSelect
      label="Your favorite grocery"
      placeholder="Search or create"
      data={data}
      onCreate={(item) => setData((current) => [...current, item])}
    />
  );
}
`;

interface CreatableSelectProps extends Omit<SelectProps, 'data' | 'store' | 'renderOption'> {
  data: string[];
  onCreate: (item: string) => void;
}

function CreatableSelect({
  data,
  onCreate,
  value,
  defaultValue,
  onChange,
  ...others
}: CreatableSelectProps) {
  const store = useSelect({
    value,
    defaultValue,
    onChange: (item, option) => {
      if (item !== null && !data.includes(item)) {
        onCreate(item);
      }

      onChange?.(item, option);
    },
  });

  const search = store.getSearch().trim();
  const canCreate = search !== '' && !data.includes(search);

  return (
    <Select
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
    <CreatableSelect
      label="Your favorite grocery"
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

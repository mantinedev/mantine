import { useState } from 'react';
import { Cascader, CascaderOption } from './Cascader';

export default { title: 'Cascader' };

const data: CascaderOption[] = [
  {
    value: 'asia',
    label: 'Asia',
    children: [
      {
        value: 'jp',
        label: 'Japan',
        children: [
          { value: 'tokyo', label: 'Tokyo' },
          { value: 'osaka', label: 'Osaka' },
        ],
      },
      {
        value: 'kr',
        label: 'South Korea',
        children: [
          { value: 'seoul', label: 'Seoul' },
          { value: 'busan', label: 'Busan', disabled: true },
        ],
      },
    ],
  },
  {
    value: 'europe',
    label: 'Europe',
    children: [
      {
        value: 'fr',
        label: 'France',
        children: [
          { value: 'paris', label: 'Paris' },
          { value: 'lyon', label: 'Lyon' },
        ],
      },
      { value: 'de', label: 'Germany', disabled: true },
    ],
  },
];

export function Usage() {
  return (
    <div style={{ padding: 40, maxWidth: 340 }}>
      <Cascader label="Location" placeholder="Pick location" data={data} />
    </div>
  );
}

export function XlOpened() {
  return (
    <div style={{ padding: 40, maxWidth: 340 }}>
      <Cascader
        size="xl"
        label="Location"
        placeholder="Pick location"
        defaultValue={['asia', 'jp', 'tokyo']}
        defaultDropdownOpened
        data={data}
      />
    </div>
  );
}

export function ChangeOnSelect() {
  return (
    <div style={{ padding: 40, maxWidth: 340 }}>
      <Cascader changeOnSelect label="Location" placeholder="Pick location" data={data} />
    </div>
  );
}

export function HoverExpand() {
  return (
    <div style={{ padding: 40, maxWidth: 340 }}>
      <Cascader expandTrigger="hover" label="Location" placeholder="Pick location" data={data} />
    </div>
  );
}

export function Searchable() {
  return (
    <div style={{ padding: 40, maxWidth: 340 }}>
      <Cascader
        searchable
        label="Location"
        placeholder="Search location"
        nothingFoundMessage="Nothing found..."
        data={data}
      />
    </div>
  );
}

export function Clearable() {
  return (
    <div style={{ padding: 40, maxWidth: 340 }}>
      <Cascader clearable label="Location" defaultValue={['asia', 'jp', 'tokyo']} data={data} />
    </div>
  );
}

export function Controlled() {
  const [value, setValue] = useState<string[] | null>(['europe', 'fr', 'paris']);
  return (
    <div style={{ padding: 40, maxWidth: 340 }}>
      <Cascader label="Location" data={data} value={value} onChange={setValue} />
      <div>{JSON.stringify(value)}</div>
    </div>
  );
}

export function Unstyled() {
  return (
    <div style={{ padding: 40, maxWidth: 340 }}>
      <Cascader unstyled label="Location" placeholder="Pick location" data={data} />
    </div>
  );
}

export function SafeAreaPolygon() {
  return (
    <div style={{ padding: 40, maxWidth: 340 }}>
      <Cascader
        label="Safe area (default)"
        placeholder="Hover to expand"
        expandTrigger="hover"
        data={data}
      />

      <Cascader
        mt="xl"
        label="Safe area disabled"
        placeholder="Hover to expand"
        expandTrigger="hover"
        safeAreaPolygon={false}
        data={data}
      />
    </div>
  );
}

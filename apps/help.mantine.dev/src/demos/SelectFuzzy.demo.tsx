import Fuse from 'fuse.js';
import { Select } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import Fuse from 'fuse.js';
import { Select } from '@mantine/core';
import { data } from './data.json';

function Demo() {
  return (
    <Select
      label="Your country"
      placeholder="Select country"
      searchable
      data={data}
      filter={({ options, search }) => {
        const fuse = new Fuse(options, { keys: ['label', 'value'] });
        return search ? fuse.search(search).map((item) => item.item) : options;
      }}
    />
  );
}
`;

const data = [
  { value: 'ca', label: 'Canada' },
  { value: 'br', label: 'Brazil' },
  { value: 'in', label: 'India' },
  { value: 'mx', label: 'Mexico' },
  { value: 'au', label: 'Australia' },
  { value: 'kr', label: 'South Korea' },
  { value: 'id', label: 'Indonesia' },
  { value: 'tr', label: 'Turkey' },
  { value: 'nl', label: 'Netherlands' },
  { value: 'ch', label: 'Switzerland' },
  { value: 'sa', label: 'Saudi Arabia' },
  { value: 'se', label: 'Sweden' },
  { value: 'pl', label: 'Poland' },
  { value: 'ar', label: 'Argentina' },
  { value: 'be', label: 'Belgium' },
  { value: 'th', label: 'Thailand' },
  { value: 'at', label: 'Austria' },
  { value: 'ae', label: 'United Arab Emirates' },
  { value: 'hk', label: 'Hong Kong' },
  { value: 'dk', label: 'Denmark' },
  { value: 'sg', label: 'Singapore' },
  { value: 'my', label: 'Malaysia' },
  { value: 'no', label: 'Norway' },
  { value: 'ng', label: 'Nigeria' },
  { value: 'cz', label: 'Czech Republic' },
  { value: 'za', label: 'South Africa' },
  { value: 'ro', label: 'Romania' },
];

function Demo() {
  return (
    <Select
      label="Your country"
      placeholder="Select country"
      searchable
      data={data}
      filter={({ options, search }) => {
        const fuse = new Fuse(options, { keys: ['label', 'value'] });
        return search ? fuse.search(search).map((item) => item.item) : options;
      }}
    />
  );
}

export const SelectFuzzy: MantineDemo = {
  type: 'code',
  component: Demo,
  code: [
    { fileName: 'Demo.tsx', code, language: 'tsx' },
    { fileName: 'data.json', code: JSON.stringify(data, null, 2), language: 'json' },
  ],
};

import { Select } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Select } from '@mantine/core';

function Demo() {
  return (
    <Select
      label="Your country"
      placeholder="Select country"
      searchable
      data={[
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
      ]}
    />
  );
}
`;

function Demo() {
  return (
    <Select
      label="Your country"
      placeholder="Select country"
      searchable
      data={[
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
        { value: 'dk', label: 'Denmark' },
        { value: 'sg', label: 'Singapore' },
        { value: 'my', label: 'Malaysia' },
        { value: 'no', label: 'Norway' },
        { value: 'ng', label: 'Nigeria' },
        { value: 'cz', label: 'Czech Republic' },
        { value: 'za', label: 'South Africa' },
        { value: 'ro', label: 'Romania' },
      ]}
    />
  );
}

export const SelectCountry: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
  maxWidth: 340,
  defaultExpanded: false,
};

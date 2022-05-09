import { getComboboxData } from './get-combobox-data';

const withoutGroups = [
  { value: 'banana', label: 'banana' },
  { value: 'orange', label: 'orange' },
  'apple',
];
const withGroups = [
  { value: 'banana', group: 'sweet' },
  { value: 'pineapple', group: 'sweet' },
  'orange',
  { value: 'apple', group: 'sour' },
];

describe('@mantine/core/Combobox/get-combobox-items', () => {
  it('correctly handles items without groups', () => {
    expect(getComboboxData(withoutGroups)).toStrictEqual({
      grouped: [],
      ungrouped: [
        { value: 'banana', label: 'banana' },
        { value: 'orange', label: 'orange' },
        { value: 'apple', label: 'apple' },
      ],
      length: withoutGroups.length,
    });
  });

  it('correctly handlers items with groups', () => {
    expect(getComboboxData(withGroups)).toStrictEqual({
      grouped: [
        {
          label: 'sweet',
          items: [
            { value: 'banana', group: 'sweet' },
            { value: 'pineapple', group: 'sweet' },
          ],
        },

        { label: 'sour', items: [{ value: 'apple', group: 'sour' }] },
      ],
      ungrouped: [{ value: 'orange', label: 'orange' }],
      length: withGroups.length,
    });
  });
});

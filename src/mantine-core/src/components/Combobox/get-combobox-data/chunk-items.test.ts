import { chunkItems } from './chunk-items';
import { ComboboxItemData } from '../types';

const withoutGroups: ComboboxItemData[] = [
  { value: 'banana' },
  { value: 'orange' },
  { value: 'apple' },
];
const withGroups: ComboboxItemData[] = [
  { value: 'banana', group: 'sweet' },
  { value: 'pineapple', group: 'sweet' },
  { value: 'orange' },
  { value: 'apple', group: 'sour' },
];

describe('@mantine/core/Combobox/chunk-items', () => {
  it('correctly handles items without groups', () => {
    expect(chunkItems(withoutGroups)).toStrictEqual({
      grouped: [],
      ungrouped: withoutGroups,
      length: withoutGroups.length,
    });
  });

  it('correctly handlers items with groups', () => {
    expect(chunkItems(withGroups)).toStrictEqual({
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
      ungrouped: [{ value: 'orange' }],
      length: withGroups.length,
    });
  });
});

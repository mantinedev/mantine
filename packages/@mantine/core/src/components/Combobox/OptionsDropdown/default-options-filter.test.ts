import { defaultOptionsFilter } from './default-options-filter';

const flat = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'preact', label: 'Preact' },
];

const grouped = [
  {
    group: 'Frontend',
    items: [
      { value: 'react', label: 'React' },
      { value: 'vue', label: 'Vue' },
      { value: 'preact', label: 'Preact' },
    ],
  },
  {
    group: 'Backend',
    items: [
      { value: 'express', label: 'Express' },
      { value: 'nest', label: 'Nest' },
    ],
  },
];

describe('@mantine/core/Combobox/default-options-filter', () => {
  it('filters options by label, case-insensitive and ignoring surrounding whitespace', () => {
    expect(defaultOptionsFilter({ options: flat, search: '  REACT ', limit: Infinity })).toEqual([
      { value: 'react', label: 'React' },
      { value: 'preact', label: 'Preact' },
    ]);
  });

  it('returns all options for empty search', () => {
    expect(defaultOptionsFilter({ options: flat, search: '', limit: Infinity })).toEqual(flat);
  });

  it('limits the number of options', () => {
    expect(defaultOptionsFilter({ options: flat, search: '', limit: 2 })).toEqual(flat.slice(0, 2));
  });

  it('filters options inside groups', () => {
    expect(defaultOptionsFilter({ options: grouped, search: 'press', limit: Infinity })).toEqual([
      { group: 'Frontend', items: [] },
      { group: 'Backend', items: [{ value: 'express', label: 'Express' }] },
    ]);
  });

  it('counts options across groups when applying limit', () => {
    expect(defaultOptionsFilter({ options: grouped, search: '', limit: 4 })).toEqual([
      { group: 'Frontend', items: grouped[0].items },
      { group: 'Backend', items: [{ value: 'express', label: 'Express' }] },
    ]);

    expect(defaultOptionsFilter({ options: grouped, search: '', limit: 2 })).toEqual([
      { group: 'Frontend', items: grouped[0].items.slice(0, 2) },
    ]);
  });
});

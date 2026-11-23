import { defaultOptionsFilter } from './default-options-filter';

const data = [
  { group: 'Europe', items: [{ value: 'Germany', label: 'Germany' }] },
  { group: 'Asia', items: [{ value: 'Japan', label: 'Japan' }] },
];

describe('@mantine/core/default-options-filter', () => {
  it('filters flat options by search', () => {
    const result = defaultOptionsFilter({
      options: [
        { value: 'test-1', label: 'test-1' },
        { value: 'test-2', label: 'test-2' },
      ],
      search: 'test-2',
      limit: Infinity,
    });

    expect(result).toStrictEqual([{ value: 'test-2', label: 'test-2' }]);
  });

  it('filters options inside groups', () => {
    const result = defaultOptionsFilter({ options: data, search: 'Germany', limit: Infinity });
    expect(result).toStrictEqual([
      { group: 'Europe', items: [{ value: 'Germany', label: 'Germany' }] },
    ]);
  });

  it('does not include groups with no matching items', () => {
    const result = defaultOptionsFilter({ options: data, search: 'Jap', limit: Infinity });
    expect(result).toStrictEqual([{ group: 'Asia', items: [{ value: 'Japan', label: 'Japan' }] }]);
  });

  it('returns empty array when no options match search', () => {
    const result = defaultOptionsFilter({ options: data, search: 'test-3', limit: Infinity });
    expect(result).toStrictEqual([]);
  });
});

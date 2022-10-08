import { filterData } from './filter-data';
import { defaultFilter } from '../Select';
import { SelectItem } from '../types';

const data = [
  { value: 'react', label: 'React' },
  { value: 'ng', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'vue', label: 'Vue' },
];

const baseOptions = {
  data,
  limit: Infinity,
  filter: defaultFilter,
  filterDataOnExactSearchMatch: false,
  value: null,
};

describe('@mantine/core/Select/filter-data', () => {
  it('returns unmodified data if input is not searchable', () => {
    expect(filterData({ ...baseOptions, searchable: false, searchValue: '' })).toBe(data);
  });

  it('filters data based on custom filter function', () => {
    const filter = (searchValue: string, item: SelectItem) => item.name.includes(searchValue);
    expect(
      filterData({
        data: data.map((item) => ({ ...item, name: item.label })),
        limit: Infinity,
        filter,
        searchable: true,
        searchValue: 'Rea',
        filterDataOnExactSearchMatch: false,
        value: null,
      })
    ).toStrictEqual([{ value: 'react', label: 'React', name: 'React' }]);
  });

  it('limits data during search based on limit prop', () => {
    const spy = jest.fn();
    const filter = (searchValue: string, item: SelectItem) => {
      spy();
      return defaultFilter(searchValue, item);
    };

    expect(
      filterData({
        data: Array(100)
          .fill(0)
          .map((_, index) => ({ value: index.toString(), label: index.toString() })),
        limit: 20,
        filter,
        searchable: true,
        searchValue: '',
        filterDataOnExactSearchMatch: false,
        value: null,
      })
    ).toHaveLength(20);

    expect(spy).toHaveBeenCalledTimes(20);
  });

  it('does not filter data if search value is an exact match with selected item label and filterDataOnExactSearchMatch is set to false', () => {
    expect(
      filterData({ ...baseOptions, searchable: true, searchValue: 'React', value: 'react' })
    ).toStrictEqual(data);

    expect(
      filterData({ ...baseOptions, searchable: true, searchValue: 'Reac', value: 'react' })
    ).toStrictEqual([{ value: 'react', label: 'React' }]);

    expect(
      filterData({
        ...baseOptions,
        searchable: true,
        searchValue: 'React',
        value: 'react',
        filterDataOnExactSearchMatch: true,
      })
    ).toStrictEqual([{ value: 'react', label: 'React' }]);
  });
});

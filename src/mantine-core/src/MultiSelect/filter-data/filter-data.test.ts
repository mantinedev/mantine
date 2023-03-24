import { filterData } from './filter-data';
import { defaultFilter } from '../MultiSelect';
import { SelectItem } from '../../Select/types';

const data = [
  { value: 'react', label: 'React' },
  { value: 'ng', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'vue', label: 'Vue' },
];

const baseOptions = { data, limit: Infinity, filter: defaultFilter };

describe('@mantine/core/MultiSelect/filter-data', () => {
  it('returns unmodified data if input is not searchable and value is empty', () => {
    expect(filterData({ ...baseOptions, searchable: false, searchValue: '', value: [] })).toBe(
      data
    );
  });

  it('removes selected items from input that is not searchable', () => {
    expect(
      filterData({ ...baseOptions, searchable: false, searchValue: '', value: ['vue', 'ng'] })
    ).toStrictEqual(data.filter((item) => item.value !== 'vue' && item.value !== 'ng'));
  });

  it('keeps selected items in input that is not searchable and has disabled selected item filtering', () => {
    expect(
      filterData({
        ...baseOptions,
        disableSelectedItemFiltering: true,
        searchable: false,
        searchValue: '',
        value: ['vue', 'ng'],
      })
    ).toStrictEqual(data);
  });

  it('keeps selected items in input that is searchable and has disabled selected item filtering', () => {
    expect(
      filterData({
        ...baseOptions,
        disableSelectedItemFiltering: true,
        searchable: true,
        searchValue: '',
        value: ['vue', 'ng'],
      })
    ).toStrictEqual(data);
  });

  it('sends filter selected parameter as false when input has disabled selected item filtering', () => {
    const spy = jest.fn();

    filterData({
      ...baseOptions,
      disableSelectedItemFiltering: true,
      filter: spy,
      searchable: true,
      searchValue: '',
      value: ['vue', 'ng'],
    });

    spy.mock.calls.forEach((call) => {
      expect(call[1]).toStrictEqual(false);
    });
  });

  it('filters items with given filter function', () => {
    const filter = (searchValue: string, selected: boolean, item: SelectItem) =>
      item.name.includes(searchValue);
    expect(
      filterData({
        data: data.map((item) => ({ ...item, name: item.label })),
        limit: Infinity,
        filter,
        searchable: true,
        searchValue: 'Rea',
        value: [],
      })
    ).toStrictEqual([{ value: 'react', label: 'React', name: 'React' }]);
  });

  it('limits data during search based on limit prop', () => {
    expect(
      filterData({
        ...baseOptions,
        data: Array(100)
          .fill(0)
          .map((_, index) => ({ value: index.toString(), label: index.toString() })),
        searchValue: '',
        searchable: true,
        value: [],
        limit: 20,
      })
    ).toHaveLength(20);
  });
});

import { filterData } from './filter-data';
import { defaultFilter, AutocompleteItem } from '../Autocomplete';

const data = [{ value: 'react' }, { value: 'ng' }, { value: 'svelte' }, { value: 'vue' }];

describe('@mantine/core/Autocomplete/filter-data', () => {
  it('filters data based on value', () => {
    expect(
      filterData({
        data,
        limit: Infinity,
        filter: defaultFilter,
        value: 're',
      })
    ).toStrictEqual([{ value: 'react' }]);
  });

  it('does not call filter function more times than required', () => {
    const fullSpy = jest.fn();
    const partialSpy = jest.fn();

    const fullFilter = (searchValue: string, item: AutocompleteItem) => {
      fullSpy();
      return defaultFilter(searchValue, item);
    };

    const partialFilter = (searchValue: string, item: AutocompleteItem) => {
      partialSpy();
      return defaultFilter(searchValue, item);
    };

    expect(
      filterData({
        data: Array(100)
          .fill(0)
          .map((_, index) => ({ value: index.toString(), label: index.toString() })),
        limit: 20,
        filter: fullFilter,
        value: '55',
      })
    ).toHaveLength(1);

    expect(
      filterData({
        data: Array(100)
          .fill(0)
          .map((_, index) => ({ value: index.toString(), label: index.toString() })),
        limit: 20,
        filter: partialFilter,
        value: '',
      })
    ).toHaveLength(20);

    expect(fullSpy).toHaveBeenCalledTimes(100);
    expect(partialSpy).toHaveBeenCalledTimes(20);
  });
});

import { getSeriesLabels } from './get-series-labels';

describe('@mantine/charts/utils/get-series-labels', () => {
  it('returns empty object if series is not provided', () => {
    expect(getSeriesLabels(undefined)).toEqual({});
  });

  it('returns object with series names as keys and series labels as values', () => {
    expect(
      getSeriesLabels([
        {
          name: 'test-1',
          label: 'Test 1',
          color: 'blue',
        },
        {
          name: 'test-2',
          label: 'Test 2',
          color: 'red',
        },
      ])
    ).toEqual({
      'test-1': 'Test 1',
      'test-2': 'Test 2',
    });
  });
});

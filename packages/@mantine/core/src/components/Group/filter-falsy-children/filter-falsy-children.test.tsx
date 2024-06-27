import { filterFalsyChildren } from './filter-falsy-children';

describe('@mantine/core/utils/filter-falsy-children', () => {
  it('remove falsy children', () => {
    expect(filterFalsyChildren([undefined, null, false, '', <div key="1" />]).length).toBe(1);
  });
});

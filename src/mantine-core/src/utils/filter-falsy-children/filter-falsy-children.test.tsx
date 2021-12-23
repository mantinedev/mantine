import React from 'react';
import { filterFalsyChildren } from './filter-falsy-children';

describe('@mantine/core/utils/find-child-by-type', () => {
  it('remove falsy children', () => {
    expect(filterFalsyChildren([undefined, null, false, '', <div key="1" />]).length).toBe(1);
  });
});

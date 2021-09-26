import React from 'react';
import { itSupportsClassName } from '@mantine/tests';
import { MediaQuery } from './MediaQuery';

const defaultProps = { children: <span>test-children</span> };

describe('@mantine/core/MediaQuery', () => {
  itSupportsClassName(MediaQuery, defaultProps);

  it('has correct displayName', () => {
    expect(MediaQuery.displayName).toEqual('@mantine/core/MediaQuery');
  });
});

import React from 'react';
import { itSupportsClassName } from '@mantine/tests';
import { MediaQuery, MediaQueryProps } from './MediaQuery';

const defaultProps: MediaQueryProps = {
  styles: { fontWeight: 700 },
  children: <span>test-children</span>,
};

describe('@mantine/core/MediaQuery', () => {
  itSupportsClassName(MediaQuery, defaultProps);

  it('has correct displayName', () => {
    expect(MediaQuery.displayName).toStrictEqual('@mantine/core/MediaQuery');
  });
});

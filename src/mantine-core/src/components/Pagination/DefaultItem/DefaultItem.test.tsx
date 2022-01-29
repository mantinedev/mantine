import React from 'react';
import { screen, render } from '@testing-library/react';
import { itSupportsClassName, itSupportsOthers, itSupportsStyle } from '@mantine/tests';
import { DefaultItem, PaginationItemProps } from './DefaultItem';

const defaultProps: PaginationItemProps = {
  page: 1,
};

describe('@mantine/core/Pagination/DefaultItem', () => {
  itSupportsClassName(DefaultItem, defaultProps);
  itSupportsOthers(DefaultItem, defaultProps);
  itSupportsStyle(DefaultItem, defaultProps);

  it('number page renders number as child', () => {
    render(<DefaultItem page={11} />);
    expect(screen.getByText('11')).toBeInTheDocument();
  });

  it('has correct displayName', () => {
    expect(DefaultItem.displayName).toEqual('@mantine/core/Pagination/DefaultItem');
  });
});

import React from 'react';
import { mount } from 'enzyme';
import {
  itSupportsClassName,
  itSupportsOthers,
  itSupportsStyle,
  itSupportsStylesApi,
  checkAccessibility,
} from '@mantine/tests';
import { Pagination } from './Pagination';
import { Pagination as PaginationStylesApi } from './styles.api';

const defaultProps = {
  total: 10,
};

describe('@mantine/core/Pagination', () => {
  itSupportsClassName(Pagination, defaultProps);
  itSupportsOthers(Pagination, defaultProps);
  itSupportsStyle(Pagination, defaultProps);
  itSupportsStylesApi(Pagination, defaultProps, Object.keys(PaginationStylesApi), 'pagination');
  checkAccessibility([mount(<Pagination {...defaultProps} />)]);

  it('has correct displayName', () => {
    expect(Pagination.displayName).toEqual('@mantine/core/Pagination');
  });
});

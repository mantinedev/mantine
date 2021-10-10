import {
  itSupportsClassName,
  itSupportsOthers,
  itSupportsStyle,
  itSupportsStylesApi,
  itSupportsMargins,
  itSupportsRef,
} from '@mantine/tests';
import { Pagination } from './Pagination';
import { Pagination as PaginationStylesApi } from './styles.api';

const defaultProps = {
  total: 10,
};

describe('@mantine/core/Pagination', () => {
  itSupportsClassName(Pagination, defaultProps);
  itSupportsMargins(Pagination, defaultProps);
  itSupportsOthers(Pagination, defaultProps);
  itSupportsStyle(Pagination, defaultProps);
  itSupportsRef(Pagination, defaultProps, HTMLDivElement);
  itSupportsStylesApi(Pagination, defaultProps, Object.keys(PaginationStylesApi), 'pagination');

  it('has correct displayName', () => {
    expect(Pagination.displayName).toEqual('@mantine/core/Pagination');
  });
});

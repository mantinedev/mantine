import {
  itSupportsClassName,
  itSupportsOthers,
  itSupportsStyle,
  itSupportsMargins,
  itSupportsRef,
  itSupportsSx,
} from '@mantine/tests';
import { Pagination } from './Pagination';

const defaultProps = {
  total: 10,
};

describe('@mantine/core/Pagination', () => {
  itSupportsClassName(Pagination, defaultProps);
  itSupportsMargins(Pagination, defaultProps);
  itSupportsOthers(Pagination, defaultProps);
  itSupportsStyle(Pagination, defaultProps);
  itSupportsSx(Pagination, defaultProps);
  itSupportsRef(Pagination, defaultProps, HTMLDivElement);

  it('has correct displayName', () => {
    expect(Pagination.displayName).toEqual('@mantine/core/Pagination');
  });
});

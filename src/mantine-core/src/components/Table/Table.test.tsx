import {
  itSupportsClassName,
  itSupportsStyle,
  itSupportsOthers,
  itSupportsMargins,
  itSupportsRef,
  itSupportsSx,
} from '@mantine/tests';
import { Table } from './Table';

const defaultProps = {};

describe('@mantine/core/Table', () => {
  itSupportsClassName(Table, defaultProps);
  itSupportsStyle(Table, defaultProps);
  itSupportsOthers(Table, defaultProps);
  itSupportsMargins(Table, defaultProps);
  itSupportsSx(Table, defaultProps);
  itSupportsRef(Table, defaultProps, HTMLTableElement);

  it('has correct displayName', () => {
    expect(Table.displayName).toEqual('@mantine/core/Table');
  });
});

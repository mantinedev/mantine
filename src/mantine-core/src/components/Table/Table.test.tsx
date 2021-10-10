import {
  itSupportsClassName,
  itSupportsStyle,
  itSupportsOthers,
  itSupportsMargins,
  itSupportsRef,
} from '@mantine/tests';
import { Table } from './Table';

describe('@mantine/core/Table', () => {
  itSupportsClassName(Table, {});
  itSupportsStyle(Table, {});
  itSupportsOthers(Table, {});
  itSupportsMargins(Table, {});
  itSupportsRef(Table, {}, HTMLTableElement);

  it('has correct displayName', () => {
    expect(Table.displayName).toEqual('@mantine/core/Table');
  });
});

import { itSupportsClassName, itSupportsStyle, itSupportsOthers } from '@mantine/tests';
import { Table } from './Table';

describe('@mantine/core/Table', () => {
  itSupportsClassName(Table, {});
  itSupportsStyle(Table, {});
  itSupportsOthers(Table, {});

  it('has correct displayName', () => {
    expect(Table.displayName).toEqual('@mantine/core/Table');
  });
});

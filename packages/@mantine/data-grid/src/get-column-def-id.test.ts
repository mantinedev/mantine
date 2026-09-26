import { collectLeafColumnDefIds, getColumnDefId } from './get-column-def-id';
import { collectAggregatedColumnIds } from './hooks/prepare-columns';

describe('@mantine/data-grid/get-column-def-id', () => {
  it('resolves the id like TanStack: id, then accessorKey with dots replaced, then string header', () => {
    expect(getColumnDefId({ id: 'custom', accessorKey: 'a.b', header: 'H' })).toBe('custom');
    expect(getColumnDefId({ accessorKey: 'user.name', header: 'H' })).toBe('user_name');
    expect(getColumnDefId({ header: 'Header' })).toBe('Header');
    expect(getColumnDefId({ header: () => null })).toBeUndefined();
  });

  it('collects matching leaf ids through column groups', () => {
    const columns = [
      { id: 'group', flag: true, columns: [{ accessorKey: 'a.b', flag: true }, { id: 'c' }] },
      { header: 'D', flag: true },
      { header: () => null, flag: true },
    ];
    expect(collectLeafColumnDefIds(columns, (def) => !!def.flag)).toEqual(['a_b', 'D']);
  });

  it('collects aggregated column ids from user column defs', () => {
    expect(
      collectAggregatedColumnIds<any>([
        { header: 'Group', columns: [{ accessorKey: 'stats.total', aggregationFn: 'sum' }] },
        { accessorKey: 'name', header: 'Name' },
        { id: 'count', aggregationFn: 'count' },
      ])
    ).toEqual(['stats_total', 'count']);
  });
});

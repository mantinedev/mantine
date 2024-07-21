import { getAllCheckedNodes } from './get-all-checked-nodes';

describe('@mantine/core/Tree/get-all-checked-nodes', () => {
  it('returns all checked nodes for a flat tree', () => {
    const data = [
      { value: '1', label: '1' },
      { value: '2', label: '2' },
      { value: '3', label: '3' },
    ];

    const { result } = getAllCheckedNodes(data, ['1', '2']);

    expect(result).toStrictEqual([
      { checked: true, indeterminate: false, value: '1', hasChildren: false },
      { checked: true, indeterminate: false, value: '2', hasChildren: false },
    ]);
  });

  it('returns all checked nodes for a nested tree with one level of nesting', () => {
    const data = [
      {
        value: '1',
        label: '1',
        children: [
          { value: '2', label: '2' },
          { value: '3', label: '3' },
        ],
      },
    ];

    const { result } = getAllCheckedNodes(data, ['2']);

    expect(result).toStrictEqual([
      { checked: true, indeterminate: false, value: '2', hasChildren: false },
      { checked: false, indeterminate: true, value: '1', hasChildren: true },
    ]);
  });

  it('returns all checked nodes for a nested tree with multiple levels of nesting', () => {
    const data = [
      {
        value: '1',
        label: '1',
        children: [
          {
            value: '2',
            label: '2',
            children: [
              { value: '3', label: '3' },
              { value: '4', label: '4' },
              { value: '5', label: '5' },
            ],
          },
          { value: '6', label: '6' },
        ],
      },
    ];

    const { result } = getAllCheckedNodes(data, ['3', '4']);

    expect(result).toStrictEqual([
      { checked: true, indeterminate: false, value: '3', hasChildren: false },
      { checked: true, indeterminate: false, value: '4', hasChildren: false },
      { checked: false, indeterminate: true, value: '2', hasChildren: true },
      { checked: false, indeterminate: true, value: '1', hasChildren: true },
    ]);
  });
});

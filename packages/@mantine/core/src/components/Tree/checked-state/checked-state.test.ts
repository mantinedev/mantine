import { getAllCheckedNodes, isNodeChecked, isNodeIndeterminate } from './checked-state';

describe('@mantine/core/Tree/checked-state/getAllCheckedNodes', () => {
  it('returns all checked nodes for a flat tree', () => {
    const data = [
      { value: '1', label: '1' },
      { value: '2', label: '2' },
      { value: '3', label: '3' },
    ];

    const result = getAllCheckedNodes(data, ['1', '2']);

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

    const result = getAllCheckedNodes(data, ['2']);

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

    const result = getAllCheckedNodes(data, ['3', '4']);

    expect(result).toStrictEqual([
      { checked: true, indeterminate: false, value: '3', hasChildren: false },
      { checked: true, indeterminate: false, value: '4', hasChildren: false },
      { checked: false, indeterminate: true, value: '2', hasChildren: true },
      { checked: false, indeterminate: true, value: '1', hasChildren: true },
    ]);
  });
});

describe('@mantine/core/Tree/checked-state/isNodeChecked', () => {
  it('detects checked node in flat tree', () => {
    const data = [
      { value: '1', label: '1' },
      { value: '2', label: '2' },
      { value: '3', label: '3' },
    ];

    expect(isNodeChecked('1', data, ['1', '2'])).toBe(true);
    expect(isNodeChecked('2', data, ['1', '2'])).toBe(true);
    expect(isNodeChecked('3', data, ['1', '2'])).toBe(false);
  });

  it('detects checked node in nested tree with one level of nesting', () => {
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

    expect(isNodeChecked('1', data, ['2'])).toBe(false);
    expect(isNodeChecked('2', data, ['2'])).toBe(true);
    expect(isNodeChecked('1', data, ['2', '3'])).toBe(true);
  });

  it('detects checked node in nested tree with multiple levels of nesting', () => {
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

    expect(isNodeChecked('2', data, ['3', '4'])).toBe(false);
    expect(isNodeChecked('2', data, ['3', '4', '5'])).toBe(true);
  });
});

describe('@mantine/core/Tree/checked-state/isNodeIndeterminate', () => {
  it('detects indeterminate node in flat tree', () => {
    const data = [
      { value: '1', label: '1' },
      { value: '2', label: '2' },
      { value: '3', label: '3' },
    ];

    expect(isNodeIndeterminate('1', data, ['1', '2'])).toBe(false);
  });

  it('detects indeterminate node in nested tree with one level of nesting', () => {
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

    expect(isNodeIndeterminate('1', data, ['2'])).toBe(true);
    expect(isNodeIndeterminate('2', data, ['2'])).toBe(false);
    expect(isNodeIndeterminate('1', data, ['2', '3'])).toBe(false);
  });

  it('detects indeterminate node in nested tree with multiple levels of nesting', () => {
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

    expect(isNodeIndeterminate('2', data, ['3', '4'])).toBe(true);
    expect(isNodeIndeterminate('2', data, ['3', '4', '5'])).toBe(false);
  });
});

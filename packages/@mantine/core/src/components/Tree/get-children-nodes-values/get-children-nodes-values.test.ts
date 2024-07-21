import { getChildrenNodesValues } from './get-children-nodes-values';

describe('@mantine/core/Tree/get-children-nodes-values', () => {
  it('returns nodes values for flat tree', () => {
    const data = [
      { value: '1', label: '1' },
      { value: '2', label: '2' },
      { value: '3', label: '3' },
    ];

    expect(getChildrenNodesValues('1', data)).toStrictEqual(['1']);
  });

  it('returns nodes values for nested tree with one level of nesting', () => {
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

    expect(getChildrenNodesValues('1', data)).toStrictEqual(['2', '3']);
  });

  it('returns nodes values for nested tree with multiple levels of nesting', () => {
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

    expect(getChildrenNodesValues('1', data)).toStrictEqual(['3', '4', '5', '6']);
    expect(getChildrenNodesValues('2', data)).toStrictEqual(['3', '4', '5']);
  });
});

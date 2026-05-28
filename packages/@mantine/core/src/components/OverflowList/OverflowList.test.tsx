import { render, tests } from '@mantine-tests/core';
import { OverflowList, OverflowListProps, OverflowListStylesNames } from './OverflowList';

const defaultProps: OverflowListProps<any> = {
  data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
  renderItem: (item) => <div>{item}</div>,
  renderOverflow: (items) => <div>+{items.length}</div>,
};

describe('@mantine/core/OverflowList', () => {
  tests.itSupportsSystemProps<OverflowListProps<any>, OverflowListStylesNames>({
    component: OverflowList,
    props: defaultProps,
    varsResolver: true,
    displayName: '@mantine/core/OverflowList',
    stylesApiSelectors: ['root'],
  });

  it('passes data-based index to renderItem when collapseFrom="start" and maxVisibleItems is set', () => {
    const renderItem = jest.fn((item: string) => <div>{item}</div>);

    render(
      <OverflowList
        data={['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']}
        collapseFrom="start"
        maxVisibleItems={3}
        renderItem={renderItem}
        renderOverflow={(items) => <div>+{items.length}</div>}
      />
    );

    expect(renderItem.mock.calls).toContainEqual(['8', 7]);
    expect(renderItem.mock.calls).toContainEqual(['9', 8]);
    expect(renderItem.mock.calls).toContainEqual(['10', 9]);
  });

  it('passes data-based index to renderItem when collapseFrom="end" and maxVisibleItems is set', () => {
    const renderItem = jest.fn((item: string) => <div>{item}</div>);

    render(
      <OverflowList
        data={['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']}
        collapseFrom="end"
        maxVisibleItems={3}
        renderItem={renderItem}
        renderOverflow={(items) => <div>+{items.length}</div>}
      />
    );

    expect(renderItem.mock.calls).toContainEqual(['1', 0]);
    expect(renderItem.mock.calls).toContainEqual(['2', 1]);
    expect(renderItem.mock.calls).toContainEqual(['3', 2]);
  });
});

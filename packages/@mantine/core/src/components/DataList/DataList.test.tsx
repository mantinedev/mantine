import { render, tests } from '@mantine-tests/core';
import { DataList, DataListProps, DataListStylesNames } from './DataList';
import { DataListItem } from './DataListItem/DataListItem';
import { DataListItemLabel } from './DataListItemLabel/DataListItemLabel';
import { DataListItemValue } from './DataListItemValue/DataListItemValue';

const defaultProps: DataListProps = {
  children: (
    <>
      <DataList.Item>
        <DataList.ItemLabel>Label</DataList.ItemLabel>
        <DataList.ItemValue>Value</DataList.ItemValue>
      </DataList.Item>
    </>
  ),
};

describe('@mantine/core/DataList', () => {
  tests.itSupportsSystemProps<DataListProps, DataListStylesNames>({
    component: DataList,
    props: defaultProps,
    varsResolver: true,
    children: true,
    displayName: '@mantine/core/DataList',
    stylesApiSelectors: ['root', 'item', 'itemLabel', 'itemValue'],
  });

  it('renders dl element', () => {
    const { container } = render(<DataList {...defaultProps} />);
    expect(container.querySelector('dl')).not.toBe(null);
  });

  it('renders dt and dd elements', () => {
    const { container } = render(<DataList {...defaultProps} />);
    expect(container.querySelector('dt')).not.toBe(null);
    expect(container.querySelector('dd')).not.toBe(null);
  });

  it('sets data-orientation attribute', () => {
    const { container } = render(<DataList {...defaultProps} orientation="horizontal" />);
    expect(container.querySelector('.mantine-DataList-root')).toHaveAttribute(
      'data-orientation',
      'horizontal'
    );
  });

  it('sets data-with-divider attribute', () => {
    const { container } = render(<DataList {...defaultProps} withDivider />);
    expect(container.querySelector('.mantine-DataList-root')).toHaveAttribute('data-with-divider');
  });

  it('exposes sub-components as static properties', () => {
    expect(DataList.Item).toBe(DataListItem);
    expect(DataList.ItemLabel).toBe(DataListItemLabel);
    expect(DataList.ItemValue).toBe(DataListItemValue);
  });
});

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
  tests.axe([
    <DataList {...defaultProps} key="horizontal" />,
    <DataList {...defaultProps} orientation="vertical" withDivider key="vertical" />,
  ]);

  tests.itSupportsSystemProps<DataListProps, DataListStylesNames>({
    component: DataList,
    props: defaultProps,
    varsResolver: true,
    children: true,
    displayName: '@mantine/core/DataList',
    stylesApiSelectors: ['root', 'item', 'itemLabel', 'itemValue'],
  });

  it('renders root as dl element', () => {
    const { container } = render(<DataList {...defaultProps} />);
    expect(container.querySelector('.mantine-DataList-root')!.tagName).toBe('DL');
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

  it('converts numeric labelWidth to rem', () => {
    const { container } = render(<DataList {...defaultProps} labelWidth={160} />);
    expect(container.querySelector('.mantine-DataList-root')).toHaveStyle({
      '--data-list-label-width': 'calc(10rem * var(--mantine-scale))',
    });
  });

  it('passes string labelWidth through', () => {
    const { container } = render(<DataList {...defaultProps} labelWidth="30%" />);
    expect(container.querySelector('.mantine-DataList-root')).toHaveStyle({
      '--data-list-label-width': '30%',
    });
  });
});

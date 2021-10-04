import React from 'react';
import { shallow, mount } from 'enzyme';
import { SelectItems } from './SelectItems';
import { Text } from '../../Text/Text';
import { DefaultItem } from '../DefaultItem/DefaultItem';

const data = [
  { value: 'react', label: 'React' },
  { value: 'ng', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'vue', label: 'Vue' },
];

const defaultProps = {
  data,
  hovered: -1,
  __staticSelector: 'test',
  isItemSelected: () => false,
  uuid: 'test-id',
  itemsRefs: { current: {} } as any,
  onItemHover: () => {},
  onItemSelect: () => {},
  size: 'sm' as const,
  itemComponent: DefaultItem,
  nothingFound: 'test-nothing',
};

describe('@mantine/core/SelectItems', () => {
  it('renders nothing found message if data array is empty', () => {
    const withData = shallow(<SelectItems {...defaultProps} data={data} />);
    const withoutData = shallow(
      <SelectItems {...defaultProps} data={[]} nothingFound="test-nothing" />
    );

    expect(withData.find(Text)).toHaveLength(0);
    expect(withoutData.find(Text).render().text()).toBe('test-nothing');
  });

  it('renders correct default items', () => {
    const element = shallow(<SelectItems {...defaultProps} />);
    expect(element.find(DefaultItem)).toHaveLength(defaultProps.data.length);
  });

  it('renders correct custom items', () => {
    const element = shallow(
      <SelectItems
        {...defaultProps}
        itemComponent={(props: any) => <span data-custom-item {...props} />}
      />
    );
    expect(element.find('[role="option"]')).toHaveLength(defaultProps.data.length);
  });

  it('calls onItemSelect with mouse down event on item', () => {
    const spy = jest.fn();
    const element = shallow(<SelectItems {...defaultProps} onItemSelect={spy} />);
    element
      .find('[role="option"]')
      .at(2)
      .simulate('mousedown', { preventDefault: () => {} });
    expect(spy).toHaveBeenCalledWith(defaultProps.data[2]);
  });

  it('calls onItemHover when mouse enters item', () => {
    const spy = jest.fn();
    const element = shallow(<SelectItems {...defaultProps} onItemHover={spy} />);
    element.find('[role="option"]').at(2).simulate('mouseenter');
    expect(spy).toHaveBeenCalledWith(2);
  });

  it('registers refs of all items', () => {
    const refs = { current: {} } as any;
    mount(<SelectItems {...defaultProps} itemsRefs={refs} />);
    expect(Object.keys(refs.current)).toHaveLength(defaultProps.data.length);
    expect(
      Object.keys(refs.current).every((ref) => refs.current[ref] instanceof HTMLDivElement)
    ).toBe(true);
  });

  it('sets aria-selected based on item index and hovered', () => {
    const element = shallow(<SelectItems {...defaultProps} hovered={1} />);
    expect(element.find('[role="option"]').at(1).prop('aria-selected')).toBe(true);
    expect(element.find('[role="option"]').at(2).prop('aria-selected')).toBe(false);
    expect(element.find('[role="option"]').at(0).prop('aria-selected')).toBe(false);
  });

  it('has correct displayName', () => {
    expect(SelectItems.displayName).toEqual('@mantine/core/SelectItems');
  });
});

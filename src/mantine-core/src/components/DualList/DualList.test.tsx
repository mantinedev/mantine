import React from 'react';
import { shallow, mount } from 'enzyme';
import {
  checkAccessibility,
  itSupportsClassName,
  itSupportsRef,
  itSupportsStyle,
  itSupportsOthers,
  itSupportsStylesApi,
  itSupportsMargins,
} from '@mantine/tests';
import { DualList } from './DualList';

const requiredProps = { available: [], selected: [] };
const Wrapper = () => <DualList {...requiredProps} />;

describe('@mantine/core/DualList', () => {
  checkAccessibility([mount(<Wrapper />)]);
  itSupportsOthers(DualList, requiredProps);
  itSupportsStyle(DualList, requiredProps);
  itSupportsRef(DualList, requiredProps, HTMLDivElement, 'leftListRef');
  itSupportsRef(DualList, requiredProps, HTMLDivElement, 'rightListRef');
  itSupportsClassName(DualList, requiredProps);
  itSupportsMargins(DualList, requiredProps);

  itSupportsStylesApi(
    DualList,
    requiredProps,
    [
      'root',
      'actions',
      'listRoot',
      'listContainer',
      'listTitle',
      'list',
      'actions',
      'item',
      'searchBar',
    ],
    'DualList'
  );

  it('has correct displayName', () => {
    expect(DualList.displayName).toEqual('@mantine/core/DualList');
  });

  it('renders empty placeholder', () => {
    const nonEmpty = shallow(<DualList available={['abc']} selected={['def']} />).render();
    const empty = shallow(<DualList available={[]} selected={[]} />).render();
    const emptyAvailable = shallow(<DualList available={[]} selected={['abc']} />).render();
    const emptySelected = shallow(<DualList available={['abc']} selected={[]} />).render();
    const withCustomPlaceholder = shallow(
      <DualList available={['abc']} selected={[]} emptyPlaceholder="Custom empty placeholder" />
    ).render();

    expect(nonEmpty.find('.mantine-DualList-empty').length).toBe(0);
    expect(empty.find('.mantine-DualList-empty').length).toBe(2);
    expect(emptyAvailable.find('.mantine-DualList-empty').length).toBe(1);
    expect(emptySelected.find('.mantine-DualList-empty').length).toBe(1);
    expect(withCustomPlaceholder.find('.mantine-DualList-empty').text()).toBe(
      'Custom empty placeholder'
    );
  });

  it('sets custom list labels', () => {
    const withDefaultLabels = shallow(<DualList available={[]} selected={[]} />).render();
    const withCustomAvailableLabel = shallow(
      <DualList available={[]} selected={[]} leftLabel="Custom label" />
    ).render();
    const withCustomSelectedLabel = shallow(
      <DualList available={[]} selected={[]} rightLabel="Custom label" />
    ).render();

    const defaultLabels = withDefaultLabels.find('.mantine-DualList-listTitle');
    expect(defaultLabels.length).toBe(2);
    expect(defaultLabels.slice(0, 1).text()).toBe('Available');
    expect(defaultLabels.slice(1, 2).text()).toBe('Selected');

    expect(withCustomAvailableLabel.find('.mantine-DualList-listTitle').slice(0, 1).text()).toBe(
      'Custom label'
    );
    expect(withCustomSelectedLabel.find('.mantine-DualList-listTitle').slice(1, 2).text()).toBe(
      'Custom label'
    );
  });

  it('has polymorphic lists', async () => {
    const TestComponent = (props: any) => <ol {...props} />;

    const withDefaultTag = shallow(<DualList {...requiredProps} />);
    const withTag = shallow(<DualList listComponent="ul" {...requiredProps} />);
    const withComponent = shallow(<DualList listComponent={TestComponent} {...requiredProps} />);

    expect(withDefaultTag.render().find('.mantine-DualList-list').is('div')).toBe(true);
    expect(withTag.render().find('.mantine-DualList-list').is('ul')).toBe(true);
    expect(withComponent.render().find('.mantine-DualList-list').is('ol')).toBe(true);
  });

  it('calls onChange when action buttons are clicked', () => {
    const handleChange = jest.fn();

    const dualList = mount(
      <DualList
        available={['abc', 'def', 'ghi']}
        selected={['123', '456', '789']}
        onChange={handleChange}
      />
    );

    expect(handleChange).not.toBeCalled();

    dualList.find('.mantine-DualList-action').first().simulate('click');
    dualList.find('.mantine-DualList-action').last().simulate('click');

    expect(handleChange).toBeCalledTimes(2);
  });

  it('can render items with checkboxes', () => {
    const available = ['123', '456', '789'];
    const selected = ['abc', 'def', 'ghi'];

    const withoutCheckboxes = shallow(<DualList available={available} selected={selected} />);
    const withCheckboxes = shallow(
      <DualList available={available} selected={selected} checkboxes />
    );

    const totalItems = available.length + selected.length;

    expect(withoutCheckboxes.render().find('.mantine-DualListItem-item').length).toBe(totalItems);
    expect(withoutCheckboxes.render().find('.mantine-Checkbox-root').length).toBe(0);

    expect(withCheckboxes.render().find('.mantine-DualListItem-item').length).toBe(totalItems);
    expect(withCheckboxes.render().find('.mantine-Checkbox-root').length).toBe(totalItems);
  });
});

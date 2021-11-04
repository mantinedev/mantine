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
});

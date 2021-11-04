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
const Wrapper = () => <DualList {...requiredProps} styles={{}} />;

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
});

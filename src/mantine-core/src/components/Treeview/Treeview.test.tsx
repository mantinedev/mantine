import React from 'react';
import { mount } from 'enzyme';
import {
  checkAccessibility,
  itRendersChildren,
  itSupportsOthers,
  itSupportsStyle,
  itSupportsClassName,
} from '@mantine/tests';
import { Treeview } from './Treeview';

describe('@mantine/core/Treeview', () => {
  checkAccessibility([
    mount(<Treeview
      selected="/"
      labelNode="Treeview"
      value="/"
      items={[
        {
          value: '/',
          items: [],
          labelNode: 'Root',
        },
      ]}
      type="folder"
    />),
  ]);

  itRendersChildren(Treeview, {});
  itSupportsOthers(Treeview, {});
  itSupportsStyle(Treeview, {});
  itSupportsClassName(Treeview, {});

  it('has correct displayName', () => {
    expect(Treeview.displayName).toEqual('@mantine/core/Treeview');
  });
  // ToDo: Add more tests
});

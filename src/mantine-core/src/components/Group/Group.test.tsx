import React from 'react';
import {
  itSupportsClassName,
  itSupportsStyle,
  itSupportsOthers,
  itRendersChildren,
  itSupportsStylesApi,
  itSupportsMargins,
} from '@mantine/tests';
import { Group } from './Group';
import { Group as GroupStylesApi } from './styles.api';

describe('@mantine/core/Group', () => {
  itSupportsOthers(Group, {});
  itSupportsClassName(Group, {});
  itSupportsStyle(Group, {});
  itRendersChildren(Group, {});
  itSupportsMargins(Group, {});
  itSupportsStylesApi(Group, { children: <div /> }, Object.keys(GroupStylesApi), 'group');

  it('has correct displayName', () => {
    expect(Group.displayName).toEqual('@mantine/core/Group');
  });
});

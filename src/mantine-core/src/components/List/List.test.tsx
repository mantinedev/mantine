import React from 'react';
import { itSupportsClassName, itSupportsOthers, itSupportsStyle } from '@mantine/tests';
import { List } from './List';

const defaultProps = {
  children: [
    <List.Item key="1">1</List.Item>,
    <List.Item key="2">2</List.Item>,
    <List.Item key="3">3</List.Item>,
  ],
};

describe('@mantine/core/List', () => {
  itSupportsClassName(List, defaultProps);
  itSupportsOthers(List, defaultProps);
  itSupportsStyle(List, defaultProps);

  it('has correct displayName', () => {
    expect(List.displayName).toEqual('@mantine/core/List');
  });
});

import React from 'react';
import {
  itSupportsClassName,
  itSupportsOthers,
  itSupportsStyle,
  itSupportsStylesApi,
  itSupportsMargins,
} from '@mantine/tests';
import { List } from './List';
import { List as ListStylesApi } from './styles.api';

const defaultProps = {
  icon: '$',
  children: [
    <List.Item key="1">1</List.Item>,
    <List.Item key="2">2</List.Item>,
    <List.Item key="3">3</List.Item>,
  ],
};

describe('@mantine/core/List', () => {
  itSupportsClassName(List, defaultProps);
  itSupportsMargins(List, defaultProps);
  itSupportsOthers(List, defaultProps);
  itSupportsStyle(List, defaultProps);
  itSupportsStylesApi(List, defaultProps, Object.keys(ListStylesApi), 'List');

  it('has correct displayName', () => {
    expect(List.displayName).toEqual('@mantine/core/List');
  });
});

import React from 'react';
import { shallow, mount } from 'enzyme';
import {
  checkAccessibility,
  itSupportsStyle,
  itSupportsOthers,
  itSupportsClassName,
  itRendersChildren,
  itSupportsStylesApi,
} from '@mantine/tests';
import { Text } from '../Text/Text';
import { Alert } from './Alert';
import { Alert as AlertStylesApi } from './styles.api';

const defaultProps = {
  title: 'test-title',
  children: 'test-alert',
  icon: '$',
  withCloseButton: true,
};

describe('@mantine/core/Alert', () => {
  itSupportsStylesApi(Alert, defaultProps, Object.keys(AlertStylesApi), 'alert');
  itSupportsClassName(Alert, defaultProps);
  itSupportsOthers(Alert, defaultProps);
  itSupportsStyle(Alert, defaultProps);
  itRendersChildren(Alert, {});
  checkAccessibility([
    mount(
      <Alert title="Error happened" color="red">
        <Text>Something bad happened</Text>
      </Alert>
    ),
    mount(
      <Alert color="red">
        <Text>Something bad happened</Text>
      </Alert>
    ),
  ]);

  it('renders given title', () => {
    const element = shallow(<Alert title="test-title">test-alert</Alert>);
    expect(element.render().find('.mantine-alert-title').text()).toEqual('test-title');
  });

  it('does not render title if title prop was not passed', () => {
    const element = shallow(<Alert>test-alert</Alert>);
    expect(element.render().find('.mantine-alert-title')).toHaveLength(0);
  });

  it('has correct displayName', () => {
    expect(Alert.displayName).toEqual('@mantine/core/Alert');
  });
});

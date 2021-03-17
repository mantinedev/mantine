import React from 'react';
import { shallow, mount } from 'enzyme';
import {
  checkAccessibility,
  itSupportsStyle,
  itSupportsOthers,
  itSupportsClassName,
  itRendersChildren,
} from '@mantine/tests';
import { Text } from '../Text/Text';
import { Alert } from './Alert';

describe('@mantine/core/Alert', () => {
  itSupportsClassName(Alert, { children: 'test-alert' });
  itSupportsOthers(Alert, { children: 'test-alert' });
  itSupportsStyle(Alert, { children: 'test-alert' });
  itRendersChildren(Alert, {});
  checkAccessibility([
    mount(
      <Alert title="Error happened" color="red">
        <Text>Something bad happened</Text>
      </Alert>
    ),
  ]);

  it('has correct displayName', () => {
    expect(Alert.displayName).toEqual('@mantine/core/Alert');
  });

  it('renders given title', () => {
    const element = shallow(<Alert title="test-title">test-alert</Alert>);
    expect(element.render().find('[data-mantine-alert-title]').text()).toEqual('test-title');
  });

  it('does not render title if title prop was not passed', () => {
    const element = shallow(<Alert>test-alert</Alert>);
    expect(element.render().find('[data-mantine-alert-title]')).toHaveLength(0);
  });
});

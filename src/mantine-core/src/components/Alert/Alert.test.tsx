import React from 'react';
import { shallow } from 'enzyme';
import { render } from '@testing-library/react';
import {
  checkAccessibility,
  itSupportsStyle,
  itSupportsOthers,
  itSupportsClassName,
  itRendersChildren,
  itSupportsMargins,
  itSupportsRef,
  itSupportsSx,
} from '@mantine/tests';
import { Text } from '../Text/Text';
import { CloseButton } from '../ActionIcon';
import { Alert } from './Alert';

const defaultProps = {
  title: 'test-title',
  children: 'test-alert',
  icon: '$',
  withCloseButton: true,
};

describe('@mantine/core/Alert', () => {
  itSupportsClassName(Alert, defaultProps);
  itSupportsOthers(Alert, defaultProps);
  itSupportsStyle(Alert, defaultProps);
  itSupportsSx(Alert, defaultProps);
  itSupportsMargins(Alert, defaultProps);
  itRendersChildren(Alert, {});
  itSupportsRef(Alert, {}, HTMLDivElement);

  checkAccessibility([
    render(
      <Alert title="Error happened" color="red">
        <Text>Something bad happened</Text>
      </Alert>
    ),
    render(
      <Alert color="red">
        <Text>Something bad happened</Text>
      </Alert>
    ),
  ]);

  it('calls onClose when CloseButton is Clicked', () => {
    const spy = jest.fn();
    const element = shallow(
      <Alert title="test" withCloseButton onClose={spy}>
        test
      </Alert>
    );
    element.find(CloseButton).simulate('click');
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('renders given title', () => {
    const element = shallow(<Alert title="test-title">test-alert</Alert>);
    expect(element.render().find('.mantine-Alert-title').text()).toEqual('test-title');
  });

  it('does not render title if title prop was not passed', () => {
    const element = shallow(<Alert>test-alert</Alert>);
    expect(element.render().find('.mantine-Alert-title')).toHaveLength(0);
  });

  it('has correct displayName', () => {
    expect(Alert.displayName).toEqual('@mantine/core/Alert');
  });
});

import React from 'react';
import { shallow, mount, checkAccessibility } from '@mantine/tests';
import { Text } from '../Text/Text';
import { Alert } from './Alert';

describe('@mantine/core/Alert', () => {
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

  it('accepts className from props', () => {
    const element = shallow(<Alert className="test-class-name" />);
    expect(element.render().hasClass('test-class-name')).toBe(true);
  });

  it('support ...others props', () => {
    const element = shallow(<Alert data-other-attribute="test" />);
    expect(element.render().attr('data-other-attribute')).toBe('test');
  });

  it('accepts style property', () => {
    const element = shallow(<Alert style={{ border: '1px solid red', lineHeight: 1 }} />).render();
    expect(element.css('border')).toBe('1px solid red');
    expect(element.css('line-height')).toBe('1');
  });

  it('renders given title', () => {
    const element = shallow(<Alert title="test-title" />);
    expect(element.render().find('[data-mantine-alert-title]').text()).toEqual('test-title');
  });

  it('does not render title if title prop was not passed', () => {
    const element = shallow(<Alert />);
    expect(element.render().find('[data-mantine-alert-title]')).toHaveLength(0);
  });

  it('renders given children in alert body', () => {
    const element = shallow(
      <Alert>
        <span className="test-children">test-children</span>
      </Alert>
    );
    expect(element.render().find('[data-mantine-alert-body]').find('.test-children')).toHaveLength(
      1
    );
  });
});

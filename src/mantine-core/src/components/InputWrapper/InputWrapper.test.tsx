import React from 'react';
import { shallow } from 'enzyme';
import {
  itSupportsStyle,
  itSupportsClassName,
  itRendersChildren,
  itSupportsOthers,
} from '@mantine/tests';
import { InputWrapper } from './InputWrapper';

describe('@mantine/core/InputWrapper', () => {
  itSupportsOthers(InputWrapper, { id: 'test-id', children: 'test' });
  itSupportsStyle(InputWrapper, { id: 'test-id', children: 'test' });
  itSupportsClassName(InputWrapper, { id: 'test-id', children: 'test' });
  itRendersChildren(InputWrapper, { id: 'test-id' });

  it('renders correct error, description and label', () => {
    const withProps = shallow(
      <InputWrapper
        id="test-id"
        label="test-label"
        error="test-error"
        description="test-description"
      >
        test-children
      </InputWrapper>
    );

    const withoutProps = shallow(<InputWrapper id="test-id">test-children</InputWrapper>);

    expect(withProps.render().find('label').text()).toBe('test-label');
    expect(withProps.render().find('[data-mantine-description]').text()).toBe('test-description');
    expect(withProps.render().find('[data-mantine-error]').text()).toBe('test-error');

    expect(withoutProps.render().find('label')).toHaveLength(0);
    expect(withoutProps.render().find('[data-mantine-description]')).toHaveLength(0);
    expect(withoutProps.render().find('[data-mantine-error]')).toHaveLength(0);
  });

  it('does not render error if error prop is boolean', () => {
    const element = shallow(
      <InputWrapper id="test-id" error>
        test-children
      </InputWrapper>
    );
    expect(element.render().find('[data-mantine-error]')).toHaveLength(0);
  });

  it('renders required asterisk with required prop is true', () => {
    const required = shallow(
      <InputWrapper id="test-id" required label="test-label">
        test-children
      </InputWrapper>
    );
    const notRequired = shallow(<InputWrapper id="test-id">test-children</InputWrapper>);

    expect(required.render().find('[data-mantine-required]').text()).toBe(' *');
    expect(notRequired.render().find('[data-mantine-required]')).toHaveLength(0);
  });

  it('passes id to label htmlFor prop', () => {
    const element = shallow(
      <InputWrapper id="test-id" label="test-label">
        test-children
      </InputWrapper>
    );

    expect(element.render().find('label').attr('for')).toBe('test-id');
  });
});

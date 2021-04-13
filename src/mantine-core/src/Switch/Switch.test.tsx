import React from 'react';
import { mount, shallow } from 'enzyme';
import {
  checkAccessibility,
  itSupportsClassName,
  itSupportsRef,
  itSupportsStyle,
} from '@mantine/tests';
import { Switch } from './Switch';

describe('@mantine/core/Switch', () => {
  checkAccessibility([
    mount(<Switch aria-label="Switch without label" />),
    mount(<Switch label="With label" />),
    mount(<Switch id="with-id" label="With id" />),
  ]);

  itSupportsClassName(Switch, {});
  itSupportsStyle(Switch, {});
  itSupportsRef(Switch, {}, HTMLInputElement, 'elementRef');

  it('has correct displayName', () => {
    expect(Switch.displayName).toEqual('@mantine/core/Switch');
  });

  it('renders label based on label prop', () => {
    const withLabel = shallow(<Switch label="test-label" />);
    const withoutLabel = shallow(<Switch />);

    expect(withLabel.render().find('label').text()).toBe('test-label');
    expect(withoutLabel.render().find('label')).toHaveLength(0);
  });

  it('passes id from props to input and label', () => {
    const withLabel = shallow(<Switch label="test-label" id="test-id-1" />);
    const withoutLabel = shallow(<Switch id="test-id-2" />);

    expect(withLabel.render().find('label').attr('for')).toBe('test-id-1');
    expect(withLabel.render().find('input').attr('id')).toBe('test-id-1');
    expect(withoutLabel.render().find('input').attr('id')).toBe('test-id-2');
  });

  it('sets disabled attribute on input based on disabled prop', () => {
    const disabled = shallow(<Switch disabled />);
    const notDisabled = shallow(<Switch />);

    expect(disabled.render().find('input').attr('disabled')).toBe('disabled');
    expect(notDisabled.render().find('input').attr('disabled')).toBe(undefined);
  });

  it('spreads wrapperProps to root element', () => {
    const element = shallow(
      <Switch
        wrapperProps={{
          'aria-label': 'test-aria-label',
          style: { border: '1px solid red', lineHeight: '1px' },
        }}
      />
    ).render();

    expect(element.attr('aria-label')).toBe('test-aria-label');
    expect(element.css('border')).toBe('1px solid red');
    expect(element.css('line-height')).toBe('1px');
  });

  it('adds input styles with inputStyle prop', () => {
    const element = shallow(<Switch inputStyle={{ border: '1px solid red', lineHeight: '1px' }} />);

    expect(element.render().find('input').css('border')).toBe('1px solid red');
    expect(element.render().find('input').css('line-height')).toBe('1px');
  });

  it('adds className to input with inputClassName prop', () => {
    const element = shallow(<Switch inputClassName="test-input" />);
    expect(element.render().find('input').hasClass('test-input')).toBe(true);
  });

  it('sets checked state based on checked prop', () => {
    const checked = shallow(<Switch checked onChange={() => {}} />);
    const notChecked = shallow(<Switch checked={false} onChange={() => {}} />);

    expect(checked.render().find('input').attr('checked')).toBe('checked');
    expect(notChecked.render().find('input').attr('checked')).toBe(undefined);
  });

  it('spreads ...others to input element', () => {
    const element = shallow(<Switch aria-checked width="30px" />);

    expect(element.render().find('input').attr('aria-checked')).toBe('true');
    expect(element.render().find('input').attr('width')).toBe('30px');
  });
});

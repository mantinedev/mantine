import React from 'react';
import { mount, shallow } from 'enzyme';
import {
  checkAccessibility,
  itSupportsRef,
  itSupportsClassName,
  itSupportsStyle,
} from '@mantine/tests';
import { Checkbox } from './Checkbox';

describe('@mantine/core/Checkbox', () => {
  itSupportsStyle(Checkbox, {});
  itSupportsClassName(Checkbox, {});
  itSupportsRef(Checkbox, {}, HTMLInputElement, 'elementRef');
  checkAccessibility([
    mount(<Checkbox aria-label="Checkbox without label" />),
    mount(<Checkbox label="With label" />),
    mount(<Checkbox id="with-id" label="With id" />),
  ]);

  it('has correct displayName', () => {
    expect(Checkbox.displayName).toEqual('@mantine/core/Checkbox');
  });

  it('renders label based on label prop', () => {
    const withLabel = shallow(<Checkbox label="test-label" />);
    const withoutLabel = shallow(<Checkbox />);

    expect(withLabel.render().find('label').text()).toBe('test-label');
    expect(withoutLabel.render().find('label')).toHaveLength(0);
  });

  it('passes id from props to input and label', () => {
    const withLabel = shallow(<Checkbox label="test-label" id="test-id-1" />);
    const withoutLabel = shallow(<Checkbox id="test-id-2" />);

    expect(withLabel.render().find('label').attr('for')).toBe('test-id-1');
    expect(withLabel.render().find('input').attr('id')).toBe('test-id-1');
    expect(withoutLabel.render().find('input').attr('id')).toBe('test-id-2');
  });

  it('sets disabled attribute on input based on disabled prop', () => {
    const disabled = shallow(<Checkbox disabled />);
    const notDisabled = shallow(<Checkbox />);

    expect(disabled.render().find('input').attr('disabled')).toBe('disabled');
    expect(notDisabled.render().find('input').attr('disabled')).toBe(undefined);
  });

  it('spreads wrapperProps to root element', () => {
    const element = shallow(
      <Checkbox
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
    const element = shallow(
      <Checkbox inputStyle={{ border: '1px solid red', lineHeight: '1px' }} />
    );

    expect(element.render().find('input').css('border')).toBe('1px solid red');
    expect(element.render().find('input').css('line-height')).toBe('1px');
  });

  it('sets checked state based on checked prop', () => {
    const checked = shallow(<Checkbox checked onChange={() => {}} />);
    const notChecked = shallow(<Checkbox checked={false} onChange={() => {}} />);

    expect(checked.render().find('input').attr('checked')).toBe('checked');
    expect(notChecked.render().find('input').attr('checked')).toBe(undefined);
  });

  it('sets checked state based on intermediate prop', () => {
    const element = shallow(<Checkbox intermediate checked={false} onChange={() => {}} />);
    expect(element.render().find('input').attr('checked')).toBe('checked');
  });

  it('adds className to input with inputClassName prop', () => {
    const element = shallow(<Checkbox inputClassName="test-input" />);
    expect(element.render().find('input').hasClass('test-input')).toBe(true);
  });

  it('spreads ...others to input element', () => {
    const element = shallow(<Checkbox aria-checked width="30px" />);

    expect(element.render().find('input').attr('aria-checked')).toBe('true');
    expect(element.render().find('input').attr('width')).toBe('30px');
  });
});

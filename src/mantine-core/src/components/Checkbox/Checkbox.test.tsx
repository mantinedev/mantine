import React from 'react';
import { mount, shallow } from 'enzyme';
import {
  checkAccessibility,
  itSupportsRef,
  itSupportsClassName,
  itSupportsStyle,
  itSupportsStylesApi,
  itSupportsMargins,
} from '@mantine/tests';
import { Checkbox } from './Checkbox';
import { Checkbox as CheckboxStylesApi } from './styles.api';

const defaultProps = {
  checked: true,
  onChange: () => {},
  label: 'test-label',
};

describe('@mantine/core/Checkbox', () => {
  itSupportsStyle(Checkbox, defaultProps);
  itSupportsClassName(Checkbox, defaultProps);
  itSupportsMargins(Checkbox, defaultProps);
  itSupportsRef(Checkbox, defaultProps, HTMLInputElement, 'elementRef');
  itSupportsStylesApi(Checkbox, defaultProps, Object.keys(CheckboxStylesApi), 'checkbox');
  checkAccessibility([
    mount(<Checkbox aria-label="Checkbox without label" />),
    mount(<Checkbox label="With label" />),
    mount(<Checkbox id="with-id" label="With id" />),
  ]);

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

  it('sets checked state based on checked prop', () => {
    const checked = shallow(<Checkbox checked onChange={() => {}} />);
    const notChecked = shallow(<Checkbox checked={false} onChange={() => {}} />);

    expect(checked.render().find('input').attr('checked')).toBe('checked');
    expect(notChecked.render().find('input').attr('checked')).toBe(undefined);
  });

  it('sets checked state based on indeterminate prop', () => {
    const element = shallow(<Checkbox indeterminate checked={false} onChange={() => {}} />);
    expect(element.render().find('input').attr('checked')).toBe('checked');
  });

  it('spreads ...others to input element', () => {
    const element = shallow(<Checkbox aria-checked width="30px" />);

    expect(element.render().find('input').attr('aria-checked')).toBe('true');
    expect(element.render().find('input').attr('width')).toBe('30px');
  });

  it('has correct displayName', () => {
    expect(Checkbox.displayName).toEqual('@mantine/core/Checkbox');
  });
});

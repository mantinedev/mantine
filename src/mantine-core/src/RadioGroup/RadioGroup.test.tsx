import React from 'react';
import { mount, shallow } from 'enzyme';
import { checkAccessibility } from '@mantine/tests';
import { RadioGroup, Radio } from './RadioGroup';

describe('@mantine/core/RadioGroup', () => {
  checkAccessibility([
    mount(
      <RadioGroup>
        <Radio value="test-1">test-1</Radio>
        <Radio value="test-2">test-2</Radio>
        <Radio value="test-3">test-3</Radio>
      </RadioGroup>
    ),
  ]);

  it('has correct displayName', () => {
    expect(RadioGroup.displayName).toEqual('@mantine/core/RadioGroup');
  });

  it('renders correct children', () => {
    const element = shallow(
      <RadioGroup>
        <Radio value="test-1">test-1</Radio>
        <Radio value="test-2">test-2</Radio>
        <Radio value="test-3">test-3</Radio>
        <div data-imposter>Imposter</div>
      </RadioGroup>
    );

    expect(element.find(Radio)).toHaveLength(3);
    expect(element.render().find('[data-imposter]')).toHaveLength(0);
  });

  it('passes correct name to Radio components', () => {
    const withoutName = shallow(
      <RadioGroup>
        <Radio value="test-1">test-1</Radio>
        <Radio value="test-2">test-2</Radio>
        <Radio value="test-3">test-3</Radio>
      </RadioGroup>
    );

    const withName = shallow(
      <RadioGroup name="test-name">
        <Radio value="test-1">test-1</Radio>
        <Radio value="test-2">test-2</Radio>
        <Radio value="test-3">test-3</Radio>
      </RadioGroup>
    );

    expect(withoutName.find(Radio).at(1).prop('name').includes('mantine-')).toBe(true);
    expect(withName.find(Radio).at(1).prop('name')).toBe('test-name');
  });

  it('passes checked prop to Radio components', () => {
    const element = shallow(
      <RadioGroup value="test-2">
        <Radio value="test-1">test-1</Radio>
        <Radio value="test-2">test-2</Radio>
        <Radio value="test-3">test-3</Radio>
      </RadioGroup>
    );

    expect(element.find(Radio).at(0).prop('checked')).toBe(false);
    expect(element.find(Radio).at(1).prop('checked')).toBe(true);
    expect(element.find(Radio).at(2).prop('checked')).toBe(false);
  });
});

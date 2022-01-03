import React from 'react';
import { render } from '@testing-library/react';
import { checkAccessibility, itSupportsWrapperProps, itSupportsSystemProps } from '@mantine/tests';
import { Button } from '../Button';
import { RadioGroup, Radio, RadioGroupProps } from './index';

const defaultProps: RadioGroupProps = {
  children: <Radio value="test-1">test-1</Radio>,
  label: 'test-label',
  error: 'test-error',
  description: 'test-description',
  required: true,
};

describe('@mantine/core/RadioGroup', () => {
  itSupportsWrapperProps(RadioGroup, defaultProps);
  itSupportsSystemProps({
    component: RadioGroup,
    props: defaultProps,
    displayName: '@mantine/core/RadioGroup',
    excludeOthers: true,
    refType: HTMLDivElement,
  });

  checkAccessibility([
    <RadioGroup>
      <Radio value="test-1">test-1</Radio>
      <Radio value="test-2">test-2</Radio>
      <Radio value="test-3">test-3</Radio>
    </RadioGroup>,
  ]);

  it('filters out unexpected children', () => {
    const { container } = render(
      <RadioGroup>
        <Radio value="test-1">test-1</Radio>
        <Radio value="test-2">test-2</Radio>
        <p className="unexpected">Unexpected child 1</p>
        <div className="unexpected">Unexpected child 1</div>
        <Radio value="test-3">test-3</Radio>
        <Button>Unexpected component</Button>
      </RadioGroup>
    );

    expect(container.querySelectorAll('.mantine-RadioGroup-radioWrapper')).toHaveLength(3);
    expect(container.querySelectorAll('.mantine-Button-root')).toHaveLength(0);
    expect(container.querySelectorAll('.unexpected')).toHaveLength(0);
  });

  it('passes correct name to Radio components', () => {
    const { container: withoutName } = render(<RadioGroup {...defaultProps} />);
    const { container: withName } = render(<RadioGroup {...defaultProps} name="test-name" />);

    expect(
      withoutName.querySelector('input[type="radio"]').getAttribute('name').includes('mantine-')
    ).toBe(true);
    expect(withName.querySelector('input[type="radio"]').getAttribute('name')).toBe('test-name');
  });

  it('has correct displayName', () => {
    expect(RadioGroup.displayName).toEqual('@mantine/core/RadioGroup');
  });
});

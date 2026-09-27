import { fireEvent } from '@testing-library/react';
import { __InputStylesNames } from '@mantine/core';
import { inputDefaultProps, inputStylesApiSelectors, render, tests } from '@mantine-tests/core';
import { TimeInput, TimeInputProps } from './TimeInput';

const defaultProps: TimeInputProps = {
  ...inputDefaultProps,
};

describe('@mantine/dates/TimeInput', () => {
  tests.axe([
    <TimeInput aria-label="test-label" key="1" />,
    <TimeInput label="test-label" key="2" />,
    <TimeInput label="test-label" error key="3" />,
    <TimeInput label="test-label" error="test-error" id="test" key="4" />,
    <TimeInput label="test-label" description="test-description" key="5" />,
  ]);

  tests.itSupportsSystemProps<TimeInputProps, __InputStylesNames>({
    component: TimeInput,
    props: defaultProps,
    displayName: '@mantine/dates/TimeInput',
    stylesApiSelectors: [...inputStylesApiSelectors],
  });

  tests.itSupportsInputProps<TimeInputProps>({
    component: TimeInput,
    props: defaultProps,
    selector: 'input',
  });

  tests.itSupportsSharedInputDefaults<TimeInputProps>({
    component: TimeInput,
    props: defaultProps,
    componentName: 'TimeInput',
  });
});

describe('@mantine/dates/TimeInput data-empty', () => {
  it('sets data-empty for controlled value', () => {
    const { container, rerender } = render(<TimeInput value="" onChange={() => {}} />);
    expect(container.querySelector('input')).toHaveAttribute('data-empty', 'true');
    rerender(<TimeInput value="10:30" onChange={() => {}} />);
    expect(container.querySelector('input')).not.toHaveAttribute('data-empty');
  });

  it('tracks data-empty for uncontrolled value', () => {
    const { container } = render(<TimeInput />);
    const input = container.querySelector('input')!;
    expect(input).toHaveAttribute('data-empty', 'true');
    fireEvent.change(input, { target: { value: '10:30' } });
    expect(input).not.toHaveAttribute('data-empty');
    fireEvent.change(input, { target: { value: '' } });
    expect(input).toHaveAttribute('data-empty', 'true');
  });

  it('does not set data-empty when defaultValue is provided', () => {
    const { container } = render(<TimeInput defaultValue="10:30" />);
    expect(container.querySelector('input')).not.toHaveAttribute('data-empty');
  });
});

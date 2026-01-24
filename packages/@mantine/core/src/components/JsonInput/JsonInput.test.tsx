import { useState } from 'react';
import userEvent from '@testing-library/user-event';
import {
  inputDefaultProps,
  inputStylesApiSelectors,
  render,
  screen,
  tests,
} from '@mantine-tests/core';
import { __InputStylesNames } from '../Input';
import { JsonInput, JsonInputProps } from './JsonInput';

const defaultProps: JsonInputProps = {
  ...inputDefaultProps,
};

describe('@mantine/core/JsonInput', () => {
  tests.axe([
    <JsonInput aria-label="test-label" key="1" />,
    <JsonInput label="test-label" key="2" />,
    <JsonInput label="test-label" error key="3" />,
    <JsonInput label="test-label" error="test-error" id="test" key="4" />,
    <JsonInput label="test-label" description="test-description" key="5" />,
  ]);

  tests.itSupportsSystemProps<JsonInputProps, __InputStylesNames>({
    component: JsonInput,
    props: defaultProps,
    displayName: '@mantine/core/JsonInput',
    stylesApiSelectors: [...inputStylesApiSelectors],
  });

  tests.itSupportsInputProps<JsonInputProps>({
    component: JsonInput,
    props: defaultProps,
    selector: 'textarea',
  });

  it('formats JSON on blur when formatOnBlur is true', async () => {
    const user = userEvent.setup();
    const { container } = render(<JsonInput formatOnBlur label="test" />);
    const input = container.querySelector('textarea')!;

    await user.click(input);
    await user.paste('{"a":1,"b":2}');
    await user.tab();

    expect(input.value).toBe('{\n  "a": 1,\n  "b": 2\n}');
  });

  it('does not format JSON on blur when formatOnBlur is false', async () => {
    const user = userEvent.setup();
    const { container } = render(<JsonInput formatOnBlur={false} label="test" />);
    const input = container.querySelector('textarea')!;

    await user.click(input);
    await user.paste('{"a":1,"b":2}');
    await user.tab();

    expect(input.value).toBe('{"a":1,"b":2}');
  });

  it('does not format invalid JSON', async () => {
    const user = userEvent.setup();
    const { container } = render(<JsonInput formatOnBlur label="test" />);
    const input = container.querySelector('textarea')!;

    await user.click(input);
    await user.paste('{"invalid"}');
    await user.tab();

    expect(input.value).toBe('{"invalid"}');
  });

  it('does not format when readOnly is true', async () => {
    const user = userEvent.setup();
    const { container } = render(
      <JsonInput formatOnBlur readOnly label="test" defaultValue='{"a":1}' />
    );
    const input = container.querySelector('textarea')!;

    await user.click(input);
    await user.tab();

    expect(input.value).toBe('{"a":1}');
  });

  it('does not format empty string', async () => {
    const user = userEvent.setup();
    const { container } = render(<JsonInput formatOnBlur label="test" />);
    const input = container.querySelector('textarea')!;

    await user.click(input);
    await user.tab();

    expect(input.value).toBe('');
  });

  it('displays validationError when JSON is invalid', async () => {
    const user = userEvent.setup();
    const { container } = render(
      <JsonInput label="test" validationError="Custom validation error" />
    );
    const input = container.querySelector('textarea')!;

    await user.click(input);
    await user.paste('{"invalid"}');
    await user.tab();

    expect(screen.getByText('Custom validation error')).toBeInTheDocument();
  });

  it('displays generic error state when validationError is not provided', async () => {
    const user = userEvent.setup();
    const { container } = render(<JsonInput label="test" />);
    const input = container.querySelector('textarea')!;

    await user.click(input);
    await user.paste('{"invalid"}');
    await user.tab();

    expect(input).toHaveAttribute('aria-invalid', 'true');
  });

  it('validationError takes precedence over error prop when JSON is invalid', async () => {
    const user = userEvent.setup();
    render(<JsonInput label="test" error="External error" validationError="Validation error" />);
    const input = screen.getByRole('textbox');

    await user.click(input);
    await user.paste('{"invalid"}');
    await user.tab();

    expect(screen.getByText('Validation error')).toBeInTheDocument();
    expect(screen.queryByText('External error')).not.toBeInTheDocument();
  });

  it('displays error prop when JSON is valid', async () => {
    const user = userEvent.setup();
    render(<JsonInput label="test" error="External error" validationError="Validation error" />);
    const input = screen.getByRole('textbox');

    await user.click(input);
    await user.paste('{"valid": true}');
    await user.tab();

    expect(screen.getByText('External error')).toBeInTheDocument();
    expect(screen.queryByText('Validation error')).not.toBeInTheDocument();
  });

  it('accepts custom serialize function', async () => {
    const user = userEvent.setup();
    const customSerialize = (val: any) => JSON.stringify(val, null, 4);
    const { container } = render(
      <JsonInput formatOnBlur serialize={customSerialize} label="test" />
    );
    const input = container.querySelector('textarea')!;

    await user.click(input);
    await user.paste('{"a":1}');
    await user.tab();

    expect(input.value).toBe('{\n    "a": 1\n}');
  });

  it('accepts custom deserialize function', async () => {
    const user = userEvent.setup();
    const customDeserialize = (val: string) => {
      if (val === 'custom') {
        return { custom: true };
      }
      return JSON.parse(val);
    };
    const { container } = render(
      <JsonInput formatOnBlur deserialize={customDeserialize} label="test" />
    );
    const input = container.querySelector('textarea')!;

    await user.click(input);
    await user.paste('custom');
    await user.tab();

    expect(input.value).toBe('{\n  "custom": true\n}');
  });

  it('validates using custom deserialize function', async () => {
    const user = userEvent.setup();
    const customDeserialize = (val: string) => {
      if (val === 'valid-custom') {
        return { valid: true };
      }
      throw new Error('Invalid custom format');
    };
    const { container } = render(
      <JsonInput deserialize={customDeserialize} validationError="Invalid format" label="test" />
    );
    const input = container.querySelector('textarea')!;

    await user.click(input);
    await user.paste('invalid-custom');
    await user.tab();

    expect(screen.getByText('Invalid format')).toBeInTheDocument();
  });

  it('handles empty string as valid JSON', async () => {
    const user = userEvent.setup();
    const { container } = render(<JsonInput label="test" validationError="Invalid JSON" />);
    const input = container.querySelector('textarea')!;

    await user.click(input);
    await user.tab();

    expect(screen.queryByText('Invalid JSON')).not.toBeInTheDocument();
    expect(container.querySelector('[data-invalid]')).not.toBeInTheDocument();
  });

  it('handles whitespace-only string as valid JSON', async () => {
    const user = userEvent.setup();
    const { container } = render(<JsonInput label="test" validationError="Invalid JSON" />);
    const input = container.querySelector('textarea')!;

    await user.click(input);
    await user.paste('   \n  \t  ');
    await user.tab();

    expect(screen.queryByText('Invalid JSON')).not.toBeInTheDocument();
    expect(container.querySelector('[data-invalid]')).not.toBeInTheDocument();
  });

  it('shows validation error on mount with initial invalid value', () => {
    render(<JsonInput defaultValue='{"invalid"}' label="test" validationError="Invalid JSON" />);

    expect(screen.getByText('Invalid JSON')).toBeInTheDocument();
  });

  it('shows validation error on first blur with initial invalid value', async () => {
    const user = userEvent.setup();
    render(<JsonInput defaultValue='{"invalid"}' label="test" validationError="Invalid JSON" />);
    const input = screen.getByRole('textbox');

    await user.click(input);
    await user.tab();

    expect(screen.getByText('Invalid JSON')).toBeInTheDocument();
  });

  it('calls onChange with updated value', async () => {
    const user = userEvent.setup();
    const spy = jest.fn();
    render(<JsonInput label="test" onChange={spy} />);
    const input = screen.getByRole('textbox');

    await user.click(input);
    await user.paste('{"a":1}');

    expect(spy).toHaveBeenCalledWith('{"a":1}');
  });

  it('calls onChange with formatted value when formatOnBlur is enabled', async () => {
    const user = userEvent.setup();
    const spy = jest.fn();
    render(<JsonInput label="test" onChange={spy} formatOnBlur />);
    const input = screen.getByRole('textbox');

    await user.click(input);
    await user.paste('{"a":1}');
    await user.tab();

    expect(spy).toHaveBeenLastCalledWith('{\n  "a": 1\n}');
  });

  it('works in controlled mode', async () => {
    const user = userEvent.setup();

    function Controlled() {
      const [value, setValue] = useState('');
      return <JsonInput label="test" value={value} onChange={setValue} />;
    }

    render(<Controlled />);
    const input = screen.getByRole('textbox');

    await user.click(input);
    await user.paste('{"test":true}');

    expect(input).toHaveValue('{"test":true}');
  });

  it('applies data-monospace attribute', () => {
    const { container } = render(<JsonInput label="test" />);
    const input = container.querySelector('textarea')!;

    expect(input).toHaveAttribute('data-monospace');
  });

  it('sets autoComplete to off', () => {
    const { container } = render(<JsonInput label="test" />);
    const input = container.querySelector('textarea')!;

    expect(input).toHaveAttribute('autocomplete', 'off');
  });
});

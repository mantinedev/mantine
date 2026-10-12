import { act, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FormMode, useForm, UseFormReturnType } from '@mantine/form';
import { render, screen, tests } from '@mantine-tests/core';
import { PinInput, PinInputProps, PinInputStylesNames } from './PinInput';

const defaultProps: PinInputProps = {};

const getInputs = (container: HTMLElement) =>
  container.querySelectorAll<HTMLInputElement>('.mantine-PinInput-input');

const getInputValues = (container: HTMLElement) =>
  Array.from(getInputs(container)).map((input) => input.value);

describe('@mantine/core/PinInput', () => {
  tests.axe([<PinInput {...defaultProps} aria-label="Test label" />]);

  tests.itSupportsSystemProps<PinInputProps, PinInputStylesNames>({
    component: PinInput,
    props: defaultProps,
    varsResolver: true,
    displayName: '@mantine/core/PinInput',
    stylesApiSelectors: ['root', 'pinInput', 'input'],
    providerStylesApi: false,
    attributes: false,
  });

  tests.itSupportsSharedInputDefaults<PinInputProps>({
    component: PinInput,
    props: defaultProps,
    componentName: 'PinInput',
    withWrapper: false,
  });

  it('renders correct number of inputs based on length prop', () => {
    const { container } = render(<PinInput {...defaultProps} length={5} />);
    expect(getInputs(container)).toHaveLength(5);
  });

  it('renders 4 inputs by default', () => {
    const { container } = render(<PinInput {...defaultProps} />);
    expect(getInputs(container)).toHaveLength(4);
  });

  it('renders with defaultValue', () => {
    const { container } = render(<PinInput length={4} defaultValue="1234" />);
    expect(getInputValues(container)).toEqual(['1', '2', '3', '4']);
  });

  it('renders with partial defaultValue', () => {
    const { container } = render(<PinInput length={4} defaultValue="12" />);
    expect(getInputValues(container)).toEqual(['1', '2', '', '']);
  });

  it('renders controlled value', () => {
    const { container } = render(<PinInput length={4} value="abcd" />);
    expect(getInputValues(container)).toEqual(['a', 'b', 'c', 'd']);
  });

  it('display only one character in an input', () => {
    const { container } = render(<PinInput length={6} defaultValue="1" />);
    fireEvent.change(getInputs(container)[0], { target: { value: '12' } });
    expect(getInputs(container)[0].value).toBe('2');
  });

  it('onChange is called with full value string', () => {
    const spy = jest.fn();
    const { container } = render(<PinInput length={4} onChange={spy} />);

    fireEvent.change(getInputs(container)[0], { target: { value: 'a' } });
    expect(spy).toHaveBeenLastCalledWith('a');

    fireEvent.change(getInputs(container)[1], { target: { value: 'b' } });
    expect(spy).toHaveBeenLastCalledWith('ab');
  });

  it('onComplete is called only once when all inputs are filled', () => {
    const spy = jest.fn();
    const { container } = render(<PinInput length={4} onComplete={spy} />);

    getInputs(container).forEach((element) => {
      fireEvent.change(element, { target: { value: 'x' } });
    });

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith('xxxx');
  });

  it('onComplete is not called when value is incomplete', () => {
    const spy = jest.fn();
    const { container } = render(<PinInput length={4} onComplete={spy} />);

    fireEvent.change(getInputs(container)[0], { target: { value: '1' } });
    fireEvent.change(getInputs(container)[1], { target: { value: '2' } });
    fireEvent.change(getInputs(container)[2], { target: { value: '3' } });

    expect(spy).not.toHaveBeenCalled();
  });

  it('focus first input on mount with `autoFocus` property', () => {
    const { container } = render(<PinInput length={6} autoFocus />);
    expect(getInputs(container)[0]).toHaveFocus();
  });

  it('moves focus to next input after typing', async () => {
    const { container } = render(<PinInput length={4} />);
    const inputs = getInputs(container);

    await userEvent.click(inputs[0]);
    await userEvent.keyboard('1');

    expect(inputs[1]).toHaveFocus();
  });

  it('does not move focus when manageFocus is false', async () => {
    const { container } = render(<PinInput length={4} manageFocus={false} />);
    const inputs = getInputs(container);

    await userEvent.click(inputs[0]);
    fireEvent.change(inputs[0], { target: { value: '1' } });

    expect(inputs[0]).toHaveFocus();
  });

  it('stay focused on last element on initial backspace press', async () => {
    const { container } = render(<PinInput {...defaultProps} length={5} />);
    expect(getInputs(container)).toHaveLength(5);

    getInputs(container).forEach((element, key) => {
      fireEvent.change(element, { target: { value: key } });
    });

    await userEvent.keyboard('{Backspace}');
    expect(getInputs(container)[4]).toHaveFocus();
  });

  it('inputs except the last element should not need two backspace press to shift focus to prev element', async () => {
    const { container } = render(<PinInput {...defaultProps} length={5} />);
    expect(getInputs(container)).toHaveLength(5);

    getInputs(container).forEach((element, key) => {
      fireEvent.change(element, { target: { value: key } });
    });

    await userEvent.keyboard('{Backspace}');
    expect(getInputs(container)[4]).toHaveFocus();

    await userEvent.keyboard('{Backspace}');
    expect(getInputs(container)[3]).toHaveFocus();

    await userEvent.keyboard('{Backspace}');
    expect(getInputs(container)[2]).toHaveFocus();

    await userEvent.keyboard('{Backspace}');
    expect(getInputs(container)[1]).toHaveFocus();

    await userEvent.keyboard('{Backspace}');
    expect(getInputs(container)[0]).toHaveFocus();
  });

  it('does not change values with Backspace, Delete and paste when readOnly is set', async () => {
    const onChange = jest.fn();
    const { container } = render(
      <PinInput {...defaultProps} length={4} defaultValue="1234" readOnly onChange={onChange} />
    );
    const inputs = getInputs(container);

    await userEvent.click(inputs[3]);
    await userEvent.keyboard('{Backspace}');
    expect(getInputValues(container)).toStrictEqual(['1', '2', '3', '4']);
    expect(inputs[2]).toHaveFocus();

    await userEvent.keyboard('{Delete}');
    expect(getInputValues(container)).toStrictEqual(['1', '2', '3', '4']);

    fireEvent.paste(inputs[0], { clipboardData: { getData: () => '5678' } });
    expect(getInputValues(container)).toStrictEqual(['1', '2', '3', '4']);
    expect(onChange).not.toHaveBeenCalled();
  });

  it('backspace on first input does not throw', async () => {
    const { container } = render(<PinInput length={4} />);
    const inputs = getInputs(container);

    await userEvent.click(inputs[0]);
    await userEvent.keyboard('{Backspace}');

    expect(inputs[0]).toHaveFocus();
  });

  it('ArrowRight moves focus to next input', async () => {
    const { container } = render(<PinInput length={4} />);
    const inputs = getInputs(container);

    await userEvent.click(inputs[0]);
    await userEvent.keyboard('{ArrowRight}');

    expect(inputs[1]).toHaveFocus();
  });

  it('ArrowLeft moves focus to previous input', async () => {
    const { container } = render(<PinInput length={4} />);
    const inputs = getInputs(container);

    await userEvent.click(inputs[2]);
    await userEvent.keyboard('{ArrowLeft}');

    expect(inputs[1]).toHaveFocus();
  });

  it('ArrowRight on last input stays on last input', async () => {
    const { container } = render(<PinInput length={4} />);
    const inputs = getInputs(container);

    await userEvent.click(inputs[3]);
    await userEvent.keyboard('{ArrowRight}');

    expect(inputs[3]).toHaveFocus();
  });

  it('ArrowLeft on first input stays on first input', async () => {
    const { container } = render(<PinInput length={4} />);
    const inputs = getInputs(container);

    await userEvent.click(inputs[0]);
    await userEvent.keyboard('{ArrowLeft}');

    expect(inputs[0]).toHaveFocus();
  });

  it('Delete key clears current input value', async () => {
    const { container } = render(<PinInput length={4} defaultValue="1234" />);
    const inputs = getInputs(container);

    await userEvent.click(inputs[1]);
    await userEvent.keyboard('{Delete}');

    expect(getInputValues(container)).toEqual(['1', '', '3', '4']);
  });

  it('Space key moves focus to next input', async () => {
    const { container } = render(<PinInput length={4} />);
    const inputs = getInputs(container);

    await userEvent.click(inputs[0]);
    await userEvent.keyboard(' ');

    expect(inputs[1]).toHaveFocus();
  });

  it('inputs will be filled when the value is bigger than 2 chars(ex: Gboard paste action from keypad)', async () => {
    const spy = jest.fn();
    const { container } = render(<PinInput {...defaultProps} onComplete={spy} length={6} />);

    const element = getInputs(container)[0];

    const expectedValue = '123456';
    fireEvent.change(element, { target: { value: expectedValue } });
    expect(spy).toHaveBeenCalledWith(expectedValue);
  });

  it('paste fills multiple inputs', async () => {
    const { container } = render(<PinInput length={4} />);
    const inputs = getInputs(container);

    await userEvent.click(inputs[0]);
    fireEvent.paste(inputs[0], {
      clipboardData: { getData: () => '1234' },
    });

    expect(getInputValues(container)).toEqual(['1', '2', '3', '4']);
  });

  it('paste with full value focuses the last input', async () => {
    const { container } = render(<PinInput length={4} />);
    const inputs = getInputs(container);

    await userEvent.click(inputs[0]);
    fireEvent.paste(inputs[0], {
      clipboardData: { getData: () => '1234' },
    });

    expect(inputs[3]).toHaveFocus();
  });

  it('paste with partial value focuses the next empty input', async () => {
    const { container } = render(<PinInput length={4} />);
    const inputs = getInputs(container);

    await userEvent.click(inputs[0]);
    fireEvent.paste(inputs[0], {
      clipboardData: { getData: () => '12' },
    });

    expect(inputs[2]).toHaveFocus();
  });

  it('paste with longer value than length truncates', async () => {
    const { container } = render(<PinInput length={4} />);
    const inputs = getInputs(container);

    await userEvent.click(inputs[0]);
    fireEvent.paste(inputs[0], {
      clipboardData: { getData: () => '123456789' },
    });

    expect(getInputValues(container)).toEqual(['1', '2', '3', '4']);
  });

  it('paste ignores invalid characters based on type', async () => {
    const { container } = render(<PinInput length={4} type="number" />);
    const inputs = getInputs(container);

    await userEvent.click(inputs[0]);
    fireEvent.paste(inputs[0], {
      clipboardData: { getData: () => 'abcd' },
    });

    // Invalid paste should not change values
    expect(getInputValues(container)).toEqual(['', '', '', '']);
  });

  it('paste with whitespace strips whitespace', async () => {
    const { container } = render(<PinInput length={4} />);
    const inputs = getInputs(container);

    await userEvent.click(inputs[0]);
    fireEvent.paste(inputs[0], {
      clipboardData: { getData: () => '1 2 3 4' },
    });

    expect(getInputValues(container)).toEqual(['1', '2', '3', '4']);
  });

  it('type="number" only accepts numeric input', () => {
    const spy = jest.fn();
    const { container } = render(<PinInput length={4} type="number" onChange={spy} />);
    const inputs = getInputs(container);

    fireEvent.change(inputs[0], { target: { value: 'a' } });
    expect(getInputValues(container)[0]).toBe('');

    fireEvent.change(inputs[0], { target: { value: '5' } });
    expect(getInputValues(container)[0]).toBe('5');
  });

  it('type="alphanumeric" accepts letters and numbers', () => {
    const { container } = render(<PinInput length={4} type="alphanumeric" />);
    const inputs = getInputs(container);

    fireEvent.change(inputs[0], { target: { value: 'a' } });
    expect(getInputValues(container)[0]).toBe('a');

    fireEvent.change(inputs[1], { target: { value: '5' } });
    expect(getInputValues(container)[1]).toBe('5');
  });

  it('type="alphanumeric" rejects special characters', () => {
    const { container } = render(<PinInput length={4} type="alphanumeric" />);
    const inputs = getInputs(container);

    fireEvent.change(inputs[0], { target: { value: '@' } });
    expect(getInputValues(container)[0]).toBe('');

    fireEvent.change(inputs[0], { target: { value: '!' } });
    expect(getInputValues(container)[0]).toBe('');
  });

  it('custom RegExp type validates correctly', () => {
    const { container } = render(<PinInput length={4} type={/^[a-f]+$/} />);
    const inputs = getInputs(container);

    fireEvent.change(inputs[0], { target: { value: 'a' } });
    expect(getInputValues(container)[0]).toBe('a');

    fireEvent.change(inputs[1], { target: { value: 'z' } });
    expect(getInputValues(container)[1]).toBe('');

    fireEvent.change(inputs[1], { target: { value: 'f' } });
    expect(getInputValues(container)[1]).toBe('f');
  });

  it('disabled inputs cannot be focused', () => {
    const { container } = render(<PinInput length={4} disabled />);
    const inputs = getInputs(container);

    inputs.forEach((input) => {
      expect(input).toBeDisabled();
    });
  });

  it('readOnly inputs have readOnly attribute', () => {
    const { container } = render(<PinInput length={4} readOnly />);
    const inputs = getInputs(container);

    inputs.forEach((input) => {
      expect(input).toHaveAttribute('readonly');
    });
  });

  it('readOnly does not change value on Delete', () => {
    const { container } = render(<PinInput defaultValue="1234" readOnly />);
    fireEvent.keyDown(getInputs(container)[0], { key: 'Delete' });
    expect(getInputValues(container)).toEqual(['1', '2', '3', '4']);
  });

  it('readOnly does not change value on Backspace', () => {
    const { container } = render(<PinInput defaultValue="1234" readOnly />);
    fireEvent.keyDown(getInputs(container)[3], { key: 'Backspace' });
    fireEvent.keyDown(getInputs(container)[1], { key: 'Backspace' });
    expect(getInputValues(container)).toEqual(['1', '2', '3', '4']);
  });

  it('readOnly does not change value on paste', () => {
    const { container } = render(<PinInput defaultValue="1234" readOnly />);
    fireEvent.paste(getInputs(container)[0], {
      clipboardData: { getData: () => '5678' },
    });
    expect(getInputValues(container)).toEqual(['1', '2', '3', '4']);
  });

  it('readOnly keeps arrow key focus navigation', () => {
    const { container } = render(<PinInput defaultValue="1234" readOnly />);
    const inputs = getInputs(container);
    inputs[0].focus();
    fireEvent.keyDown(inputs[0], { key: 'ArrowRight' });
    expect(inputs[1]).toHaveFocus();
  });

  it('error prop applies error styles', () => {
    const { container } = render(<PinInput length={4} error />);
    const inputs = getInputs(container);

    inputs.forEach((input) => {
      expect(input).toHaveAttribute('data-error', 'true');
    });
  });

  it('mask prop sets input type to password', () => {
    const { container } = render(<PinInput length={4} mask />);
    const inputs = getInputs(container);

    inputs.forEach((input) => {
      expect(input).toHaveAttribute('type', 'password');
    });
  });

  it('renders custom placeholder', () => {
    const { container } = render(<PinInput length={4} placeholder="*" />);
    const inputs = getInputs(container);

    inputs.forEach((input) => {
      expect(input).toHaveAttribute('placeholder', '*');
    });
  });

  it('placeholder is hidden when input is focused', async () => {
    const { container } = render(<PinInput length={4} placeholder="○" />);
    const inputs = getInputs(container);

    await userEvent.click(inputs[0]);

    expect(inputs[0]).toHaveAttribute('placeholder', '');
    expect(inputs[1]).toHaveAttribute('placeholder', '○');
  });

  it('controlled value updates inputs', () => {
    const { container, rerender } = render(<PinInput length={4} value="12" />);
    expect(getInputValues(container)).toEqual(['1', '2', '', '']);

    rerender(<PinInput length={4} value="1234" />);
    expect(getInputValues(container)).toEqual(['1', '2', '3', '4']);
  });

  it('controlled value can be reset to empty', () => {
    const { container, rerender } = render(<PinInput length={4} value="1234" />);
    expect(getInputValues(container)).toEqual(['1', '2', '3', '4']);

    rerender(<PinInput length={4} value="" />);
    expect(getInputValues(container)).toEqual(['', '', '', '']);
  });

  it('hidden input has correct name and form attributes', () => {
    const { container } = render(<PinInput length={4} name="pin" form="myForm" />);
    const hiddenInput = container.querySelector('input[type="hidden"]');

    expect(hiddenInput).toHaveAttribute('name', 'pin');
    expect(hiddenInput).toHaveAttribute('form', 'myForm');
  });

  it('hidden input value reflects current pin value', () => {
    const { container } = render(<PinInput length={4} defaultValue="1234" />);
    const hiddenInput = container.querySelector('input[type="hidden"]');

    expect(hiddenInput).toHaveAttribute('value', '1234');
  });

  it('oneTimeCode adds autocomplete attribute by default', () => {
    const { container } = render(<PinInput length={4} />);
    const inputs = getInputs(container);

    inputs.forEach((input) => {
      expect(input).toHaveAttribute('autocomplete', 'one-time-code');
    });
  });

  it('oneTimeCode={false} sets autocomplete to off', () => {
    const { container } = render(<PinInput length={4} oneTimeCode={false} />);
    const inputs = getInputs(container);

    inputs.forEach((input) => {
      expect(input).toHaveAttribute('autocomplete', 'off');
    });
  });

  it('getInputProps allows customizing individual inputs', () => {
    const { container } = render(
      <PinInput
        length={4}
        getInputProps={(index) => ({
          'data-testid': `pin-${index}`,
        })}
      />
    );

    expect(container.querySelector('[data-testid="pin-0"]')).toBeInTheDocument();
    expect(container.querySelector('[data-testid="pin-1"]')).toBeInTheDocument();
    expect(container.querySelector('[data-testid="pin-2"]')).toBeInTheDocument();
    expect(container.querySelector('[data-testid="pin-3"]')).toBeInTheDocument();
  });

  it('handles dynamic length changes', () => {
    const { container, rerender } = render(<PinInput length={4} defaultValue="1234" />);
    expect(getInputs(container)).toHaveLength(4);
    expect(getInputValues(container)).toEqual(['1', '2', '3', '4']);

    rerender(<PinInput length={6} defaultValue="1234" />);
    expect(getInputs(container)).toHaveLength(6);
    expect(getInputValues(container)).toEqual(['1', '2', '3', '4', '', '']);
  });

  it('typing the same value as current moves focus to next', async () => {
    const { container } = render(<PinInput length={4} defaultValue="1" />);
    const inputs = getInputs(container);

    await userEvent.click(inputs[0]);
    fireEvent.keyDown(inputs[0], { key: '1' });

    // The focus should move to next input when pressing same key
    expect(inputs[1]).toHaveFocus();
  });

  it('labels the group with aria-label and inputs with their position', () => {
    const { container } = render(<PinInput length={3} aria-label="Verification code" />);
    expect(screen.getByRole('group')).toHaveAttribute('aria-label', 'Verification code');
    expect(
      Array.from(getInputs(container)).map((input) => input.getAttribute('aria-label'))
    ).toEqual(['Verification code 1 of 3', 'Verification code 2 of 3', 'Verification code 3 of 3']);
  });

  it('uses ariaLabel as base of input labels', () => {
    const { container, rerender } = render(
      <PinInput length={2} aria-label="Group" ariaLabel="Digit" />
    );
    expect(getInputs(container)[1]).toHaveAttribute('aria-label', 'Digit 2 of 2');

    rerender(<PinInput length={2} />);
    expect(getInputs(container)[0]).toHaveAttribute('aria-label', 'PinInput 1 of 2');
  });

  it('blocks non-digit characters but allows other keys with inputMode="numeric"', () => {
    const { container } = render(<PinInput length={4} inputMode="numeric" />);
    const input = getInputs(container)[0];

    expect(fireEvent.keyDown(input, { key: 'a' })).toBe(false);
    expect(fireEvent.keyDown(input, { key: '-' })).toBe(false);
    expect(fireEvent.keyDown(input, { key: '1' })).toBe(true);
    expect(fireEvent.keyDown(input, { key: 'Enter' })).toBe(true);
    expect(fireEvent.keyDown(input, { key: 'Home' })).toBe(true);
    expect(fireEvent.keyDown(input, { key: 'End' })).toBe(true);
    expect(fireEvent.keyDown(input, { key: 'v', ctrlKey: true })).toBe(true);
  });

  it('allows Backspace with inputMode="numeric"', async () => {
    const { container } = render(<PinInput length={4} inputMode="numeric" defaultValue="12" />);
    const inputs = getInputs(container);

    await userEvent.click(inputs[1]);
    await userEvent.keyboard('{Backspace}');
    expect(getInputValues(container)).toEqual(['1', '', '', '']);
  });

  it('submits parent form with Enter when inputMode="numeric"', async () => {
    const onSubmit = jest.fn((event: React.FormEvent) => event.preventDefault());
    const { container } = render(
      <form onSubmit={onSubmit}>
        <PinInput length={2} inputMode="numeric" />
        <button type="submit">Submit</button>
      </form>
    );

    await userEvent.click(getInputs(container)[0]);
    await userEvent.keyboard('{Enter}');
    expect(onSubmit).toHaveBeenCalledTimes(1);
  });

  it('does not move focus with arrow keys when manageFocus is false', async () => {
    const { container } = render(<PinInput length={4} manageFocus={false} />);
    const inputs = getInputs(container);

    await userEvent.click(inputs[1]);
    await userEvent.keyboard('{ArrowRight}');
    expect(inputs[1]).toHaveFocus();

    await userEvent.keyboard('{ArrowLeft}');
    expect(inputs[1]).toHaveFocus();
  });

  describe.each(['controlled', 'uncontrolled'] as const)('with @mantine/form (%s)', (mode) => {
    function setup(initialPin = '') {
      let form!: UseFormReturnType<{ pin: string }>;
      const onComplete = jest.fn();

      function TestForm({ formMode }: { formMode: FormMode }) {
        form = useForm({ mode: formMode, initialValues: { pin: initialPin } });
        return <PinInput length={4} onComplete={onComplete} {...form.getInputProps('pin')} />;
      }

      const { container } = render(<TestForm formMode={mode} />);
      const paste = (value: string) =>
        fireEvent.paste(getInputs(container)[0], { clipboardData: { getData: () => value } });

      return { getForm: () => form, onComplete, container, paste };
    }

    it('calls onComplete again after form.reset', () => {
      const { getForm, onComplete, container, paste } = setup();
      paste('1234');
      expect(onComplete).toHaveBeenCalledTimes(1);

      act(() => getForm().reset());
      expect(getInputValues(container)).toEqual(['', '', '', '']);

      paste('5678');
      expect(onComplete).toHaveBeenCalledTimes(2);
      expect(onComplete).toHaveBeenLastCalledWith('5678');
      expect(getForm().getValues().pin).toBe('5678');
    });

    it('calls onComplete again after the form writes the value', () => {
      const { getForm, onComplete, container, paste } = setup();
      paste('1234');
      expect(onComplete).toHaveBeenCalledTimes(1);

      act(() => getForm().setFieldValue('pin', '9999'));
      expect(getInputValues(container)).toEqual(['9', '9', '9', '9']);
      expect(onComplete).toHaveBeenCalledTimes(1);

      paste('5678');
      expect(onComplete).toHaveBeenCalledTimes(2);
    });

    it('replaces a partial entry on form.reset and form.setFieldValue', async () => {
      const { getForm, container } = setup('12');
      await userEvent.click(getInputs(container)[2]);
      await userEvent.keyboard('3');
      expect(getInputValues(container)).toEqual(['1', '2', '3', '']);

      act(() => getForm().reset());
      expect(getInputValues(container)).toEqual(['1', '2', '', '']);

      await userEvent.click(getInputs(container)[2]);
      await userEvent.keyboard('7');
      act(() => getForm().setFieldValue('pin', '4'));
      expect(getInputValues(container)).toEqual(['4', '', '', '']);
      expect(getForm().getValues().pin).toBe('4');
    });

    it('keeps row values after list reindexing with stable keys', () => {
      let form!: UseFormReturnType<{ rows: { id: string; pin: string }[] }>;

      function ListForm() {
        form = useForm({
          mode,
          initialValues: {
            rows: [
              { id: 'a', pin: '1111' },
              { id: 'b', pin: '22' },
            ],
          },
        });

        return form.getValues().rows.map((row, index) => (
          <div key={row.id} data-row={row.id}>
            <PinInput length={4} {...form.getInputProps(`rows.${index}.pin`)} />
          </div>
        ));
      }

      const { container } = render(<ListForm />);
      const getRow = (id: string) => container.querySelector<HTMLElement>(`[data-row="${id}"]`)!;

      act(() => form.removeListItem('rows', 0));
      expect(getInputValues(getRow('b'))).toEqual(['2', '2', '', '']);

      act(() => form.insertListItem('rows', { id: 'c', pin: '3' }, 0));
      expect(getInputValues(getRow('b'))).toEqual(['2', '2', '', '']);
      expect(getInputValues(getRow('c'))).toEqual(['3', '', '', '']);
    });
  });
});

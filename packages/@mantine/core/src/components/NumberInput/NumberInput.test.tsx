import { createRef } from 'react';
import { act, fireEvent, waitFor } from '@testing-library/react';
import {
  inputDefaultProps,
  inputStylesApiSelectors,
  render,
  screen,
  tests,
  userEvent,
} from '@mantine-tests/core';
import { __InputStylesNames } from '../Input';
import { NumberInput, NumberInputHandlers, NumberInputProps } from './NumberInput';

const defaultProps: NumberInputProps = {
  ...inputDefaultProps,
};

const clickIncrement = (container: HTMLElement) =>
  userEvent.click(container.querySelector('.mantine-NumberInput-control[data-direction="up"]')!);

const clickDecrement = (container: HTMLElement) =>
  userEvent.click(container.querySelector('.mantine-NumberInput-control[data-direction="down"]')!);

const getInput = () => screen.getByRole('textbox');
const enterText = (text: string) => userEvent.type(getInput(), text);
const expectValue = (value: string) => expect(getInput()).toHaveValue(value);
const focusInput = () => fireEvent.focus(getInput());
const blurInput = () => fireEvent.blur(getInput());

describe('@mantine/core/NumberInput', () => {
  tests.axe([
    <NumberInput aria-label="test-label" key="1" />,
    <NumberInput label="test-label" key="2" />,
    <NumberInput label="test-label" error key="3" />,
    <NumberInput label="test-label" error="test-error" id="test" key="4" />,
    <NumberInput label="test-label" description="test-description" key="5" />,
  ]);

  tests.itSupportsSystemProps<NumberInputProps, __InputStylesNames>({
    component: NumberInput,
    props: defaultProps,
    varsResolver: true,
    displayName: '@mantine/core/NumberInput',
    stylesApiSelectors: [...inputStylesApiSelectors],
  });

  tests.itSupportsInputProps<NumberInputProps>({
    component: NumberInput,
    props: defaultProps,
    focus: false,
    selector: '.mantine-NumberInput-input',
  });

  tests.itSupportsSharedInputDefaults<NumberInputProps>({
    component: NumberInput,
    props: defaultProps,
    componentName: 'NumberInput',
  });

  it('exposes increment/decrement handlers with handlersRef prop', () => {
    const ref = createRef<NumberInputHandlers>();
    const spy = jest.fn();
    render(<NumberInput {...defaultProps} step={2} onChange={spy} handlersRef={ref} />);

    expect(typeof ref.current?.decrement).toBe('function');
    expect(typeof ref.current?.increment).toBe('function');

    act(() => ref.current?.increment());
    expect(spy).toHaveBeenLastCalledWith(0);
    act(() => ref.current?.increment());
    expect(spy).toHaveBeenLastCalledWith(2);
    act(() => ref.current?.decrement());
    expect(spy).toHaveBeenLastCalledWith(0);
  });

  it('returns empty string when input is empty', async () => {
    const spy = jest.fn();
    render(<NumberInput max={10} min={0} step={6} onChange={spy} />);
    await enterText('5');
    expect(spy).toHaveBeenLastCalledWith(5);
    await enterText('{backspace}');
    expect(spy).toHaveBeenLastCalledWith('');
    expectValue('');
  });

  it('triggers onChange for uncontrolled values for every meaningful input change', async () => {
    const spy = jest.fn();
    render(<NumberInput onChange={spy} />);

    focusInput();
    await enterText('3');
    expect(spy).toHaveBeenLastCalledWith(3);
    expect(spy).toHaveBeenCalledTimes(1);

    await enterText('2');
    expect(spy).toHaveBeenLastCalledWith(32);
    expect(spy).toHaveBeenCalledTimes(2);

    await enterText('a');
    expect(spy).toHaveBeenLastCalledWith(32);
    expect(spy).toHaveBeenCalledTimes(2);
  });

  it('triggers onChange for controlled values for every meaningful input change', async () => {
    const spy = jest.fn();
    render(<NumberInput value={6} onChange={spy} />);

    focusInput();
    await enterText('3');
    expect(spy).toHaveBeenLastCalledWith(63);
    expect(spy).toHaveBeenCalledTimes(1);

    await enterText('2');
    expect(spy).toHaveBeenLastCalledWith(632);
    expect(spy).toHaveBeenCalledTimes(2);

    await enterText('a');
    expect(spy).toHaveBeenLastCalledWith(632);
    expect(spy).toHaveBeenCalledTimes(2);
  });

  it('sets state to min if input is empty and is incremented', async () => {
    const spy = jest.fn();
    const { container } = render(<NumberInput max={1000} min={0} step={6} onChange={spy} />);
    await clickIncrement(container);
    expectValue('0');
    expect(spy).toHaveBeenLastCalledWith(0);
  });

  it('checks whether the data entered is larger than Number.MAX_SAFE_INT', async () => {
    const spy = jest.fn();
    render(<NumberInput value={9007199254740991} onChange={spy} />);

    focusInput();
    await enterText('{backspace}');
    expect(spy).toHaveBeenLastCalledWith('900719925474099');
    expect(spy).toHaveBeenCalledTimes(1);

    await enterText('2');
    expect(spy).toHaveBeenLastCalledWith('9007199254740992');
    expect(spy).toHaveBeenCalledTimes(2);

    await enterText('7');
    expect(spy).toHaveBeenLastCalledWith('90071992547409927');
    expect(spy).toHaveBeenCalledTimes(3);

    await enterText('{backspace}');
    await enterText('{backspace}');
    await enterText('{backspace}');
    await enterText('{backspace}');
    await enterText('{backspace}');
    expect(spy).toHaveBeenLastCalledWith(900719925474);
    expect(spy).toHaveBeenCalledTimes(8);
  });

  it('allows leading zeros if allowLeadingZeros prop is set', async () => {
    const spy = jest.fn();
    render(<NumberInput onChange={spy} allowLeadingZeros />);

    focusInput();
    await enterText('0');
    expect(spy).toHaveBeenLastCalledWith(0);

    await enterText('01');
    expect(spy).toHaveBeenLastCalledWith('001');

    await enterText('{backspace}');
    await enterText('{backspace}');

    expect(spy).toHaveBeenLastCalledWith(0);
  });

  it('does not allow negative numbers if the allowNegative prop is false', async () => {
    const spy = jest.fn();
    const { container } = render(<NumberInput onChange={spy} value={0} allowNegative={false} />);

    await clickDecrement(container);

    expectValue('0');
    expect(spy).toHaveBeenLastCalledWith(0);
  });

  it('does not call onChange when nothing has changed after blur', async () => {
    const onChangeSpy = jest.fn();
    const onBlurSpy = jest.fn();
    render(<NumberInput onChange={onChangeSpy} onBlur={onBlurSpy} value="" />);

    focusInput();
    blurInput();

    expectValue('');
    expect(onChangeSpy).toHaveBeenCalledTimes(0);
    expect(onBlurSpy).toHaveBeenCalledTimes(1);
  });

  it('sets value to very large min if input is less than min on blur', async () => {
    const MIN = 5;
    render(<NumberInput min={MIN} max={100} defaultValue={0} />);
    focusInput();
    await enterText('-90071992547409910');
    blurInput();
    expectValue(String(MIN));
  });

  it('sets value to very large max if input is greater than max on blur', async () => {
    const MAX = 100;
    render(<NumberInput min={5} max={MAX} defaultValue={0} />);
    focusInput();
    await enterText('90071992547409910');
    blurInput();
    expectValue(String(MAX));
  });

  it('treats values with trailing decimal separator as strings', async () => {
    const spy = jest.fn();
    render(<NumberInput onChange={spy} />);

    focusInput();
    await enterText('10.');

    expect(spy).toHaveBeenLastCalledWith('10.');
    expectValue('10.');
  });

  it('treats values with digits after decimal separator as numbers', async () => {
    const spy = jest.fn();
    render(<NumberInput onChange={spy} />);

    focusInput();
    await enterText('10.1');

    expect(spy).toHaveBeenLastCalledWith(10.1);
    expectValue('10.1');
  });

  it('calls onMaxReached when increment would exceed max', async () => {
    const spy = jest.fn();
    const { container } = render(
      <NumberInput min={0} max={10} defaultValue={8} step={5} onMaxReached={spy} />
    );

    await clickIncrement(container);
    expect(spy).toHaveBeenCalledTimes(1);
    expectValue('10');
  });

  it('calls onMaxReached when arrow up would exceed max', async () => {
    const spy = jest.fn();
    render(<NumberInput min={0} max={10} defaultValue={9} step={2} onMaxReached={spy} />);

    focusInput();
    await enterText('{arrowup}');
    expect(spy).toHaveBeenCalledTimes(1);
    expectValue('10');
  });

  it('does not call onMaxReached when max is not defined', async () => {
    const spy = jest.fn();
    const { container } = render(<NumberInput defaultValue={10} onMaxReached={spy} />);

    await clickIncrement(container);
    expect(spy).toHaveBeenCalledTimes(0);
  });

  it('calls onMinReached when decrement would go below min', async () => {
    const spy = jest.fn();
    const { container } = render(
      <NumberInput min={0} max={10} defaultValue={3} step={5} onMinReached={spy} />
    );

    await clickDecrement(container);
    expect(spy).toHaveBeenCalledTimes(1);
    expectValue('0');
  });

  it('calls onMinReached when arrow down would go below min', async () => {
    const spy = jest.fn();
    render(<NumberInput min={0} max={10} defaultValue={0} onMinReached={spy} />);

    focusInput();
    await enterText('{arrowdown}');
    expect(spy).toHaveBeenCalledTimes(1);
    expectValue('0');
  });

  it('calls onMinReached when decrement would go below 0 with allowNegative=false', async () => {
    const spy = jest.fn();
    const { container } = render(
      <NumberInput allowNegative={false} defaultValue={0} onMinReached={spy} />
    );

    await clickDecrement(container);
    expect(spy).toHaveBeenCalledTimes(1);
    expectValue('0');
  });

  it('does not call onMinReached when min is not defined and allowNegative is true', async () => {
    const spy = jest.fn();
    const { container } = render(<NumberInput defaultValue={-5} onMinReached={spy} />);

    await clickDecrement(container);
    expect(spy).toHaveBeenCalledTimes(0);
  });

  it('increments by largeStep with Shift + ArrowUp and decrements with Shift + ArrowDown', () => {
    render(<NumberInput defaultValue={0} largeStep={10} />);
    fireEvent.keyDown(getInput(), { key: 'ArrowUp', shiftKey: true });
    expectValue('10');
    fireEvent.keyDown(getInput(), { key: 'ArrowDown', shiftKey: true });
    expectValue('0');
  });

  it('uses 10 × step as the default largeStep', () => {
    render(<NumberInput defaultValue={0} step={2} />);
    fireEvent.keyDown(getInput(), { key: 'ArrowUp', shiftKey: true });
    expectValue('20');
  });

  it('increments/decrements by largeStep with PageUp and PageDown', () => {
    render(<NumberInput defaultValue={50} largeStep={25} />);
    fireEvent.keyDown(getInput(), { key: 'PageUp' });
    expectValue('75');
    fireEvent.keyDown(getInput(), { key: 'PageDown' });
    expectValue('50');
  });

  it('increments by smallStep with Alt + ArrowUp when smallStep is set', () => {
    render(<NumberInput defaultValue={1} smallStep={0.5} />);
    fireEvent.keyDown(getInput(), { key: 'ArrowUp', altKey: true });
    expectValue('1.5');
  });

  it('falls back to step on Alt + ArrowUp when smallStep is not set', () => {
    render(<NumberInput defaultValue={1} step={2} />);
    fireEvent.keyDown(getInput(), { key: 'ArrowUp', altKey: true });
    expectValue('3');
  });

  it('clamps largeStep to max and calls onMaxReached', () => {
    const spy = jest.fn();
    render(<NumberInput min={0} max={10} defaultValue={5} largeStep={10} onMaxReached={spy} />);
    fireEvent.keyDown(getInput(), { key: 'PageUp' });
    expect(spy).toHaveBeenCalledTimes(1);
    expectValue('10');
  });

  it('clamps largeStep to min and calls onMinReached', () => {
    const spy = jest.fn();
    render(<NumberInput min={0} max={10} defaultValue={5} largeStep={10} onMinReached={spy} />);
    fireEvent.keyDown(getInput(), { key: 'PageDown' });
    expect(spy).toHaveBeenCalledTimes(1);
    expectValue('0');
  });

  it('rounds a decimal largeStep without floating point drift', () => {
    render(<NumberInput defaultValue={0.1} largeStep={0.25} decimalScale={2} />);
    fireEvent.keyDown(getInput(), { key: 'ArrowUp', shiftKey: true });
    expectValue('0.35');
  });

  it('honors largeStep in bigint mode', () => {
    render(<NumberInput defaultValue={BigInt(100)} largeStep={BigInt(50)} />);
    fireEvent.keyDown(getInput(), { key: 'ArrowUp', shiftKey: true });
    expectValue('150');
    fireEvent.keyDown(getInput(), { key: 'PageDown' });
    expectValue('100');
  });

  it('ignores smallStep in bigint mode and steps by step on Alt + ArrowUp', () => {
    render(<NumberInput defaultValue={BigInt(100)} step={BigInt(5)} smallStep={BigInt(2)} />);
    fireEvent.keyDown(getInput(), { key: 'ArrowUp', altKey: true });
    expectValue('105');
  });

  it('does not step by largeStep when readOnly', () => {
    render(<NumberInput defaultValue={0} largeStep={10} readOnly />);
    fireEvent.keyDown(getInput(), { key: 'PageUp' });
    expectValue('0');
  });

  it('does not step by largeStep when withKeyboardEvents is false', () => {
    render(<NumberInput defaultValue={0} largeStep={10} withKeyboardEvents={false} />);
    fireEvent.keyDown(getInput(), { key: 'ArrowUp', shiftKey: true });
    expectValue('0');
  });

  it('selects all text on focus when selectAllOnFocus is true', async () => {
    render(<NumberInput defaultValue={123} selectAllOnFocus />);
    const input = getInput() as HTMLInputElement;

    focusInput();
    await waitFor(() => expect(input.selectionStart).toBe(0));
    expect(input.selectionEnd).toBe(3);
  });

  it('does not select text on focus when selectAllOnFocus is false', async () => {
    render(<NumberInput defaultValue={123} selectAllOnFocus={false} />);
    const input = getInput() as HTMLInputElement;

    focusInput();
    await act(() => new Promise((resolve) => setTimeout(resolve, 10)));
    expect(input.selectionStart).toBe(3);
    expect(input.selectionEnd).toBe(3);
  });

  it('supports custom decimal separator', async () => {
    const spy = jest.fn();
    render(<NumberInput onChange={spy} decimalSeparator="," />);

    focusInput();
    await enterText('10,5');
    expect(spy).toHaveBeenLastCalledWith(10.5);
    expectValue('10,5');
  });

  it('formats value with thousand separator', async () => {
    render(<NumberInput defaultValue={1000000} thousandSeparator="," />);
    expectValue('1,000,000');
  });

  it('validates input with isAllowed callback', async () => {
    const spy = jest.fn();
    const isAllowed = (values: any) => values.floatValue === undefined || values.floatValue <= 100;
    render(<NumberInput onChange={spy} isAllowed={isAllowed} />);

    focusInput();
    await enterText('50');
    expect(spy).toHaveBeenLastCalledWith(50);

    await enterText('0');
    expect(spy).toHaveBeenLastCalledWith(50);
    expectValue('50');
  });

  it('disables keyboard arrow events when withKeyboardEvents is false', async () => {
    const spy = jest.fn();
    render(<NumberInput defaultValue={5} onChange={spy} withKeyboardEvents={false} />);

    focusInput();
    await enterText('{arrowup}');
    expect(spy).not.toHaveBeenCalled();
    expectValue('5');

    await enterText('{arrowdown}');
    expect(spy).not.toHaveBeenCalled();
    expectValue('5');
  });

  it('respects max when using arrow up key', async () => {
    const spy = jest.fn();
    render(<NumberInput defaultValue={9} max={10} onChange={spy} />);

    focusInput();
    await enterText('{arrowup}');
    expect(spy).toHaveBeenLastCalledWith(10);

    await enterText('{arrowup}');
    expect(spy).toHaveBeenLastCalledWith(10);
    expectValue('10');
  });

  it('respects min when using arrow down key', async () => {
    const spy = jest.fn();
    render(<NumberInput defaultValue={1} min={0} onChange={spy} />);

    focusInput();
    await enterText('{arrowdown}');
    expect(spy).toHaveBeenLastCalledWith(0);

    await enterText('{arrowdown}');
    expect(spy).toHaveBeenLastCalledWith(0);
    expectValue('0');
  });

  it('disables increment button when value is at max', () => {
    const { container } = render(<NumberInput defaultValue={10} max={10} />);
    const incrementButton = container.querySelector(
      '.mantine-NumberInput-control[data-direction="up"]'
    );
    expect(incrementButton).toBeDisabled();
  });

  it('disables decrement button when value is at min', () => {
    const { container } = render(<NumberInput defaultValue={0} min={0} />);
    const decrementButton = container.querySelector(
      '.mantine-NumberInput-control[data-direction="down"]'
    );
    expect(decrementButton).toBeDisabled();
  });

  it('hides controls when readOnly is set', () => {
    const { container } = render(<NumberInput readOnly />);
    const controls = container.querySelector('.mantine-NumberInput-controls');
    expect(controls).not.toBeInTheDocument();
  });

  it('hides controls when hideControls is set', () => {
    const { container } = render(<NumberInput hideControls />);
    expect(container.querySelector('.mantine-NumberInput-controls')).not.toBeInTheDocument();
  });

  it('replaces controls with rightSection', () => {
    const { container } = render(<NumberInput rightSection="custom-section" />);
    expect(screen.getByText('custom-section')).toBeInTheDocument();
    expect(container.querySelector('.mantine-NumberInput-controls')).not.toBeInTheDocument();
  });

  it('increments empty input to min when startValue is below min', async () => {
    const spy = jest.fn();
    const { container } = render(<NumberInput min={5} max={10} startValue={2} onChange={spy} />);
    await clickIncrement(container);
    expectValue('5');
    expect(spy).toHaveBeenLastCalledWith(5);
  });

  it('calls onValueChange with correct payload structure', async () => {
    const spy = jest.fn();
    render(<NumberInput onValueChange={spy} />);

    focusInput();
    await enterText('123');

    expect(spy).toHaveBeenLastCalledWith(
      expect.objectContaining({
        floatValue: 123,
        formattedValue: '123',
        value: '123',
      }),
      expect.objectContaining({
        source: 'event',
      })
    );
  });

  it('calls onValueChange with source="increment" when increment button is clicked', async () => {
    const spy = jest.fn();
    const { container } = render(<NumberInput defaultValue={5} onValueChange={spy} />);

    await clickIncrement(container);

    expect(spy).toHaveBeenCalledWith(
      expect.objectContaining({
        floatValue: 6,
      }),
      expect.objectContaining({
        source: 'increment',
      })
    );
  });

  it('calls onValueChange with source="decrement" when decrement button is clicked', async () => {
    const spy = jest.fn();
    const { container } = render(<NumberInput defaultValue={5} onValueChange={spy} />);

    await clickDecrement(container);

    expect(spy).toHaveBeenCalledWith(
      expect.objectContaining({
        floatValue: 4,
      }),
      expect.objectContaining({
        source: 'decrement',
      })
    );
  });

  it('onValueChange receives formatted value with prefix and suffix', async () => {
    const spy = jest.fn();
    const { container } = render(
      <NumberInput defaultValue={100} prefix="$" suffix=" USD" onValueChange={spy} />
    );

    await clickIncrement(container);

    expect(spy).toHaveBeenLastCalledWith(
      expect.objectContaining({
        floatValue: 101,
        formattedValue: '$101 USD',
      }),
      expect.anything()
    );
  });

  it('renders bigint values and preserves formatting options', () => {
    render(
      <NumberInput defaultValue={BigInt('12345678901234567890')} thousandSeparator="," prefix="$" />
    );

    expectValue('$12,345,678,901,234,567,890');
  });

  it('returns bigint in bigint mode for valid integer input', async () => {
    const spy = jest.fn();
    render(<NumberInput defaultValue={BigInt(0)} onChange={spy} />);

    focusInput();
    await enterText('{backspace}');
    await enterText('123');

    expect(spy).toHaveBeenLastCalledWith(BigInt(123));
  });

  it('returns string fallback in bigint mode for intermediate input', async () => {
    const spy = jest.fn();
    render(<NumberInput defaultValue={BigInt(0)} onChange={spy} />);

    focusInput();
    await enterText('{backspace}');
    expect(spy).toHaveBeenLastCalledWith('');

    await enterText('-');
    expect(spy).toHaveBeenLastCalledWith('-');
  });

  it('supports bigint increment/decrement with handlersRef', () => {
    const ref = createRef<NumberInputHandlers>();
    const spy = jest.fn();
    render(
      <NumberInput
        step={BigInt(2)}
        startValue={BigInt(4)}
        defaultValue={BigInt(0)}
        onChange={spy}
        handlersRef={ref}
      />
    );

    act(() => ref.current?.increment());
    expect(spy).toHaveBeenLastCalledWith(BigInt(2));

    act(() => ref.current?.increment());
    expect(spy).toHaveBeenLastCalledWith(BigInt(4));

    act(() => ref.current?.decrement());
    expect(spy).toHaveBeenLastCalledWith(BigInt(2));
  });

  it('supports bigint keyboard stepping and min/max callbacks', async () => {
    const minSpy = jest.fn();
    const maxSpy = jest.fn();
    render(
      <NumberInput
        defaultValue={BigInt(9)}
        min={BigInt(0)}
        max={BigInt(10)}
        step={BigInt(2)}
        onMinReached={minSpy}
        onMaxReached={maxSpy}
      />
    );

    focusInput();
    await enterText('{arrowup}');
    expectValue('10');
    expect(maxSpy).toHaveBeenCalledTimes(1);

    await enterText('{arrowdown}');
    await enterText('{arrowdown}');
    await enterText('{arrowdown}');
    await enterText('{arrowdown}');
    await enterText('{arrowdown}');
    await enterText('{arrowdown}');
    expectValue('0');
    expect(minSpy).toHaveBeenCalled();
  });

  it('supports bigint strict and blur clamping', async () => {
    const strictSpy = jest.fn();
    render(
      <NumberInput
        defaultValue={BigInt(5)}
        min={BigInt(0)}
        max={BigInt(10)}
        clampBehavior="strict"
        onChange={strictSpy}
      />
    );

    focusInput();
    await enterText('{backspace}{backspace}11');
    expect(strictSpy).toHaveBeenLastCalledWith(BigInt(1));
    expectValue('1');

    const blurSpy = jest.fn();
    render(
      <NumberInput
        defaultValue={BigInt(0)}
        min={BigInt(0)}
        max={BigInt(10)}
        clampBehavior="blur"
        onChange={blurSpy}
      />
    );
    const inputs = screen.getAllByRole('textbox');
    fireEvent.focus(inputs[1]);
    await userEvent.type(inputs[1], '{backspace}999');
    fireEvent.blur(inputs[1]);
    expect(inputs[1]).toHaveValue('10');
  });

  it('converts decimal separators in pasted values when decimalSeparator is set', () => {
    const spy = jest.fn();
    render(<NumberInput onChange={spy} decimalSeparator="," />);

    focusInput();
    fireEvent.paste(getInput(), {
      clipboardData: { getData: () => '10.02' },
    });

    expect(spy).toHaveBeenLastCalledWith(10.02);
    expectValue('10,02');
  });

  it('converts multiple allowed decimal separators in pasted values', () => {
    const spy = jest.fn();
    render(
      <NumberInput onChange={spy} decimalSeparator="," allowedDecimalSeparators={['.', ',']} />
    );

    focusInput();
    fireEvent.paste(getInput(), {
      clipboardData: { getData: () => '25.5' },
    });

    expect(spy).toHaveBeenLastCalledWith(25.5);
    expectValue('25,5');
  });

  // jsdom does not insert clipboard text on a native paste. When the paste is not
  // intercepted, the native insertion is simulated with a change event.
  const pasteText = (text: string) => {
    focusInput();
    const notIntercepted = fireEvent.paste(getInput(), {
      clipboardData: { getData: () => text },
    });

    if (notIntercepted) {
      fireEvent.change(getInput(), { target: { value: text } });
    }

    return notIntercepted;
  };

  it('strips grouping separators from pasted values when thousandSeparator is not set', () => {
    const spy = jest.fn();
    render(<NumberInput onChange={spy} />);

    expect(pasteText('1,234,567')).toBe(false);
    expect(spy).toHaveBeenLastCalledWith(1234567);
    expectValue('1234567');
  });

  it('does not intercept pasted values grouped with the configured thousandSeparator', () => {
    const spy = jest.fn();
    render(<NumberInput onChange={spy} thousandSeparator="," />);

    expect(pasteText('1,234,567')).toBe(true);
    expect(spy).toHaveBeenLastCalledWith(1234567);
    expectValue('1,234,567');
  });

  it('does not intercept pasted values grouped with thousandSeparator={true}', () => {
    const spy = jest.fn();
    render(<NumberInput onChange={spy} thousandSeparator />);

    expect(pasteText('1,234,567')).toBe(true);
    expect(spy).toHaveBeenLastCalledWith(1234567);
    expectValue('1,234,567');
  });

  it('treats a single thousandSeparator not followed by a full group as decimal in pasted values', () => {
    const spy = jest.fn();
    render(<NumberInput onChange={spy} thousandSeparator="," />);

    expect(pasteText('12,5')).toBe(false);
    expect(spy).toHaveBeenLastCalledWith(12.5);
    expectValue('12.5');
  });

  it('handles european formatted pasted values', () => {
    const spy = jest.fn();
    render(<NumberInput onChange={spy} thousandSeparator="." decimalSeparator="," />);

    expect(pasteText('1.234.567,89')).toBe(true);
    expect(spy).toHaveBeenLastCalledWith(1234567.89);
    expectValue('1.234.567,89');
  });

  it('converts a single thousandSeparator to decimal in pasted european values', () => {
    const spy = jest.fn();
    render(<NumberInput onChange={spy} thousandSeparator="." decimalSeparator="," />);

    expect(pasteText('10.5')).toBe(false);
    expect(spy).toHaveBeenLastCalledWith(10.5);
    expectValue('10,5');
  });

  it('converts pasted decimal separator when thousandSeparator is a different character', () => {
    const spy = jest.fn();
    render(<NumberInput onChange={spy} thousandSeparator=" " allowedDecimalSeparators={[',']} />);

    expect(pasteText('1 234,5')).toBe(false);
    expect(spy).toHaveBeenLastCalledWith(1234.5);
    expectValue('1 234.5');
  });

  it('places the caret after the pasted text once grouping separators are inserted', async () => {
    render(<NumberInput thousandSeparator=" " />);

    expect(pasteText('1234567,5')).toBe(false);
    expectValue('1 234 567.5');
    await act(() => new Promise((resolve) => setTimeout(resolve, 10)));
    expect(getInput()).toHaveProperty('selectionStart', 11);
  });
  it('clamps string values on blur when trimLeadingZeroesOnBlur is false', async () => {
    render(
      <NumberInput
        min={0}
        max={20}
        decimalScale={2}
        fixedDecimalScale
        trimLeadingZeroesOnBlur={false}
      />
    );

    focusInput();
    await enterText('100');
    blurInput();
    expectValue('20.00');
  });

  it('does not change in range string values on blur when trimLeadingZeroesOnBlur is false', async () => {
    const spy = jest.fn();
    render(
      <NumberInput
        min={0}
        max={20}
        decimalScale={2}
        fixedDecimalScale
        trimLeadingZeroesOnBlur={false}
        onChange={spy}
      />
    );

    focusInput();
    await enterText('5');
    blurInput();
    expectValue('5.00');
    expect(spy).toHaveBeenLastCalledWith('5.00');
  });

  it('does not clamp string values on blur when clampBehavior is none', async () => {
    render(<NumberInput min={10} max={50} clampBehavior="none" />);

    focusInput();
    await enterText('007');
    blurInput();
    expectValue('7');
  });

  it('does not clamp values with trailing decimal separator when clampBehavior is none', async () => {
    render(<NumberInput min={10} max={50} clampBehavior="none" />);

    focusInput();
    await enterText('100.');
    blurInput();
    expectValue('100.');
  });

  it('clamps values with more than 15 decimal places on blur', async () => {
    render(<NumberInput min={10} max={50} />);

    focusInput();
    await enterText('100.1234567890123456');
    blurInput();
    expectValue('50');
  });

  it('preserves trailing decimal separator when value is clamped on blur', async () => {
    render(<NumberInput min={10} max={50} />);

    focusInput();
    await enterText('100.');
    blurInput();
    expectValue('50.');
  });

  describe('stepHold', () => {
    beforeAll(() => {
      jest.useFakeTimers();
    });

    afterEach(() => {
      jest.clearAllTimers();
    });

    afterAll(() => {
      jest.useRealTimers();
    });

    const getUp = (container: HTMLElement) =>
      container.querySelector<HTMLButtonElement>(
        '.mantine-NumberInput-control[data-direction="up"]'
      )!;

    const getDown = (container: HTMLElement) =>
      container.querySelector<HTMLButtonElement>(
        '.mantine-NumberInput-control[data-direction="down"]'
      )!;

    it('steps once per press when stepHoldDelay/stepHoldInterval are not set', () => {
      const { container } = render(<NumberInput defaultValue={0} />);
      const up = getUp(container);

      fireEvent.pointerDown(up);
      fireEvent.pointerUp(up);
      expectValue('1');

      act(() => {
        jest.advanceTimersByTime(1000);
      });
      expectValue('1');
    });

    it('repeats stepping while the control is held with stepHoldDelay + stepHoldInterval', () => {
      const { container } = render(
        <NumberInput defaultValue={0} stepHoldDelay={100} stepHoldInterval={50} />
      );
      const up = getUp(container);

      fireEvent.pointerDown(up);
      expectValue('1');

      act(() => {
        jest.advanceTimersByTime(100);
      });
      expectValue('2');

      act(() => {
        jest.advanceTimersByTime(50);
      });
      expectValue('3');

      act(() => {
        jest.advanceTimersByTime(50);
      });
      expectValue('4');

      fireEvent.pointerUp(up);
      act(() => {
        jest.advanceTimersByTime(500);
      });
      expectValue('4');
    });

    it('stops repeating when the pointer leaves the control', () => {
      const { container } = render(
        <NumberInput defaultValue={0} stepHoldDelay={100} stepHoldInterval={50} />
      );
      const up = getUp(container);

      fireEvent.pointerDown(up);
      act(() => {
        jest.advanceTimersByTime(100);
      });
      expectValue('2');

      fireEvent.pointerLeave(up);
      act(() => {
        jest.advanceTimersByTime(500);
      });
      expectValue('2');
    });

    it('supports a function stepHoldInterval evaluated with the current step count', () => {
      const interval = jest.fn(() => 50);
      const { container } = render(
        <NumberInput defaultValue={0} stepHoldDelay={100} stepHoldInterval={interval} />
      );
      const up = getUp(container);

      fireEvent.pointerDown(up);
      act(() => {
        jest.advanceTimersByTime(100);
      });
      expect(interval).toHaveBeenNthCalledWith(1, 2);

      act(() => {
        jest.advanceTimersByTime(50);
      });
      expect(interval).toHaveBeenNthCalledWith(2, 3);

      fireEvent.pointerUp(up);
    });

    it('decrements repeatedly while the down control is held', () => {
      const { container } = render(
        <NumberInput defaultValue={0} stepHoldDelay={100} stepHoldInterval={50} />
      );
      const down = getDown(container);

      fireEvent.pointerDown(down);
      expectValue('-1');

      act(() => {
        jest.advanceTimersByTime(100);
      });
      expectValue('-2');

      fireEvent.pointerUp(down);
    });
  });
});

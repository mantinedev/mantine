import { createRef } from 'react';
import { act, fireEvent } from '@testing-library/react';
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

  it('steps value with controls immediately call onChange', async () => {
    const spy = jest.fn();
    render(<NumberInput step={10} onChange={spy} defaultValue={0} />);
    await enterText('{arrowup}');
    expect(spy).toHaveBeenCalledTimes(1);

    await enterText('{arrowdown}');
    expect(spy).toHaveBeenCalledTimes(2);
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

  it('selects all text on focus when selectAllOnFocus is true', async () => {
    render(<NumberInput defaultValue={123} selectAllOnFocus />);
    const input = getInput() as HTMLInputElement;

    focusInput();
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 10));
    });
    expect(input.selectionStart).toBe(0);
    expect(input.selectionEnd).toBe(3);
  });

  it('does not select text on focus when selectAllOnFocus is false', async () => {
    render(<NumberInput defaultValue={123} selectAllOnFocus={false} />);
    const input = getInput() as HTMLInputElement;

    focusInput();
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

  it('pads decimal places when fixedDecimalScale is set', async () => {
    render(<NumberInput defaultValue={5.1} decimalScale={2} fixedDecimalScale />);
    expectValue('5.10');
  });

  it('formats value with thousand separator', async () => {
    render(<NumberInput defaultValue={1000000} thousandSeparator="," />);
    expectValue('1,000,000');
  });

  it('formats value with custom thousandsGroupStyle', async () => {
    render(<NumberInput defaultValue={100000} thousandSeparator="," thousandsGroupStyle="lakh" />);
    expectValue('1,00,000');
  });

  it('displays prefix and suffix', async () => {
    render(<NumberInput defaultValue={100} prefix="$" suffix=" USD" />);
    expectValue('$100 USD');
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
});

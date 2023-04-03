import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import {
  checkAccessibility,
  itSupportsSystemProps,
  itSupportsInputProps,
  itSupportsFocusEvents,
  itSupportsProviderVariant,
  itSupportsProviderSize,
} from '@mantine/tests';
import { NumberInput, NumberInputHandlers, NumberInputProps } from './NumberInput';

const defaultProps: NumberInputProps = {
  label: 'test-label',
};

const getRightSection = (container: HTMLElement) =>
  container.querySelector('.mantine-NumberInput-rightSection');

const clickIncrement = (container: HTMLElement) =>
  userEvent.click(container.querySelector('.mantine-NumberInput-controlUp'));

const clickDecrement = (container: HTMLElement) =>
  userEvent.click(container.querySelector('.mantine-NumberInput-controlDown'));

const getInput = () => screen.getByRole('textbox');
const enterText = (text: string) => userEvent.type(getInput(), text);
const expectValue = (value: string) => expect(getInput()).toHaveValue(value);
const blurInput = () => fireEvent.blur(getInput());

describe('@mantine/core/NumberInput', () => {
  checkAccessibility([
    <NumberInput {...defaultProps} label="test" />,
    <NumberInput {...defaultProps} aria-label="test" />,
  ]);

  itSupportsSystemProps({
    component: NumberInput,
    props: defaultProps,
    displayName: '@mantine/core/NumberInput',
    refType: HTMLInputElement,
    othersSelector: 'input',
    providerName: 'NumberInput',
  });

  itSupportsProviderVariant(NumberInput, defaultProps, 'NumberInput', [
    'root',
    'input',
    'label',
    'control',
  ]);

  itSupportsProviderSize(NumberInput, defaultProps, 'NumberInput', [
    'root',
    'input',
    'label',
    'control',
  ]);

  itSupportsInputProps(NumberInput, defaultProps, 'NumberInput');
  itSupportsFocusEvents(NumberInput, defaultProps, 'input');

  it('does not render rightSection if input is disabled, variant is unstyled or controls are hidden', () => {
    const { container: regular } = render(<NumberInput {...defaultProps} />);
    const { container: disabled } = render(<NumberInput {...defaultProps} disabled />);
    const { container: controlsHidden } = render(<NumberInput {...defaultProps} hideControls />);
    const { container: unstyled } = render(<NumberInput {...defaultProps} variant="unstyled" />);

    expect(getRightSection(regular)).not.toBe(null);
    expect(getRightSection(disabled)).toBe(null);
    expect(getRightSection(controlsHidden)).toBe(null);
    expect(getRightSection(unstyled)).toBe(null);
  });

  it('increments and decrements value with controls', async () => {
    const spy = jest.fn();
    const { container } = render(<NumberInput step={10} onChange={spy} />);
    await clickIncrement(container);
    expect(spy).toHaveBeenLastCalledWith(0);
    await clickIncrement(container);
    expect(spy).toHaveBeenLastCalledWith(10);
    await clickDecrement(container);
    expect(spy).toHaveBeenLastCalledWith(0);
    await clickDecrement(container);
    expect(spy).toHaveBeenLastCalledWith(-10);
  });

  it('does not increment or decrements out of min and max', async () => {
    const spy = jest.fn();
    const { container } = render(<NumberInput max={10} min={0} step={6} onChange={spy} />);
    await clickIncrement(container);
    expect(spy).toHaveBeenLastCalledWith(0);
    await clickIncrement(container);
    expect(spy).toHaveBeenLastCalledWith(6);
    await clickIncrement(container);
    expect(spy).toHaveBeenLastCalledWith(10);
    await clickDecrement(container);
    expect(spy).toHaveBeenLastCalledWith(4);
    await clickDecrement(container);
    expect(spy).toHaveBeenLastCalledWith(0);
  });

  it('exposes increment/decrement handlers with handlersRef prop', () => {
    const ref = React.createRef<NumberInputHandlers>();
    const spy = jest.fn();
    render(<NumberInput {...defaultProps} step={2} onChange={spy} handlersRef={ref} />);

    expect(typeof ref.current.decrement).toBe('function');
    expect(typeof ref.current.increment).toBe('function');

    act(() => ref.current.increment());
    expect(spy).toHaveBeenLastCalledWith(0);
    act(() => ref.current.increment());
    expect(spy).toHaveBeenLastCalledWith(2);
    act(() => ref.current.decrement());
    expect(spy).toHaveBeenLastCalledWith(0);
  });

  it('does not call onChange when entering text until the input gets blurred', async () => {
    const spy = jest.fn();
    render(<NumberInput onChange={spy} />);
    expectValue('');
    await enterText('12');
    expect(spy).toHaveBeenCalledTimes(0);
    blurInput();
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenLastCalledWith(12);
    expectValue('12');
  });

  it('returns empty string when input is empty', async () => {
    const spy = jest.fn();
    render(<NumberInput max={10} min={0} step={6} onChange={spy} />);
    await enterText('5');
    blurInput();
    expect(spy).toHaveBeenLastCalledWith(5);
    await enterText('{backspace}');
    blurInput();
    expect(spy).toHaveBeenLastCalledWith('');
    expectValue('');
  });

  it('clears input on blur when input is empty and a string is entered', async () => {
    const spy = jest.fn();
    render(<NumberInput max={10} min={0} step={6} onChange={spy} />);
    await enterText('6');
    blurInput();
    expect(spy).toHaveBeenLastCalledWith(6);
    await enterText('te');
    expectValue('6te');
    blurInput();
    expectValue('6');
    expect(spy).toHaveBeenLastCalledWith(6);
    await enterText('{backspace}{backspace}{backspace}te');
    expectValue('te');
    blurInput();
    expectValue('');
    expect(spy).toHaveBeenLastCalledWith('');
  });

  it('supports changing decimal separator', async () => {
    const spy = jest.fn();
    render(<NumberInput precision={2} onChange={spy} decimalSeparator="," />);
    await enterText('6,54');
    blurInput();
    expect(spy).toHaveBeenLastCalledWith(6.54);
    expect(getInput()).toHaveValue('6,54');
  });

  it('supports changing thousands separator', async () => {
    const spy = jest.fn();
    render(<NumberInput precision={2} onChange={spy} thousandsSeparator="." />);
    await enterText('1.000.000');
    blurInput();
    expect(spy).toHaveBeenLastCalledWith(1000000);
    expect(getInput()).toHaveValue('1000000.00');
  });

  it('supports changing thousands and decimal separator', async () => {
    const spy = jest.fn();
    render(
      <NumberInput precision={3} onChange={spy} decimalSeparator="," thousandsSeparator="." />
    );
    await enterText('1.000.000,355');
    blurInput();
    expect(spy).toHaveBeenLastCalledWith(1000000.355);
    expect(getInput()).toHaveValue('1000000,355');
  });

  it('sets input value with a given precision', async () => {
    const spy = jest.fn();
    render(<NumberInput max={10} min={0} step={6} precision={2} onChange={spy} />);
    await enterText('6.123');
    blurInput();
    expect(spy).toHaveBeenLastCalledWith(6.12);
    expectValue('6.12');
  });

  it('supports removing trailing zeros with precision', async () => {
    const spy = jest.fn();
    render(<NumberInput precision={8} removeTrailingZeros onChange={spy} />);
    await enterText('6.12300000');
    blurInput();
    expect(spy).toHaveBeenLastCalledWith(6.123);
    expectValue('6.123');
  });

  it('supports removing trailing zero with increment/decrement', async () => {
    const spy = jest.fn();
    const { container } = render(
      <NumberInput
        defaultValue={0.05}
        removeTrailingZeros
        precision={2}
        min={-1}
        step={0.05}
        max={1}
        onChange={spy}
      />
    );
    await clickIncrement(container);
    expectValue('0.1');
    expect(spy).toHaveBeenLastCalledWith(0.1);
    await clickDecrement(container);
    expectValue('0.05');
    expect(spy).toHaveBeenLastCalledWith(0.05);
    await clickDecrement(container);
    expectValue('0');
    expect(spy).toHaveBeenLastCalledWith(0);
  });

  it('supports removing trailing zeros and decimal separator with precision', async () => {
    const spy = jest.fn();
    render(<NumberInput precision={8} removeTrailingZeros onChange={spy} />);
    await enterText('6.00000000');
    blurInput();
    expect(spy).toHaveBeenLastCalledWith(6);
    expectValue('6');
  });

  it('sets state to min if input is empty and is incremented/decremented', async () => {
    const spy = jest.fn();
    const { container } = render(<NumberInput max={1000} min={0} step={6} onChange={spy} />);
    await clickIncrement(container);
    expectValue('0');
    expect(spy).toHaveBeenLastCalledWith(0);
    await enterText('{backspace}4');
    blurInput();
    expect(spy).toHaveBeenLastCalledWith(4);
    await enterText('{backspace}');
    blurInput();
    await clickDecrement(container);
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

  it('steps value with controls on hold keydown without stepHoldInterval', async () => {
    const spy = jest.fn();
    render(<NumberInput step={10} onChange={spy} defaultValue={0} />);
    await enterText('{arrowup}');
    expectValue('10');
    await enterText('{arrowup}');
    expectValue('20');
    expect(spy).toHaveBeenLastCalledWith(20);
    await enterText('{arrowdown}');
    expectValue('10');
    await enterText('{arrowdown}');
    expectValue('0');
    expect(spy).toHaveBeenLastCalledWith(0);
  });

  it('allows "-" in an empty NumberInput', async () => {
    const spy = jest.fn();
    render(<NumberInput onChange={spy} />);
    await enterText('-1');
    blurInput();
    expectValue('-1');
    expect(spy).toHaveBeenLastCalledWith(-1);
  });

  it('uses startValue as first value when no initial value was set', async () => {
    const spy = jest.fn();
    render(<NumberInput startValue={3} onChange={spy} />);
    await enterText('{arrowup}');
    blurInput();
    expect(getInput()).toHaveValue('3');
    expect(spy).toHaveBeenLastCalledWith(3);
  });

  it('propagates the new value when hitting enter', async () => {
    const spy = jest.fn();
    render(<NumberInput onChange={spy} />);
    await enterText('34');
    expectValue('34');
    await enterText('{enter}');
    expectValue('34');
    expect(spy).toHaveBeenLastCalledWith(34);
    await enterText('abc');
    expectValue('34abc');
    await enterText('{enter}');
    expectValue('34');
    expect(spy).toHaveBeenLastCalledWith(34);
  });

  it('resets displayed value to value prop when input is controlled and component gets blurred', async () => {
    render(<NumberInput value={3} />);
    expectValue('3');
    await enterText('45');
    expectValue('345');
    await userEvent.tab();
    expectValue('3');
  });

  it('resets displayed value to value prop when input is controlled and enter gets pressed', async () => {
    render(<NumberInput value={3} />);
    expectValue('3');
    await enterText('45');
    expectValue('345');
    await enterText('{enter}');
    expectValue('3');
  });

  it('reformats displayed value when input is uncontrolled and enter gets pressed', async () => {
    render(<NumberInput defaultValue={3} />);
    expectValue('3');
    await enterText('45');
    expectValue('345');
    await enterText('{enter}');
    expectValue('345');
    await enterText('abc');
    expectValue('345abc');
    await enterText('{enter}');
    expectValue('345');
  });
});

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import {
  checkAccessibility,
  itSupportsSystemProps,
  itSupportsInputProps,
  itSupportsFocusEvents,
} from '@mantine/tests';
import { NumberInput, NumberInputHandlers, NumberInputProps } from './NumberInput';

const defaultProps: NumberInputProps = {};

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
    const { container } = render(<NumberInput value={0} step={10} onChange={spy} />);
    await clickIncrement(container);
    expect(spy).toHaveBeenLastCalledWith(10);
    await clickDecrement(container);
    await clickDecrement(container);
    expect(spy).toHaveBeenLastCalledWith(-10);
  });

  it('does not increment or decrements out of min and max', async () => {
    const spy = jest.fn();
    const { container } = render(
      <NumberInput value={5} max={10} min={0} step={6} onChange={spy} />
    );
    await clickIncrement(container);
    expect(spy).toHaveBeenLastCalledWith(10);
    await clickDecrement(container);
    await clickDecrement(container);
    expect(spy).toHaveBeenLastCalledWith(0);
  });

  it('exposes increment/decrement handlers with handlersRef prop', () => {
    const ref = React.createRef<NumberInputHandlers>();
    const spy = jest.fn();
    render(<NumberInput {...defaultProps} value={10} step={2} onChange={spy} handlersRef={ref} />);

    expect(typeof ref.current.decrement).toBe('function');
    expect(typeof ref.current.increment).toBe('function');

    act(() => ref.current.decrement());
    expect(spy).toHaveBeenLastCalledWith(8);
    act(() => ref.current.increment());
    expect(spy).toHaveBeenLastCalledWith(10);
  });

  it('returns undefined when input is empty', async () => {
    const spy = jest.fn();
    render(<NumberInput value={5} max={10} min={0} step={6} onChange={spy} />);
    expectValue('5');
    await enterText('{backspace}');
    expect(spy).toHaveBeenLastCalledWith(undefined);
    expectValue('');
  });

  it('clears input on blur when input is empty and a string is entered', async () => {
    const spy = jest.fn();
    render(<NumberInput max={10} min={0} step={6} onChange={spy} />);
    await enterText('6');
    expect(spy).toHaveBeenLastCalledWith(6);
    await enterText('test');
    blurInput();
    expect(getInput()).toHaveValue('6');
    expect(spy).toHaveBeenLastCalledWith(6);
  });

  it('supports changing decimal separator', async () => {
    const spy = jest.fn();
    render(<NumberInput max={10} min={0} step={6} onChange={spy} decimalSeparator="," />);
    await enterText('6,54');
    expect(spy).toHaveBeenLastCalledWith(6.54);
    blurInput();
    expect(getInput()).toHaveValue('7');
  });

  it('sets input value with a given precision', async () => {
    const spy = jest.fn();
    render(<NumberInput max={10} min={0} step={6} precision={2} onChange={spy} />);
    await enterText('6.123');
    expect(spy).toHaveBeenLastCalledWith(6.123);
    blurInput();
    expectValue('6.12');
    expect(spy).toHaveBeenLastCalledWith(6.12);
  });

  it('sets state to min if input is empty and is incremented/decremented', async () => {
    const spy = jest.fn();
    const { container } = render(<NumberInput max={10} min={0} step={6} onChange={spy} />);
    await clickIncrement(container);
    expectValue('0');
    expect(spy).toHaveBeenLastCalledWith(0);
    await enterText('{backspace}');
    await clickDecrement(container);
    expectValue('0');
  });

  it('steps value with controls on hold keydown without stepHoldInterval', async () => {
    const spy = jest.fn();
    render(<NumberInput step={10} onChange={spy} defaultValue={0} />);
    await enterText('{arrowup}');
    expectValue('10');
    expect(spy).toHaveBeenLastCalledWith(10);
    await enterText('{arrowdown}');
    expectValue('0');
    expect(spy).toHaveBeenLastCalledWith(0);
  });

  it('allows "-" in an empty NumberInput', async () => {
    const spy = jest.fn();
    render(<NumberInput onChange={spy} />);
    await enterText('-');
    expect(getInput()).toHaveValue('-');
    blurInput();
    expect(getInput()).toHaveValue('');
    await enterText('-1');
    expect(spy).toHaveBeenLastCalledWith(-1);
  });

  it('only triggers onChange when value really changes', async () => {
    const spy = jest.fn();
    render(<NumberInput min={-3} onChange={spy} />);
    await enterText('-');
    expect(spy).not.toBeCalled();
    await enterText('3');
    expect(spy).toHaveBeenLastCalledWith(-3);
    await enterText('{arrowdown}');
    expect(spy).toBeCalledTimes(1);
  });

  it('uses startValue as first value when no initial value was set', async () => {
    const spy = jest.fn();
    render(<NumberInput startValue={3} onChange={spy} />);
    await enterText('{arrowup}');
    expect(getInput()).toHaveValue('3');
  });
});

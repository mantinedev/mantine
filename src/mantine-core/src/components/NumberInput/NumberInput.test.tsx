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
    excludeOthers: true,
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

  it('increments and decrements value with controls', () => {
    const spy = jest.fn();
    const { container } = render(<NumberInput value={0} step={10} onChange={spy} />);
    clickIncrement(container);
    expect(spy).toHaveBeenLastCalledWith(10);
    clickDecrement(container);
    clickDecrement(container);
    expect(spy).toHaveBeenLastCalledWith(-10);
  });

  it('does not increment or decrements out of min and max', () => {
    const spy = jest.fn();
    const { container } = render(
      <NumberInput value={5} max={10} min={0} step={6} onChange={spy} />
    );
    clickIncrement(container);
    expect(spy).toHaveBeenLastCalledWith(10);
    clickDecrement(container);
    clickDecrement(container);
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

  it('returns undefined when input is empty', () => {
    const spy = jest.fn();
    render(<NumberInput value={5} max={10} min={0} step={6} onChange={spy} />);
    expectValue('5');
    enterText('{backspace}');
    expect(spy).toHaveBeenLastCalledWith(undefined);
    expectValue('');
  });

  it('clears input on blur when input is empty and a string is entered', () => {
    const spy = jest.fn();
    render(<NumberInput max={10} min={0} step={6} onChange={spy} />);
    enterText('6');
    expect(spy).toHaveBeenLastCalledWith(6);
    enterText('test');
    blurInput();
    expect(getInput()).toHaveValue('6');
    expect(spy).toHaveBeenLastCalledWith(6);
  });

  it('supports changing decimal separator', () => {
    const spy = jest.fn();
    render(<NumberInput max={10} min={0} step={6} onChange={spy} decimalSeparator="," />);
    enterText('6,54');
    expect(spy).toHaveBeenLastCalledWith(6.54);
    blurInput();
    expect(getInput()).toHaveValue('7');
  });

  it('sets input value with a given precision', () => {
    const spy = jest.fn();
    render(<NumberInput max={10} min={0} step={6} precision={2} onChange={spy} />);
    enterText('6.123');
    expect(spy).toHaveBeenLastCalledWith(6.123);
    blurInput();
    expectValue('6.12');
    expect(spy).toHaveBeenLastCalledWith(6.12);
  });

  it('sets state to min if input is empty and is incremented/decremented', () => {
    const spy = jest.fn();
    const { container } = render(<NumberInput max={10} min={0} step={6} onChange={spy} />);
    clickIncrement(container);
    expectValue('0');
    expect(spy).toHaveBeenLastCalledWith(0);
    enterText('{backspace}');
    clickDecrement(container);
    expectValue('0');
  });

  it('steps value with controls on hold keydown without stepHoldInterval', () => {
    const spy = jest.fn();
    render(<NumberInput step={10} onChange={spy} defaultValue={0} />);
    enterText('{arrowup}');
    expectValue('10');
    expect(spy).toHaveBeenLastCalledWith(10);
    enterText('{arrowdown}');
    expectValue('0');
    expect(spy).toHaveBeenLastCalledWith(0);
  });
});

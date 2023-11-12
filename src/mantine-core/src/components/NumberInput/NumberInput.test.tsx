import React from 'react';
import {
  tests,
  render,
  inputDefaultProps,
  inputStylesApiSelectors,
  userEvent,
  screen,
} from '@mantine/tests';
import { act, fireEvent } from '@testing-library/react';
import { NumberInput, NumberInputHandlers, NumberInputProps } from './NumberInput';
import { __InputStylesNames } from '../Input';

const defaultProps: NumberInputProps = {
  ...inputDefaultProps,
};

const clickIncrement = (container: HTMLElement) =>
  userEvent.click(container.querySelector('.mantine-NumberInput-control[data-direction="up"]')!);

const getInput = () => screen.getByRole('textbox');
const enterText = (text: string) => userEvent.type(getInput(), text);
const expectValue = (value: string) => expect(getInput()).toHaveValue(value);
const focusInput = () => fireEvent.focus(getInput());

describe('@mantine/core/NumberInput', () => {
  tests.axe([
    <NumberInput aria-label="test-label" />,
    <NumberInput label="test-label" />,
    <NumberInput label="test-label" error />,
    <NumberInput label="test-label" error="test-error" id="test" />,
    <NumberInput label="test-label" description="test-description" />,
  ]);

  tests.itSupportsSystemProps<NumberInputProps, __InputStylesNames>({
    component: NumberInput,
    props: defaultProps,
    styleProps: true,
    extend: true,
    size: true,
    variant: true,
    classes: true,
    id: true,
    refType: HTMLInputElement,
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
    const ref = React.createRef<NumberInputHandlers>();
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
});

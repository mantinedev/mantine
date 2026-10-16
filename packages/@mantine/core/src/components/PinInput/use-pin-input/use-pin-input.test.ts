import { act, renderHook } from '@testing-library/react';
import { tests } from '@mantine-tests/core';
import { usePinInput } from './use-pin-input';

function registerInputs(
  hook: { result: { current: ReturnType<typeof usePinInput> } },
  count: number
) {
  const nodes = Array.from({ length: count }, () => document.createElement('input'));
  nodes.forEach((node) => document.body.appendChild(node));

  act(() => {
    nodes.forEach((node, index) => hook.result.current.registerInput(index, node));
  });

  return nodes;
}

describe('@mantine/core/PinInput/use-pin-input', () => {
  afterEach(() => {
    document.body.innerHTML = '';
  });

  tests.itSupportsControllerMemoization({
    hook: () => usePinInput(),
    actions: [
      'getValue',
      'getFieldValues',
      'getFocusedIndex',
      'setValue',
      'setFieldValue',
      'clear',
      'focus',
      'focusNext',
      'focusPrevious',
      'isComplete',
      'getInputNode',
      'setFocusedIndex',
      'registerInput',
    ],
    changeState: (controller) => controller.setValue('12'),
  });

  it('returns current state from getters', () => {
    const hook = renderHook(() => usePinInput({ length: 4, defaultValue: '12' }));
    expect(hook.result.current.getValue()).toBe('12');
    expect(hook.result.current.getFieldValues()).toEqual(['1', '2', '', '']);
    expect(hook.result.current.getFocusedIndex()).toBe(-1);

    act(() => hook.result.current.setValue('1234'));
    expect(hook.result.current.getValue()).toBe('1234');
    expect(hook.result.current.getFieldValues()).toEqual(['1', '2', '3', '4']);
  });

  it('returns an empty value and 4 fields by default', () => {
    const hook = renderHook(() => usePinInput());
    expect(hook.result.current.value).toBe('');
    expect(hook.result.current.length).toBe(4);
    expect(hook.result.current.fieldValues).toEqual(['', '', '', '']);
    expect(hook.result.current.focusedIndex).toBe(-1);
  });

  it('supports uncontrolled state with defaultValue', () => {
    const hook = renderHook(() => usePinInput({ defaultValue: '12' }));
    expect(hook.result.current.value).toBe('12');
    expect(hook.result.current.fieldValues).toEqual(['1', '2', '', '']);

    act(() => hook.result.current.setValue('1234'));
    expect(hook.result.current.value).toBe('1234');
  });

  it('supports controlled state and calls onChange without changing the value', () => {
    const onChange = jest.fn();
    const hook = renderHook(() => usePinInput({ value: '12', onChange }));

    act(() => hook.result.current.setValue('1234'));
    expect(onChange).toHaveBeenLastCalledWith('1234');
    expect(hook.result.current.value).toBe('12');
  });

  it('normalizes value to the given length', () => {
    const hook = renderHook(() => usePinInput({ length: 6, value: '123456789' }));
    expect(hook.result.current.fieldValues).toEqual(['1', '2', '3', '4', '5', '6']);
    expect(hook.result.current.value).toBe('123456');
  });

  it('setFieldValue changes a single field', () => {
    const hook = renderHook(() => usePinInput({ defaultValue: '1234' }));

    act(() => hook.result.current.setFieldValue(1, 'x'));
    expect(hook.result.current.fieldValues).toEqual(['1', 'x', '3', '4']);
  });

  it('setFieldValue keeps a single character per field', () => {
    const onComplete = jest.fn();
    const hook = renderHook(() => usePinInput({ onComplete }));

    act(() => hook.result.current.setFieldValue(0, '1234'));
    expect(hook.result.current.fieldValues).toEqual(['1', '', '', '']);
    expect(hook.result.current.value).toBe('1');
    expect(hook.result.current.isComplete()).toBe(false);
    expect(onComplete).not.toHaveBeenCalled();
  });

  it('setFieldValue ignores out of range indices', () => {
    const onChange = jest.fn();
    const hook = renderHook(() => usePinInput({ defaultValue: '1234', onChange }));

    act(() => hook.result.current.setFieldValue(4, 'x'));
    act(() => hook.result.current.setFieldValue(-1, 'x'));
    expect(hook.result.current.fieldValues).toEqual(['1', '2', '3', '4']);
    expect(onChange).not.toHaveBeenCalled();
  });

  it('clear resets all fields', () => {
    const hook = renderHook(() => usePinInput({ defaultValue: '1234' }));

    act(() => hook.result.current.clear());
    expect(hook.result.current.value).toBe('');
    expect(hook.result.current.fieldValues).toEqual(['', '', '', '']);
  });

  it('calls onComplete once when all fields are filled', () => {
    const onComplete = jest.fn();
    const hook = renderHook(() => usePinInput({ onComplete }));

    act(() => hook.result.current.setValue('1234'));
    expect(onComplete).toHaveBeenCalledTimes(1);
    expect(onComplete).toHaveBeenLastCalledWith('1234');

    act(() => hook.result.current.setFieldValue(0, '9'));
    expect(onComplete).toHaveBeenCalledTimes(1);
  });

  it('calls onComplete again after the value becomes incomplete', () => {
    const onComplete = jest.fn();
    const hook = renderHook(() => usePinInput({ onComplete }));

    act(() => hook.result.current.setValue('1234'));
    act(() => hook.result.current.setFieldValue(3, ''));
    act(() => hook.result.current.setFieldValue(3, '5'));

    expect(onComplete).toHaveBeenCalledTimes(2);
    expect(onComplete).toHaveBeenLastCalledWith('1235');
  });

  it('isComplete reports whether all fields have a value', () => {
    const hook = renderHook(() => usePinInput({ defaultValue: '123' }));
    expect(hook.result.current.isComplete()).toBe(false);

    act(() => hook.result.current.setValue('1234'));
    expect(hook.result.current.isComplete()).toBe(true);
  });

  it('focuses registered inputs by index', () => {
    const hook = renderHook(() => usePinInput());
    const nodes = registerInputs(hook, 4);

    act(() => hook.result.current.focus(2));
    expect(document.activeElement).toBe(nodes[2]);
  });

  it('focus ignores out of range indices', () => {
    const hook = renderHook(() => usePinInput());
    const nodes = registerInputs(hook, 4);
    nodes[0].focus();

    act(() => hook.result.current.focus(4));
    act(() => hook.result.current.focus(-1));
    expect(document.activeElement).toBe(nodes[0]);
  });

  it('focusNext and focusPrevious move relative to focusedIndex', () => {
    const hook = renderHook(() => usePinInput());
    const nodes = registerInputs(hook, 4);

    act(() => hook.result.current.setFocusedIndex(1));
    act(() => hook.result.current.focusNext());
    expect(document.activeElement).toBe(nodes[2]);

    act(() => hook.result.current.setFocusedIndex(2));
    act(() => hook.result.current.focusPrevious());
    expect(document.activeElement).toBe(nodes[1]);
  });

  it('focusNext reads the focused index set earlier in the same event', () => {
    const hook = renderHook(() => usePinInput());
    const nodes = registerInputs(hook, 4);

    act(() => {
      hook.result.current.setFocusedIndex(1);
      hook.result.current.focusNext();
    });

    expect(document.activeElement).toBe(nodes[2]);
  });

  it('focusNext and focusPrevious step from the last focused input after blur', () => {
    const hook = renderHook(() => usePinInput());
    const nodes = registerInputs(hook, 4);

    act(() => hook.result.current.setFocusedIndex(2));
    act(() => hook.result.current.setFocusedIndex(-1));
    expect(hook.result.current.getFocusedIndex()).toBe(-1);

    act(() => hook.result.current.focusNext());
    expect(document.activeElement).toBe(nodes[3]);

    act(() => hook.result.current.setFocusedIndex(1));
    act(() => hook.result.current.setFocusedIndex(-1));
    act(() => hook.result.current.focusPrevious());
    expect(document.activeElement).toBe(nodes[0]);
  });

  it('focusNext focuses the first input and focusPrevious the last when no input has been focused', () => {
    const hook = renderHook(() => usePinInput());
    const nodes = registerInputs(hook, 4);

    act(() => hook.result.current.focusNext());
    expect(document.activeElement).toBe(nodes[0]);

    act(() => hook.result.current.setFocusedIndex(-1));
    act(() => hook.result.current.focusPrevious());
    expect(document.activeElement).toBe(nodes[3]);
  });

  it('does nothing when no inputs are registered', () => {
    const hook = renderHook(() => usePinInput());
    expect(hook.result.current.getInputNode(0)).toBe(null);
    expect(() => act(() => hook.result.current.focus(0))).not.toThrow();
  });

  it('registerInput with null removes the registration', () => {
    const hook = renderHook(() => usePinInput());
    const nodes = registerInputs(hook, 4);

    act(() => hook.result.current.registerInput(2, null));
    expect(hook.result.current.getInputNode(2)).toBe(null);

    nodes[0].focus();
    act(() => hook.result.current.focus(2));
    expect(document.activeElement).toBe(nodes[0]);
  });

  it('setFieldValue reads the latest value when called several times in one event', () => {
    const hook = renderHook(() => usePinInput());

    act(() => {
      hook.result.current.setFieldValue(0, '1');
      hook.result.current.setFieldValue(1, '2');
    });

    expect(hook.result.current.fieldValues).toEqual(['1', '2', '', '']);
  });
  it('keeps empty fields as spaces in the value', () => {
    const onChange = jest.fn();
    const hook = renderHook(() => usePinInput({ length: 6, defaultValue: '123456', onChange }));

    act(() => hook.result.current.setFieldValue(0, ''));
    expect(onChange).toHaveBeenLastCalledWith(' 23456');
    expect(hook.result.current.value).toBe(' 23456');
    expect(hook.result.current.getValue()).toBe(' 23456');
    expect(hook.result.current.fieldValues).toEqual(['', '2', '3', '4', '5', '6']);

    act(() => hook.result.current.setFieldValue(2, ''));
    expect(onChange).toHaveBeenLastCalledWith(' 2 456');
  });

  it('drops trailing empty fields from the value', () => {
    const onChange = jest.fn();
    const hook = renderHook(() => usePinInput({ length: 4, defaultValue: '1234', onChange }));

    act(() => hook.result.current.setFieldValue(3, ''));
    expect(onChange).toHaveBeenLastCalledWith('123');

    act(() => hook.result.current.clear());
    expect(onChange).toHaveBeenLastCalledWith('');
  });

  it('restores empty fields from spaces in controlled value and defaultValue', () => {
    const controlled = renderHook(() => usePinInput({ length: 4, value: ' 2 4' }));
    expect(controlled.result.current.fieldValues).toEqual(['', '2', '', '4']);

    const uncontrolled = renderHook(() => usePinInput({ length: 4, defaultValue: ' 2 4' }));
    expect(uncontrolled.result.current.fieldValues).toEqual(['', '2', '', '4']);
  });

  it('does not call onComplete and isComplete returns false while a field is empty', () => {
    const onComplete = jest.fn();
    const hook = renderHook(() => usePinInput({ length: 4, onComplete }));

    act(() => hook.result.current.setValue(' 234'));
    expect(onComplete).not.toHaveBeenCalled();
    expect(hook.result.current.isComplete()).toBe(false);

    act(() => hook.result.current.setFieldValue(0, '1'));
    expect(onComplete).toHaveBeenCalledTimes(1);
    expect(onComplete).toHaveBeenLastCalledWith('1234');
    expect(hook.result.current.isComplete()).toBe(true);
  });
});

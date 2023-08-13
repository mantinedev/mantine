import React from 'react';
import {
  itSupportsSystemProps,
  itSupportsInputProps,
  itSupportsFocusEvents,
  checkAccessibility,
  itSupportsProviderVariant,
  itSupportsProviderSize,
  itDisablesInputInsideDisabledFieldset,
} from '@mantine/tests';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { JsonInput, JsonInputProps } from './JsonInput';

const defaultProps: JsonInputProps = {
  label: 'test-label',
};

const getInput = () => screen.getByRole('textbox');
const enterText = (text: string) => userEvent.type(getInput(), text);
const expectValue = (value: string) => expect(getInput()).toHaveValue(value);
const expectValidity = (valid: boolean) =>
  expect(getInput()).toHaveAttribute('aria-invalid', JSON.stringify(!valid));
const focusInput = () => fireEvent.focus(getInput());
const blurInput = () => fireEvent.blur(getInput());

describe('@mantine/core/JsonInput', () => {
  checkAccessibility([<JsonInput {...defaultProps} />]);
  itSupportsFocusEvents(JsonInput, defaultProps, 'textarea');
  itSupportsInputProps(JsonInput, defaultProps, 'JsonInput');
  itSupportsProviderVariant(JsonInput, defaultProps, 'JsonInput', ['root', 'input', 'label']);
  itSupportsProviderSize(JsonInput, defaultProps, 'JsonInput', ['root', 'input', 'label']);
  itSupportsSystemProps({
    component: JsonInput,
    props: defaultProps,
    displayName: '@mantine/core/JsonInput',
    refType: HTMLTextAreaElement,
    excludeOthers: true,
  });

  itDisablesInputInsideDisabledFieldset(JsonInput, defaultProps, 'JsonInput');

  it('marks invalid JSON strings as invalid', async () => {
    render(<JsonInput />);
    await enterText('test');
    blurInput();
    expectValidity(false);
  });

  it('does not touch invalid JSON strings', async () => {
    render(<JsonInput formatOnBlur />);
    await enterText('test');
    blurInput();
    expectValue('test');
  });

  it('marks valid JSON strings as valid', async () => {
    render(<JsonInput />);
    await enterText('true');
    blurInput();
    expectValidity(true);
  });

  it('marks empty value as valid', async () => {
    render(<JsonInput />);
    await enterText('a');
    blurInput();
    expectValidity(false);
    await enterText('{backspace}');
    blurInput();
    expectValidity(true);
  });

  it('reformats valid JSON strings if formatOnBlur is true', async () => {
    render(<JsonInput formatOnBlur />);
    await enterText('{{"a": 123}');
    blurInput();
    expectValue('{\n  "a": 123\n}');
  });

  it('does not reformat valid JSON strings if formatOnBlur is false', async () => {
    render(<JsonInput formatOnBlur={false} />);
    await enterText('{{"a": 123}');
    blurInput();
    expectValue('{"a": 123}');
  });

  it('does not allow changing strings if readOnly is true', async () => {
    render(<JsonInput readOnly formatOnBlur defaultValue="test" />);
    await enterText('a');
    blurInput();
    expectValue('test');
  });

  it('does not reformat valid JSON strings if readOnly is true', async () => {
    render(<JsonInput readOnly formatOnBlur defaultValue='{"a": 123}' />);
    focusInput();
    blurInput();
    expectValue('{"a": 123}');
  });

  it('allows passing a custom serialize method', async () => {
    const spy = jest.fn(() => '"serialized"');
    render(<JsonInput formatOnBlur serialize={spy} defaultValue="true" />);
    focusInput();
    blurInput();
    expect(spy).toHaveBeenLastCalledWith(true, null, 2);
    expectValue('"serialized"');
  });

  it('allows passing a custom deserialize method', async () => {
    const spy = jest.fn(() => 123);
    render(<JsonInput formatOnBlur deserialize={spy} defaultValue="true" />);
    focusInput();
    blurInput();
    expect(spy).toHaveBeenCalledWith('true');
    expectValue('123');
  });
});

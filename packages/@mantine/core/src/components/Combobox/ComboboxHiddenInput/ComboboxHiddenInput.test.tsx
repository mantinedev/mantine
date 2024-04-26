import { render } from '@mantine-tests/core';
import { ComboboxHiddenInput } from './ComboboxHiddenInput';

describe('@mantine/core/ComboboxHiddenInput', () => {
  it('has correct displayName', () => {
    expect(ComboboxHiddenInput.displayName).toEqual('@mantine/core/ComboboxHiddenInput');
  });

  it('assigns correct string value to the input', () => {
    render(<ComboboxHiddenInput value="test" />);
    expect(document.querySelector('input')).toHaveValue('test');
  });

  it('correctly handles null value', () => {
    render(<ComboboxHiddenInput value={null} />);
    expect(document.querySelector('input')).toHaveValue('');
  });

  it('assigns correct array value to the input', () => {
    render(<ComboboxHiddenInput value={['test', 'test2']} />);
    expect(document.querySelector('input')).toHaveValue('test,test2');
  });

  it('supports custom valuesDivider', () => {
    render(<ComboboxHiddenInput value={['test', 'test2']} valuesDivider="|" />);
    expect(document.querySelector('input')).toHaveValue('test|test2');
  });

  it('passes other props to input', () => {
    const element = render(<ComboboxHiddenInput value="test" id="test-id" />);
    expect(element.container.querySelector('input')).toHaveAttribute('id', 'test-id');
  });
});

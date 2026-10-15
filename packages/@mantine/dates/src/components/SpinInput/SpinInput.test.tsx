import { useState } from 'react';
import { render, screen, userEvent } from '@mantine-tests/core';
import { SpinInput } from './SpinInput';

const defaultProps = {
  min: 0,
  max: 23,
  step: 1,
  onChange: () => {},
  'aria-label': 'test-spin-input',
};

const getInput = () => screen.getByLabelText('test-spin-input') as HTMLInputElement;

function StatefulSpinInput({
  initialValue = null,
  ...props
}: Partial<React.ComponentProps<typeof SpinInput>> & { initialValue?: number | null }) {
  const [value, setValue] = useState<number | null>(initialValue);
  return <SpinInput {...defaultProps} {...props} value={value} onChange={setValue} />;
}

describe('@mantine/dates/SpinInput', () => {
  // https://github.com/mantinedev/mantine/issues/9128
  it('selects input content when the value is assigned externally to a focused input', async () => {
    const { rerender } = render(<SpinInput {...defaultProps} value={null} />);

    await userEvent.click(getInput());
    rerender(<SpinInput {...defaultProps} value={5} />);

    expect(getInput()).toHaveValue('05');
    expect(getInput().selectionStart).toBe(0);
    expect(getInput().selectionEnd).toBe(2);
  });

  it('selects input content when the value is assigned externally after the same value was typed', async () => {
    const { rerender } = render(<SpinInput {...defaultProps} value={1} />);

    await userEvent.click(getInput());
    await userEvent.keyboard('1');

    rerender(<SpinInput {...defaultProps} value={2} />);

    rerender(<SpinInput {...defaultProps} value={1} />);

    expect(getInput()).toHaveValue('01');
    expect(getInput().selectionStart).toBe(0);
    expect(getInput().selectionEnd).toBe(2);
  });

  it('does not select input content when the value changes as the user types', async () => {
    const { rerender } = render(<SpinInput {...defaultProps} value={null} />);

    await userEvent.click(getInput());
    await userEvent.keyboard('1');

    rerender(<SpinInput {...defaultProps} value={1} />);

    expect(getInput().selectionStart).toBe(2);
    expect(getInput().selectionEnd).toBe(2);
  });

  it('does not select input content when the input is not focused', () => {
    const { rerender } = render(<SpinInput {...defaultProps} value={null} />);

    rerender(<SpinInput {...defaultProps} value={5} />);

    expect(getInput()).not.toHaveFocus();
    expect(getInput().selectionStart).toBe(2);
  });

  it('rolls over to the last typed digit when the value exceeds max', async () => {
    render(<StatefulSpinInput disableAutoAdvance />);
    await userEvent.click(getInput());
    await userEvent.keyboard('2');
    expect(getInput()).toHaveValue('02');
    await userEvent.keyboard('5');
    expect(getInput()).toHaveValue('05');
  });

  it('calls onNextInput when typed digit cannot be followed by another one', async () => {
    const onNextInput = jest.fn();
    render(<StatefulSpinInput onNextInput={onNextInput} />);
    await userEvent.click(getInput());
    await userEvent.keyboard('1');
    expect(onNextInput).not.toHaveBeenCalled();

    await userEvent.click(getInput());
    await userEvent.keyboard('5');
    expect(getInput()).toHaveValue('05');
    expect(onNextInput).toHaveBeenCalledTimes(1);
  });

  it('supports Home, End, ArrowUp and ArrowDown keys', async () => {
    render(<StatefulSpinInput initialValue={10} />);
    await userEvent.click(getInput());

    await userEvent.keyboard('{ArrowUp}');
    expect(getInput()).toHaveValue('11');

    await userEvent.keyboard('{ArrowDown}{ArrowDown}');
    expect(getInput()).toHaveValue('09');

    await userEvent.keyboard('{End}');
    expect(getInput()).toHaveValue('23');

    await userEvent.keyboard('{Home}');
    expect(getInput()).toHaveValue('00');
  });

  it('does not move the value against the arrow direction when it is not aligned to the step', async () => {
    render(<StatefulSpinInput initialValue={58} max={59} step={5} />);
    await userEvent.click(getInput());

    await userEvent.keyboard('{ArrowUp}');
    expect(getInput()).toHaveValue('58');

    await userEvent.keyboard('{ArrowDown}');
    expect(getInput()).toHaveValue('53');

    await userEvent.keyboard('{ArrowUp}');
    expect(getInput()).toHaveValue('55');

    await userEvent.keyboard('{ArrowUp}');
    expect(getInput()).toHaveValue('55');

    await userEvent.keyboard('{End}{ArrowUp}');
    expect(getInput()).toHaveValue('59');

    await userEvent.keyboard('{ArrowDown}');
    expect(getInput()).toHaveValue('54');

    await userEvent.keyboard('{Home}{ArrowDown}');
    expect(getInput()).toHaveValue('00');
  });

  it('clears value with Backspace and moves to previous input when empty', async () => {
    const onPreviousInput = jest.fn();
    render(<StatefulSpinInput initialValue={10} onPreviousInput={onPreviousInput} />);
    await userEvent.click(getInput());

    await userEvent.keyboard('{Backspace}');
    expect(getInput()).toHaveValue('');
    expect(onPreviousInput).not.toHaveBeenCalled();

    await userEvent.keyboard('{Backspace}');
    expect(onPreviousInput).toHaveBeenCalledTimes(1);
  });

  it('does not change value when readOnly', async () => {
    const onChange = jest.fn();
    render(<SpinInput {...defaultProps} value={10} onChange={onChange} readOnly />);
    expect(getInput()).toHaveAttribute('readonly');

    await userEvent.click(getInput());
    await userEvent.keyboard('5{ArrowUp}{Home}{Backspace}');
    expect(onChange).not.toHaveBeenCalled();
    expect(getInput()).toHaveValue('10');
  });

  it('exposes value to assistive technology only when it is set', () => {
    const { rerender } = render(<SpinInput {...defaultProps} value={5} />);
    expect(getInput()).toHaveAttribute('aria-valuenow', '5');
    expect(getInput()).toHaveAttribute('aria-valuetext', '05');

    rerender(<SpinInput {...defaultProps} value={null} />);
    expect(getInput()).not.toHaveAttribute('aria-valuenow');
    expect(getInput()).not.toHaveAttribute('aria-valuetext');
  });

  it('keeps the selection when the mouse button is released over the input', async () => {
    const onMouseUp = jest.fn();
    render(<StatefulSpinInput initialValue={14} onMouseUp={onMouseUp} />);
    await userEvent.click(getInput());

    const event = new MouseEvent('mouseup', { bubbles: true, cancelable: true });
    getInput().dispatchEvent(event);
    expect(event.defaultPrevented).toBe(true);
    expect(onMouseUp).toHaveBeenCalled();
  });
});

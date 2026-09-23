import { render, screen, userEvent } from '@mantine-tests/core';
import { SpinInput } from './SpinInput';

const defaultProps = {
  min: 0,
  max: 23,
  step: 1,
  focusable: true,
  onChange: () => {},
  'aria-label': 'test-spin-input',
};

const getInput = () => screen.getByLabelText('test-spin-input') as HTMLInputElement;

describe('@mantine/dates/SpinInput', () => {
  // https://github.com/mantinedev/mantine/issues/9128
  it('selects input content when the value is assigned externally to a focused input', async () => {
    const { rerender } = render(<SpinInput {...defaultProps} value={null} />);

    await userEvent.click(getInput());
    rerender(
      <>
        <SpinInput {...defaultProps} value={5} />
      </>
    );

    expect(getInput()).toHaveValue('05');
    expect(getInput().selectionStart).toBe(0);
    expect(getInput().selectionEnd).toBe(2);
  });

  it('selects input content when the value is assigned externally after the same value was typed', async () => {
    const { rerender } = render(<SpinInput {...defaultProps} value={1} />);

    await userEvent.click(getInput());
    await userEvent.keyboard('1');

    rerender(
      <>
        <SpinInput {...defaultProps} value={2} />
      </>
    );

    rerender(
      <>
        <SpinInput {...defaultProps} value={1} />
      </>
    );

    expect(getInput()).toHaveValue('01');
    expect(getInput().selectionStart).toBe(0);
    expect(getInput().selectionEnd).toBe(2);
  });

  it('does not select input content when the value changes as the user types', async () => {
    const { rerender } = render(<SpinInput {...defaultProps} value={null} />);

    await userEvent.click(getInput());
    await userEvent.keyboard('1');

    rerender(
      <>
        <SpinInput {...defaultProps} value={1} />
      </>
    );

    expect(getInput().selectionStart).toBe(2);
    expect(getInput().selectionEnd).toBe(2);
  });

  it('does not select input content when the input is not focused', () => {
    const { rerender } = render(<SpinInput {...defaultProps} value={null} />);

    rerender(
      <>
        <SpinInput {...defaultProps} value={5} />
      </>
    );

    expect(getInput()).not.toHaveFocus();
    expect(getInput().selectionStart).toBe(2);
  });
});

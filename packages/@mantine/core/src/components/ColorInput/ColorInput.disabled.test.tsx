import { fireEvent, render, screen } from '@testing-library/react';
import { MantineProvider } from '../../core';
import { ColorInput } from './ColorInput';

it('blocks swatch changes when disabled with a controlled open popover', () => {
  const onChange = jest.fn();
  const renderColorInput = (disabled: boolean) => (
    <MantineProvider>
      <ColorInput
        disabled={disabled}
        fixOnBlur={false}
        defaultValue="#ff0000"
        swatches={['#ff0000', '#0000ff']}
        popoverProps={{ opened: true, transitionProps: { duration: 0 } }}
        onChange={onChange}
      />
    </MantineProvider>
  );
  const { rerender } = render(renderColorInput(false));
  const swatch = { name: '#0000ff' };
  expect(screen.getByRole('button', swatch)).toBeTruthy();

  rerender(renderColorInput(true));
  expect(screen.queryByRole('button', swatch)).toBeNull();
  expect(onChange).not.toHaveBeenCalled();

  rerender(renderColorInput(false));
  fireEvent.click(screen.getByRole('button', swatch));
  expect(onChange).toHaveBeenCalledWith('#0000ff');
});

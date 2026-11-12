import { fireEvent, render, screen } from '@testing-library/react';
import { MantineProvider } from '@mantine/core';
import { DatePickerInput } from './DatePickerInput';

it.each(['popover', 'modal'] as const)('closes the open %s when disabled', (dropdownType) => {
  const onChange = jest.fn();
  const props = {
    label: 'Date',
    defaultDate: '2026-11-12',
    dropdownType,
    onChange,
    popoverProps: { transitionProps: { duration: 0 } },
    modalProps: { transitionProps: { duration: 0 } },
  };
  const renderPicker = (disabled: boolean) => (
    <MantineProvider>
      <DatePickerInput {...props} disabled={disabled} />
    </MantineProvider>
  );
  const { rerender } = render(renderPicker(false));
  const day = '16 November 2026';

  fireEvent.click(screen.getByRole('button', { name: 'Date' }));
  expect(screen.getByRole('button', { name: day })).toBeTruthy();

  rerender(renderPicker(true));
  expect(screen.queryByRole('button', { name: day })).toBeNull();
  expect(onChange).not.toHaveBeenCalled();

  rerender(renderPicker(false));
  expect(screen.queryByRole('button', { name: day })).toBeNull();
  fireEvent.click(screen.getByRole('button', { name: 'Date' }));
  fireEvent.click(screen.getByRole('button', { name: day }));
  expect(onChange).toHaveBeenCalledWith('2026-11-16');
});

import { act, renderHook } from '@testing-library/react';
import { PickerDropdownType } from '../use-resolved-dropdown-type/use-resolved-dropdown-type';
import { useDropdownDraft } from './use-dropdown-draft';

interface HookProps {
  dropdownType: PickerDropdownType;
  applyOnSubmit?: boolean;
  opened: boolean;
  type?: string;
  value: any;
}

function setup(initialProps: HookProps) {
  const setValue = jest.fn();
  const commitValue = jest.fn();
  const closeDropdown = jest.fn();
  const hook = renderHook(
    (props: HookProps) =>
      useDropdownDraft({
        dropdownType: props.dropdownType,
        applyOnSubmit: props.applyOnSubmit,
        opened: props.opened,
        type: props.type ?? 'default',
        value: props.value,
        setValue,
        commitValue,
        closeDropdown,
      }),
    { initialProps }
  );

  return { ...hook, setValue, commitValue, closeDropdown };
}

describe('@mantine/dates/use-dropdown-draft', () => {
  it('passes changes through to setValue when not in draft mode', () => {
    const popover = setup({ dropdownType: 'popover', opened: true, value: null });
    expect(popover.result.current.draftMode).toBe(false);
    act(() => popover.result.current.onPickerChange('2024-01-01'));
    expect(popover.setValue).toHaveBeenCalledWith('2024-01-01');

    const drawer = setup({
      dropdownType: 'drawer',
      applyOnSubmit: false,
      opened: true,
      value: null,
    });
    expect(drawer.result.current.draftMode).toBe(false);
    act(() => drawer.result.current.onPickerChange('2024-01-02'));
    expect(drawer.setValue).toHaveBeenCalledWith('2024-01-02');
  });

  it('buffers changes in draft mode', () => {
    const { result, setValue, commitValue } = setup({
      dropdownType: 'modal',
      opened: true,
      value: null,
    });

    expect(result.current.draftMode).toBe(true);
    act(() => result.current.onPickerChange('2024-01-01'));
    expect(result.current.pickerValue).toBe('2024-01-01');
    expect(setValue).not.toHaveBeenCalled();
    expect(commitValue).not.toHaveBeenCalled();
  });

  it('resets the draft when the dropdown is reopened', () => {
    const { result, rerender } = setup({ dropdownType: 'drawer', opened: true, value: null });

    act(() => result.current.onPickerChange('2024-01-01'));
    rerender({ dropdownType: 'drawer', opened: false, value: null });
    expect(result.current.pickerValue).toBe(null);

    rerender({ dropdownType: 'drawer', opened: true, value: null });
    expect(result.current.pickerValue).toBe(null);
  });

  it('resets the draft when the committed value changes', () => {
    const { result, rerender } = setup({ dropdownType: 'drawer', opened: true, value: null });

    act(() => result.current.onPickerChange('2024-01-01'));
    rerender({ dropdownType: 'drawer', opened: true, value: '2024-02-02' });
    expect(result.current.pickerValue).toBe('2024-02-02');
  });

  it('commits the draft once and closes the dropdown on submit', () => {
    const { result, setValue, commitValue, closeDropdown } = setup({
      dropdownType: 'drawer',
      opened: true,
      value: null,
    });

    act(() => result.current.onPickerChange('2024-01-01'));
    act(() => result.current.submit());
    expect(commitValue).toHaveBeenCalledTimes(1);
    expect(commitValue).toHaveBeenCalledWith('2024-01-01');
    expect(setValue).not.toHaveBeenCalled();
    expect(closeDropdown).toHaveBeenCalledTimes(1);
  });

  it('closes the dropdown without committing an unchanged draft', () => {
    const { result, commitValue, closeDropdown } = setup({
      dropdownType: 'drawer',
      opened: true,
      value: '2024-01-01',
    });

    act(() => result.current.submit());
    expect(commitValue).not.toHaveBeenCalled();
    expect(closeDropdown).toHaveBeenCalledTimes(1);
  });

  it('disables and blocks submit while the range draft is incomplete', () => {
    const { result, commitValue, closeDropdown } = setup({
      dropdownType: 'drawer',
      opened: true,
      type: 'range',
      value: [null, null],
    });

    act(() => result.current.onPickerChange(['2024-01-01', null]));
    expect(result.current.submitDisabled).toBe(true);

    act(() => result.current.submit());
    expect(commitValue).not.toHaveBeenCalled();
    expect(closeDropdown).not.toHaveBeenCalled();
  });
});

import { act, renderHook } from '@testing-library/react';
import { useCombobox } from './use-combobox';

describe('@mantine/core/Combobox/use-combobox', () => {
  it('supports uncontrolled opened state', () => {
    const hook = renderHook(() => useCombobox({ defaultOpened: true }));
    expect(hook.result.current.dropdownOpened).toBe(true);

    act(hook.result.current.closeDropdown);
    expect(hook.result.current.dropdownOpened).toBe(false);

    act(hook.result.current.openDropdown);
    expect(hook.result.current.dropdownOpened).toBe(true);

    act(hook.result.current.toggleDropdown);
    expect(hook.result.current.dropdownOpened).toBe(false);
  });

  it('supports controlled opened state', () => {
    const spy = jest.fn();
    const hook = renderHook(() => useCombobox({ opened: true, onOpenedChange: spy }));
    expect(hook.result.current.dropdownOpened).toBe(true);

    act(hook.result.current.closeDropdown);
    expect(hook.result.current.dropdownOpened).toBe(true);
    expect(spy).toHaveBeenCalledWith(false);

    act(hook.result.current.toggleDropdown);
    expect(hook.result.current.dropdownOpened).toBe(true);
    expect(spy).toHaveBeenCalledWith(false);
  });

  it('calls onDropdownOpen when dropdown is opened', () => {
    const spy = jest.fn();
    const hook = renderHook(() => useCombobox({ onDropdownOpen: spy }));
    expect(spy).not.toHaveBeenCalled();

    act(hook.result.current.openDropdown);
    expect(spy).toHaveBeenCalled();

    act(hook.result.current.closeDropdown);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('calls onDropdownClose when dropdown is closed', () => {
    const spy = jest.fn();
    const hook = renderHook(() => useCombobox({ onDropdownClose: spy }));
    expect(spy).not.toHaveBeenCalled();

    act(hook.result.current.openDropdown);
    expect(spy).not.toHaveBeenCalled();

    act(hook.result.current.closeDropdown);
    expect(spy).toHaveBeenCalled();
  });
});

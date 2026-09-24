import { renderHook } from '@testing-library/react';
import { DatesDropdownProvider, useDatesDropdownContext } from './DatesDropdown.context';

describe('@mantine/dates/DatesDropdown.context', () => {
  it('returns default value without a provider', () => {
    const { result } = renderHook(() => useDatesDropdownContext());
    expect(result.current).toStrictEqual({ preventFocus: false, stopPropagation: false });
  });

  it('returns provided value', () => {
    const { result } = renderHook(() => useDatesDropdownContext(), {
      wrapper: ({ children }) => (
        <DatesDropdownProvider value={{ preventFocus: true, stopPropagation: true }}>
          {children}
        </DatesDropdownProvider>
      ),
    });
    expect(result.current).toStrictEqual({ preventFocus: true, stopPropagation: true });
  });
});

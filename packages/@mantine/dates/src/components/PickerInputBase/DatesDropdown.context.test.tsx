import { renderHook } from '@testing-library/react';
import { useDatesDropdownContext } from './DatesDropdown.context';

describe('@mantine/dates/DatesDropdown.context', () => {
  it('returns default value without a provider', () => {
    const { result } = renderHook(() => useDatesDropdownContext());
    expect(result.current).toStrictEqual({
      preventFocus: false,
      stopPropagation: false,
      layout: 'default',
    });
  });
});

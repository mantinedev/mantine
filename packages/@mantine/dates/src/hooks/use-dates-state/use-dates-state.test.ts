import { act, renderHook } from '@testing-library/react';
import { useDatesState } from './use-dates-state';

describe('@mantine/dates/use-dates-state quarter level', () => {
  it('marks a mid-quarter value as selected on the quarter start control', () => {
    const { result } = renderHook(() =>
      useDatesState({ type: 'default', level: 'quarter', value: '2026-05-15', onChange: () => {} })
    );
    expect(result.current.getControlProps('2026-04-01').selected).toBe(true);
    expect(result.current.getControlProps('2026-07-01').selected).toBe(false);
  });

  it('deselects a quarter when allowDeselect is set and the same quarter is clicked', () => {
    const spy = jest.fn();
    const { result } = renderHook(() =>
      useDatesState({
        type: 'default',
        level: 'quarter',
        value: '2026-05-15',
        onChange: spy,
        allowDeselect: true,
      })
    );
    act(() => result.current.onDateChange('2026-04-01'));
    expect(spy).toHaveBeenCalledWith(null);
  });
});

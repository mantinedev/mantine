import { Activity } from 'react';
import { render, renderHook } from '@testing-library/react';
import { useId } from './use-id';

describe('use-id', () => {
  it('returns static id', () => {
    const view = renderHook(() => useId('test-id'));
    expect(view.result.current).toBe('test-id');
  });

  it('returns random id if static id is not provided', () => {
    const view = renderHook(() => useId());
    expect(typeof view.result.current).toBe('string');
    expect(view.result.current.includes('mantine')).toBe(true);
    expect(view.result.current !== renderHook(() => useId()).result.current).toBe(true);
  });

  it('keeps the same id across Activity hide/reveal cycles', () => {
    const holder: { id: string | null } = { id: null };

    function Capture() {
      holder.id = useId();
      return null;
    }

    const { rerender } = render(
      <Activity mode="visible">
        <Capture />
      </Activity>
    );

    const initialId = holder.id;
    expect(initialId).toBeTruthy();

    rerender(
      <Activity mode="hidden">
        <Capture />
      </Activity>
    );

    rerender(
      <Activity mode="visible">
        <Capture />
      </Activity>
    );

    expect(holder.id).toBe(initialId);
  });
});

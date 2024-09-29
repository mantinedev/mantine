import { renderHook } from '@testing-library/react';
import { useDidUpdate } from './use-did-update';

describe('@mantine/hooks/use-did-update', () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  it('calls `fn` on `dependencies` change', () => {
    const fn = jest.fn();
    let dependency = '';
    const { rerender } = renderHook(() => useDidUpdate(fn, [dependency]));
    expect(fn).not.toHaveBeenCalled();
    //Change dependency and rerender
    dependency = 'foo';
    rerender();
    expect(fn).toHaveBeenCalled();
  });
});

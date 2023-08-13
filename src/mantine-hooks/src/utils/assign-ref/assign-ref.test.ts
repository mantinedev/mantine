import { createRef } from 'react';
import { assignRef } from './assign-ref';

describe('@mantine/hooks/assignRef', () => {
  it('assigns function ref', () => {
    const spy = jest.fn();
    assignRef(spy, 'test-ref');
    expect(spy).toHaveBeenCalledWith('test-ref');
  });

  it('assigns ref to react ref object', () => {
    const ref = createRef();
    assignRef(ref, 'test-ref');
    expect(ref.current).toBe('test-ref');
  });
});

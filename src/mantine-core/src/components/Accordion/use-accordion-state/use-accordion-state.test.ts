import { renderHook, act } from '@testing-library/react-hooks';
import { useAccordionState, createAccordionState } from './use-accordion-state';

const defaultProps = {
  initialState: null,
  total: 3,
  initialItem: null,
  state: null,
  onChange: () => {},
  multiple: false,
};

describe('@mantine/core/Accordion/use-accordion-state', () => {
  it('creates initial state based on state value', () => {
    const hook = renderHook(() =>
      useAccordionState({ ...defaultProps, state: createAccordionState(2) })
    );

    expect(hook.result.current[0]).toEqual({ 0: false, 1: false });
  });

  it('creates initial state based on initialState value', () => {
    const hook = renderHook(() =>
      useAccordionState({ ...defaultProps, initialState: createAccordionState(2) })
    );

    expect(hook.result.current[0]).toEqual({ 0: false, 1: false });
  });

  it('creates initial state based on initialItem value', () => {
    const hook = renderHook(() => useAccordionState({ ...defaultProps, initialItem: 2 }));
    expect(hook.result.current[0]).toEqual({ 0: false, 1: false, 2: true });
  });

  it('creates initial state based on items if state and initialState are not provided', () => {
    const hook = renderHook(() => useAccordionState(defaultProps));
    expect(hook.result.current[0]).toEqual(createAccordionState(defaultProps.total));
  });

  it('correctly handles single item changes', () => {
    const spy = jest.fn();
    const hook = renderHook(() => useAccordionState({ ...defaultProps, onChange: spy }));
    act(() => hook.result.current[1].toggle(2));
    expect(spy).toHaveBeenCalledWith({ 0: false, 1: false, 2: true });

    act(() => hook.result.current[1].toggle(0));
    expect(spy).toHaveBeenCalledWith({ 0: true, 1: false, 2: false });

    act(() => hook.result.current[1].toggle(0));
    expect(spy).toHaveBeenCalledWith({ 0: false, 1: false, 2: false });
  });

  it('correctly handles multiple item changes', () => {
    const spy = jest.fn();
    const hook = renderHook(() =>
      useAccordionState({ ...defaultProps, multiple: true, onChange: spy })
    );

    act(() => hook.result.current[1].toggle(2));
    expect(spy).toHaveBeenCalledWith({ 0: false, 1: false, 2: true });

    act(() => hook.result.current[1].toggle(0));
    expect(spy).toHaveBeenCalledWith({ 0: true, 1: false, 2: true });

    act(() => hook.result.current[1].toggle(0));
    expect(spy).toHaveBeenCalledWith({ 0: false, 1: false, 2: true });
  });

  it('allows to set state with setState handler', () => {
    const hook = renderHook(() => useAccordionState(defaultProps));
    act(() => hook.result.current[1].setState({ 0: true, 1: true, 2: true, 3: false }));
    expect(hook.result.current[0]).toEqual({ 0: true, 1: true, 2: true, 3: false });
  });
});

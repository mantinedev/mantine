import { act, renderHook } from '@testing-library/react-hooks';
import { useInputState } from './use-input-state';

const reactChangeEventText = {
  currentTarget: { type: 'text', value: 'test-text-value' },
  nativeEvent: {},
} as any;

const reactChangeEventBoolean = {
  currentTarget: { type: 'checkbox', checked: true },
  nativeEvent: {},
} as any;

describe('@mantine/hooks/use-input-state', () => {
  it('sets correct initial state', () => {
    const hook = renderHook(() => useInputState('test-value'));
    const [value] = hook.result.current;
    expect(value).toBe('test-value');
  });

  it('sets value with react change event on text input', () => {
    const hook = renderHook(() => useInputState(''));
    act(() => hook.result.current[1](reactChangeEventText));
    const [value] = hook.result.current;
    expect(value).toBe(reactChangeEventText.currentTarget.value);
  });

  it('sets value with react change event on boolean input', () => {
    const hook = renderHook(() => useInputState(false));
    act(() => hook.result.current[1](reactChangeEventBoolean));
    const [value] = hook.result.current;
    expect(value).toBe(true);
  });
});

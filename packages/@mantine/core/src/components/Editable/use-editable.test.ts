import { act, renderHook } from '@testing-library/react';
import { useEditable } from './use-editable';

describe('@mantine/core/useEditable', () => {
  it('returns the initial value and is not editing by default', () => {
    const hook = renderHook(() => useEditable({ defaultValue: 'hello' }));
    expect(hook.result.current.value).toBe('hello');
    expect(hook.result.current.editing).toBe(false);
  });

  it('exposes resolved configuration', () => {
    const hook = renderHook(() =>
      useEditable({ activationMode: 'click', submitMode: 'enter', selectOnFocus: false })
    );
    expect(hook.result.current.activationMode).toBe('click');
    expect(hook.result.current.submitMode).toBe('enter');
    expect(hook.result.current.selectOnFocus).toBe(false);
  });

  it('enters and exits edit mode', () => {
    const hook = renderHook(() => useEditable({ defaultValue: 'hello' }));

    act(() => hook.result.current.edit());
    expect(hook.result.current.editing).toBe(true);

    act(() => hook.result.current.submit());
    expect(hook.result.current.editing).toBe(false);
  });

  it('updates the value and calls onChange', () => {
    const onChange = jest.fn();
    const hook = renderHook(() => useEditable({ defaultValue: 'a', onChange }));

    act(() => hook.result.current.setValue('ab'));
    expect(hook.result.current.value).toBe('ab');
    expect(onChange).toHaveBeenLastCalledWith('ab');
  });

  it('commits the value on submit and calls onValueCommit', () => {
    const onValueCommit = jest.fn();
    const hook = renderHook(() => useEditable({ defaultValue: 'a', onValueCommit }));

    act(() => hook.result.current.edit());
    act(() => hook.result.current.setValue('changed'));
    act(() => hook.result.current.submit());

    expect(hook.result.current.value).toBe('changed');
    expect(hook.result.current.editing).toBe(false);
    expect(onValueCommit).toHaveBeenCalledTimes(1);
    expect(onValueCommit).toHaveBeenCalledWith('changed');
  });

  it('reverts to the last committed value on cancel and calls onValueRevert', () => {
    const onValueRevert = jest.fn();
    const onValueCommit = jest.fn();
    const hook = renderHook(() =>
      useEditable({ defaultValue: 'original', onValueRevert, onValueCommit })
    );

    act(() => hook.result.current.edit());
    act(() => hook.result.current.setValue('typed but not saved'));
    act(() => hook.result.current.cancel());

    expect(hook.result.current.value).toBe('original');
    expect(hook.result.current.editing).toBe(false);
    expect(onValueRevert).toHaveBeenCalledWith('original');
    expect(onValueCommit).not.toHaveBeenCalled();
  });

  it('reverts to the value that was committed most recently', () => {
    const hook = renderHook(() => useEditable({ defaultValue: 'v1' }));

    act(() => hook.result.current.edit());
    act(() => hook.result.current.setValue('v2'));
    act(() => hook.result.current.submit());

    act(() => hook.result.current.edit());
    act(() => hook.result.current.setValue('v3'));
    act(() => hook.result.current.cancel());

    expect(hook.result.current.value).toBe('v2');
  });

  it('does not commit twice when submit is called after the field already exited', () => {
    const onValueCommit = jest.fn();
    const hook = renderHook(() => useEditable({ defaultValue: 'a', onValueCommit }));

    act(() => hook.result.current.edit());
    act(() => {
      hook.result.current.submit();
      hook.result.current.submit();
    });

    expect(onValueCommit).toHaveBeenCalledTimes(1);
  });

  it('does not enter edit mode when disabled', () => {
    const hook = renderHook(() => useEditable({ defaultValue: 'a', disabled: true }));
    act(() => hook.result.current.edit());
    expect(hook.result.current.editing).toBe(false);
  });

  it('does not enter edit mode when readOnly', () => {
    const hook = renderHook(() => useEditable({ defaultValue: 'a', readOnly: true }));
    act(() => hook.result.current.edit());
    expect(hook.result.current.editing).toBe(false);
  });

  it('supports controlled value', () => {
    const onChange = jest.fn();
    const hook = renderHook(({ value }) => useEditable({ value, onChange }), {
      initialProps: { value: 'controlled' },
    });

    expect(hook.result.current.value).toBe('controlled');
    act(() => hook.result.current.setValue('next'));
    expect(onChange).toHaveBeenCalledWith('next');
    expect(hook.result.current.value).toBe('controlled');

    hook.rerender({ value: 'next' });
    expect(hook.result.current.value).toBe('next');
  });

  it('supports controlled editing state', () => {
    const onEditingChange = jest.fn();
    const hook = renderHook(({ editing }) => useEditable({ editing, onEditingChange }), {
      initialProps: { editing: false },
    });

    act(() => hook.result.current.edit());
    expect(onEditingChange).toHaveBeenCalledWith(true);
    expect(hook.result.current.editing).toBe(false);

    hook.rerender({ editing: true });
    expect(hook.result.current.editing).toBe(true);
  });

  it('starts in edit mode with defaultEditing', () => {
    const hook = renderHook(() => useEditable({ defaultValue: 'a', defaultEditing: true }));
    expect(hook.result.current.editing).toBe(true);
  });
});

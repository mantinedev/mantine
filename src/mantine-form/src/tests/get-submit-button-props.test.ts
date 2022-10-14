import { act, renderHook } from '@testing-library/react';
import { useForm } from '../use-form';

const getFormEvent = () => ({ preventDefault: jest.fn() } as any);

describe('@mantine/form/get-submit-button-props', () => {
  it('returns correct submit button props (root property)', () => {
    const hook = renderHook(() => useForm());

    const props = hook.result.current.getSubmitButtonProps();
    expect(props.loading).toBe(false);
  });

  it('returns correct submit button props (with non-promise return from handler)', () => {
    const hook = renderHook(() => useForm());

    const handleSubmit = () => {};

    const event = getFormEvent();
    act(() => hook.result.current.onSubmit(handleSubmit)(event));

    const props = hook.result.current.getSubmitButtonProps();
    expect(props.loading).toBe(false);
  });

  it('returns correct submit button props (with promise resolving from handler)', () => {
    const hook = renderHook(() => useForm());

    const handleSubmit = () => Promise.resolve();

    const event = getFormEvent();
    act(() => hook.result.current.onSubmit(handleSubmit)(event));

    const props = hook.result.current.getSubmitButtonProps();
    expect(props.loading).toBe(false);
  });

  it('returns correct submit button props (with promise rejecting from handler)', () => {
    const hook = renderHook(() => useForm());

    const handleSubmit = () => Promise.reject();

    const event = getFormEvent();
    act(() => hook.result.current.onSubmit(handleSubmit)(event));

    const props = hook.result.current.getSubmitButtonProps();
    expect(props.loading).toBe(false);
  });

  it('returns correct submit button props (while Promise still pending)', async () => {
    const hook = renderHook(() => useForm());

    const handleSubmit = () =>
      new Promise<void>((resolve) => {
        setTimeout(resolve, 1000);
      });

    const event = getFormEvent();
    const promise = act(() => hook.result.current.onSubmit(handleSubmit)(event));

    const props = hook.result.current.getSubmitButtonProps();
    expect(props.loading).toBe(true);

    await promise;

    expect(props.loading).toBe(false);
  });
});

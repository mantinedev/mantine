import { useEffect, useState } from 'react';
import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useFormField } from '@mantine/hooks';
import { FormMode, UseFormReturnType } from '../../types';
import { useField, UseFieldReturnType } from '../../use-field';
import { useForm } from '../../use-form';

interface Values {
  plain: string;
  bound: string;
  user: { name: string };
  list: { name: string }[];
}

const initialValues: Values = {
  plain: '',
  bound: '',
  user: { name: 'john' },
  list: [{ name: 'one' }, { name: 'two' }, { name: 'three' }],
};

interface TestInputProps extends Record<string, any> {
  label: string;
  onMount?: (label: string) => void;
}

function PlainInput({ label, error, onMount, ...others }: TestInputProps) {
  useEffect(() => {
    onMount?.(label);
  }, []);

  return <input aria-label={label} {...others} />;
}

function BoundInput({
  label,
  error,
  value,
  onMount,
  onExternalWrite,
  subscribe,
  ...others
}: TestInputProps) {
  const field = useFormField<string>(others.onChange, { onExternalWrite, subscribe });

  useEffect(() => {
    onMount?.(label);
  }, []);

  return <input aria-label={label} {...others} value={field.subscribed ? field.value : value} />;
}

interface TestFormProps {
  mode: FormMode;
  onRender?: () => void;
  onMount?: (label: string) => void;
  onExternalWrite?: (value: string) => void;
  onForm: (form: UseFormReturnType<Values>) => void;
}

function TestForm({ mode, onRender, onMount, onExternalWrite, onForm }: TestFormProps) {
  const form = useForm<Values>({ mode, initialValues });
  onForm(form);
  onRender?.();

  return (
    <>
      <PlainInput label="plain" onMount={onMount} {...form.getInputProps('plain')} />
      <BoundInput
        label="bound"
        onMount={onMount}
        onExternalWrite={onExternalWrite}
        {...form.getInputProps('bound')}
      />
      <BoundInput label="user.name" onMount={onMount} {...form.getInputProps('user.name')} />
      {form.getValues().list.map((_, index) => (
        <PlainInput
          key={index}
          label={`list.${index}`}
          onMount={onMount}
          {...form.getInputProps(`list.${index}.name`)}
        />
      ))}
    </>
  );
}

function setup(mode: FormMode, props: Partial<TestFormProps> = {}) {
  let form!: UseFormReturnType<Values>;
  const onRender = jest.fn();
  const onMount = jest.fn();
  render(
    <TestForm
      mode={mode}
      onRender={onRender}
      onMount={onMount}
      onForm={(current) => {
        form = current;
      }}
      {...props}
    />
  );

  return { getForm: () => form, onRender, onMount };
}

const getInput = (label: string) => screen.getByLabelText<HTMLInputElement>(label);

function tests(mode: FormMode) {
  it('updates inputs with form.setFieldValue without remounting them', () => {
    const { getForm, onMount } = setup(mode);
    onMount.mockClear();
    getInput('plain').focus();

    act(() => getForm().setFieldValue('plain', 'plain-value'));
    expect(getInput('plain')).toHaveValue('plain-value');
    expect(getInput('plain')).toHaveFocus();

    getInput('bound').focus();
    act(() => getForm().setFieldValue('bound', 'bound-value'));
    expect(getInput('bound')).toHaveValue('bound-value');
    expect(getInput('bound')).toHaveFocus();

    expect(onMount).not.toHaveBeenCalled();
  });

  it('updates inputs with form.setValues, form.reset and form.resetField without remounting them', () => {
    const { getForm, onMount } = setup(mode);
    onMount.mockClear();

    act(() => getForm().setValues({ plain: 'a', bound: 'b' }));
    expect(getInput('plain')).toHaveValue('a');
    expect(getInput('bound')).toHaveValue('b');

    act(() => getForm().resetField('plain'));
    expect(getInput('plain')).toHaveValue('');
    expect(getInput('bound')).toHaveValue('b');

    act(() => getForm().reset());
    expect(getInput('bound')).toHaveValue('');
    expect(onMount).not.toHaveBeenCalled();
  });

  it('updates nested inputs when the parent path is written', () => {
    const { getForm } = setup(mode);
    act(() => getForm().setFieldValue('user', { name: 'jane' }));
    expect(getInput('user.name')).toHaveValue('jane');
  });

  it('updates list inputs rendered with index keys', () => {
    const { getForm } = setup(mode);

    act(() => getForm().removeListItem('list', 0));
    expect(screen.getAllByLabelText(/^list\./).map((node) => (node as any).value)).toStrictEqual([
      'two',
      'three',
    ]);

    act(() => getForm().insertListItem('list', { name: 'zero' }, 0));
    act(() => getForm().reorderListItem('list', { from: 0, to: 2 }));
    expect(screen.getAllByLabelText(/^list\./).map((node) => (node as any).value)).toStrictEqual([
      'two',
      'three',
      'zero',
    ]);
  });

  it('keeps input handlers referentially stable between renders', () => {
    const { getForm } = setup(mode);
    const before = getForm().getInputProps('plain');
    act(() => getForm().setFieldValue('plain', 'next'));
    const after = getForm().getInputProps('plain');

    expect(after.onChange).toBe(before.onChange);
    expect(after.onFocus).toBe(before.onFocus);
    expect(after.onBlur).toBe(before.onBlur);
  });

  it('keeps the identity of values that were not changed', () => {
    const { getForm } = setup(mode);
    const before = getForm().getValues();
    act(() => getForm().setFieldValue('list.1.name', 'changed'));
    const after = getForm().getValues();

    expect(after.user).toBe(before.user);
    expect(after.list[0]).toBe(before.list[0]);
    expect(after.list[1]).not.toBe(before.list[1]);
    expect(before.list[1].name).toBe('two');
  });

  it('calls onExternalWrite for writes that come from the form', async () => {
    const onExternalWrite = jest.fn();
    const { getForm } = setup(mode, { onExternalWrite });

    await userEvent.type(getInput('bound'), 'typed');
    expect(onExternalWrite).not.toHaveBeenCalled();

    act(() => getForm().setFieldValue('bound', 'typed', { forceUpdate: false }));
    expect(onExternalWrite).not.toHaveBeenCalled();

    act(() => getForm().setFieldValue('bound', 'typed'));
    expect(onExternalWrite).toHaveBeenLastCalledWith('typed');
    expect(onExternalWrite).toHaveBeenCalledTimes(1);

    act(() => getForm().setFieldValue('bound', 'set'));
    expect(onExternalWrite).toHaveBeenLastCalledWith('set');

    act(() => getForm().setValues({ plain: 'other' }));
    expect(onExternalWrite).toHaveBeenCalledTimes(2);

    act(() => getForm().setValues({ bound: 'values' }));
    expect(onExternalWrite).toHaveBeenLastCalledWith('values');

    act(() => getForm().resetField('bound'));
    expect(onExternalWrite).toHaveBeenLastCalledWith('');

    act(() => getForm().reset());
    expect(onExternalWrite).toHaveBeenLastCalledWith('');
    expect(onExternalWrite).toHaveBeenCalledTimes(5);
  });

  it('does not mark the field as touched or dirty when onExternalWrite is called by reset', async () => {
    const { getForm } = setup(mode, { onExternalWrite: jest.fn() });
    await userEvent.type(getInput('bound'), 'typed');
    expect(getForm().isDirty('bound')).toBe(true);

    act(() => getForm().reset());
    expect(getForm().isDirty()).toBe(false);
    expect(getForm().isTouched()).toBe(false);
  });
}

describe('@mantine/form/field-protocol (controlled)', () => {
  tests('controlled');

  it('rerenders the form component on every change', async () => {
    const { onRender } = setup('controlled');
    onRender.mockClear();
    await userEvent.type(getInput('bound'), 'abc');
    expect(onRender.mock.calls.length).toBeGreaterThanOrEqual(3);
    expect(getInput('bound')).toHaveValue('abc');
  });
});

describe('@mantine/form/field-protocol (uncontrolled)', () => {
  tests('uncontrolled');

  it('does not rerender the form component when a subscribed input changes', async () => {
    const { getForm, onRender } = setup('uncontrolled');
    onRender.mockClear();

    await userEvent.type(getInput('bound'), 'abcd');
    expect(onRender).not.toHaveBeenCalled();
    expect(getInput('bound')).toHaveValue('abcd');
    expect(getForm().getValues().bound).toBe('abcd');
    expect(getForm().isDirty()).toBe(true);
    expect(getForm().isDirty('bound')).toBe(true);

    await userEvent.clear(getInput('bound'));
    expect(onRender).not.toHaveBeenCalled();
    expect(getForm().isDirty()).toBe(false);
  });

  it('subscribes components to dirty and touched state with useDirty and useTouched', async () => {
    let form!: UseFormReturnType<{ name: string; other: string }>;
    const formRenders = jest.fn();
    const statusRenders = jest.fn();

    function Status() {
      statusRenders();
      return (
        <>
          <span data-testid="dirty">{String(form.useDirty())}</span>
          <span data-testid="dirty-name">{String(form.useDirty('name'))}</span>
          <span data-testid="touched-name">{String(form.useTouched('name'))}</span>
        </>
      );
    }

    function Demo() {
      form = useForm({ mode: 'uncontrolled', initialValues: { name: '', other: '' } });
      formRenders();
      return (
        <>
          <BoundInput label="name" {...form.getInputProps('name')} />
          <BoundInput label="other" {...form.getInputProps('other')} />
          <Status />
        </>
      );
    }

    render(<Demo />);
    formRenders.mockClear();
    statusRenders.mockClear();
    const read = () =>
      ['dirty', 'dirty-name', 'touched-name'].map((id) => screen.getByTestId(id).textContent);
    expect(read()).toStrictEqual(['false', 'false', 'false']);

    await userEvent.type(getInput('name'), 'a');
    expect(read()).toStrictEqual(['true', 'true', 'true']);
    expect(statusRenders).toHaveBeenCalledTimes(2);

    await userEvent.type(getInput('name'), 'bc');
    expect(statusRenders).toHaveBeenCalledTimes(2);

    await userEvent.type(getInput('other'), 'x');
    expect(read()).toStrictEqual(['true', 'true', 'true']);
    expect(statusRenders).toHaveBeenCalledTimes(2);

    await userEvent.clear(getInput('name'));
    expect(read()).toStrictEqual(['true', 'false', 'true']);
    expect(statusRenders).toHaveBeenCalledTimes(3);

    act(() => form.reset());
    expect(read()).toStrictEqual(['false', 'false', 'false']);
    expect(formRenders).toHaveBeenCalledTimes(1);
  });

  it('rerenders the form component when an input that is not subscribed changes', async () => {
    const { getForm, onRender } = setup('uncontrolled');
    onRender.mockClear();

    await userEvent.type(getInput('plain'), 'abc');
    expect(onRender.mock.calls.length).toBeGreaterThanOrEqual(3);
    expect(getInput('plain')).toHaveValue('abc');
    expect(getForm().getValues().plain).toBe('abc');
  });

  it('drives the input from the form component when subscribe is false', async () => {
    let form!: UseFormReturnType<{ name: string }>;
    const onExternalWrite = jest.fn();

    function Demo() {
      form = useForm({ mode: 'uncontrolled', initialValues: { name: '' } });
      return (
        <BoundInput
          label="name"
          subscribe={false}
          onExternalWrite={onExternalWrite}
          {...form.getInputProps('name')}
        />
      );
    }

    render(<Demo />);
    await userEvent.type(getInput('name'), 'abc');
    expect(getInput('name')).toHaveValue('abc');

    act(() => form.reset());
    expect(getInput('name')).toHaveValue('');
    expect(onExternalWrite).toHaveBeenCalledWith('');
  });
});

describe('@mantine/form/field-protocol (latest options)', () => {
  it('calls the latest onValuesChange from reset and list handlers', () => {
    let form!: UseFormReturnType<{ list: number[] }>;
    let setTick!: (tick: number) => void;
    const spy = jest.fn();

    function Demo() {
      const [tick, _setTick] = useState(0);
      setTick = _setTick;
      form = useForm({
        mode: 'uncontrolled',
        initialValues: { list: [1] },
        onValuesChange: () => spy(tick),
      });
      return null;
    }

    render(<Demo />);
    act(() => setTick(5));

    act(() => form.insertListItem('list', 2));
    expect(spy).toHaveBeenLastCalledWith(5);

    act(() => form.reset());
    expect(spy).toHaveBeenLastCalledWith(5);
    expect(spy).toHaveBeenCalledTimes(2);
  });
});

describe('@mantine/form/use-form-field', () => {
  it('returns unbound state for handlers that were not created by the form', () => {
    let result!: ReturnType<typeof useFormField>;

    function Demo() {
      result = useFormField(() => {});
      return null;
    }

    render(<Demo />);
    expect(result).toStrictEqual({ bound: false, subscribed: false, path: null, value: undefined });
  });

  it('returns field path and value for handlers created by the form', () => {
    let result!: ReturnType<typeof useFormField>;

    function Field({ onChange }: { onChange: unknown }) {
      result = useFormField(onChange);
      return null;
    }

    function Demo() {
      const form = useForm({ mode: 'uncontrolled', initialValues: { user: { name: 'john' } } });
      return <Field onChange={form.getInputProps('user.name').onChange} />;
    }

    render(<Demo />);
    expect(result).toStrictEqual({
      bound: true,
      subscribed: true,
      path: 'user.name',
      value: 'john',
    });
  });
});

describe('@mantine/form/use-field field protocol', () => {
  function setupField(inputType: 'plain' | 'bound') {
    let field!: UseFieldReturnType<string>;
    const onRender = jest.fn();
    const onMount = jest.fn();
    const onExternalWrite = jest.fn();

    function Demo() {
      field = useField({ mode: 'uncontrolled', initialValue: '' });
      onRender();

      return inputType === 'bound' ? (
        <BoundInput
          label="field"
          onMount={onMount}
          onExternalWrite={onExternalWrite}
          {...field.getInputProps()}
        />
      ) : (
        <PlainInput label="field" onMount={onMount} {...field.getInputProps()} />
      );
    }

    render(<Demo />);
    return { getField: () => field, onRender, onMount, onExternalWrite };
  }

  it('updates an input that is not subscribed without remounting it', async () => {
    const { getField, onMount } = setupField('plain');
    await userEvent.type(getInput('field'), 'abc');
    expect(getInput('field')).toHaveValue('abc');
    expect(getField().getValue()).toBe('abc');

    act(() => getField().setValue('programmatic'));
    expect(getInput('field')).toHaveValue('programmatic');

    act(() => getField().reset());
    expect(getInput('field')).toHaveValue('');
    expect(onMount).toHaveBeenCalledTimes(1);
  });

  it('does not rerender the host component when a subscribed input changes', async () => {
    const { getField, onRender, onExternalWrite } = setupField('bound');
    onRender.mockClear();

    await userEvent.type(getInput('field'), 'abc');
    expect(onRender).not.toHaveBeenCalled();
    expect(getInput('field')).toHaveValue('abc');
    expect(onExternalWrite).not.toHaveBeenCalled();

    act(() => getField().setValue('programmatic'));
    expect(getInput('field')).toHaveValue('programmatic');
    expect(onExternalWrite).toHaveBeenLastCalledWith('programmatic');

    act(() => getField().setValue('programmatic'));
    expect(onExternalWrite).toHaveBeenCalledTimes(2);
  });
});

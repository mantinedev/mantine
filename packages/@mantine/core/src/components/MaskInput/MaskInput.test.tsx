import { createRef, useState } from 'react';
import { act, fireEvent } from '@testing-library/react';
import { useForm } from '@mantine/form';
import {
  inputDefaultProps,
  inputStylesApiSelectors,
  render,
  screen,
  tests,
  userEvent,
} from '@mantine-tests/core';
import { __InputStylesNames } from '../Input';
import { MaskInput, MaskInputProps } from './MaskInput';

const defaultProps: MaskInputProps = {
  ...inputDefaultProps,
  mask: '(999) 999-9999',
};

describe('@mantine/core/MaskInput', () => {
  tests.axe([
    <MaskInput aria-label="test-label" mask="999" key="1" />,
    <MaskInput label="test-label" mask="999" key="2" />,
    <MaskInput label="test-label" error mask="999" key="3" />,
    <MaskInput label="test-label" error="test-error" id="test" mask="999" key="4" />,
    <MaskInput label="test-label" description="test-description" mask="999" key="5" />,
  ]);

  tests.itSupportsSystemProps<MaskInputProps, __InputStylesNames>({
    component: MaskInput,
    props: defaultProps,
    displayName: '@mantine/core/MaskInput',
    stylesApiSelectors: [...inputStylesApiSelectors],
  });

  tests.itSupportsInputProps<MaskInputProps>({
    component: MaskInput,
    props: defaultProps,
    selector: 'input',
  });

  tests.itSupportsSharedInputDefaults<MaskInputProps>({
    component: MaskInput,
    props: defaultProps,
    componentName: 'MaskInput',
  });

  it('formats defaultValue on mount without calling change handlers', () => {
    const onChangeRaw = jest.fn();
    const onComplete = jest.fn();

    render(
      <MaskInput
        mask="(999) 999-9999"
        label="Phone"
        defaultValue="1234567890"
        onChangeRaw={onChangeRaw}
        onComplete={onComplete}
      />
    );

    expect(screen.getByLabelText('Phone')).toHaveValue('(123) 456-7890');
    expect(onChangeRaw).not.toHaveBeenCalled();
    expect(onComplete).not.toHaveBeenCalled();
  });

  it('keeps mask literals that match a token out of the editable slots', async () => {
    const onComplete = jest.fn();

    render(<MaskInput mask="99.08.2026" label="Date" onComplete={onComplete} />);

    const input = screen.getByLabelText('Date');
    await userEvent.click(input);
    expect(input).toHaveValue('__.08.2026');

    await userEvent.keyboard('01');
    expect(input).toHaveValue('01.08.2026');
    expect(onComplete).toHaveBeenCalledWith('01.08.2026', '01');
  });

  it('reformats the current value when the mask prop changes', async () => {
    function TestMask() {
      const [mask, setMask] = useState('999-999');
      return (
        <>
          <MaskInput mask={mask} label="Code" defaultValue="123456" />
          <button type="button" onClick={() => setMask('99/99/99')}>
            Swap
          </button>
        </>
      );
    }

    render(<TestMask />);
    expect(screen.getByLabelText('Code')).toHaveValue('123-456');

    await userEvent.click(screen.getByRole('button', { name: 'Swap' }));
    expect(screen.getByLabelText('Code')).toHaveValue('12/34/56');
  });

  it('applies transform to defaultValue on mount', () => {
    render(
      <MaskInput
        mask="AAA-999"
        label="Code"
        transform={(char) => char.toUpperCase()}
        defaultValue="abc-123"
      />
    );

    expect(screen.getByLabelText('Code')).toHaveValue('ABC-123');
  });

  it('clears the input value when resetRef is called', () => {
    const resetRef = createRef<() => void>();
    const onChangeRaw = jest.fn();
    const { container } = render(
      <MaskInput mask="999-999" resetRef={resetRef} onChangeRaw={onChangeRaw} />
    );

    const input = container.querySelector('input')!;

    act(() => {
      input.focus();
      fireEvent.input(input, { target: { value: '123' } });
    });
    expect(input.value.length).toBeGreaterThan(0);

    act(() => {
      resetRef.current?.();
    });

    expect(input.value).toBe('');
    expect(onChangeRaw).toHaveBeenLastCalledWith('', '');
  });

  it('submits raw values with uncontrolled form updates', async () => {
    const handleSubmit = jest.fn();

    function TestForm() {
      const form = useForm({
        mode: 'uncontrolled',
        initialValues: { phone: '' },
      });

      return (
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <MaskInput
            mask="(999) 999-9999"
            label="Phone"
            defaultValue={form.getValues().phone}
            onChangeRaw={(raw) => form.setFieldValue('phone', raw, { forceUpdate: false })}
          />
          <button type="submit">Submit</button>
        </form>
      );
    }

    render(<TestForm />);

    await userEvent.click(screen.getByLabelText('Phone'));
    await userEvent.keyboard('1234567890');
    await userEvent.click(screen.getByRole('button', { name: 'Submit' }));

    expect(screen.getByLabelText('Phone')).toHaveValue('(123) 456-7890');
    expect(handleSubmit.mock.calls[0][0]).toStrictEqual({ phone: '1234567890' });
  });

  it.each(['controlled', 'uncontrolled'] as const)(
    'works with form.getInputProps in %s mode',
    async (mode) => {
      let form: any;
      const handleSubmit = jest.fn();

      function TestForm() {
        form = useForm({ mode, initialValues: { phone: '1234567890' } });

        return (
          <form onSubmit={form.onSubmit(handleSubmit)}>
            <MaskInput mask="(999) 999-9999" label="Phone" {...form.getInputProps('phone')} />
            <button type="submit">Submit</button>
          </form>
        );
      }

      render(<TestForm />);
      expect(screen.getByLabelText('Phone')).toHaveValue('(123) 456-7890');

      await userEvent.click(screen.getByLabelText('Phone'));
      await userEvent.keyboard('{Backspace}');
      expect(form.getValues().phone).toBe('123456789');

      act(() => form.setFieldValue('phone', '5551234567'));
      expect(screen.getByLabelText('Phone')).toHaveValue('(555) 123-4567');
      expect(form.isTouched('phone')).toBe(true);

      act(() => form.reset());
      expect(screen.getByLabelText('Phone')).toHaveValue('(123) 456-7890');
      expect(form.isDirty()).toBe(false);
      expect(form.isTouched()).toBe(false);

      act(() => form.setFieldValue('phone', ''));
      expect(screen.getByLabelText('Phone')).toHaveValue('');

      await userEvent.click(screen.getByRole('button', { name: 'Submit' }));
      expect(handleSubmit.mock.calls[0][0]).toStrictEqual({ phone: '' });
    }
  );

  it.each(['controlled', 'uncontrolled'] as const)(
    'keeps row values after list reindexing with stable keys in %s mode',
    (mode) => {
      let form: any;

      function TestForm() {
        form = useForm({
          mode,
          initialValues: {
            rows: [
              { id: 'a', phone: '1111111111' },
              { id: 'b', phone: '2222222222' },
            ],
          },
        });

        return form
          .getValues()
          .rows.map((row: any, index: number) => (
            <MaskInput
              key={row.id}
              mask="(999) 999-9999"
              aria-label={row.id}
              {...form.getInputProps(`rows.${index}.phone`)}
            />
          ));
      }

      render(<TestForm />);

      act(() => form.insertListItem('rows', { id: 'c', phone: '' }, 0));
      expect(screen.getByLabelText('a')).toHaveValue('(111) 111-1111');
      expect(screen.getByLabelText('b')).toHaveValue('(222) 222-2222');
      expect(screen.getByLabelText('c')).toHaveValue('');

      act(() => form.removeListItem('rows', 0));
      act(() => form.removeListItem('rows', 0));
      expect(screen.getByLabelText('b')).toHaveValue('(222) 222-2222');
      expect(form.getValues().rows).toStrictEqual([{ id: 'b', phone: '2222222222' }]);
    }
  );

  it.each(['controlled', 'uncontrolled'] as const)(
    'displays masked value written with forceUpdate: false in %s mode',
    (mode) => {
      let form: any;

      function TestForm() {
        form = useForm({ mode, initialValues: { phone: '' } });
        return <MaskInput mask="(999) 999-9999" label="Phone" {...form.getInputProps('phone')} />;
      }

      render(<TestForm />);
      act(() => form.setFieldValue('phone', '1234567890', { forceUpdate: false }));
      expect(screen.getByLabelText('Phone')).toHaveValue('(123) 456-7890');
    }
  );

  it.each(['controlled', 'uncontrolled'] as const)(
    'discards undo history on a form write of the same value in %s mode',
    async (mode) => {
      let form: any;
      const onValuesChange = jest.fn();

      function TestForm() {
        form = useForm({ mode, initialValues: { phone: '' }, onValuesChange });
        return <MaskInput mask="(999) 999-9999" label="Phone" {...form.getInputProps('phone')} />;
      }

      render(<TestForm />);
      const input = screen.getByLabelText('Phone') as HTMLInputElement;
      await userEvent.click(input);
      await userEvent.keyboard('123');
      input.setSelectionRange(0, input.value.length);
      await userEvent.keyboard('{Backspace}');
      expect(form.getValues().phone).toBe('');

      act(() => form.reset());
      onValuesChange.mockClear();
      await userEvent.keyboard('{Control>}z{/Control}');
      expect(form.getValues().phone).toBe('');
      expect(input.value.replace(/[^0-9]/g, '')).toBe('');
      expect(onValuesChange).not.toHaveBeenCalled();

      await userEvent.keyboard('45');
      expect(form.getValues().phone).toBe('45');
      expect(onValuesChange).toHaveBeenCalledTimes(2);

      onValuesChange.mockClear();
      act(() => form.setFieldValue('phone', '5551234567'));
      expect(input).toHaveValue('(555) 123-4567');
      expect(onValuesChange).toHaveBeenCalledTimes(1);
      await userEvent.keyboard('{Control>}z{/Control}');
      expect(form.getValues().phone).toBe('5551234567');
    }
  );
});

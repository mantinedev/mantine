import { createRef } from 'react';
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
            key={form.key('phone')}
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
});

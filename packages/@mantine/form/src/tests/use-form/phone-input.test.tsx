import { act } from '@testing-library/react';
import { PhoneInput } from '@mantine/core';
import { render, screen, userEvent } from '@mantine-tests/core';
import { UseFormReturnType } from '../../types';
import { useForm } from '../../use-form';

interface Values {
  phone: string;
}

interface TestFormProps {
  onForm: (form: UseFormReturnType<Values>) => void;
  onRender: () => void;
}

function TestForm({ onForm, onRender }: TestFormProps) {
  const form = useForm<Values>({ mode: 'uncontrolled', initialValues: { phone: '' } });
  onForm(form);
  onRender();
  return <PhoneInput label="phone" defaultCountry="us" {...form.getInputProps('phone')} />;
}

describe('@mantine/form/use-form/phone-input', () => {
  it('displays typed value in uncontrolled mode without rerendering the form', async () => {
    let form!: UseFormReturnType<Values>;
    const onRender = jest.fn();
    render(<TestForm onForm={(f) => (form = f)} onRender={onRender} />);

    const input = screen.getByLabelText('phone') as HTMLInputElement;
    await userEvent.type(input, '2025551234');

    expect(input.value).toBe('+1 (202) 555-1234');
    expect(form.getValues().phone).toBe('+12025551234');
    expect(onRender).toHaveBeenCalledTimes(1);
  });

  it('receives values written by the form', () => {
    let form!: UseFormReturnType<Values>;
    render(<TestForm onForm={(f) => (form = f)} onRender={() => {}} />);

    act(() => form.setFieldValue('phone', '+12025559876'));
    expect((screen.getByLabelText('phone') as HTMLInputElement).value).toBe('+1 (202) 555-9876');

    act(() => form.reset());
    expect((screen.getByLabelText('phone') as HTMLInputElement).value).toBe('+1 ');
  });

  it('syncs country with values written by the form', async () => {
    let form!: UseFormReturnType<Values>;
    const AutoDetectForm = () => {
      const f = useForm<Values>({ mode: 'uncontrolled', initialValues: { phone: '' } });
      form = f;
      return (
        <PhoneInput
          label="phone"
          defaultCountry="us"
          withCountryAutoDetect
          {...f.getInputProps('phone')}
        />
      );
    };
    render(<AutoDetectForm />);
    const input = screen.getByLabelText('phone') as HTMLInputElement;

    await userEvent.type(input, '+442071234567', {
      initialSelectionStart: 0,
      initialSelectionEnd: input.value.length,
    });
    expect(form.getValues().phone).toBe('+442071234567');
    expect(screen.getByLabelText('United Kingdom')).toBeInTheDocument();

    act(() => form.setFieldValue('phone', '+12025559876'));
    expect(input.value).toBe('+1 (202) 555-9876');
    expect(screen.getByLabelText('United States')).toBeInTheDocument();

    await userEvent.type(input, '1');
    expect(form.getValues().phone).toBe('+120255598761');
  });
});

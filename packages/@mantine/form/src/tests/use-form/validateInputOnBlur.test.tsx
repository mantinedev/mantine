import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FormMode } from '../../types';
import { useForm } from '../../use-form';

function TestComponent({ mode }: any) {
  const form = useForm({
    mode,
    initialValues: {
      firstName: '',
      lastName: '',
    },
    validate: {
      firstName: (value) => (value.length < 2 ? 'first-name-error' : null),
      lastName: (value) => (value.length < 2 ? 'last-name-error' : null),
    },
    validateInputOnBlur: ['firstName'],
  });

  return (
    <div>
      <input data-testid="firstName" {...form.getInputProps('firstName')} />
      <input data-testid="lastName" {...form.getInputProps('lastName')} />
      <div data-testid="errors">{JSON.stringify(form.errors)}</div>
    </div>
  );
}

function tests(mode: FormMode) {
  it('validates specified field on blur', async () => {
    render(<TestComponent mode={mode} />);
    expect(screen.getByTestId('errors').textContent).toBe('{}');

    await userEvent.type(screen.getByTestId('firstName'), 'a');
    expect(screen.getByTestId('errors').textContent).toBe('{}');

    await userEvent.tab();
    expect(screen.getByTestId('errors').textContent).toBe('{"firstName":"first-name-error"}');

    await userEvent.type(screen.getByTestId('lastName'), 'a');
    expect(screen.getByTestId('errors').textContent).toBe('{"firstName":"first-name-error"}');

    await userEvent.tab();
    expect(screen.getByTestId('errors').textContent).toBe('{"firstName":"first-name-error"}');

    await userEvent.type(screen.getByTestId('firstName'), 'abc');
    await userEvent.tab();
    expect(screen.getByTestId('errors').textContent).toBe('{}');
  });
}

describe('@mantine/form/validateInputOnBlur-controlled', () => {
  tests('controlled');
});

describe('@mantine/form/validateInputOnBlur-uncontrolled', () => {
  tests('uncontrolled');
});

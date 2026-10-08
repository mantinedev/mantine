import { act } from '@testing-library/react';
import { FormMode, useForm, UseFormReturnType } from '@mantine/form';
import { render, screen, userEvent } from '@mantine-tests/core';
import { DateInput } from '../../components/DateInput';
import { DatePickerInput } from '../../components/DatePickerInput';
import { DateTimePicker } from '../../components/DateTimePicker';
import { MaskedDateInput } from '../../components/MaskedDateInput';
import { TimeInput } from '../../components/TimeInput';
import { TimePicker } from '../../components/TimePicker';

interface Values {
  date: Date | string | null;
  time: string;
  masked: string | null;
  dateInput: Date | string | null;
  dateTime: Date | string | null;
  timeInput: string;
}

interface TestFormProps {
  mode: FormMode;
  onRender: () => void;
  onForm: (form: UseFormReturnType<Values>) => void;
}

function TestForm({ mode, onRender, onForm }: TestFormProps) {
  const form = useForm<Values>({
    mode,
    initialValues: {
      date: new Date(2024, 2, 10),
      time: '',
      masked: null,
      dateInput: null,
      dateTime: null,
      timeInput: '',
    },
  });
  onForm(form);
  onRender();

  return (
    <>
      <DatePickerInput aria-label="date" {...form.getInputProps('date')} />
      <TimePicker
        hoursInputLabel="hours"
        minutesInputLabel="minutes"
        {...form.getInputProps('time')}
      />
      <MaskedDateInput
        dayInputLabel="day"
        monthInputLabel="month"
        yearInputLabel="year"
        {...form.getInputProps('masked')}
      />
      <DateInput aria-label="dateInput" {...form.getInputProps('dateInput')} />
      <DateTimePicker aria-label="dateTime" {...form.getInputProps('dateTime')} />
      <TimeInput aria-label="timeInput" {...form.getInputProps('timeInput')} />
    </>
  );
}

function setup(mode: FormMode) {
  let form!: UseFormReturnType<Values>;
  const onRender = jest.fn();
  render(
    <TestForm
      mode={mode}
      onRender={onRender}
      onForm={(current) => {
        form = current;
      }}
    />
  );

  return { getForm: () => form, onRender };
}

const getInput = (label: string) => screen.getByLabelText<HTMLInputElement>(label);

describe.each(['controlled', 'uncontrolled'] as const)(
  '@mantine/dates inputs with @mantine/form (%s)',
  (mode) => {
    it('displays Date objects and date strings written by the form', () => {
      const { getForm } = setup(mode);
      expect(screen.getByLabelText('date')).toHaveTextContent('March 10, 2024');

      act(() => getForm().setFieldValue('date', new Date(2024, 4, 20)));
      expect(screen.getByLabelText('date')).toHaveTextContent('May 20, 2024');

      act(() => getForm().setFieldValue('date', '2024-06-01'));
      expect(screen.getByLabelText('date')).toHaveTextContent('June 1, 2024');

      act(() => getForm().reset());
      expect(screen.getByLabelText('date')).toHaveTextContent('March 10, 2024');
    });

    it('clears partial TimePicker and MaskedDateInput entries on form.reset', async () => {
      const { getForm } = setup(mode);
      await userEvent.type(getInput('hours'), '12');
      await userEvent.type(getInput('day'), '15');
      expect(getForm().getValues()).toMatchObject({ time: '', masked: null });
      expect(getInput('hours')).toHaveValue('12');
      expect(getInput('day')).toHaveValue('15');

      act(() => getForm().reset());
      expect(getInput('hours')).toHaveValue('');
      expect(getInput('day')).toHaveValue('');
      expect(getForm().isTouched()).toBe(false);
      expect(getForm().isDirty()).toBe(false);
    });

    it('displays TimePicker value written by the form', () => {
      const { getForm } = setup(mode);
      act(() => getForm().setFieldValue('time', '10:30'));
      expect(getInput('hours')).toHaveValue('10');
      expect(getInput('minutes')).toHaveValue('30');
    });
  }
);

describe('@mantine/dates inputs with @mantine/form (subscription)', () => {
  const probe = (key: keyof Values, first: any, second: any) => {
    const { getForm, onRender } = setup('uncontrolled');
    act(() => getForm().setFieldValue(key, first, { forceUpdate: false }));
    onRender.mockClear();
    act(() => getForm().setFieldValue(key, second, { forceUpdate: false }));
    expect(onRender).not.toHaveBeenCalled();
  };

  it('DatePickerInput renders alone', () => {
    probe('date', new Date(2024, 4, 20), '2024-06-01');
    expect(screen.getByLabelText('date')).toHaveTextContent('June 1, 2024');
  });

  it('DateInput renders alone', () => {
    probe('dateInput', '2024-05-20', '2024-06-01');
    expect(getInput('dateInput')).toHaveValue('June 1, 2024');
  });

  it('DateTimePicker renders alone', () => {
    probe('dateTime', '2024-05-20 10:00:00', '2024-06-01 12:30:00');
    expect(screen.getByLabelText('dateTime')).toHaveTextContent('01/06/2024 12:30');
  });

  it('TimeInput renders alone', () => {
    probe('timeInput', '10:00', '12:30');
    expect(getInput('timeInput')).toHaveValue('12:30');
  });

  it('TimePicker renders alone', () => {
    probe('time', '10:00', '12:30');
    expect(getInput('hours')).toHaveValue('12');
    expect(getInput('minutes')).toHaveValue('30');
  });

  it('MaskedDateInput renders alone', () => {
    probe('masked', '2024-05-20', '2024-06-01');
    expect(getInput('day')).toHaveValue('01');
    expect(getInput('month')).toHaveValue('06');
    expect(getInput('year')).toHaveValue('2024');
  });
});

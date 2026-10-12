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

    it('replaces partial TimePicker and MaskedDateInput entries written by the form', async () => {
      const { getForm } = setup(mode);
      await userEvent.type(getInput('hours'), '12');
      await userEvent.type(getInput('day'), '15');

      act(() => getForm().setFieldValue('time', ''));
      act(() => getForm().setFieldValue('masked', null));
      expect(getInput('hours')).toHaveValue('');
      expect(getInput('day')).toHaveValue('');

      await userEvent.type(getInput('hours'), '12');
      await userEvent.type(getInput('day'), '15');

      act(() => getForm().setFieldValue('time', '08:15'));
      act(() => getForm().setFieldValue('masked', '2026-03-04'));
      expect(getInput('hours')).toHaveValue('08');
      expect(getInput('minutes')).toHaveValue('15');
      expect(getInput('day')).toHaveValue('04');
      expect(getInput('month')).toHaveValue('03');
      expect(getInput('year')).toHaveValue('2026');
      expect(getForm().getValues()).toMatchObject({ time: '08:15', masked: '2026-03-04' });

      act(() => getForm().reset());
      expect(getInput('hours')).toHaveValue('');
      expect(getInput('minutes')).toHaveValue('');
      expect(getInput('year')).toHaveValue('');
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

interface Row {
  id: string;
  time: string;
  masked: string | null;
}

function ListForm({
  mode,
  onForm,
}: {
  mode: FormMode;
  onForm: (form: UseFormReturnType<{ rows: Row[] }>) => void;
}) {
  const form = useForm<{ rows: Row[] }>({
    mode,
    initialValues: {
      rows: [
        { id: 'a', time: '10:00', masked: '2026-01-01' },
        { id: 'b', time: '12:30', masked: '2026-02-02' },
      ],
    },
  });
  onForm(form);

  return (
    <>
      {form.getValues().rows.map((row, index) => (
        <div key={row.id}>
          <TimePicker
            hoursInputLabel={`hours-${row.id}`}
            minutesInputLabel={`minutes-${row.id}`}
            {...form.getInputProps(`rows.${index}.time`)}
          />
          <MaskedDateInput
            dayInputLabel={`day-${row.id}`}
            monthInputLabel={`month-${row.id}`}
            yearInputLabel={`year-${row.id}`}
            {...form.getInputProps(`rows.${index}.masked`)}
          />
        </div>
      ))}
    </>
  );
}

describe.each(['controlled', 'uncontrolled'] as const)(
  '@mantine/dates inputs in form lists with stable keys (%s)',
  (mode) => {
    const setupList = () => {
      let form!: UseFormReturnType<{ rows: Row[] }>;
      render(<ListForm mode={mode} onForm={(current) => (form = current)} />);
      return () => form;
    };

    const expectRow = (id: string, hours: string, minutes: string, day: string, month: string) => {
      expect(getInput(`hours-${id}`)).toHaveValue(hours);
      expect(getInput(`minutes-${id}`)).toHaveValue(minutes);
      expect(getInput(`day-${id}`)).toHaveValue(day);
      expect(getInput(`month-${id}`)).toHaveValue(month);
    };

    it('keeps surviving row values after removeListItem', () => {
      const getForm = setupList();
      act(() => getForm().removeListItem('rows', 0));
      expect(getForm().getValues().rows).toStrictEqual([
        { id: 'b', time: '12:30', masked: '2026-02-02' },
      ]);
      expectRow('b', '12', '30', '02', '02');
    });

    it('keeps row values after reorderListItem', () => {
      const getForm = setupList();
      act(() => getForm().reorderListItem('rows', { from: 0, to: 1 }));
      expectRow('a', '10', '00', '01', '01');
      expectRow('b', '12', '30', '02', '02');
    });

    it('keeps row values after insertListItem at the start', () => {
      const getForm = setupList();
      act(() => getForm().insertListItem('rows', { id: 'c', time: '', masked: null }, 0));
      expectRow('a', '10', '00', '01', '01');
      expectRow('b', '12', '30', '02', '02');
      expectRow('c', '', '', '', '');
    });

    it('displays a value written by the form to a surviving row after removeListItem', async () => {
      const getForm = setupList();
      act(() => getForm().removeListItem('rows', 0));
      act(() => getForm().setFieldValue('rows.0.time', '08:15'));
      expectRow('b', '08', '15', '02', '02');
    });
  }
);

import dayjs from 'dayjs';
import {
  Button,
  ComboboxItem,
  FocusTrap,
  Group,
  OptionsFilter,
  Radio,
  Select,
  SelectProps,
  Stack,
  Text,
  Textarea,
} from '@mantine/core';
import { MaskedDateInput } from '@mantine/dates';
import { isNotEmpty, useForm } from '@mantine/form';
import { getPlacementProblem } from './availability';
import {
  APPOINTMENT_TYPE_LIST,
  APPOINTMENT_TYPES,
  DATE_TIME_FORMAT,
  PATIENTS,
  PATIENTS_BY_ID,
} from './data';
import type { Appointment, AppointmentFormValues, AppointmentTypeId, Doctor } from './types';

export type AppointmentChanges = Omit<Appointment, 'id' | 'doctorId'>;

interface AppointmentFormProps {
  doctor: Doctor;
  /** The doctor's appointments, used to check that the new time is free */
  appointments: Appointment[];
  /** Appointment being edited, omitted when booking a new one */
  appointment?: Appointment;
  /** Start of a new appointment, `YYYY-MM-DD HH:mm:ss` */
  start?: string;
  onSave: (changes: AppointmentChanges) => void;
  onCancelAppointment?: () => void;
  onClose: () => void;
}

const PATIENT_OPTIONS = PATIENTS.map((patient) => ({ value: patient.id, label: patient.name }));

const digitsOf = (value: string) => value.replace(/\D/g, '');

const filterPatients: OptionsFilter = ({ options, search }) => {
  const query = search.trim().toLowerCase();
  const digits = digitsOf(query);

  return (options as ComboboxItem[]).filter((option) => {
    const patient = PATIENTS_BY_ID[option.value];
    return (
      patient.name.toLowerCase().includes(query) ||
      (digits.length > 0 && digitsOf(patient.phone).includes(digits))
    );
  });
};

const renderPatientOption: SelectProps['renderOption'] = ({ option }) => {
  const patient = PATIENTS_BY_ID[option.value];

  return (
    <div>
      <Text size="sm">{patient.name}</Text>
      <Text size="xs">
        {patient.phone} · born {dayjs(patient.dateOfBirth).format('MMM D, YYYY')}
      </Text>
    </div>
  );
};

export function AppointmentForm({
  doctor,
  appointments,
  appointment,
  start,
  onSave,
  onCancelAppointment,
  onClose,
}: AppointmentFormProps) {
  // A resized appointment keeps its length until its type changes
  const getMinutes = (type: AppointmentTypeId) =>
    appointment && appointment.type === type
      ? dayjs(appointment.end).diff(appointment.start, 'minute')
      : APPOINTMENT_TYPES[type].minutes;

  const getEnd = (values: Pick<AppointmentFormValues, 'type' | 'start'>) =>
    values.type && values.start
      ? dayjs(values.start).add(getMinutes(values.type), 'minute').format(DATE_TIME_FORMAT)
      : null;

  const form = useForm<AppointmentFormValues>({
    name: 'clinic-appointment',
    initialValues: {
      patientId: appointment?.patientId ?? null,
      type: appointment?.type ?? null,
      start: appointment?.start ?? start ?? null,
      note: appointment?.note ?? '',
    },
    validate: {
      patientId: isNotEmpty('Pick a patient'),
      type: isNotEmpty('Pick an appointment type'),
      start: (value, values) => {
        if (!value) {
          return 'Enter the start time';
        }

        const end = getEnd(values);
        return end
          ? getPlacementProblem({
              doctor,
              appointments,
              start: value,
              end,
              ignoreId: appointment?.id,
            })
          : null;
      },
    },
  });

  const type = form.useWatchValue('type');
  const startValue = form.useWatchValue('start');
  const end = getEnd({ type, start: startValue });

  const handleSubmit = (values: AppointmentFormValues) => {
    onSave({
      patientId: values.patientId!,
      type: values.type!,
      start: values.start!,
      end: getEnd(values)!,
      note: values.note.trim(),
    });
  };

  return (
    <form
      onSubmit={form.onSubmit(handleSubmit, (errors) =>
        form.getInputNode(Object.keys(errors)[0])?.focus()
      )}
    >
      <FocusTrap.InitialFocus />
      <Stack>
        <Text size="sm">
          {doctor.name} · {doctor.specialty}
        </Text>

        <Select
          label="Patient"
          placeholder="Search by name or phone"
          withAsterisk
          searchable
          data={PATIENT_OPTIONS}
          filter={filterPatients}
          renderOption={renderPatientOption}
          nothingFoundMessage="No patient with this name or phone"
          {...form.getInputProps('patientId')}
        />

        <Radio.Group label="Appointment type" withAsterisk {...form.getInputProps('type')}>
          <Stack gap="xs" mt="xs" mb="xs">
            {APPOINTMENT_TYPE_LIST.map((item) => (
              <Radio key={item.id} value={item.id} label={`${item.label} · ${item.minutes} min`} />
            ))}
          </Stack>
        </Radio.Group>

        <Stack gap="xs">
          <MaskedDateInput
            label="Start time"
            withAsterisk
            withTime
            minutesStep={15}
            {...form.getInputProps('start')}
          />
          <Text size="sm">
            {end
              ? `Ends at ${dayjs(end).format('HH:mm')} · ${dayjs(end).diff(startValue, 'minute')} min`
              : 'The end time follows from the appointment type'}
          </Text>
        </Stack>

        <Textarea
          label="Note"
          placeholder="Note for the doctor"
          autosize
          minRows={2}
          {...form.getInputProps('note')}
        />

        <Group justify="flex-end" mt="xs">
          {onCancelAppointment && (
            <Button variant="default" c="red" mie="auto" onClick={onCancelAppointment}>
              Cancel appointment
            </Button>
          )}
          <Button variant="default" onClick={onClose}>
            Close
          </Button>
          <Button type="submit">{appointment ? 'Save changes' : 'Book appointment'}</Button>
        </Group>
      </Stack>
    </form>
  );
}

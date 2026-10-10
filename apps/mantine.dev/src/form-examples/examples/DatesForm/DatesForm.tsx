import { Button, Group, SimpleGrid, Stack, TextInput } from '@mantine/core';
import { DateInput, DatePickerInput, DateTimePicker, TimeInput } from '@mantine/dates';
import { isNotEmpty, useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';

interface Values {
  guestName: string;
  birthDate: string | null;
  stay: [string | null, string | null];
  arrival: string | null;
  callTime: string;
}

// Date values are 'YYYY-MM-DD' strings, date-time values are 'YYYY-MM-DD HH:mm:ss' strings
function toDateString(date: Date) {
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${date.getFullYear()}-${month}-${day}`;
}

function getAdultCutoff() {
  const date = new Date();
  date.setFullYear(date.getFullYear() - 18);
  return toDateString(date);
}

export function DatesForm() {
  const form = useForm<Values>({
    initialValues: {
      guestName: '',
      birthDate: null,
      stay: [null, null],
      arrival: null,
      callTime: '',
    },
    validate: {
      guestName: isNotEmpty('Guest name is required'),
      birthDate: (value) => {
        if (!value) {
          return 'Birth date is required';
        }
        return value > getAdultCutoff() ? 'Guests must be at least 18 years old' : null;
      },
      stay: ([start, end]) => (!start || !end ? 'Select check-in and check-out dates' : null),
      arrival: (value, values) => {
        if (!value) {
          return 'Arrival time is required';
        }
        const [start, end] = values.stay;
        const arrivalDate = value.slice(0, 10);
        if (start && end && (arrivalDate < start || arrivalDate > end)) {
          return 'Arrival must be within the stay dates';
        }
        return null;
      },
    },
  });

  const handleSubmit = (values: Values) => {
    const [start, end] = values.stay;
    notifications.show({
      title: 'Booking confirmed',
      message: `Booking confirmed for ${start} – ${end}`,
    });
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Stack>
        <TextInput
          size="md"
          label="Guest name"
          placeholder="Jane Doe"
          withAsterisk
          {...form.getInputProps('guestName')}
        />

        <SimpleGrid cols={{ base: 1, sm: 2 }}>
          <DateInput
            size="md"
            label="Birth date"
            placeholder="Pick a date"
            withAsterisk
            maxDate={new Date()}
            {...form.getInputProps('birthDate')}
          />

          <DatePickerInput
            size="md"
            type="range"
            label="Stay"
            placeholder="Check-in – check-out"
            withAsterisk
            valueFormat="DD MMM YYYY"
            minDate={new Date()}
            {...form.getInputProps('stay')}
          />
        </SimpleGrid>

        <SimpleGrid cols={{ base: 1, sm: 2 }}>
          <DateTimePicker
            size="md"
            label="Arrival time"
            placeholder="Pick date and time"
            withAsterisk
            valueFormat="DD MMM YYYY HH:mm"
            {...form.getInputProps('arrival')}
          />

          <TimeInput size="md" label="Preferred call time" {...form.getInputProps('callTime')} />
        </SimpleGrid>

        <Group justify="flex-end">
          <Button size="md" variant="default" onClick={form.reset}>
            Reset
          </Button>

          <Button size="md" type="submit">
            Book
          </Button>
        </Group>
      </Stack>
    </form>
  );
}

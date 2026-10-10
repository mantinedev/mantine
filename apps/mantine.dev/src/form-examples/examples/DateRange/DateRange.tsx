import { Button, Group, SimpleGrid, Stack, Text } from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';
import { useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';

interface BookingValues {
  checkIn: string | null;
  checkOut: string | null;
}

const MAX_NIGHTS = 30;
const DAY_MS = 24 * 60 * 60 * 1000;

// Values are YYYY-MM-DD strings, Date.parse treats them as UTC midnight
function getNights(checkIn: string | null, checkOut: string | null) {
  if (!checkIn || !checkOut) {
    return null;
  }

  return Math.round((Date.parse(checkOut) - Date.parse(checkIn)) / DAY_MS);
}

export function DateRange() {
  const form = useForm<BookingValues>({
    initialValues: {
      checkIn: null,
      checkOut: null,
    },
    validateInputOnChange: ['checkIn', 'checkOut'],
    validate: {
      checkIn: (value, values) => {
        if (!value) {
          return 'Check-in date is required';
        }

        const nights = getNights(value, values.checkOut);
        return nights !== null && nights <= 0 ? 'Check-in must be before check-out' : null;
      },
      checkOut: (value, values) => {
        if (!value) {
          return 'Check-out date is required';
        }

        const nights = getNights(values.checkIn, value);

        if (nights !== null && nights <= 0) {
          return 'Check-out must be after check-in';
        }

        if (nights !== null && nights > MAX_NIGHTS) {
          return `Maximum stay is ${MAX_NIGHTS} nights`;
        }

        return null;
      },
    },
  });

  form.watch('checkIn', ({ value }) => {
    if (form.getValues().checkOut) {
      form.validateField('checkOut');
    } else if (value) {
      // Move on to check-out as soon as check-in is picked
      const node = form.getInputNode('checkOut');
      node?.focus();
      node?.click();
    }
  });

  form.watch('checkOut', () => {
    if (form.getValues().checkIn) {
      form.validateField('checkIn');
    }
  });

  const checkIn = form.useWatchValue('checkIn');
  const checkOut = form.useWatchValue('checkOut');
  const nights = getNights(checkIn, checkOut);

  const handleSubmit = (values: BookingValues) => {
    const bookedNights = getNights(values.checkIn, values.checkOut);
    notifications.show({
      title: 'Booking confirmed',
      message: `Booked ${bookedNights} ${bookedNights === 1 ? 'night' : 'nights'} from ${values.checkIn} to ${values.checkOut}`,
    });
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Stack>
        <SimpleGrid cols={{ base: 1, sm: 2 }}>
          <DatePickerInput
            label="Check-in"
            placeholder="Pick a date"
            withAsterisk
            clearable
            {...form.getInputProps('checkIn')}
          />

          <DatePickerInput
            label="Check-out"
            placeholder="Pick a date"
            withAsterisk
            clearable
            minDate={checkIn ?? undefined}
            {...form.getInputProps('checkOut')}
          />
        </SimpleGrid>
        {nights !== null && nights > 0 && (
          <Text size="sm">
            {nights} {nights === 1 ? 'night' : 'nights'}
          </Text>
        )}
        <Group justify="flex-end">
          <Button variant="default" onClick={form.reset}>
            Reset
          </Button>

          <Button type="submit">Book</Button>
        </Group>
      </Stack>
    </form>
  );
}

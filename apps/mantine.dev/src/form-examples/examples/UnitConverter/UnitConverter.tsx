import { Button, Group, NumberInput, Select, SimpleGrid, Stack } from '@mantine/core';
import { useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';

type Temperature = number | string;

interface Values {
  defaultUnit: 'celsius' | 'fahrenheit';
  celsius: Temperature;
  fahrenheit: Temperature;
}

const round = (value: number) => Math.round(value * 10) / 10;
const toFahrenheit = (celsius: number) => round((celsius * 9) / 5 + 32);
const toCelsius = (fahrenheit: number) => round(((fahrenheit - 32) * 5) / 9);

function convert(value: Temperature, converter: (value: number) => number): Temperature {
  return typeof value === 'number' ? converter(value) : '';
}

function isSynced(value: Temperature, other: Temperature, otherToValue: (value: number) => number) {
  return convert(other, otherToValue) === (typeof value === 'number' ? round(value) : '');
}

function requiredWhenDefault(unit: Values['defaultUnit']) {
  return (value: Temperature, values: Values) =>
    values.defaultUnit === unit && typeof value !== 'number' ? 'Temperature is required' : null;
}

export function UnitConverter() {
  const form = useForm<Values>({
    initialValues: {
      defaultUnit: 'celsius',
      celsius: '',
      fahrenheit: '',
    },
    validate: {
      celsius: requiredWhenDefault('celsius'),
      fahrenheit: requiredWhenDefault('fahrenheit'),
    },
  });

  const defaultUnit = form.useWatchValue('defaultUnit');

  form.watch('celsius', ({ value }) => {
    // Skip when fahrenheit already matches, otherwise the two watchers call each other forever
    if (!isSynced(value, form.getValues().fahrenheit, toCelsius)) {
      form.setFieldValue('fahrenheit', convert(value, toFahrenheit), { forceUpdate: false });
    }
  });

  form.watch('fahrenheit', ({ value }) => {
    if (!isSynced(value, form.getValues().celsius, toFahrenheit)) {
      form.setFieldValue('celsius', convert(value, toCelsius), { forceUpdate: false });
    }
  });

  const handleSubmit = (values: Values) => {
    notifications.show({
      title: 'Temperature saved',
      message: `${values.celsius} °C is ${values.fahrenheit} °F`,
    });
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Stack>
        <Select
          label="Default unit"
          description="The default unit is required, the other one is filled in automatically"
          allowDeselect={false}
          data={[
            { value: 'celsius', label: 'Celsius' },
            { value: 'fahrenheit', label: 'Fahrenheit' },
          ]}
          {...form.getInputProps('defaultUnit')}
        />

        <SimpleGrid cols={{ base: 1, sm: 2 }}>
          <NumberInput
            label="Celsius"
            placeholder="20"
            suffix=" °C"
            decimalScale={1}
            min={-273.15}
            max={10000}
            withAsterisk={defaultUnit === 'celsius'}
            {...form.getInputProps('celsius')}
          />

          <NumberInput
            label="Fahrenheit"
            placeholder="68"
            suffix=" °F"
            decimalScale={1}
            min={-459.67}
            max={18032}
            withAsterisk={defaultUnit === 'fahrenheit'}
            {...form.getInputProps('fahrenheit')}
          />
        </SimpleGrid>

        <Group justify="flex-end">
          <Button variant="default" onClick={form.reset}>
            Reset
          </Button>

          <Button type="submit">Save</Button>
        </Group>
      </Stack>
    </form>
  );
}

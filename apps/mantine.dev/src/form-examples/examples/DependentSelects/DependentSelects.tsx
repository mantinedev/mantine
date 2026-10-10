import { useEffect, useState } from 'react';
import { Button, Group, Select, SimpleGrid, Stack } from '@mantine/core';
import { isNotEmpty, useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { cities, countries } from './data';

interface Values {
  country: string | null;
  city: string | null;
}

function fetchCities(country: string) {
  return new Promise<string[]>((resolve) => {
    setTimeout(() => resolve(cities[country] ?? []), 600);
  });
}

export function DependentSelects() {
  const [cityOptions, setCityOptions] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const form = useForm<Values>({
    mode: 'uncontrolled',
    initialValues: { country: null, city: null },
    validate: {
      country: isNotEmpty('Select a country'),
      city: isNotEmpty('Select a city'),
    },
  });

  const country = form.useWatchValue('country');

  form.watch('country', () => {
    form.setFieldValue('city', null);
  });

  useEffect(() => {
    if (!country) {
      setCityOptions([]);
      setLoading(false);
      return undefined;
    }

    let cancelled = false;
    setLoading(true);

    fetchCities(country).then((result) => {
      if (!cancelled) {
        setCityOptions(result);
        setLoading(false);
      }
    });

    return () => {
      cancelled = true;
    };
  }, [country]);

  const handleSubmit = (values: Values) => {
    const countryName = countries.find((item) => item.value === values.country)?.label;
    notifications.show({
      title: 'Shipping address saved',
      message: `Shipping to ${values.city}, ${countryName}`,
    });
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Stack>
        <SimpleGrid cols={{ base: 1, sm: 2 }}>
          <Select
            label="Country"
            placeholder="Pick a country"
            withAsterisk
            data={countries}
            {...form.getInputProps('country')}
          />
          <Select
            label="City"
            placeholder={country ? 'Pick a city' : 'Pick a country first'}
            withAsterisk
            data={cityOptions}
            disabled={!country || loading}
            loading={loading}
            {...form.getInputProps('city')}
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

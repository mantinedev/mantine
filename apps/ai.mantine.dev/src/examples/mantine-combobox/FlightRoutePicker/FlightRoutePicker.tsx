import { useId, useState } from 'react';
import { IconArrowsLeftRight, IconPlaneArrival, IconPlaneDeparture } from '@tabler/icons-react';
import { ActionIcon, Button, Code, Group, Stack, Text } from '@mantine/core';
import { isNotEmpty, useForm, type FormErrors } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { RECENT_LIMIT } from './data';
import { PlaceInput } from './PlaceInput/PlaceInput';
import { getAirportCodes, getPlace, getPlaceShortLabel } from './places';
import type { FlightSearch, RouteValues } from './types';
import classes from './FlightRoutePicker.module.css';

export function FlightRoutePicker() {
  const [recent, setRecent] = useState<string[]>([]);
  const [lastSearch, setLastSearch] = useState<FlightSearch | null>(null);
  const searchLabelId = useId();

  const form = useForm<RouteValues>({
    name: 'flight-route',
    initialValues: { from: null, to: null },
    validate: {
      from: isNotEmpty('Choose where the trip starts'),
      to: isNotEmpty('Choose where the trip goes'),
    },
  });

  const from = form.useWatchValue('from');
  const to = form.useWatchValue('to');

  const addRecent = (code: string) =>
    setRecent((current) =>
      [code, ...current.filter((item) => item !== code)].slice(0, RECENT_LIMIT)
    );

  const handleSwap = () => {
    const values = form.getValues();
    form.setValues({ from: values.to, to: values.from });
  };

  const handleSubmit = (values: RouteValues) => {
    const fromPlace = getPlace(values.from)!;
    const toPlace = getPlace(values.to)!;
    setLastSearch({ from: getAirportCodes(fromPlace), to: getAirportCodes(toPlace) });
    notifications.show({
      title: 'Searching flights',
      message: `${getPlaceShortLabel(fromPlace)} → ${getPlaceShortLabel(toPlace)}`,
    });
  };

  const handleErrors = (errors: FormErrors) => {
    form.getInputNode(Object.keys(errors)[0])?.focus();
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit, handleErrors)} noValidate>
      <Stack>
        <div className={classes.route}>
          <PlaceInput
            label="From"
            placeholder="City or airport"
            withAsterisk
            leftSection={<IconPlaneDeparture size={16} />}
            otherSide="to"
            otherValue={to}
            recent={recent}
            onPick={(code) => {
              addRecent(code);
              form.getInputNode('to')?.focus();
            }}
            inputContainer={(children) => (
              <Group align="flex-start" wrap="nowrap" gap="xs">
                <div className={classes.field}>{children}</div>
                <ActionIcon
                  variant="default"
                  size="input-sm"
                  aria-label="Swap departure and destination"
                  disabled={from === null && to === null}
                  onClick={handleSwap}
                >
                  <IconArrowsLeftRight size={18} />
                </ActionIcon>
              </Group>
            )}
            {...form.getInputProps('from')}
          />
          <PlaceInput
            label="To"
            placeholder="City or airport"
            withAsterisk
            leftSection={<IconPlaneArrival size={16} />}
            otherSide="from"
            otherValue={from}
            recent={recent}
            onPick={addRecent}
            {...form.getInputProps('to')}
          />
        </div>

        <Group justify="flex-end">
          <Button type="submit">Search flights</Button>
        </Group>

        {lastSearch && (
          <div>
            <Text size="sm" mb="xs" id={searchLabelId}>
              Flight search
            </Text>
            <Code block aria-labelledby={searchLabelId}>
              {JSON.stringify(lastSearch, null, 2)}
            </Code>
          </div>
        )}
      </Stack>
    </form>
  );
}

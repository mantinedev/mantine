import { IconBuildingSkyscraper, IconPlane } from '@tabler/icons-react';
import { Combobox, Text } from '@mantine/core';
import type { Place } from '../types';
import classes from './PlaceInput.module.css';

interface PlaceOptionProps {
  place: Place;
  nested?: boolean;
  active: boolean;
  disabledReason: string | null;
}

export function PlaceOption({ place, nested = false, active, disabledReason }: PlaceOptionProps) {
  const Icon = place.kind === 'city' ? IconBuildingSkyscraper : IconPlane;
  const title =
    place.kind === 'city'
      ? `${place.city.name}, ${place.city.country} · All airports`
      : `${place.code} · ${place.airport.name}`;
  const details =
    place.kind === 'city'
      ? place.airports.map((airport) => airport.code).join(', ')
      : `${place.airport.city}, ${place.airport.country}`;

  return (
    <Combobox.Option
      value={place.code}
      active={active}
      disabled={disabledReason !== null}
      className={classes.option}
      data-nested={nested || undefined}
    >
      <Icon size={16} className={classes.icon} />
      <div className={classes.texts}>
        <Text size="sm" className={classes.title}>
          {title}
        </Text>
        <Text size="xs">{disabledReason ?? details}</Text>
      </div>
    </Combobox.Option>
  );
}

import { IconX } from '@tabler/icons-react';
import { ActionIcon, Button, Paper, Text, Title, useMantineTheme } from '@mantine/core';
import { MODE_LABELS, type Mode, PASSES, pluralize, type Trip } from './data';
import { ModeControl } from './ModeControl';
import { RouteMap } from './RouteMap';
import { SectionHead } from './SectionHead';
import classes from './RoutePlanner.module.css';

interface RoutePlannerProps {
  selected: string[];
  trip: Trip;
  mode: Mode;
  onModeChange: (mode: Mode) => void;
  onToggle: (id: string, announce?: boolean) => void;
  onBuy: (days: number) => void;
}

export function RoutePlanner({
  selected,
  trip,
  mode,
  onModeChange,
  onToggle,
  onBuy,
}: RoutePlannerProps) {
  const theme = useMantineTheme();
  const pass = PASSES[trip.passIndex];
  const empty = trip.list.length === 0;

  return (
    <section className={classes.root} id="route" aria-labelledby="saltwater-route-title">
      <SectionHead
        onBand
        id="saltwater-route-title"
        title="Tap the islands, we’ll draw the route"
        description="Pick where you want to go. The map lights up the sailings and causeways you’ll use, and the pass that fits your trip is picked for you."
      />
      <div className={classes.grid}>
        <RouteMap selected={selected} onToggle={(id) => onToggle(id)} />

        <Paper className={classes.trip} aria-live="polite">
          <Title order={3} className={classes.tripTitle}>
            Your trip
          </Title>
          <Text size="sm" mt="calc(var(--mantine-spacing-xs) / 2)">
            {empty
              ? 'Starting from Oban'
              : `Starting from Oban, ${pluralize(trip.list.length, 'island', 'islands')}`}
          </Text>

          {empty ? (
            <div className={classes.empty}>
              No islands yet. Tap one on the map or add a stamp below.
            </div>
          ) : (
            <ul className={classes.legs}>
              {trip.list.map((stop) => (
                <li key={stop.id}>
                  <span>
                    <b>{stop.name}</b>
                    <span className={classes.gd}>{stop.gd}</span>
                  </span>
                  <span className={classes.nights}>
                    {stop.boat ? 'Boat trip' : pluralize(stop.nights, 'night', 'nights')}
                  </span>
                  <ActionIcon
                    size={26}
                    className={classes.remove}
                    aria-label={`Remove ${stop.name}`}
                    onClick={() => onToggle(stop.id)}
                  >
                    <IconX size={12} stroke={2.4} />
                  </ActionIcon>
                </li>
              ))}
            </ul>
          )}

          <ModeControl value={mode} onChange={onModeChange} className={classes.mode} />

          <div className={classes.sum}>
            <span>Nights on islands</span>
            <span className={classes.value}>{trip.nights}</span>
            <span>
              {pass.days}-day pass, {MODE_LABELS[mode]}
            </span>
            <span className={classes.value}>£{trip.price}</span>
            <span>Boat trips</span>
            <span className={classes.value}>{trip.boats ? `£${trip.boats}` : 'None'}</span>
            <span className={classes.totalLabel}>Total</span>
            <span className={classes.total}>£{trip.total}</span>
          </div>

          <Button
            fullWidth
            color={`${theme.primaryColor}.7`}
            className={classes.buy}
            aria-disabled={empty}
            onClick={() => !empty && onBuy(pass.days)}
          >
            {empty ? 'Choose islands first' : `Buy the ${pass.days}-day pass`}
          </Button>
          <div className={classes.note}>
            Sail on any day the pass is valid. No seat bookings for foot passengers.
          </div>
        </Paper>
      </div>
    </section>
  );
}

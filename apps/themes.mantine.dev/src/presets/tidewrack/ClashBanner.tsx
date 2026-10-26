import { IconAlertTriangle } from '@tabler/icons-react';
import { Button, Text } from '@mantine/core';
import {
  clashPairs,
  DAY_NAMES,
  formatMinutes,
  STAGE_BY_ID,
  type DayId,
  type FestivalSet,
} from './data';
import classes from './Tidewrack.module.css';

interface ClashBannerProps {
  day: DayId;
  starred: Set<string>;
  getAlternative: (set: FestivalSet) => FestivalSet | undefined;
  onSwap: (from: FestivalSet, to: FestivalSet) => void;
}

export function ClashBanner({ day, starred, getAlternative, onSwap }: ClashBannerProps) {
  const pairs = clashPairs(starred, day);

  return (
    <div className={classes.clashes} aria-live="polite">
      {pairs.map(([a, b]) => {
        const altB = getAlternative(b);
        const alt = altB ?? getAlternative(a);
        const moved = altB ? b : a;
        const overlap = Math.min(a.end, b.end) - Math.max(a.start, b.start);

        return (
          <div key={`${a.id}-${b.id}`} className={classes.clashMessage}>
            <span className={classes.clashIcon}>
              <IconAlertTriangle size={16} stroke={1.9} />
            </span>
            <div>
              <Text fw={700} className={classes.bright}>
                {a.name} and {b.name} overlap by {overlap} minutes
              </Text>
              <Text size="sm" mt={2}>
                {alt
                  ? `${moved.name} also plays ${DAY_NAMES[alt.day]} ${formatMinutes(alt.start)} on the ${STAGE_BY_ID[alt.stage].name}. Catch that set instead and see both.`
                  : 'There is no other set by either act, so you’ll need to choose one or leave early.'}
              </Text>
            </div>
            {alt && (
              <Button variant="default" size="xs" onClick={() => onSwap(moved, alt)}>
                Swap to {DAY_NAMES[alt.day]}
              </Button>
            )}
          </div>
        );
      })}
    </div>
  );
}

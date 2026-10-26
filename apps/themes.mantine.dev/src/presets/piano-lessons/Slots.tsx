import { Chip, Select } from '@mantine/core';
import { getDayInfo, getTimeZoneName, type Slot, shiftTime, TIME_ZONES } from './data';
import { StepHead } from './StepHead';
import classes from './Booking.module.css';

const GROUPS = ['Morning', 'Afternoon', 'Evening'] as const;

function getGroup(slot: Slot) {
  const hour = Number(slot.time.slice(0, 2));
  return hour < 12 ? 'Morning' : hour < 17 ? 'Afternoon' : 'Evening';
}

interface SlotsProps {
  typeId: string;
  day: number | null;
  slot: string | null;
  onSlotChange: (slot: string) => void;
  tz: number;
  onTzChange: (tz: number) => void;
}

export function Slots({ typeId, day, slot, onSlotChange, tz, onTzChange }: SlotsProps) {
  const slots = day !== null ? getDayInfo(day, typeId).slots : [];
  const note =
    tz === 0
      ? 'Times are in Utrecht, Amsterdam time.'
      : `Shown in ${getTimeZoneName(tz)} time. The lesson itself is in Amsterdam time${
          typeId === 'online' ? '.' : ', so studio lessons mean being in Utrecht.'
        }`;

  return (
    <div>
      <StepHead
        number={3}
        title="What time?"
        titleId="pl-slot-title"
        aside={
          <div className={classes.tzRow}>
            <label htmlFor="pl-tz" className={classes.tzLabel}>
              Show times in
            </label>
            <Select
              id="pl-tz"
              size="xs"
              className={classes.tzSelect}
              data={TIME_ZONES}
              value={String(tz)}
              onChange={(value) => onTzChange(Number(value))}
            />
          </div>
        }
      />
      {day === null ? (
        <p className={classes.none}>Press a key above to see the free times for that day.</p>
      ) : (
        <>
          <Chip.Group value={slot} onChange={onSlotChange}>
            <div className={classes.slotGroups} role="radiogroup" aria-labelledby="pl-slot-title">
              {GROUPS.map((group) => {
                const items = slots.filter((item) => getGroup(item) === group);
                if (items.length === 0) {
                  return null;
                }
                return (
                  <div key={group}>
                    <h4 className={classes.slotGroupTitle}>{group}</h4>
                    <div className={classes.slots}>
                      {items.map((item) => (
                        <Chip
                          key={item.time}
                          value={item.time}
                          variant="filled"
                          disabled={item.taken}
                          aria-label={item.taken ? `${shiftTime(item.time, tz)}, taken` : undefined}
                        >
                          {shiftTime(item.time, tz)}
                        </Chip>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </Chip.Group>
          <p className={classes.tzNote}>{note}</p>
        </>
      )}
    </div>
  );
}

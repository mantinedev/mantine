import { useState } from 'react';
import { IconStar, IconStarFilled } from '@tabler/icons-react';
import { ActionIcon, Button, Tabs, Text, Title } from '@mantine/core';
import { type Day, days, schedule, trackColor } from './data';
import fieldwork from './Fieldwork.module.css';
import classes from './Program.module.css';

interface ScheduleProps {
  starred: string[];
  onToggleStar: (slotId: string) => void;
}

export function Schedule({ starred, onToggleStar }: ScheduleProps) {
  const [day, setDay] = useState<Day>('thu');
  const [onlyMine, setOnlyMine] = useState(false);

  return (
    <section
      className={`${fieldwork.block} ${fieldwork.wrap} ${fieldwork.noTopPadding}`}
      id="schedule"
      aria-labelledby="fw-schedule-title"
    >
      <div className={fieldwork.sectionHead}>
        <div>
          <Title order={2} id="fw-schedule-title" className={fieldwork.sectionTitle}>
            Schedule
          </Title>
          <Text className={fieldwork.sectionLead}>
            Star the talks you want to see. Your list stays on this device.
          </Text>
        </div>
        <Button
          size="xs"
          variant="default"
          aria-pressed={onlyMine}
          onClick={() => setOnlyMine((value) => !value)}
          leftSection={<IconStar size={16} stroke={1.9} />}
        >
          My schedule ({starred.length})
        </Button>
      </div>

      <Tabs value={day} onChange={(value) => value && setDay(value as Day)}>
        <Tabs.List aria-label="Day">
          {days.map((item) => (
            <Tabs.Tab key={item.value} value={item.value}>
              <b className={classes.dayName}>{item.label}</b>
              <span className={classes.dayDate}>{item.date}</span>
            </Tabs.Tab>
          ))}
        </Tabs.List>

        {days.map((item) => {
          const slots = schedule[item.value].filter(
            (slot) => !onlyMine || (slot.id && starred.includes(slot.id))
          );

          return (
            <Tabs.Panel key={item.value} value={item.value}>
              <ul className={classes.slots}>
                {slots.length === 0 && (
                  <li className={classes.empty}>
                    <b>Nothing starred for {item.label} yet</b>
                    Turn off My schedule and tap the star next to a talk to add it.
                  </li>
                )}
                {slots.map((slot) => {
                  const isStarred = !!slot.id && starred.includes(slot.id);
                  return (
                    <li key={slot.time} className={classes.slot} data-break={!slot.id || undefined}>
                      <span className={classes.slotTime}>{slot.time}</span>
                      <span
                        className={classes.slotBar}
                        style={{
                          background: slot.track ? trackColor[slot.track] : 'transparent',
                        }}
                      />
                      <span className={classes.slotText}>
                        <span className={classes.slotTitle}>{slot.title}</span>
                        {slot.by && <span className={classes.slotBy}>{slot.by}</span>}
                      </span>
                      <span className={classes.slotRoom}>{slot.room}</span>
                      {slot.id ? (
                        <ActionIcon
                          className={classes.star}
                          aria-pressed={isStarred}
                          aria-label={`${isStarred ? 'Remove from' : 'Add to'} my schedule`}
                          onClick={() => slot.id && onToggleStar(slot.id)}
                        >
                          {isStarred ? (
                            <IconStarFilled size={20} />
                          ) : (
                            <IconStar size={20} stroke={1.9} />
                          )}
                        </ActionIcon>
                      ) : (
                        <span />
                      )}
                    </li>
                  );
                })}
              </ul>
            </Tabs.Panel>
          );
        })}
      </Tabs>
    </section>
  );
}

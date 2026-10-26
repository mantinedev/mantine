import { useRef, useState } from 'react';
import { Radio, type RadioIconProps, Text, Title } from '@mantine/core';
import { Confirmation } from './Confirmation';
import {
  DAY,
  dowIndex,
  type DayStatus,
  FIRST_MONDAY,
  FREQUENCIES,
  formatPrice,
  getDayInfo,
  INITIAL_DAY,
  LESSON_TYPES,
} from './data';
import { Details, type DetailsValues } from './Details';
import { Keyboard } from './Keyboard';
import { Slots } from './Slots';
import { StepHead } from './StepHead';
import { Summary } from './Summary';
import { WeekBar } from './WeekBar';
import classes from './Booking.module.css';
import common from './PianoLessons.module.css';

const INITIAL_DETAILS: DetailsValues = {
  name: '',
  email: '',
  age: 'Adult',
  level: 'Never played',
  wish: 'Satie’s first Gymnopédie, and reading music properly this time.',
};

function getInitialDay() {
  if (getDayInfo(INITIAL_DAY, 'single').status === 'open') {
    return INITIAL_DAY;
  }
  return (
    Array.from({ length: 7 }, (_, index) => FIRST_MONDAY + index * DAY).find(
      (t) => getDayInfo(t, 'single').status === 'open'
    ) ?? null
  );
}

interface BookingProps {
  onToast: (message: string) => void;
}

export function Booking({ onToast }: BookingProps) {
  const [typeId, setTypeId] = useState('single');
  const [weekStart, setWeekStart] = useState(FIRST_MONDAY);
  const [day, setDay] = useState<number | null>(getInitialDay);
  const [slot, setSlot] = useState<string | null>(null);
  const [tz, setTz] = useState(0);
  const [sound, setSound] = useState(false);
  const [details, setDetails] = useState(INITIAL_DETAILS);
  const [booked, setBooked] = useState<{ name: string; email: string } | null>(null);
  const audio = useRef<AudioContext | null>(null);

  const type = LESSON_TYPES.find((item) => item.id === typeId) ?? LESSON_TYPES[1];

  const play = (index: number, enabled = sound) => {
    if (!enabled) {
      return;
    }
    try {
      audio.current = audio.current ?? new AudioContext();
      const context = audio.current;
      const oscillator = context.createOscillator();
      const gain = context.createGain();
      oscillator.type = 'triangle';
      oscillator.frequency.value = FREQUENCIES[index];
      gain.gain.setValueAtTime(0.0001, context.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.18, context.currentTime + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + 1.1);
      oscillator.connect(gain).connect(context.destination);
      oscillator.start();
      oscillator.stop(context.currentTime + 1.2);
    } catch {
      audio.current = null;
    }
  };

  const pickDay = (t: number, index: number) => {
    if (getDayInfo(t, typeId).status !== 'open') {
      return;
    }
    setDay(t);
    setSlot(null);
    play(index);
  };

  const pickFromMonth = (t: number) => {
    setWeekStart(t - dowIndex(t) * DAY);
    pickDay(t, dowIndex(t));
  };

  const changeType = (value: string) => {
    setTypeId(value);
    setSlot(null);
  };

  const handleUnavailable = (status: DayStatus) =>
    onToast(status === 'full' ? 'That day is fully booked' : 'No lessons on that day');

  const handleSoundChange = (checked: boolean) => {
    setSound(checked);
    if (checked) {
      play(day !== null ? dowIndex(day) : 0, true);
    }
  };

  const handleBooked = (name: string, email: string) => {
    if (day === null || slot === null) {
      onToast('Pick a day and a time first');
      return;
    }
    setBooked({ name, email });
    onToast('Lesson booked');
  };

  const reset = () => {
    setTypeId('single');
    setWeekStart(FIRST_MONDAY);
    setDay(getInitialDay());
    setSlot(null);
    setTz(0);
    setSound(false);
    setDetails(INITIAL_DETAILS);
    setBooked(null);
  };

  return (
    <section
      className={`${common.wrap} ${classes.booking}`}
      id="book"
      aria-labelledby="pl-book-title"
    >
      <Title order={2} id="pl-book-title" className={common.sectionTitle}>
        Book a lesson
      </Title>
      <Text className={common.sectionSub}>
        Pick a lesson, then press a key to choose the day. Times you see are free right now.
      </Text>

      <div className={classes.grid}>
        <div className={classes.steps}>
          {booked && day !== null && slot !== null ? (
            <Confirmation
              type={type}
              day={day}
              slot={slot}
              name={booked.name}
              email={booked.email}
              onToast={onToast}
              onReset={reset}
            />
          ) : (
            <>
              <div>
                <StepHead number={1} title="What kind of lesson?" />
                <Radio.Group value={typeId} onChange={changeType} aria-label="Lesson type">
                  <div className={classes.types}>
                    {LESSON_TYPES.map((item) => (
                      <Radio.Card key={item.id} value={item.id} className={classes.type}>
                        <b>{item.name}</b>
                        <span className={classes.price}>{formatPrice(item.price)}</span>
                        <span className={classes.meta}>{item.meta}</span>
                        <Radio.Indicator
                          size={22}
                          icon={TickIcon}
                          className={classes.tick}
                          aria-hidden="true"
                        />
                      </Radio.Card>
                    ))}
                  </div>
                </Radio.Group>
              </div>

              <div>
                <StepHead
                  number={2}
                  title="Which day?"
                  aside={
                    <span className={classes.aside}>Wednesdays and Sundays I don’t teach</span>
                  }
                />
                <WeekBar
                  weekStart={weekStart}
                  onWeekStartChange={setWeekStart}
                  typeId={typeId}
                  day={day}
                  onMonthPick={pickFromMonth}
                  sound={sound}
                  onSoundChange={handleSoundChange}
                />
                <Keyboard
                  weekStart={weekStart}
                  typeId={typeId}
                  day={day}
                  onPick={pickDay}
                  onUnavailable={handleUnavailable}
                />
              </div>

              <Slots
                typeId={typeId}
                day={day}
                slot={slot}
                onSlotChange={setSlot}
                tz={tz}
                onTzChange={setTz}
              />

              <Details values={details} onChange={setDetails} onValidSubmit={handleBooked} />
            </>
          )}
        </div>

        <Summary type={type} day={day} slot={slot} tz={tz} booked={booked !== null} />
      </div>
    </section>
  );
}

function TickIcon({ size: _size, ...others }: RadioIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...others}
    >
      <path d="m5 12 5 5 9-10" />
    </svg>
  );
}

'use client';

import { useRef, useState } from 'react';
import { IconCheck, IconHeart, IconLock } from '@tabler/icons-react';
import {
  Button,
  Checkbox,
  Paper,
  SegmentedControl,
  Text,
  TextInput,
  ThemeIcon,
  Title,
} from '@mantine/core';
import { amounts, formatExact, type Frequency, paysFor } from './data';
import classes from './Hero.module.css';

export interface Donation {
  amount: number;
  frequency: Frequency;
  giftAid: boolean;
}

interface DonateCardProps {
  onDonate: (donation: Donation) => void;
}

export function DonateCard({ onDonate }: DonateCardProps) {
  const [frequency, setFrequency] = useState<Frequency>('once');
  const [amount, setAmount] = useState(25);
  const [other, setOther] = useState(false);
  const [otherValue, setOtherValue] = useState('');
  const [error, setError] = useState(false);
  const [giftAid, setGiftAid] = useState(true);
  const [thanks, setThanks] = useState<string | null>(null);
  const otherRef = useRef<HTMLInputElement>(null);
  const donateRef = useRef<HTMLButtonElement>(null);

  const valid = amount >= 2;
  const suffix = frequency === 'month' ? ' a month' : '';
  const giftAidAmount = formatExact(Math.round(amount * 25) / 100);

  const pickAmount = (value: number) => {
    setOther(false);
    setAmount(value);
    setOtherValue('');
    setError(false);
  };

  const pickOther = () => {
    setOther(true);
    setAmount(Number(otherValue) || 0);
  };

  const changeOther = (value: string) => {
    setOther(true);
    setOtherValue(value);
    const parsed = Number(value.replace(/[^0-9.]/g, ''));
    setAmount(Number.isFinite(parsed) ? Math.round(parsed * 100) / 100 : 0);
    setError(false);
  };

  const donate = () => {
    if (!valid) {
      setError(true);
      otherRef.current?.focus();
      return;
    }
    setThanks(
      `${frequency === 'month' ? 'Your monthly gift of ' : 'Your gift of '}${formatExact(amount)}${
        giftAid ? `, plus ${giftAidAmount} Gift Aid,` : ''
      } ${paysFor(amount)}. A receipt is on its way to your inbox.`
    );
    onDonate({ amount, frequency, giftAid });
  };

  return (
    <Paper id="donate" shadow="lg" className={classes.donate} aria-labelledby="donate-title">
      {thanks ? (
        <div className={classes.thanks} aria-live="polite">
          <ThemeIcon size={52} radius="50%" color="chrome.4" className={classes.seal}>
            <IconCheck size={26} stroke={2.4} />
          </ThemeIcon>
          <Title order={2} className={classes.thanksTitle}>
            Thank you
          </Title>
          <p>{thanks}</p>
          <Button
            variant="default"
            onClick={() => {
              setThanks(null);
              requestAnimationFrame(() => donateRef.current?.focus());
            }}
          >
            Give again
          </Button>
        </div>
      ) : (
        <>
          <Title order={2} id="donate-title" className={classes.donateTitle}>
            Give to the appeal
          </Title>

          <SegmentedControl
            fullWidth
            value={frequency}
            onChange={(value) => setFrequency(value as Frequency)}
            data={[
              { value: 'once', label: 'One-off' },
              { value: 'month', label: 'Monthly' },
            ]}
            aria-label="How often"
          />

          <div className={classes.amounts} role="group" aria-label="Amount">
            {amounts.map((value) => {
              const pressed = !other && amount === value;
              return (
                <Button
                  key={value}
                  variant={pressed ? 'filled' : 'default'}
                  aria-pressed={pressed}
                  className={classes.chip}
                  onClick={() => pickAmount(value)}
                >
                  £{value}
                </Button>
              );
            })}
            <div className={classes.other}>
              <Button
                variant={other ? 'filled' : 'default'}
                aria-pressed={other}
                className={`${classes.chip} ${classes.otherChip}`}
                onClick={() => {
                  pickOther();
                  otherRef.current?.focus();
                }}
              >
                Other
              </Button>
              <TextInput
                ref={otherRef}
                className={classes.money}
                inputMode="decimal"
                placeholder="Your amount"
                aria-label="Other amount in pounds"
                leftSection="£"
                leftSectionWidth={26}
                classNames={{ section: classes.moneySign }}
                value={otherValue}
                error={error}
                onFocus={pickOther}
                onChange={(event) => changeOther(event.currentTarget.value)}
              />
            </div>
          </div>

          {error && <div className={classes.error}>Enter an amount of £2 or more</div>}

          <div className={classes.pays} aria-live="polite">
            <IconHeart size={20} stroke={1.8} className={classes.paysIcon} />
            <span>
              {valid ? (
                <>
                  <b>
                    {formatExact(amount)}
                    {suffix}
                  </b>{' '}
                  {paysFor(amount)}
                  {frequency === 'month' ? ', every month.' : '.'}
                </>
              ) : (
                'Choose an amount to see what it pays for.'
              )}
            </span>
          </div>

          <Checkbox
            checked={giftAid}
            onChange={(event) => setGiftAid(event.currentTarget.checked)}
            label={
              <>
                Add Gift Aid,{' '}
                <b className={classes.bright}>{valid ? `+${giftAidAmount}${suffix}` : '+25%'}</b> at
                no cost to you
              </>
            }
            description="I am a UK taxpayer and understand that if I pay less tax than the Gift Aid claimed, I must pay the difference."
          />

          <Button ref={donateRef} onClick={donate}>
            {valid ? `Donate ${formatExact(amount)}${suffix}` : 'Donate'}
          </Button>

          <Text size="xs" ta="center" className={classes.secure}>
            <IconLock size={14} stroke={1.8} />
            Card, Apple Pay or PayPal on the next step
          </Text>
        </>
      )}
    </Paper>
  );
}

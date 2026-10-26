import { useEffect, useId, useRef, useState } from 'react';
import { Paper, Slider } from '@mantine/core';
import { useReducedMotion } from '@mantine/hooks';
import {
  clockAt,
  formatNumber,
  intensityAt,
  kelvinAt,
  kelvinToRgb,
  luxAt,
  mixWhite,
  rgb,
  shade,
  SUNRISE_MINUTES,
} from './sunrise';
import classes from './LampStage.module.css';

const TARGET_MINUTE = 22;
const ANIMATION_DELAY = 400;
const ANIMATION_DURATION = 2600;

interface LampStageProps {
  bodyColor: string;
}

export function LampStage({ bodyColor }: LampStageProps) {
  const [minute, setMinute] = useState(0);
  const touched = useRef(false);
  const reduceMotion = useReducedMotion();
  const id = useId();
  const gradientId = `${id}-lit`;
  const shadeId = `${id}-shade`;
  const labelId = `${id}-label`;
  const readoutId = `${id}-readout`;

  useEffect(() => {
    if (reduceMotion) {
      setMinute(TARGET_MINUTE);
      return undefined;
    }

    let frame = 0;
    const start = performance.now() + ANIMATION_DELAY;
    const step = (now: number) => {
      if (touched.current) {
        return;
      }
      const progress = Math.max(0, Math.min(1, (now - start) / ANIMATION_DURATION));
      const eased = 1 - (1 - progress) ** 3;
      setMinute(Math.round(TARGET_MINUTE * eased * 2) / 2);
      if (progress < 1) {
        frame = requestAnimationFrame(step);
      }
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [reduceMotion]);

  const kelvin = kelvinAt(minute);
  const color = kelvinToRgb(kelvin);
  const intensity = intensityAt(minute);
  const glow = `radial-gradient(circle at 50% 38%, ${rgb(color, (0.6 * intensity).toFixed(3))} 0, ${rgb(color, (0.22 * intensity).toFixed(3))} 32%, ${rgb(color, 0)} 62%)`;

  return (
    <div className={classes.stage}>
      <div className={classes.glow} style={{ background: glow }} />
      <div className={classes.lamp}>
        <svg
          viewBox="0 0 400 380"
          role="img"
          aria-label="Halcyon lamp: a frosted glass globe resting on a low round base"
        >
          <defs>
            <radialGradient id={gradientId} cx="50%" cy="42%" r="60%">
              <stop offset="0%" stopColor={rgb(mixWhite(color, 0.75))} />
              <stop offset="70%" stopColor={rgb(mixWhite(color, 0.15))} />
              <stop offset="100%" stopColor={rgb(shade(color, 0.85))} />
            </radialGradient>
            <linearGradient id={shadeId} x1="0" x2="0" y1="0" y2="1">
              <stop offset="0" stopColor="#000" stopOpacity="0" />
              <stop offset="1" stopColor="#000" stopOpacity=".18" />
            </linearGradient>
          </defs>
          <ellipse cx="200" cy="350" rx="130" ry="12" fill="#000" opacity=".12" />
          <circle cx="200" cy="168" r="128" className={classes.globeOff} strokeWidth="1.5" />
          <circle
            cx="200"
            cy="168"
            r="128"
            fill={`url(#${gradientId})`}
            opacity={intensity.toFixed(3)}
          />
          <ellipse
            cx="160"
            cy="112"
            rx="34"
            ry="18"
            fill="#fff"
            opacity=".18"
            transform="rotate(-28 160 112)"
          />
          <path d="M92 272 Q200 300 308 272 L300 330 Q200 352 100 330 Z" fill={bodyColor} />
          <path
            d="M92 272 Q200 300 308 272 L300 330 Q200 352 100 330 Z"
            fill={`url(#${shadeId})`}
          />
          <path
            d="M100 330 Q200 352 300 330"
            fill="none"
            stroke="#000"
            strokeOpacity=".12"
            strokeWidth="2"
          />
          <circle cx="200" cy="316" r="5" fill="#000" opacity=".18" />
        </svg>
      </div>

      <Paper className={classes.scrub} radius="lg" shadow="xs">
        <div className={classes.scrubTop}>
          <span className={classes.scrubLabel} id={labelId}>
            How it wakes you
          </span>
          <span className={classes.readout} id={readoutId} aria-live="polite">
            <b>{clockAt(minute)}</b>
            {minute <= 0
              ? ', light off'
              : `, ${formatNumber(kelvin)} K, ${formatNumber(luxAt(minute))} lux`}
          </span>
        </div>
        <Slider
          className={classes.slider}
          min={0}
          max={SUNRISE_MINUTES}
          step={0.5}
          value={minute}
          onChange={(value) => {
            touched.current = true;
            setMinute(value);
          }}
          color={rgb(color)}
          thumbProps={{ 'aria-labelledby': labelId, 'aria-describedby': readoutId }}
        />
        <div className={classes.ticks}>
          <span>06:30</span>
          <span>06:45</span>
          <span>07:00, alarm time</span>
        </div>
      </Paper>
    </div>
  );
}

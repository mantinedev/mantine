'use client';

import {
  IconBadgeCc,
  IconCheck,
  IconMaximize,
  IconPlayerPauseFilled,
  IconPlayerPlayFilled,
} from '@tabler/icons-react';
import { ActionIcon, Menu, Slider, UnstyledButton } from '@mantine/core';
import { captions, VIDEO_DURATION } from './data';
import { formatTime, type PlayerState } from './use-player';
import classes from './LessonPlayer.module.css';

const SPEEDS = [0.75, 1, 1.25, 1.5];

interface LessonPlayerProps {
  player: PlayerState;
  ref?: React.Ref<HTMLDivElement>;
}

function WheelScene() {
  return (
    <svg className={classes.scene} viewBox="0 0 960 540" aria-hidden>
      <rect width="960" height="540" fill="var(--cw-player)" />
      <circle cx="480" cy="270" r="230" fill="var(--cw-wheel-dark)" />
      <circle cx="480" cy="270" r="214" fill="var(--cw-wheel)" />
      <g className={classes.rings}>
        <circle
          cx="480"
          cy="270"
          r="180"
          fill="none"
          stroke="var(--cw-wheel-dark)"
          strokeWidth="2"
          opacity=".5"
        />
        <circle
          cx="480"
          cy="270"
          r="140"
          fill="none"
          stroke="var(--cw-wheel-dark)"
          strokeWidth="2"
          opacity=".5"
        />
        <circle cx="472" cy="262" r="98" fill="var(--cw-clay)" />
        <path
          d="M418 230 a70 70 0 0 1 96 -14"
          fill="none"
          stroke="var(--cw-clay-dark)"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <path
          d="M520 312 a62 62 0 0 1 -84 12"
          fill="none"
          stroke="var(--cw-clay-dark)"
          strokeWidth="4"
          strokeLinecap="round"
          opacity=".7"
        />
        <circle cx="480" cy="270" r="4" fill="var(--cw-wheel-dark)" />
      </g>
      <ellipse
        cx="300"
        cy="300"
        rx="58"
        ry="92"
        fill="#d8b9a0"
        opacity=".9"
        transform="rotate(-24 300 300)"
      />
      <ellipse
        cx="656"
        cy="250"
        rx="56"
        ry="90"
        fill="#d8b9a0"
        opacity=".9"
        transform="rotate(30 656 250)"
      />
    </svg>
  );
}

export function LessonPlayer({ player, ref }: LessonPlayerProps) {
  const caption = captions.reduce(
    (current, line) => (player.time >= line.time ? line.text : current),
    captions[0].text
  );
  const captionVisible = player.captions && (player.time > 0 || player.playing);

  return (
    <div ref={ref} className={classes.root} data-playing={player.playing || undefined}>
      <WheelScene />

      {!player.playing && (
        <ActionIcon
          variant="filled"
          radius={76}
          size={76}
          className={classes.bigPlay}
          onClick={() => player.setPlaying(true)}
          aria-label="Play lesson video"
        >
          <IconPlayerPlayFilled size={30} />
        </ActionIcon>
      )}

      {captionVisible && <div className={classes.caption}>{caption}</div>}

      <div className={classes.controls}>
        <ActionIcon
          variant="transparent"
          className={classes.control}
          onClick={() => player.setPlaying(!player.playing)}
          aria-label={player.playing ? 'Pause' : 'Play'}
        >
          {player.playing ? (
            <IconPlayerPauseFilled size={20} />
          ) : (
            <IconPlayerPlayFilled size={20} />
          )}
        </ActionIcon>

        <Slider
          className={classes.seek}
          classNames={{ thumb: classes.seekThumb }}
          min={0}
          max={VIDEO_DURATION}
          step={10}
          value={player.time}
          onChange={player.setTime}
          thumbLabel="Seek"
        />

        <span className={classes.time}>
          {formatTime(player.time)} / {formatTime(VIDEO_DURATION)}
        </span>

        <ActionIcon
          variant="transparent"
          className={classes.control}
          onClick={() => player.setCaptions(!player.captions)}
          aria-label="Captions"
          aria-pressed={player.captions}
        >
          <IconBadgeCc size={20} stroke={1.75} />
        </ActionIcon>

        <Menu position="top-end" offset={8} width={140}>
          <Menu.Target>
            <UnstyledButton className={classes.speed}>{player.speed}×</UnstyledButton>
          </Menu.Target>
          <Menu.Dropdown>
            {SPEEDS.map((speed) => (
              <Menu.Item
                key={speed}
                role="menuitemradio"
                aria-checked={speed === player.speed}
                rightSection={
                  speed === player.speed && (
                    <IconCheck size={15} stroke={2.5} className={classes.speedCheck} />
                  )
                }
                onClick={() => player.setSpeed(speed)}
              >
                {speed}×
              </Menu.Item>
            ))}
          </Menu.Dropdown>
        </Menu>

        <ActionIcon variant="transparent" className={classes.control} aria-label="Full screen">
          <IconMaximize size={20} stroke={1.75} />
        </ActionIcon>
      </div>
    </div>
  );
}

'use client';

import {
  IconCheck,
  IconChevronDown,
  IconPlayerPauseFilled,
  IconPlayerPlayFilled,
  IconUpload,
  IconVolume,
  IconVolume3,
} from '@tabler/icons-react';
import { ActionIcon, Button, Menu, Slider } from '@mantine/core';
import { chapters, DURATION, findIndexAt, formatTime, SPEEDS } from './data';
import { BackIcon, ForwardIcon } from './Icons';
import { Waveform } from './Waveform';
import classes from './Player.module.css';

interface PlayerProps {
  ref?: React.Ref<HTMLElement>;
  time: number;
  playing: boolean;
  speed: number;
  volume: number;
  onTogglePlay: () => void;
  onSeek: (time: number) => void;
  onSpeedChange: (speed: number) => void;
  onVolumeChange: (volume: number) => void;
  onToggleMute: () => void;
  onShare: () => void;
}

export function Player({
  ref,
  time,
  playing,
  speed,
  volume,
  onTogglePlay,
  onSeek,
  onSpeedChange,
  onVolumeChange,
  onToggleMute,
  onShare,
}: PlayerProps) {
  const chapterIndex = findIndexAt(chapters, time);
  const muted = volume === 0;

  return (
    <section ref={ref} className={classes.player} aria-label="Episode player">
      <div className={classes.controls}>
        <ActionIcon
          variant="subtle"
          className={classes.skip}
          onClick={() => onSeek(time - 15)}
          aria-label="Back 15 seconds"
        >
          <BackIcon />
          <span>15</span>
        </ActionIcon>
        <ActionIcon
          variant="filled"
          radius="50%"
          size={64}
          onClick={onTogglePlay}
          aria-label={playing ? 'Pause' : 'Play'}
        >
          {playing ? <IconPlayerPauseFilled size={26} /> : <IconPlayerPlayFilled size={26} />}
        </ActionIcon>
        <ActionIcon
          variant="subtle"
          className={classes.skip}
          onClick={() => onSeek(time + 30)}
          aria-label="Forward 30 seconds"
        >
          <ForwardIcon />
          <span>30</span>
        </ActionIcon>
      </div>

      <div className={classes.waveCol}>
        <div className={classes.nowChapter}>
          <b>{chapters[chapterIndex].title}</b>
          <span className={classes.tnum}>
            Chapter {chapterIndex + 1} of {chapters.length}
          </span>
        </div>
        <Waveform time={time} onSeek={onSeek} />
        <div className={classes.times}>
          <span>{formatTime(time)}</span>
          <span>-{formatTime(DURATION - time)}</span>
        </div>
      </div>

      <div className={classes.foot}>
        <div className={classes.footGroup}>
          <Menu
            position="top-start"
            offset={8}
            width={150}
            classNames={{ itemIndicator: classes.indicator }}
          >
            <Menu.Target>
              <Button
                variant="default"
                size="xs"
                rightSection={<IconChevronDown size={14} stroke={1.8} />}
              >
                <span className={classes.tnum}>{speed}×</span>&nbsp;speed
              </Button>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.RadioGroup
                value={String(speed)}
                onChange={(value) => onSpeedChange(Number(value))}
              >
                {SPEEDS.map((value) => (
                  <Menu.RadioItem
                    key={value}
                    value={String(value)}
                    rightSection={
                      value === speed && (
                        <IconCheck size={20} stroke={1.8} className={classes.check} />
                      )
                    }
                  >
                    <span className={classes.tnum}>{value}×</span>
                  </Menu.RadioItem>
                ))}
              </Menu.RadioGroup>
            </Menu.Dropdown>
          </Menu>
          <Button
            variant="default"
            size="xs"
            leftSection={<IconUpload size={18} stroke={1.8} />}
            onClick={onShare}
          >
            Share from&nbsp;<span className={classes.tnum}>{formatTime(time)}</span>
          </Button>
        </div>

        <div className={classes.footGroup}>
          <ActionIcon
            variant="subtle"
            onClick={onToggleMute}
            aria-label={muted ? 'Unmute' : 'Mute'}
          >
            {muted ? <IconVolume3 size={20} stroke={1.8} /> : <IconVolume size={20} stroke={1.8} />}
          </ActionIcon>
          <span className={classes.label}>Volume</span>
          <Slider
            className={classes.volume}
            value={volume}
            onChange={onVolumeChange}
            thumbProps={{ 'aria-label': 'Volume' }}
          />
        </div>
      </div>
    </section>
  );
}

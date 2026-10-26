'use client';

import { useEffect, useRef, useState } from 'react';
import {
  localStorageColorSchemeManager,
  MantineProvider,
  Portal,
  Text,
  Transition,
} from '@mantine/core';
import { PresetFrame } from '@/components/PresetFrame';
import { Chapters } from './Chapters';
import { DURATION, formatTime } from './data';
import { Hero } from './Hero';
import { Masthead } from './Masthead';
import { MiniPlayer } from './MiniPlayer';
import { Player } from './Player';
import { Sidebar } from './Sidebar';
import { cssVariablesResolver, theme } from './theme';
import { Transcript } from './Transcript';
import classes from './NightShift.module.css';

const FONTS_URL =
  'https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700;9..144,800&family=Hanken+Grotesk:wght@400;500;600;700&display=swap';

const colorSchemeManager = localStorageColorSchemeManager({ key: 'night-shift-color-scheme' });

function clampTime(time: number) {
  return Math.max(0, Math.min(DURATION, time));
}

function Episode() {
  const [time, setTime] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [volume, setVolume] = useState(70);
  const [lastVolume, setLastVolume] = useState(70);
  const [follow, setFollow] = useState(true);
  const [miniVisible, setMiniVisible] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const toastTimeout = useRef<number>(undefined);
  const playerRef = useRef<HTMLElement>(null);

  const showToast = (message: string) => {
    setToast(message);
    window.clearTimeout(toastTimeout.current);
    toastTimeout.current = window.setTimeout(() => setToast(null), 2400);
  };

  useEffect(() => {
    if (!playing) {
      return undefined;
    }
    const interval = window.setInterval(() => {
      setTime((current) => {
        const next = clampTime(current + 0.25 * speed * 8);
        if (next >= DURATION) {
          setPlaying(false);
        }
        return next;
      });
    }, 250);
    return () => window.clearInterval(interval);
  }, [playing, speed]);

  useEffect(() => {
    const player = playerRef.current;
    if (!player) {
      return undefined;
    }
    const observer = new IntersectionObserver(([entry]) => {
      setMiniVisible(!entry.isIntersecting && entry.boundingClientRect.top <= 0);
    });
    observer.observe(player);
    return () => observer.disconnect();
  }, []);

  useEffect(() => () => window.clearTimeout(toastTimeout.current), []);

  const seek = (value: number) => setTime(clampTime(value));
  const togglePlay = () => setPlaying((current) => !current);

  const changeVolume = (value: number) => {
    setVolume(value);
    if (value > 0) {
      setLastVolume(value);
    }
  };

  const share = () => {
    const at = formatTime(time);
    const failed = () => showToast('Copy failed, try again');
    try {
      navigator.clipboard
        .writeText(`https://nightshift.example/48?t=${Math.round(time)}`)
        .then(() => showToast(`Link to ${at} copied`), failed);
    } catch {
      failed();
    }
  };

  return (
    <div className={classes.root}>
      <Masthead onToast={showToast} />
      <Hero />
      <Player
        ref={playerRef}
        time={time}
        playing={playing}
        speed={speed}
        volume={volume}
        onTogglePlay={togglePlay}
        onSeek={seek}
        onSpeedChange={setSpeed}
        onVolumeChange={changeVolume}
        onToggleMute={() => changeVolume(volume === 0 ? lastVolume : 0)}
        onShare={share}
      />

      <div className={classes.body}>
        <div className={classes.main}>
          <Chapters
            time={time}
            playing={playing}
            onSelect={(start) => {
              seek(start);
              setPlaying(true);
            }}
          />
          <Transcript time={time} follow={follow} onFollowChange={setFollow} onSeek={seek} />
        </div>
        <Sidebar
          onEpisodePlay={(title) => {
            setPlaying(false);
            showToast(`Up next: ${title}`);
          }}
        />
      </div>

      <footer className={classes.footer}>
        <Text size="sm">Night Shift is made in Glasgow by Ruth Abernethy and Callum Reid.</Text>
        <nav aria-label="Footer" className={classes.footerNav}>
          {['About', 'Suggest a night worker', 'Press'].map((label) => (
            <a key={label} href="#" onClick={(event) => event.preventDefault()}>
              {label}
            </a>
          ))}
        </nav>
      </footer>

      {miniVisible && <MiniPlayer time={time} playing={playing} onTogglePlay={togglePlay} />}

      <Portal>
        <div className={classes.toastAnchor}>
          <Transition mounted={toast !== null} transition="pop" duration={120}>
            {(styles) => (
              <div className={classes.toast} style={styles} role="status">
                {toast}
              </div>
            )}
          </Transition>
        </div>
      </Portal>
    </div>
  );
}

export function NightShift() {
  return (
    <>
      <link rel="stylesheet" href={FONTS_URL} precedence="default" />
      <MantineProvider
        theme={theme}
        cssVariablesResolver={cssVariablesResolver}
        defaultColorScheme="dark"
        colorSchemeManager={colorSchemeManager}
      >
        <PresetFrame>
          <Episode />
        </PresetFrame>
      </MantineProvider>
    </>
  );
}

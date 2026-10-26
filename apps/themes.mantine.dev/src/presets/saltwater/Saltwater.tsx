'use client';

import { useMemo, useRef, useState } from 'react';
import { localStorageColorSchemeManager, MantineProvider, Portal, Transition } from '@mantine/core';
import { PresetFrame } from '@/components/PresetFrame';
import { getTrip, INITIAL_TRIP, type Mode, STOPS, STOPS_BY_ID } from './data';
import { Faq } from './Faq';
import { Footer } from './Footer';
import { Header } from './Header';
import { Hero } from './Hero';
import { Passes } from './Passes';
import { Postcards } from './Postcards';
import { RoutePlanner } from './RoutePlanner';
import { Stamps } from './Stamps';
import { cssVariablesResolver, theme } from './theme';
import { Weather } from './Weather';
import classes from './Saltwater.module.css';

const FONTS_URL =
  'https://fonts.googleapis.com/css2?family=Unbounded:wght@500;700;800&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&family=Caveat:wght@500;600&display=swap';

const colorSchemeManager = localStorageColorSchemeManager({ key: 'saltwater-color-scheme' });

function Landing() {
  const [selected, setSelected] = useState(INITIAL_TRIP);
  const [mode, setMode] = useState<Mode>('foot');
  const [toast, setToast] = useState<string | null>(null);
  const timeout = useRef<number>(undefined);
  const trip = useMemo(() => getTrip(selected, mode), [selected, mode]);

  const showToast = (message: string) => {
    setToast(message);
    window.clearTimeout(timeout.current);
    timeout.current = window.setTimeout(() => setToast(null), 2200);
  };

  const toggle = (id: string, announce?: boolean) => {
    const adding = !selected.includes(id);
    setSelected((current) =>
      adding
        ? STOPS.map((stop) => stop.id).filter((stopId) => stopId === id || current.includes(stopId))
        : current.filter((stopId) => stopId !== id)
    );
    if (announce) {
      const { name } = STOPS_BY_ID[id];
      showToast(adding ? `${name} added to your trip` : `${name} removed`);
    }
  };

  const buy = (days: number) => showToast(`${days}-day pass added to your basket`);

  return (
    <div className={classes.root}>
      <Header />
      <Hero trip={trip} mode={mode} />
      <RoutePlanner
        selected={selected}
        trip={trip}
        mode={mode}
        onModeChange={setMode}
        onToggle={toggle}
        onBuy={buy}
      />
      <Stamps selected={selected} onToggle={toggle} />
      <Passes mode={mode} recommended={trip.passIndex} onModeChange={setMode} onBuy={buy} />
      <Weather />
      <Postcards />
      <Faq />
      <Footer />

      <Portal>
        <div className={classes.toastAnchor}>
          <Transition mounted={toast !== null} transition="pop" duration={140}>
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

export function Saltwater() {
  return (
    <>
      <link rel="stylesheet" href={FONTS_URL} precedence="default" />
      <MantineProvider
        theme={theme}
        cssVariablesResolver={cssVariablesResolver}
        colorSchemeManager={colorSchemeManager}
      >
        <PresetFrame>
          <Landing />
        </PresetFrame>
      </MantineProvider>
    </>
  );
}

'use client';

import { useRef, useState } from 'react';
import { localStorageColorSchemeManager, MantineProvider, Portal, Transition } from '@mantine/core';
import { PresetFrame } from '@/components/PresetFrame';
import { About } from './About';
import { Booking } from './Booking';
import { Faq } from './Faq';
import { FirstLesson } from './FirstLesson';
import { Footer } from './Footer';
import { Header } from './Header';
import { Hero } from './Hero';
import { Reviews } from './Reviews';
import { cssVariablesResolver, theme } from './theme';
import classes from './PianoLessons.module.css';

const FONTS_URL =
  'https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Golos+Text:wght@400;500;600;700&display=swap';

const colorSchemeManager = localStorageColorSchemeManager({ key: 'piano-lessons-color-scheme' });

function LessonsPage() {
  const [toast, setToast] = useState<string | null>(null);
  const timeout = useRef<number>(undefined);

  const showToast = (message: string) => {
    setToast(message);
    window.clearTimeout(timeout.current);
    timeout.current = window.setTimeout(() => setToast(null), 2400);
  };

  return (
    <div className={classes.root}>
      <Header />
      <Hero />
      <Booking onToast={showToast} />
      <About />
      <FirstLesson />
      <Reviews />
      <Faq />
      <Footer />

      <Portal>
        <div className={classes.toastAnchor}>
          <Transition mounted={toast !== null} transition="slide-up" duration={160}>
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

export function PianoLessons() {
  return (
    <>
      <link rel="stylesheet" href={FONTS_URL} precedence="default" />
      <MantineProvider
        theme={theme}
        cssVariablesResolver={cssVariablesResolver}
        colorSchemeManager={colorSchemeManager}
      >
        <PresetFrame>
          <LessonsPage />
        </PresetFrame>
      </MantineProvider>
    </>
  );
}

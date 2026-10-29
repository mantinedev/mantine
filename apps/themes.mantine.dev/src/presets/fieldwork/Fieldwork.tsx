'use client';

import { useRef, useState } from 'react';
import { Button, Portal, Text, Title, Transition } from '@mantine/core';
import { PresetFrame } from '@/components/PresetFrame';
import { PresetProvider } from '@/components/PresetProvider';
import { audiences, footerColumns, type Speaker, sponsorTiers, trackColor } from './data';
import { Hero } from './Hero';
import { Logo } from './Logo';
import { Nav } from './Nav';
import { Newsletter } from './Newsletter';
import { Schedule } from './Schedule';
import { SpeakerModal } from './SpeakerModal';
import { Speakers } from './Speakers';
import { cssVariablesResolver, theme } from './theme';
import { Tickets } from './Tickets';
import { Venue } from './Venue';
import classes from './Fieldwork.module.css';

const FONTS_URL =
  'https://fonts.googleapis.com/css2?family=Anton&family=Rubik:wght@400;500;600;700&display=swap';

const preventDefault = (event: React.MouseEvent) => event.preventDefault();

function Audiences() {
  return (
    <div className={`${classes.who} ${classes.wrap}`} aria-label="Who it is for">
      {audiences.map((audience) => (
        <div key={audience.title}>
          <Title order={3} className={classes.whoTitle}>
            <i style={{ background: trackColor[audience.track] }} />
            {audience.title}
          </Title>
          <p>{audience.description}</p>
        </div>
      ))}
    </div>
  );
}

function Sponsors() {
  return (
    <section
      className={`${classes.wrap} ${classes.sponsorsSection}`}
      aria-labelledby="fw-sponsors-title"
    >
      <div className={classes.sectionHead}>
        <div>
          <Title order={2} id="fw-sponsors-title" className={classes.sectionTitle}>
            Supported by
          </Title>
        </div>
        <Button component="a" href="#" variant="default" size="sm" onClick={preventDefault}>
          Become a sponsor
        </Button>
      </div>
      <div className={classes.sponsors}>
        {sponsorTiers.map((tier) => (
          <div key={tier.name} className={classes.tierRow} data-size={tier.size}>
            <Title order={3} className={classes.tierRowTitle}>
              {tier.name}
            </Title>
            <div className={classes.logos}>
              {tier.sponsors.map((sponsor) => (
                <span key={sponsor.name} className={classes.sponsorLogo}>
                  {'mark' in sponsor && (
                    <i
                      data-mark={sponsor.mark}
                      style={{
                        background:
                          sponsor.mark === 'circle'
                            ? 'var(--mantine-color-flamingo-filled)'
                            : 'var(--mantine-color-lagoon-filled)',
                      }}
                    />
                  )}
                  {sponsor.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className={`${classes.footer} ${classes.wrap}`}>
      <div className={classes.footerBrand}>
        <Logo />
        <Text size="sm" mt="sm" className={classes.footerAbout}>
          Run by a small not-for-profit in Bristol. Any money left over pays for free tickets the
          following year.
        </Text>
      </div>
      {footerColumns.map((column) => (
        <div key={column.title}>
          <Title order={4} mb="sm">
            {column.title}
          </Title>
          <ul className={classes.footerLinks}>
            {column.links.map((link) => (
              <li key={link.label}>
                <a href={link.href} onClick={link.href === '#' ? preventDefault : undefined}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <div className={classes.legal}>
        <span>© 2026 Fieldwork Events CIC</span>
        <span>
          <a href="#" onClick={preventDefault}>
            Privacy
          </a>
          {'  '}
          <a href="#" onClick={preventDefault}>
            Terms
          </a>
        </span>
      </div>
    </footer>
  );
}

function Site() {
  const [starred, setStarred] = useState(['thu-1', 'fri-3']);
  const [speaker, setSpeaker] = useState<Speaker | null>(null);
  const [modalOpened, setModalOpened] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const timeout = useRef<number>(undefined);

  const showToast = (message: string) => {
    setToast(message);
    window.clearTimeout(timeout.current);
    timeout.current = window.setTimeout(() => setToast(null), 2400);
  };

  const toggleStar = (slotId: string) => {
    const isStarred = starred.includes(slotId);
    setStarred((current) =>
      isStarred ? current.filter((id) => id !== slotId) : [...current, slotId]
    );
    showToast(isStarred ? 'Removed from your schedule' : 'Added to your schedule');
  };

  const openSpeaker = (item: Speaker) => {
    setSpeaker(item);
    setModalOpened(true);
  };

  return (
    <div className={classes.root}>
      <Nav />
      <Hero />
      <Audiences />
      <Speakers onOpen={openSpeaker} />
      <Schedule starred={starred} onToggleStar={toggleStar} />
      <Tickets onCheckout={() => showToast('Checkout opens in a new step')} />
      <Venue />
      <Sponsors />
      <Newsletter />
      <Footer />

      <SpeakerModal
        speaker={speaker}
        opened={modalOpened}
        starred={!!speaker && starred.includes(speaker.slot)}
        onClose={() => setModalOpened(false)}
        onToggleStar={toggleStar}
      />

      <Portal>
        <Transition mounted={toast !== null} transition="fade-up" duration={160}>
          {(styles) => (
            <div className={classes.toastAnchor}>
              <div className={classes.toast} style={styles} role="status">
                {toast}
              </div>
            </div>
          )}
        </Transition>
      </Portal>
    </div>
  );
}

export function Fieldwork() {
  return (
    <>
      <link rel="stylesheet" href={FONTS_URL} precedence="default" />
      <PresetProvider theme={theme} cssVariablesResolver={cssVariablesResolver}>
        <PresetFrame>
          <Site />
        </PresetFrame>
      </PresetProvider>
    </>
  );
}

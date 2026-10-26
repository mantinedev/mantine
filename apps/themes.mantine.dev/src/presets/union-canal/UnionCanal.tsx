'use client';

import { useState } from 'react';
import { PresetFrame } from '@/components/PresetFrame';
import { PresetProvider } from '@/components/PresetProvider';
import { initialDonors, INITIAL_PEOPLE, INITIAL_RAISED } from './data';
import type { Donation } from './DonateCard';
import { Donors } from './Donors';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { Impact } from './Impact';
import { NavBar } from './NavBar';
import { Partners } from './Partners';
import { Plan } from './Plan';
import { Story } from './Story';
import { cssVariablesResolver, theme } from './theme';
import { Volunteer } from './Volunteer';
import community from './Community.module.css';
import sections from './Sections.module.css';
import classes from './UnionCanal.module.css';

const FONTS_URL =
  'https://fonts.googleapis.com/css2?family=Rozha+One&family=Zilla+Slab:wght@500;600;700&family=Source+Sans+3:wght@400;500;600;700&display=swap';

function Campaign() {
  const [raised, setRaised] = useState(INITIAL_RAISED);
  const [people, setPeople] = useState(INITIAL_PEOPLE);
  const [donors, setDonors] = useState(initialDonors);
  const [shown, setShown] = useState(4);

  const donate = ({ amount, giftAid }: Donation) => {
    setRaised((value) => value + amount * (giftAid ? 1.25 : 1));
    setPeople((value) => value + 1);
    setDonors((list) => [
      { id: `you-${list.length}`, name: 'You', initials: 'Y', amount, when: 'Just now' },
      ...list,
    ]);
    setShown((value) => value + 1);
  };

  return (
    <div className={classes.root}>
      <NavBar />
      <Hero raised={raised} people={people} onDonate={donate} />
      <Plan />
      <Impact />
      <Story />
      <section
        className={`${sections.block} ${community.root}`}
        id="volunteer"
        aria-label="Donors and volunteering"
      >
        <div className={community.two}>
          <Donors donors={donors} shown={shown} onShowMore={() => setShown(donors.length)} />
          <Volunteer />
        </div>
      </section>
      <Partners />
      <Footer />
    </div>
  );
}

export function UnionCanal() {
  return (
    <>
      <link rel="stylesheet" href={FONTS_URL} precedence="default" />
      <PresetProvider theme={theme} cssVariablesResolver={cssVariablesResolver}>
        <PresetFrame>
          <Campaign />
        </PresetFrame>
      </PresetProvider>
    </>
  );
}

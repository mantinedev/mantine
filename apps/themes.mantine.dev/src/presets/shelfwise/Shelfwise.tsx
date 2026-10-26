'use client';

import { MantineProvider } from '@mantine/core';
import { PresetFrame } from '@/components/PresetFrame';
import { shops } from './data';
import { Demo } from './Demo';
import { Faq } from './Faq';
import { Features } from './Features';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { Nav } from './Nav';
import { Pricing } from './Pricing';
import { Quote } from './Quote';
import { cssVariablesResolver, theme } from './theme';
import classes from './Shelfwise.module.css';

const FONTS_URL =
  'https://fonts.googleapis.com/css2?family=Young+Serif&family=Albert+Sans:wght@400;500;600;700&display=swap';

function Landing() {
  return (
    <div className={classes.root}>
      <Nav />
      <Hero />

      <div className={classes.proof} id="stories">
        <p className={classes.proofText}>
          Used by 340 independent bookshops across the UK and Ireland
        </p>
        <div className={classes.shops}>
          {shops.map((shop) => (
            <span key={shop.name} className={classes.shop}>
              {shop.name}
              <small>{shop.town}</small>
            </span>
          ))}
        </div>
      </div>

      <Features />
      <Quote />
      <Pricing />
      <Faq />
      <Demo />
      <Footer />
    </div>
  );
}

export function Shelfwise() {
  return (
    <>
      <link rel="stylesheet" href={FONTS_URL} precedence="default" />
      <MantineProvider theme={theme} cssVariablesResolver={cssVariablesResolver}>
        <PresetFrame>
          <Landing />
        </PresetFrame>
      </MantineProvider>
    </>
  );
}

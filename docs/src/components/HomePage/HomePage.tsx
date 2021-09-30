import React from 'react';
import { useMantineTheme } from '@mantine/core';
import Head from '../Head/Head';
import { Jumbotron } from './Jumbotron/Jumbotron';
// import { Features } from './Features/Features';
import { Footer } from '../Footer/Footer';
import { Explore } from './Explore/Explore';
import { Community } from './Community/Community';
import { FeaturesSection } from './FeaturesSection/FeaturesSection';

export function HomePage() {
  const theme = useMantineTheme();
  return (
    <div>
      <Head title="Mantine" disableTitleTemplate />
      <div style={{ position: 'relative', zIndex: 1, boxShadow: theme.shadows.sm }}>
        <Jumbotron />
        <FeaturesSection />
        {/* <Features /> */}
        <Explore />
        <Community />
      </div>
      <Footer />
    </div>
  );
}

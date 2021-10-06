import React from 'react';
import { useMantineTheme } from '@mantine/core';
import Head from '../Head/Head';
import { Jumbotron } from './Jumbotron/Jumbotron';
import { Footer } from '../Footer/Footer';
import { Community } from './Community/Community';
import { Customize } from './Customize/Customize';
import { Usage } from './Usage/Usage';
import { Emotion } from './Emotion/Emotion';
import { Explore } from './Explore/Explore';

export function HomePage() {
  const theme = useMantineTheme();
  return (
    <div>
      <Head title="Mantine" disableTitleTemplate />
      <div style={{ position: 'relative', zIndex: 1, boxShadow: theme.shadows.sm }}>
        <Jumbotron />
        <Explore />
        <Customize />
        <Emotion />
        <Usage />
        <Community />
      </div>
      <Footer />
    </div>
  );
}

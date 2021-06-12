import React from 'react';
import Head from '../Head/Head';
import { Jumbotron } from './Jumbotron/Jumbotron';
import { Features } from './Features/Features';
import { Footer } from './Footer/Footer';
import { Explore } from './Explore/Explore';

export function HomePage() {
  return (
    <div>
      <Head title="Mantine" disableTitleTemplate />
      <Jumbotron />
      <Features />
      <Explore />
      <Footer />
    </div>
  );
}

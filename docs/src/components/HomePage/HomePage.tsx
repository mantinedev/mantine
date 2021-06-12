import React from 'react';
import Head from '../Head/Head';
import { Jumbotron } from './Jumbotron/Jumbotron';
import { Features } from './Features/Features';

export function HomePage() {
  return (
    <div>
      <Head title="Mantine" disableTitleTemplate />
      <Jumbotron />
      <Features />
    </div>
  );
}

import React from 'react';
import Head from '../Head/Head';
import { Jumbotron } from './Jumbotron/Jumbotron';

export function HomePage() {
  return (
    <div>
      <Head title="Mantine" disableTitleTemplate />
      <Jumbotron />
      Hello
    </div>
  );
}

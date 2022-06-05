import React from 'react';
import { useMantineTheme } from '@mantine/core';
import Head from '../Head/Head';
import { Jumbotron } from './Jumbotron/Jumbotron';
import { Components } from './Components/Components';
import { Banner } from './Banner/Banner';
import { JoinCommunity } from './JoinCommunity/JoinCommunity';
import { Footer } from '../Footer/Footer';
import { Usage } from './Usage/Usage';
import { CustomizeWithProps } from './CustomizeWithProps/CustomizeWithProps';
import { Customize } from './Customize/Customize';
import { DarkTheme } from './DarkTheme/DarkTheme';

export function HomePage() {
  const theme = useMantineTheme();
  return (
    <div>
      <Head title="Mantine" disableTitleTemplate />
      <div style={{ position: 'relative', zIndex: 1, boxShadow: theme.shadows.sm }}>
        <Jumbotron />
        <Components />
        <DarkTheme />
        <CustomizeWithProps />
        <Customize />
        <Banner />
        <Usage />
        <JoinCommunity />
      </div>
      <Footer />
    </div>
  );
}

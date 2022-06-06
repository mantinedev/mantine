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
import { Waves } from './Waves/Waves';

export function HomePage() {
  const theme = useMantineTheme();
  return (
    <div>
      <Head title="Mantine" disableTitleTemplate />
      <div style={{ position: 'relative', zIndex: 1, boxShadow: theme.shadows.sm }}>
        <Jumbotron />
        <Waves height={40} width={150} />
        <Components />
        <Waves height={32} width={110} flip alt />
        <DarkTheme />
        <Waves height={28} width={200} flip />
        <CustomizeWithProps />
        <Waves height={36} width={110} alt />
        <Customize />
        <Banner />
        <Usage />
        <JoinCommunity />
      </div>
      <Footer />
    </div>
  );
}

import React from 'react';
// import { useMantineTheme, Container, Box } from '@mantine/core';
import { useMantineTheme } from '@mantine/core';
import Head from '../Head/Head';
import { Jumbotron } from './Jumbotron/Jumbotron';
import { Components } from './Components/Components';
import { Banner } from './Banner/Banner';
import { JoinCommunity } from './JoinCommunity/JoinCommunity';
import { Footer } from '../Footer/Footer';
// import { MantineUiBanner } from '../MantineUiBanner/MantineUiBanner';
// import { Community } from './Community/Community';
// import { Customize } from './Customize/Customize';
import { Usage } from './Usage/Usage';
import { DarkTheme } from './DarkTheme/DarkTheme';
// import { Explore } from './Explore/Explore';

export function HomePage() {
  const theme = useMantineTheme();
  return (
    <div>
      <Head title="Mantine" disableTitleTemplate />
      <div style={{ position: 'relative', zIndex: 1, boxShadow: theme.shadows.sm }}>
        <Jumbotron />
        <Components />
        <DarkTheme />

        {/* <Explore />
        <Box
          sx={{
            paddingTop: 120,
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
          }}
        >
          <Container size={1100}>
            <MantineUiBanner />
          </Container>
        </Box> */}
        {/* <Customize /> */}
        <Usage />
        <Banner />
        <JoinCommunity />
        {/* <Community /> */}
      </div>
      <Footer />
    </div>
  );
}

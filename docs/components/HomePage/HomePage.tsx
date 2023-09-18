import React from 'react';
import Head from 'next/head';
import { Shell } from '../Shell';
import { Footer } from '../Footer';
import { Jumbotron } from './Jumbotron/Jumbotron';
import { Waves } from './Waves/Waves';
import { Components } from './Components/Components';
import { DarkTheme } from './DarkTheme/DarkTheme';
import { CustomizeWithProps } from './CustomizeWithProps/CustomizeWithProps';
import { CustomizeStyles } from './CustomizeStyles/CustomizeStyles';
import { Theming } from './Theming/Theming';
import { Banner } from './Banner/Banner';
import { Hooks } from './Hooks/Hooks';
import { Usage } from './Usage/Usage';
import { JoinCommunity } from './JoinCommunity/JoinCommunity';
import classes from './HomePage.module.css';

export function HomePage() {
  return (
    <>
      <Head>
        <title>Mantine</title>
      </Head>
      <Shell mobileNavbarOnly>
        <div className={classes.root}>
          <Jumbotron />
          <Waves height={40} width={150} />
          <Components />
          <Waves height={42} width={220} rotate flip alt />
          <DarkTheme />
          <Waves height={28} width={200} rotate />
          <CustomizeWithProps />
          <Waves height={36} width={110} alt flip />
          <CustomizeStyles />
          <Waves height={44} width={148} />
          <Theming />
          <Banner />
          <Hooks />
          <Waves height={42} width={220} rotate flip alt />
          <Usage />
          <Waves height={48} width={180} />
          <JoinCommunity />
        </div>
        <Footer />
      </Shell>
    </>
  );
}

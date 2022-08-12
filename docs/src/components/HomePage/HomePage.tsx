import React from 'react';
import { Box, MultiSelect } from '@mantine/core';
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
import { Theming } from './Theming/Theming';
import { Hooks } from './Hooks/Hooks';
import { Styles } from './Styles/Styles';
import { Waves } from './Waves/Waves';

export function HomePage() {
  return (
    <>
      <Head title="Mantine" disableTitleTemplate />
      <Box sx={(theme) => ({ position: 'relative', zIndex: 1, boxShadow: theme.shadows.sm })}>
        <MultiSelect
          label="Your favorite Rick and Morty character"
          placeholder="Pick all that you like"
          data={[
            { value: 'rick', label: 'Rick', group: 'Used to be a pickle' },
            { value: 'morty', label: 'Morty', group: '' },
            { value: 'beth', label: 'Beth', group: 'Never was a pickle' },
            { value: 'summer', label: 'Summer', group: 'Never was a pickle' },
          ]}
        />
        <Jumbotron />
        <Waves height={40} width={150} />
        <Components />
        <Waves height={42} width={220} flip alt />
        <DarkTheme />
        <Waves height={28} width={200} flip />
        <CustomizeWithProps />
        <Waves height={36} width={110} alt />
        <Customize />
        <Waves height={44} width={148} />
        <Theming />
        <Waves height={30} width={134} alt />
        <Styles />
        <Waves height={22} width={120} flip />
        <Hooks />
        <Banner />
        <Usage />
        <Waves height={42} width={150} alt />
        <JoinCommunity />
      </Box>
      <Footer />
    </>
  );
}

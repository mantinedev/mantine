import Head from 'next/head';
import { Footer } from '../Footer';
import { Shell } from '../Shell';
import { Banner } from './Banner/Banner';
import { Components } from './Components/Components';
import { CustomizeStyles } from './CustomizeStyles/CustomizeStyles';
import { CustomizeWithProps } from './CustomizeWithProps/CustomizeWithProps';
import { DarkTheme } from './DarkTheme/DarkTheme';
import { Hooks } from './Hooks/Hooks';
import { JoinCommunity } from './JoinCommunity/JoinCommunity';
import { Jumbotron } from './Jumbotron/Jumbotron';
import { Reviews } from './Reviews/Reviews';
import { Theming } from './Theming/Theming';
import { Usage } from './Usage/Usage';
import { Waves } from './Waves/Waves';
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
          <Waves height={42} width={280} rotate flip />
          <Reviews />
          <Waves height={58} width={160} alt />
          <Usage />
          <Waves height={48} width={180} flip />
          <JoinCommunity />
        </div>
        <Footer />
      </Shell>
    </>
  );
}

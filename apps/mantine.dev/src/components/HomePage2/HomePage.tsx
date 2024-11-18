import { useMantineColorScheme } from '@mantine/core';
import { useHotkeys } from '@mantine/hooks';
import { Footer } from '../Footer';
import { Shell } from '../Shell';
import { HomePageAccessibility } from './HomePageAccessibility/HomePageAccessibility';
import { HomePageCombobox } from './HomePageCombobox/HomePageCombobox';
import { HomePageCommunity } from './HomePageCommunity/HomePageCommunity';
import { HomePageComponents } from './HomePageComponents/HomePageComponents';
import { HomePageDarkColorScheme } from './HomePageDarkColorScheme/HomePageDarkColorScheme';
import { HomePageExtensions } from './HomePageExtensions/HomePageExtensions';
import { HomePageForm } from './HomePageForm/HomePageForm';
import { HomePageGetStarted } from './HomePageGetStarted/HomePageGetStarted';
import { HomePageHooks } from './HomePageHooks/HomePageHooks';
import { HomePageJoin } from './HomePageJoin/HomePageJoin';
import { HomePageJumbotron } from './HomePageJumbotron/HomePageJumbotron';
import { HomePageStyles } from './HomePageStyles/HomePageStyles';
import { HomePageTheming } from './HomePageTheming/HomePageTheming';
import { HomePageUI } from './HomePageUI/HomePageUI';
import classes from './HomePage.module.css';

export function HomePage() {
  const { toggleColorScheme } = useMantineColorScheme();
  useHotkeys([['mod+j', () => toggleColorScheme()]]);

  return (
    <Shell withNavbar={false} fluid withNav={false}>
      <div className={classes.root}>
        <HomePageJumbotron />
        <HomePageComponents />
        <HomePageAccessibility />
        <HomePageHooks />
        <HomePageTheming />
        <HomePageStyles />
        <HomePageDarkColorScheme />
        <HomePageCombobox />
        <HomePageExtensions />
        <HomePageForm />
        <HomePageUI />
        <HomePageCommunity />
        <HomePageJoin />
        <HomePageGetStarted />
      </div>
      <Footer withNavbar={false} />
    </Shell>
  );
}

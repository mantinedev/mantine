import { useMantineColorScheme } from '@mantine/core';
import { useHotkeys } from '@mantine/hooks';
import { DocsFooter } from '../DocsFooter';
import { Shell } from '../Shell';
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
import { HomePageSponsors } from './HomePageSponsors/HomePageSponsors';
import { HomePageStyles } from './HomePageStyles/HomePageStyles';
import { HomePageUI } from './HomePageUI/HomePageUI';
import classes from './HomePage.module.css';

export function HomePage() {
  const { toggleColorScheme } = useMantineColorScheme();
  useHotkeys([['mod+j', () => toggleColorScheme()]]);

  return (
    <Shell withNavbar={false} fluid withNav={false}>
      <div className={classes.root}>
        <HomePageJumbotron />
        <HomePageSponsors />
        <HomePageComponents />
        <HomePageHooks />
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
      <DocsFooter withNavbar={false} />
    </Shell>
  );
}

import { HomePageContainer } from '../shared/HomePageContainer/HomePageContainer';
import { HomePageDescription } from '../shared/HomePageDescription/HomePageDescription';
import { HomePageLearnMore } from '../shared/HomePageLearnMore/HomePageLearnMore';
import { HomePageTitle } from '../shared/HomePageTitle/HomePageTitle';
import classes from './HomePageCombobox.module.css';

export function HomePageCombobox() {
  return (
    <section className={classes.root}>
      <HomePageContainer>
        <HomePageTitle order={2}>Combobox component</HomePageTitle>

        <HomePageDescription className={classes.description}>Description</HomePageDescription>

        <HomePageLearnMore href="/">Explore 50+ Combobox examples</HomePageLearnMore>
      </HomePageContainer>
    </section>
  );
}

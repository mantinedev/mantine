import { HomePageContainer } from '../shared/HomePageContainer/HomePageContainer';
import { HomePageDescription } from '../shared/HomePageDescription/HomePageDescription';
import { HomePageLearnMore } from '../shared/HomePageLearnMore/HomePageLearnMore';
import { HomePageTitle } from '../shared/HomePageTitle/HomePageTitle';
import classes from './HomePageExtensions.module.css';

export function HomePageExtensions() {
  return (
    <section className={classes.root}>
      <HomePageContainer>
        <HomePageTitle order={2}>Extensions</HomePageTitle>

        <HomePageDescription className={classes.description}>Description</HomePageDescription>

        <HomePageLearnMore href="/">Extensions</HomePageLearnMore>
      </HomePageContainer>
    </section>
  );
}

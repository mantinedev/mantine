import { HomePageContainer } from '../shared/HomePageContainer/HomePageContainer';
import { HomePageDescription } from '../shared/HomePageDescription/HomePageDescription';
import { HomePageLearnMore } from '../shared/HomePageLearnMore/HomePageLearnMore';
import { HomePageTitle } from '../shared/HomePageTitle/HomePageTitle';
import classes from './HomePageDarkColorScheme.module.css';

export function HomePageDarkColorScheme() {
  return (
    <section className={classes.root}>
      <HomePageContainer>
        <HomePageTitle order={2}>Dark color scheme</HomePageTitle>

        <HomePageDescription className={classes.description}>Description</HomePageDescription>

        <HomePageLearnMore href="/">Learn more about dark color scheme</HomePageLearnMore>
      </HomePageContainer>
    </section>
  );
}

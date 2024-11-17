import { HomePageContainer } from '../shared/HomePageContainer/HomePageContainer';
import { HomePageDescription } from '../shared/HomePageDescription/HomePageDescription';
import { HomePageLearnMore } from '../shared/HomePageLearnMore/HomePageLearnMore';
import { HomePageTitle } from '../shared/HomePageTitle/HomePageTitle';
import classes from './HomePageTheming.module.css';

export function HomePageTheming() {
  return (
    <section className={classes.root}>
      <HomePageContainer>
        <HomePageTitle order={2}>Theming made easy</HomePageTitle>

        <HomePageDescription className={classes.description}>Description</HomePageDescription>

        <HomePageLearnMore href="/">Open theme editor</HomePageLearnMore>
      </HomePageContainer>
    </section>
  );
}

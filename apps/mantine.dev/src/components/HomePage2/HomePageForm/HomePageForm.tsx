import { HomePageContainer } from '../shared/HomePageContainer/HomePageContainer';
import { HomePageDescription } from '../shared/HomePageDescription/HomePageDescription';
import { HomePageLearnMore } from '../shared/HomePageLearnMore/HomePageLearnMore';
import { HomePageTitle } from '../shared/HomePageTitle/HomePageTitle';
import classes from './HomePageForm.module.css';

export function HomePageForm() {
  return (
    <section className={classes.root}>
      <HomePageContainer>
        <HomePageTitle order={2}>Form library</HomePageTitle>

        <HomePageDescription className={classes.description}>Description</HomePageDescription>

        <HomePageLearnMore href="/">Open form editor</HomePageLearnMore>
      </HomePageContainer>
    </section>
  );
}

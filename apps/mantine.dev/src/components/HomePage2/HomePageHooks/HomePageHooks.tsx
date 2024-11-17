import { HomePageContainer } from '../shared/HomePageContainer/HomePageContainer';
import { HomePageDescription } from '../shared/HomePageDescription/HomePageDescription';
import { HomePageTitle } from '../shared/HomePageTitle/HomePageTitle';
import classes from './HomePageHooks.module.css';

export function HomePageHooks() {
  return (
    <section className={classes.root}>
      <HomePageContainer>
        <HomePageTitle order={2}>Hooks library</HomePageTitle>

        <HomePageDescription className={classes.description}>Description</HomePageDescription>
      </HomePageContainer>
    </section>
  );
}

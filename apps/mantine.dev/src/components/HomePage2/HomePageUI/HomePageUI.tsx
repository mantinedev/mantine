import { HomePageContainer } from '../shared/HomePageContainer/HomePageContainer';
import { HomePageDescription } from '../shared/HomePageDescription/HomePageDescription';
import { HomePageTitle } from '../shared/HomePageTitle/HomePageTitle';
import classes from './HomePageUI.module.css';

export function HomePageUI() {
  return (
    <section className={classes.root}>
      <HomePageContainer>
        <HomePageTitle order={2}>Mantine UI</HomePageTitle>
        <HomePageDescription className={classes.description}>Description</HomePageDescription>
      </HomePageContainer>
    </section>
  );
}

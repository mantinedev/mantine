import { HomePageContainer } from '../shared/HomePageContainer/HomePageContainer';
import classes from './HomePageFooter.module.css';

export function HomePageFooter() {
  return (
    <footer className={classes.root}>
      <HomePageContainer>Footer</HomePageContainer>
    </footer>
  );
}

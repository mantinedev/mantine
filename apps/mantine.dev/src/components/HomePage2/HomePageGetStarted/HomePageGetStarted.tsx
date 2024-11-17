import { FrameworksGuides } from '@/components/FrameworksGuides';
import { HomePageContainer } from '../shared/HomePageContainer/HomePageContainer';
import { HomePageDescription } from '../shared/HomePageDescription/HomePageDescription';
import { HomePageLearnMore } from '../shared/HomePageLearnMore/HomePageLearnMore';
import { HomePageTitle } from '../shared/HomePageTitle/HomePageTitle';
import classes from './HomePageGetStarted.module.css';

export function HomePageGetStarted() {
  return (
    <section className={classes.root}>
      <HomePageContainer>
        <HomePageTitle order={2}>Ready to get started?</HomePageTitle>

        <HomePageDescription className={classes.description}>
          Mantine can be used with any modern React framework or build tool: get started with
          Next.js, Vite, Remix and other tools in minutes by following the installation guide or
          using one of the available templates.
        </HomePageDescription>

        <HomePageLearnMore href="/">Get started without a framework</HomePageLearnMore>

        <div className={classes.guides}>
          <FrameworksGuides />
        </div>
      </HomePageContainer>
    </section>
  );
}

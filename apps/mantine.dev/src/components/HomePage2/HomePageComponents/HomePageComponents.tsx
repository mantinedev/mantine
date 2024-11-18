import { HomePageContainer } from '../shared/HomePageContainer/HomePageContainer';
import { HomePageDescription } from '../shared/HomePageDescription/HomePageDescription';
import { HomePageTabs } from '../shared/HomePageTabs/HomePageTabs';
import { HomePageTitle } from '../shared/HomePageTitle/HomePageTitle';
import { HomePageDatePickerDemos } from './demos/HomePageDatePickersDemo';
import { HomePageInputsDemo } from './demos/HomePageInputsDemo';
import { HomePageNavigationDemo } from './demos/HomePageNavigationDemo';
import { HomePageOverlaysDemo } from './demos/HomePageOverlaysDemo';
import classes from './HomePageComponents.module.css';

export function HomePageComponents() {
  return (
    <section className={classes.root}>
      <HomePageContainer>
        <HomePageTitle order={2}>120+ components</HomePageTitle>

        <HomePageDescription className={classes.description}>
          Build your next app faster with high-quality, well-tested components. Mantine includes
          everything you need to create complex we applications with ease: custom select, date
          pickers, notifications, modals, and more.
        </HomePageDescription>

        <HomePageTabs
          data={[
            { label: 'Inputs', value: 'inputs', content: <HomePageInputsDemo /> },
            { label: 'Overlays', value: 'overlays', content: <HomePageOverlaysDemo /> },
            { label: 'Navigation', value: 'navigation', content: <HomePageNavigationDemo /> },
            {
              label: 'Date pickers',
              value: 'date-pickers',
              content: <HomePageDatePickerDemos />,
            },
          ]}
        />
      </HomePageContainer>
    </section>
  );
}

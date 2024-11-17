import { IconArrowUpRight } from '@tabler/icons-react';
import { Button } from '@mantine/core';
import { GithubIcon } from '@mantinex/dev-icons';
import { HomePageContainer } from '../shared/HomePageContainer/HomePageContainer';
import { HomePageDescription } from '../shared/HomePageDescription/HomePageDescription';
import { HomePageTitle } from '../shared/HomePageTitle/HomePageTitle';
import classes from './HomePageJumbotron.module.css';

export function HomePageJumbotron() {
  return (
    <section className={classes.root}>
      <HomePageContainer>
        <HomePageTitle order={1}>
          A fully featured React
          <br /> components library
        </HomePageTitle>

        <HomePageDescription>
          Build fully functional accessible web applications faster than ever – Mantine includes
          more than 120 customizable components and 70 hooks to cover you in any situation
        </HomePageDescription>

        <div className={classes.actions}>
          <Button
            className={classes.action}
            data-get-started
            justify="space-between"
            rightSection={<IconArrowUpRight size={26} stroke={1.5} />}
          >
            Get Started
          </Button>
          <Button
            className={classes.action}
            data-github
            rightSection={<GithubIcon size={26} />}
            justify="space-between"
          >
            GitHub
          </Button>
        </div>
      </HomePageContainer>
    </section>
  );
}

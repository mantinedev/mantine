import Head from 'next/head';
import Link from 'next/link';
import { ArrowUpRightIcon } from '@phosphor-icons/react';
import { Box, Button } from '@mantine/core';
import { GithubIcon } from '@mantinex/dev-icons';
import { meta } from '@mantinex/mantine-meta';
import { HomePageContainer } from '../shared/HomePageContainer/HomePageContainer';
import { HomePageDescription } from '../shared/HomePageDescription/HomePageDescription';
import { HomePageTitle } from '../shared/HomePageTitle/HomePageTitle';
import darkImg from './images/dark-collage.webp';
import lightImg from './images/light-collage.webp';
import classes from './HomePageJumbotron.module.css';

const preloadScript = `(function(){try{var s=localStorage.getItem('mantine-color-scheme-value');if(s==='auto'){s=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}var l=document.createElement('link');l.rel='preload';l.as='image';l.fetchPriority='high';l.media='(min-width: 62em)';l.href=s==='dark'?'${darkImg.src}':'${lightImg.src}';document.head.appendChild(l)}catch(e){}})()`;

export function HomePageJumbotron() {
  return (
    <section className={classes.root}>
      <Head>
        <script dangerouslySetInnerHTML={{ __html: preloadScript }} />
      </Head>
      <div className={classes.overlay} />
      <HomePageContainer className={classes.container}>
        <Box
          darkHidden
          className={classes.image}
          style={{ backgroundImage: `url(${lightImg.src})` }}
        />
        <Box
          lightHidden
          className={classes.image}
          style={{ backgroundImage: `url(${darkImg.src})` }}
        />
        <div className={classes.main}>
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
              component={Link}
              href="/getting-started"
              className={classes.action}
              data-get-started
              justify="space-between"
              rightSection={<ArrowUpRightIcon size={26} />}
            >
              Get Started
            </Button>
            <Button
              className={classes.action}
              data-github
              rightSection={<GithubIcon size={26} />}
              justify="space-between"
              component="a"
              href={meta.gitHubLinks.mantine}
            >
              GitHub
            </Button>
          </div>
        </div>
      </HomePageContainer>
    </section>
  );
}

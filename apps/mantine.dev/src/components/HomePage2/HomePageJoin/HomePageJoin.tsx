import { SimpleGrid, Stack } from '@mantine/core';
import { HomePageContainer } from '../shared/HomePageContainer/HomePageContainer';
import { HomePageDescription } from '../shared/HomePageDescription/HomePageDescription';
import { HomePageTitle } from '../shared/HomePageTitle/HomePageTitle';
import { DiscordCard } from './SocialCards';
import { GitHubCard, TwitterCard } from './SocialCards/SocialCards';
import classes from './HomePageJoin.module.css';

export function HomePageJoin() {
  return (
    <section className={classes.root}>
      <HomePageContainer>
        <HomePageTitle order={2}>Join the community</HomePageTitle>

        <HomePageDescription>
          Mantine is an open-source project with a growing community of developers and contributors.
          Join us on GitHub, Discord, Twitter and other platforms to stay updated and get help with
          your projects.
        </HomePageDescription>

        <div className={classes.cards}>
          <SimpleGrid cols={{ md: 2 }} spacing={10}>
            <DiscordCard />
            <Stack gap={10}>
              <GitHubCard />
              <TwitterCard />
            </Stack>
          </SimpleGrid>
        </div>
      </HomePageContainer>
    </section>
  );
}

import { IconExternalLink } from '@tabler/icons-react';
import { Anchor, Avatar, Group, SimpleGrid, Text } from '@mantine/core';
import { meta } from '@mantinex/mantine-meta';
import { HomePageContainer } from '../shared/HomePageContainer/HomePageContainer';
import { HomePageDescription } from '../shared/HomePageDescription/HomePageDescription';
import { HomePageLearnMore } from '../shared/HomePageLearnMore/HomePageLearnMore';
import { HomePageTitle } from '../shared/HomePageTitle/HomePageTitle';
import { ReviewData, reviews } from './reviews-data';
import classes from './HomePageCommunity.module.css';

interface ReviewProps {
  data: ReviewData;
}

function Review({ data }: ReviewProps) {
  return (
    <article className={classes.review}>
      <div className={classes.reviewHeader}>
        <Group gap="sm">
          <Avatar src={data.author.avatar} alt={data.author.nickname} size={30} />
          <Text
            component="a"
            href={`https://github.com/${data.author.nickname}`}
            className={classes.reviewAuthor}
          >
            @{data.author.nickname}
          </Text>
        </Group>

        <Anchor className={classes.reviewExternalLink} href={data.link} target="_blank">
          <span>Open on GitHub</span>
          <IconExternalLink size={16} />
        </Anchor>
      </div>

      <Text component="a" href={data.link} target="_blank" className={classes.reviewTitle}>
        {data.title}
      </Text>

      <div className={classes.reviewBody} dangerouslySetInnerHTML={{ __html: data.body }} />
    </article>
  );
}

interface StatProps {
  label: string;
  value: string;
  link: string;
}

function Stat({ label, value, link }: StatProps) {
  return (
    <a href={link} target="_blank" className={classes.stat} rel="noreferrer">
      <Text className={classes.statValue}>{value}</Text>
      <Text className={classes.statLabel}>{label}</Text>
    </a>
  );
}

export function HomePageCommunity() {
  const items = reviews.map((data, index) => <Review key={index} data={data} />);

  return (
    <section className={classes.root}>
      <HomePageContainer className={classes.container}>
        <SimpleGrid cols={{ md: 2 }} spacing={60}>
          <div>
            <div className={classes.primaryColumn}>
              <HomePageTitle order={2}>Loved by the community</HomePageTitle>
              <HomePageDescription>
                Mantine is used by thousands of developers from all over the world. It is a
                community-driven project with more than 500 contributors.
              </HomePageDescription>

              <HomePageLearnMore href="/">View all reviews from the community</HomePageLearnMore>

              <div className={classes.stats}>
                <Stat value="28,000+" label="Stars on GitHub" link={meta.gitHubLinks.mantine} />
                <Stat
                  value="2.2M+"
                  label="Monthly downloads"
                  link="https://www.npmjs.com/package/@mantine/hooks"
                />
                <Stat value="11,000+" label="Discord members" link={meta.discordLink} />
              </div>
            </div>
          </div>

          <div className={classes.secondaryColumn}>{items}</div>
        </SimpleGrid>
      </HomePageContainer>
    </section>
  );
}

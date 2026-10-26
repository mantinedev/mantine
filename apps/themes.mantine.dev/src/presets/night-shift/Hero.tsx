import { Avatar, Badge, Text, Title } from '@mantine/core';
import { CoverArt } from './CoverArt';
import { people } from './data';
import { PersonAvatar } from './PersonAvatar';
import classes from './NightShift.module.css';

export function Hero() {
  return (
    <section className={classes.hero} aria-labelledby="ns-episode-title">
      <div className={classes.cover}>
        <CoverArt label="Cover art: a bakery window glowing orange on a dark street" />
      </div>

      <div className={classes.heroText}>
        <div className={classes.epLine}>
          <Badge variant="outline">Episode 48</Badge>
          <span className={classes.tnum}>21 October 2026</span>
          <span className={classes.tnum}>52 min</span>
        </div>

        <Title order={1} id="ns-episode-title" className={classes.episodeTitle}>
          The bakers of Leith
        </Title>

        <Text className={classes.desc}>
          At two in the morning, while Edinburgh sleeps, a small bakery on the Shore lights its
          ovens. Ruth spends a whole night with the team who bake bread for forty cafés before the
          first bus runs.
        </Text>

        <div className={classes.guestsLine}>
          <Avatar.Group spacing={8}>
            {people.map((person) => (
              <PersonAvatar key={person.initials} person={person} size={34} />
            ))}
          </Avatar.Group>
          <span>
            With <b>Ewan Morrison</b> and <b>Priya Nair</b>, hosted by <b>Ruth Abernethy</b>
          </span>
        </div>
      </div>
    </section>
  );
}

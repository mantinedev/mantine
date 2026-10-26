import { Image, Text, Title } from '@mantine/core';
import { FACTS } from './data';
import classes from './PianoLessons.module.css';

export function Hero() {
  return (
    <section className={`${classes.wrap} ${classes.hero}`} aria-labelledby="pl-hero-title">
      <div>
        <Title order={1} id="pl-hero-title" className={classes.heroTitle}>
          Piano lessons for <i>curious</i> beginners and players coming back
        </Title>
        <Text className={classes.heroText}>
          One-to-one lessons in my studio by the Oudegracht, or online. Children from six, adults of
          any age, and anyone who stopped at grade three and still thinks about it.
        </Text>
        <div className={classes.facts}>
          {FACTS.map((fact) => (
            <span key={fact.label}>
              <b>{fact.value}</b>
              {fact.label}
            </span>
          ))}
        </div>
      </div>
      <div className={classes.heroPhoto}>
        <Image
          src="/presets/piano-lesson-booking/keys.jpg"
          alt="Close-up of piano keys in warm light"
          h="100%"
        />
        <span className={classes.photoTag}>The studio piano, a 1964 Schimmel upright</span>
      </div>
    </section>
  );
}

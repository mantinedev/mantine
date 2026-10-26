import { Image, List, Text, Title } from '@mantine/core';
import { ABOUT_POINTS } from './data';
import classes from './PianoLessons.module.css';

export function About() {
  return (
    <section
      className={`${classes.wrap} ${classes.about}`}
      id="about"
      aria-labelledby="pl-about-title"
    >
      <div className={classes.aboutPhoto}>
        <Image
          src="/presets/piano-lesson-booking/room.jpg"
          alt="An old upright piano and a bench by a window in a quiet room"
          h="100%"
        />
      </div>
      <div>
        <Title order={2} id="pl-about-title" className={classes.sectionTitle}>
          Hello, I’m Anouk
        </Title>
        <Text className={classes.aboutText}>
          I studied at the Utrecht Conservatory and played in a hotel bar for six years before I
          realised I liked explaining music more than performing it. I teach the way I wish I had
          been taught: real pieces from the first week, scales when they help, and no shame about
          practising ten minutes a day.
        </Text>
        <List
          className={classes.aboutList}
          classNames={{ itemIcon: classes.aboutIcon, itemWrapper: classes.aboutItem }}
          spacing={10}
          icon={<span aria-hidden="true">♩</span>}
        >
          {ABOUT_POINTS.map((point) => (
            <List.Item key={point}>{point}</List.Item>
          ))}
        </List>
      </div>
    </section>
  );
}

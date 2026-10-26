import { Image, Title } from '@mantine/core';
import { FIRST_LESSON } from './data';
import classes from './PianoLessons.module.css';

export function FirstLesson() {
  return (
    <section className={classes.first} id="first" aria-labelledby="pl-first-title">
      <div className={`${classes.wrap} ${classes.firstInner}`}>
        <div>
          <Title order={2} id="pl-first-title" className={classes.sectionTitle}>
            What happens in a first lesson
          </Title>
          <ol className={classes.timeline}>
            {FIRST_LESSON.map((step) => (
              <li key={step.time}>
                <time>{step.time}</time>
                <span>
                  <b>{step.title}</b>
                  {step.text}
                </span>
              </li>
            ))}
          </ol>
        </div>
        <div className={classes.firstPhoto}>
          <Image
            src="/presets/piano-lesson-booking/grand.jpg"
            alt="Inside a grand piano: the golden frame, the strings and the hammers"
            h="100%"
          />
        </div>
      </div>
    </section>
  );
}

import { Badge, Paper, Title } from '@mantine/core';
import { REVIEWS } from './data';
import classes from './PianoLessons.module.css';

export function Reviews() {
  return (
    <section
      className={`${classes.wrap} ${classes.reviews}`}
      id="reviews"
      aria-labelledby="pl-reviews-title"
    >
      <Title order={2} id="pl-reviews-title" className={classes.sectionTitle}>
        From students and parents
      </Title>
      <div className={classes.reviewGrid}>
        {REVIEWS.map((review, index) => (
          <Paper
            key={review.name}
            component="article"
            className={classes.review}
            mod={{ big: index === 0 }}
          >
            <blockquote>{review.quote}</blockquote>
            <div>
              {review.chip && <Badge>{review.chip}</Badge>}
              <div className={classes.who}>
                <b>{review.name}</b>, {review.detail}
              </div>
            </div>
          </Paper>
        ))}
      </div>
    </section>
  );
}

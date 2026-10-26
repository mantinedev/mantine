import { Card, Progress, Rating, Title } from '@mantine/core';
import { ratingBreakdown, reviews } from './data';
import { SectionHead } from './SectionHead';
import common from './Halcyon.module.css';
import classes from './Reviews.module.css';

export function Reviews() {
  return (
    <section className={common.section} id="reviews" aria-labelledby="hc-reviews-title">
      <SectionHead id="hc-reviews-title" title="What early owners say" />
      <div className={classes.reviews}>
        <div>
          <b className={classes.score}>4.8</b>
          <Rating value={5} aria-label="4.8 out of 5 stars" />
          <div className={classes.count}>From 1,212 reviews of the first edition</div>
          <ul className={classes.bars} aria-label="Rating breakdown">
            {ratingBreakdown.map((row) => (
              <li key={row.label}>
                <span>{row.label}</span>
                <Progress value={row.value} aria-label={`${row.label}: ${row.value}%`} />
                <span className={classes.percent}>{row.value}%</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={classes.list}>
          {reviews.map((review) => (
            <Card
              key={review.title}
              component="article"
              padding={24}
              className={classes.review}
              data-wide={review.wide || undefined}
            >
              <Rating value={review.rating} aria-label={`${review.rating} out of 5 stars`} />
              <Title order={4}>{review.title}</Title>
              <p className={classes.body}>{review.body}</p>
              <span className={classes.who}>
                <b>{review.who}</b>, verified owner since {review.since}
              </span>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

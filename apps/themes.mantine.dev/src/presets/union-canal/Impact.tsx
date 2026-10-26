import { Image, Stat, Title } from '@mantine/core';
import { impact, PHOTOS } from './data';
import classes from './Impact.module.css';
import sections from './Sections.module.css';

const photos = [
  {
    file: 'waterwitch-narrowboat.jpg',
    alt: 'A blue narrowboat with hand-painted lettering moving along the Union Canal past bare winter trees',
    caption: 'Boats west of the bridge can only turn back.',
  },
  {
    file: 'kingsknowe-towpath.jpg',
    alt: 'The towpath at Kingsknowe in summer, running between trees and the canal on one side and flats on the other',
    caption: 'Kingsknowe, a daily route to school and work.',
  },
];

export function Impact() {
  return (
    <section className={`${sections.block} ${classes.root}`} aria-labelledby="impact-title">
      <div className={sections.head}>
        <Title order={2} id="impact-title">
          Why this stretch matters
        </Title>
      </div>

      <div className={classes.grid}>
        {impact.map((item) => (
          <Stat key={item.value} className={classes.stat}>
            <Stat.Value>{item.value}</Stat.Value>
            <Stat.Label>{item.label}</Stat.Label>
          </Stat>
        ))}
      </div>

      <div className={classes.photos}>
        {photos.map((photo) => (
          <figure key={photo.file} className={classes.photo}>
            <Image
              src={`${PHOTOS}/${photo.file}`}
              alt={photo.alt}
              radius="lg"
              className={classes.photoImage}
            />
            <figcaption>{photo.caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

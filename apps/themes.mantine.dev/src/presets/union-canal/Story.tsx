import { Blockquote, Image } from '@mantine/core';
import { PHOTOS } from './data';
import sections from './Sections.module.css';
import classes from './Story.module.css';

export function Story() {
  return (
    <section className={sections.block} aria-label="A boater’s story">
      <div className={classes.root}>
        <figure className={classes.boat}>
          <Image
            src={`${PHOTOS}/edinburgh-quay.jpg`}
            alt="Narrowboats moored at Edinburgh Quay, on the city side of the canal"
            radius="lg"
            className={classes.boatImage}
          />
          <figcaption>Edinburgh Quay, on the city side of the bridge</figcaption>
        </figure>
        <Blockquote
          cite={
            <>
              <b className={classes.name}>Morag Lennie</b>, lives aboard the narrowboat Mavis
            </>
          }
        >
          “For two winters I’ve been moored west of the bridge. The shop, the doctor and my daughter
          are all on the other side. Getting it open again would give me my city back.”
        </Blockquote>
      </div>
    </section>
  );
}

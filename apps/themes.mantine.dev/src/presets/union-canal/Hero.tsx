import { Image, Progress } from '@mantine/core';
import { formatMoney, GOAL, PHOTOS } from './data';
import { type Donation, DonateCard } from './DonateCard';
import classes from './Hero.module.css';

interface HeroProps {
  raised: number;
  people: number;
  onDonate: (donation: Donation) => void;
}

export function Hero({ raised, people, onDonate }: HeroProps) {
  return (
    <section className={classes.root} id="campaign" aria-labelledby="hero-title">
      <figure className={classes.photo}>
        <div className={classes.photoFrame}>
          <Image
            src={`${PHOTOS}/fountainbridge.jpg`}
            alt="The Union Canal at Fountainbridge in low winter sun, with narrowboats moored beside new flats and people walking the towpath"
            h="100%"
          />
          <figcaption>Fountainbridge, where the reopened bridge leads</figcaption>
        </div>
      </figure>

      <div className={classes.panel}>
        <div className={classes.panelInner}>
          <div>
            <h1 id="hero-title" className={classes.title}>
              Open the Leamington bridge and mend the Wester Hailes towpath
            </h1>
            <p className={classes.story}>
              The lift bridge at Fountainbridge has been stuck shut since a winter storm in 2024,
              and a mile and a quarter of towpath at Wester Hailes is crumbling into the water. Help
              us raise £180,000 so boats can pass and people can walk and cycle the canal again by
              next summer.
            </p>
            <div className={classes.progressBlock}>
              <div className={classes.raised}>
                <b>{formatMoney(raised)}</b>
                <span>raised of £180,000</span>
              </div>
              <Progress
                value={Math.min(100, (raised / GOAL) * 100)}
                size={14}
                radius={7}
                className={classes.bar}
                classNames={{ section: classes.barSection }}
                aria-label="Raised so far"
              />
              <div className={classes.facts}>
                <span>
                  <b>{people.toLocaleString('en-GB')}</b>people have given
                </span>
                <span>
                  <b>41</b>days left
                </span>
                <span>
                  <b>{formatMoney(Math.max(0, GOAL - raised))}</b>still to raise
                </span>
              </div>
            </div>
          </div>

          <DonateCard onDonate={onDonate} />
        </div>
      </div>
    </section>
  );
}

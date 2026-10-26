import { Button, Image, Text, Title } from '@mantine/core';
import { MODE_LABELS, type Mode, PASSES, PHOTOS, pluralize, STOPS, type Trip } from './data';
import classes from './Hero.module.css';

interface HeroProps {
  trip: Trip;
  mode: Mode;
}

function Wave() {
  return (
    <svg viewBox="0 0 26 10" aria-hidden="true" className={classes.wave}>
      <path
        d="M1 5c3-4 5-4 8 0s5 4 8 0 5-4 8 0"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Hero({ trip, mode }: HeroProps) {
  return (
    <>
      <section className={classes.hero} aria-labelledby="saltwater-hero-title">
        <Image
          className={classes.image}
          src={`${PHOTOS}/hero.jpg`}
          alt="Turquoise water and white sand at Luskentyre on Harris, seen past a wooden field gate"
        />
        <span className={classes.photoTag}>Luskentyre, Harris</span>
        <div className={classes.copy}>
          <Title order={1} id="saltwater-hero-title" className={classes.title}>
            Twelve islands, <em>one ticket</em>
          </Title>
          <Text className={classes.lead}>
            Hop the Hebrides on one pass. Every ferry from Oban to Stornoway, the island buses and a
            seat on the boat to Staffa, for 8, 15 or 30 days.
          </Text>
          <div className={classes.ctas}>
            <Button component="a" href="#route" color="aqua">
              Plan your route
            </Button>
            <Button component="a" href="#passes" variant="default" className={classes.ghost}>
              See passes
            </Button>
          </div>
        </div>

        <div className={classes.ticketWrap} aria-label="Your current trip">
          <div className={classes.ticket}>
            <div className={classes.ticketMain}>
              <div className={classes.kicker}>Saltwater Pass 2027</div>
              <div className={classes.days}>{PASSES[trip.passIndex].days} days</div>
              <div className={classes.line}>
                {pluralize(trip.list.length, 'island', 'islands')}, {MODE_LABELS[mode]}
              </div>
              <div className={classes.route}>
                <span>Oban</span>
                <i />
                <span>{trip.end}</span>
              </div>
            </div>
            <div className={classes.stub}>
              <span className={classes.punch} />
              <span className={classes.barcode} />
            </div>
          </div>
        </div>
      </section>

      <div className={classes.names} aria-label="Islands on the pass">
        {STOPS.map((stop, index) => (
          <span key={stop.id}>
            {index > 0 && <Wave />}
            {stop.gd}
            <small>{stop.name}</small>
          </span>
        ))}
      </div>
    </>
  );
}

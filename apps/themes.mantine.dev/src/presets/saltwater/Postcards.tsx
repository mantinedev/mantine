import { useState } from 'react';
import { Image, UnstyledButton } from '@mantine/core';
import { PHOTOS, POSTCARDS, type PostcardData } from './data';
import { SectionHead } from './SectionHead';
import classes from './Postcards.module.css';

function MiniStamp({ kind }: { kind: PostcardData['stamp'] }) {
  return (
    <span className={classes.miniStamp}>
      <svg viewBox="0 0 30 30" aria-hidden="true">
        {kind === 'wave' && (
          <>
            <path
              d="M3 18c4-5 8-5 12 0s8 5 12 0"
              fill="none"
              stroke="#0b4a5a"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <circle cx="21" cy="9" r="4" fill="#2bb8aa" />
          </>
        )}
        {kind === 'columns' && (
          <>
            <rect x="6" y="6" width="18" height="18" fill="#0b4a5a" />
            <path d="M9 24V12M13 24V9M17 24V13M21 24V10" stroke="#fff" strokeWidth="2" />
          </>
        )}
        {kind === 'cross' && <path d="M15 4v22M8 11h14" stroke="#0b4a5a" strokeWidth="3" />}
      </svg>
    </span>
  );
}

function Postcard({ card }: { card: PostcardData }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <UnstyledButton
      className={classes.postcard}
      aria-pressed={flipped}
      aria-label={`Postcard from ${card.place}, ${flipped ? 'turn back' : 'turn over'}`}
      onClick={() => setFlipped((current) => !current)}
    >
      <span className={classes.inner}>
        <span className={`${classes.face} ${classes.front}`}>
          <Image src={`${PHOTOS}/${card.photo}`} alt={card.alt} h="100%" />
          <span className={classes.greet}>
            Greetings
            <br />
            from {card.place}
          </span>
          <span className={classes.flip}>Turn over</span>
        </span>
        <span className={`${classes.face} ${classes.back}`}>
          <span className={classes.message}>{card.message}</span>
          <span className={classes.address}>
            <MiniStamp kind={card.stamp} />
            <span className={classes.line}>{card.to[0]}</span>
            <span className={classes.line}>{card.to[1]}</span>
            <span className={classes.line} />
          </span>
        </span>
      </span>
      <span className={classes.who}>
        <b>{card.who}</b>, {card.pass}
      </span>
    </UnstyledButton>
  );
}

export function Postcards() {
  return (
    <section className={classes.root} aria-labelledby="saltwater-cards-title">
      <SectionHead
        id="saltwater-cards-title"
        title="Wish you were here"
        description="Postcards from people who travelled on the pass last summer. Turn them over."
      />
      <div className={classes.grid}>
        {POSTCARDS.map((card) => (
          <Postcard key={card.place} card={card} />
        ))}
      </div>
    </section>
  );
}

import { IconCheck, IconPlus } from '@tabler/icons-react';
import { Image, UnstyledButton } from '@mantine/core';
import { PHOTOS, STAMPS, STOPS_BY_ID } from './data';
import { SectionHead } from './SectionHead';
import classes from './Stamps.module.css';

interface StampsProps {
  selected: string[];
  onToggle: (id: string, announce?: boolean) => void;
}

function TireeArt() {
  return (
    <svg viewBox="0 0 160 200" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
      <rect width="160" height="200" fill="#9fd6e3" />
      <circle cx="118" cy="52" r="22" fill="#ffe08a" />
      <path d="M0 120c20-10 40-10 60 0s40 10 60 0 30-8 40-4v84H0z" fill="#2bb8aa" />
      <path d="M0 140c20-10 40-10 60 0s40 10 60 0 30-8 40-4v64H0z" fill="#0b4a5a" />
      <path d="M0 172c26-12 60-14 90-6s52 6 70 0v34H0z" fill="#f2e7c9" />
      <path d="M58 128l26-34 4 36z" fill="#fff" />
      <path d="M84 94v40" stroke="#0b2730" strokeWidth="2" />
    </svg>
  );
}

function PostmarkSymbol() {
  return (
    <svg width="0" height="0" className={classes.symbols} aria-hidden="true">
      <symbol id="saltwater-postmark" viewBox="0 0 120 120">
        <g fill="none" stroke="currentColor" strokeWidth="3">
          <circle cx="46" cy="60" r="34" />
          <circle cx="46" cy="60" r="26" strokeWidth="1.6" />
          <path d="M84 44c6-5 11-5 17 0s11 5 17 0M84 56c6-5 11-5 17 0s11 5 17 0M84 68c6-5 11-5 17 0s11 5 17 0M84 80c6-5 11-5 17 0s11 5 17 0" />
        </g>
        <path id="saltwater-postmark-arc" d="M22 60a24 24 0 0 1 48 0" fill="none" />
        <text
          fontFamily="DM Sans, Arial"
          fontWeight="700"
          fontSize="9.5"
          fill="currentColor"
          letterSpacing="1.5"
        >
          <textPath href="#saltwater-postmark-arc" startOffset="50%" textAnchor="middle">
            SALTWATER
          </textPath>
        </text>
        <text
          x="46"
          y="66"
          fontFamily="DM Sans, Arial"
          fontWeight="700"
          fontSize="11"
          fill="currentColor"
          textAnchor="middle"
        >
          2027
        </text>
      </symbol>
    </svg>
  );
}

export function Stamps({ selected, onToggle }: StampsProps) {
  return (
    <section className={classes.root} id="islands" aria-labelledby="saltwater-islands-title">
      <PostmarkSymbol />
      <SectionHead
        id="saltwater-islands-title"
        title="Collect the islands"
        description="Every island is a stamp. Add the ones you want and they get postmarked onto your trip."
      />
      <div className={classes.grid}>
        {STAMPS.map((stamp) => {
          const stop = STOPS_BY_ID[stamp.id];
          const on = selected.includes(stamp.id);
          return (
            <UnstyledButton
              key={stamp.id}
              className={classes.stamp}
              aria-pressed={on}
              onClick={() => onToggle(stamp.id, true)}
            >
              <span className={classes.paper}>
                <span className={classes.picture}>
                  {stamp.photo ? (
                    <Image
                      src={`${PHOTOS}/${stamp.photo}`}
                      alt={`${stamp.caption}, ${stop.name}`}
                      h="100%"
                    />
                  ) : (
                    <TireeArt />
                  )}
                  <span className={classes.value}>{stamp.value}</span>
                </span>
                <span className={classes.caption}>
                  <b>{stop.name}</b>
                  <span>{stop.gd}</span>
                </span>
              </span>
              <svg className={classes.postmark} aria-hidden="true">
                <use href="#saltwater-postmark" />
              </svg>
              <span className={classes.add}>
                {on ? <IconCheck size={16} stroke={1.8} /> : <IconPlus size={16} stroke={1.8} />}
                <span>{on ? `${stop.name} is on your trip` : `Add ${stop.name}`}</span>
              </span>
              <span className={classes.note}>{stamp.caption}</span>
            </UnstyledButton>
          );
        })}
      </div>
    </section>
  );
}

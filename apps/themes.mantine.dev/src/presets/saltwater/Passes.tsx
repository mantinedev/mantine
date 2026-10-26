import { Button } from '@mantine/core';
import { MODE_LABELS, type Mode, PASSES, PRICES } from './data';
import { ModeControl } from './ModeControl';
import { SectionHead } from './SectionHead';
import classes from './Passes.module.css';

interface PassesProps {
  mode: Mode;
  recommended: number;
  onModeChange: (mode: Mode) => void;
  onBuy: (days: number) => void;
}

export function Passes({ mode, recommended, onModeChange, onBuy }: PassesProps) {
  return (
    <section className={classes.root} id="passes" aria-labelledby="saltwater-passes-title">
      <div className={classes.head}>
        <SectionHead
          id="saltwater-passes-title"
          title="Pick your days, not your sailings"
          description="Each pass covers every ferry and island bus on the map for the days you choose. The days don’t need to be in a row."
        />
        <ModeControl value={mode} onChange={onModeChange} />
      </div>

      <div className={classes.tickets}>
        {PASSES.map((pass, index) => {
          const fits = index === recommended;
          return (
            <div key={pass.days} className={classes.ticket} data-recommended={fits || undefined}>
              <div className={classes.main}>
                <div className={classes.days}>
                  {pass.days}
                  <small>travel days</small>
                </div>
                <div className={classes.title}>
                  {pass.title}
                  {fits && <span className={classes.flag}>Fits your trip</span>}
                </div>
                <div className={classes.desc}>{pass.desc}</div>
              </div>
              <div className={classes.stub}>
                <div className={classes.price}>
                  £{PRICES[mode][index]}
                  <small>{MODE_LABELS[mode]}</small>
                </div>
                <Button size="sm" color="saltwater.7" onClick={() => onBuy(pass.days)}>
                  Buy {pass.days} days
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

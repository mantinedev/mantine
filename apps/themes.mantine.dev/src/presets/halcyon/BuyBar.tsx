import { Button } from '@mantine/core';
import { type Finish, PRICE } from './data';
import classes from './BuyBar.module.css';

interface BuyBarProps {
  finish: Finish;
  onPreorder: () => void;
}

export function BuyBar({ finish, onPreorder }: BuyBarProps) {
  return (
    <div className={classes.bar}>
      <span className={classes.swatch} style={{ background: finish.color }} />
      <span className={classes.name}>
        Halcyon in <b>{finish.name}</b>
        <span className={classes.ships}>Ships in March</span>
      </span>
      <span className={classes.spacer} />
      <Button size="sm" onClick={onPreorder}>
        Pre-order £{PRICE}
      </Button>
    </div>
  );
}

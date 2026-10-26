import classes from './DockPips.module.css';

interface DockPipsProps {
  docks: number;
  bikes: number;
  ebikes: number;
}

export function DockPips({ docks, bikes, ebikes }: DockPipsProps) {
  return (
    <div className={classes.root}>
      <div className={classes.pips} aria-hidden>
        {Array.from({ length: docks }, (_, index) => (
          <i
            key={index}
            data-kind={index < bikes ? 'bike' : index < bikes + ebikes ? 'ebike' : undefined}
          />
        ))}
      </div>
      <span className={classes.count}>
        {bikes + ebikes} of {docks} docks
      </span>
    </div>
  );
}

import classes from './Logo.module.css';

const BARS = [22, 28, 18, 25];

export function Logo() {
  return (
    <a className={classes.logo} href="#" onClick={(event) => event.preventDefault()}>
      <span className={classes.mark} aria-hidden="true">
        {BARS.map((height, index) => (
          <i key={index} style={{ height }} data-tilted={index === 2 || undefined} />
        ))}
      </span>
      Shelfwise
    </a>
  );
}

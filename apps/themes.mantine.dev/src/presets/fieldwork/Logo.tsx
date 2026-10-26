import classes from './Fieldwork.module.css';

export function Logo() {
  return (
    <a className={classes.logo} href="#" onClick={(event) => event.preventDefault()}>
      <span className={classes.logoMark} aria-hidden />
      Fieldwork
    </a>
  );
}

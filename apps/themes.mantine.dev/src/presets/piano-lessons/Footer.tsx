import classes from './PianoLessons.module.css';

export function Footer() {
  return (
    <footer className={`${classes.wrap} ${classes.footer}`}>
      <span>Anouk Verbeek, piano teacher. Oudegracht 211, Utrecht. KvK 71234567</span>
      <span>anouk@pianoverbeek.example</span>
      <p className={classes.credits}>
        Photos from Wikimedia Commons: piano keys by Evette from Phoenix (CC BY-SA 2.0); old upright
        by Jason Knauer (CC BY 3.0); grand piano interior by Kjethdubns (CC0, cropped). Anouk
        Verbeek is a fictional teacher.
      </p>
    </footer>
  );
}

import { createUseStyles } from 'react-jss';
import normalize from 'normalize-jss';

const useStyles = createUseStyles(normalize);

export function NormalizeCSS() {
  useStyles();
  return null;
}

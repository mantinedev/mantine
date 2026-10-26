import type { ArticleStatus } from './data';
import classes from './StatusMark.module.css';

export function StatusMark({ status }: { status: ArticleStatus }) {
  return <span className={classes.mark} data-status={status} aria-hidden="true" />;
}

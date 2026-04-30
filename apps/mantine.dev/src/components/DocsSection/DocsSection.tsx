import cx from 'clsx';
import classes from './DocsSection.module.css';

export function DocsSection({ className, ...others }: React.ComponentProps<'div'>) {
  return <div className={cx(classes.section, className)} {...others} />;
}

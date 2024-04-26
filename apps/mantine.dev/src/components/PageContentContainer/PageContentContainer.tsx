import cx from 'clsx';
import classes from './PageContentContainer.module.css';

interface PageContentContainerProps extends React.ComponentPropsWithoutRef<'div'> {}

export function PageContentContainer({
  className,
  children,
  ...others
}: PageContentContainerProps) {
  return (
    <div className={cx(classes.wrapper, className)} {...others}>
      <div className={classes.container}>{children}</div>
    </div>
  );
}

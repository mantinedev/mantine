import cx from 'clsx';
import classes from './DemoRoot.module.css';

export interface DemoRootProps extends React.ComponentProps<'div'> {}

export function DemoRoot({ className, ...others }: DemoRootProps) {
  return <div className={cx(classes.root, className)} {...others} />;
}

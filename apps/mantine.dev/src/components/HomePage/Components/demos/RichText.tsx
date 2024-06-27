import { TipTapDemos } from '@docs/demos';
import classes from './Demos.module.css';

export function RichText() {
  const Component = TipTapDemos.usage.component as any;
  return (
    <div className={classes.richTextWrapper}>
      <Component />
    </div>
  );
}

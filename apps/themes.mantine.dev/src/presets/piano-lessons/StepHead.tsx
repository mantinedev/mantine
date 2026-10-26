import classes from './Booking.module.css';

interface StepHeadProps {
  number: number;
  title: string;
  titleId?: string;
  aside?: React.ReactNode;
}

export function StepHead({ number, title, titleId, aside }: StepHeadProps) {
  return (
    <div className={classes.stepHead}>
      <span className={classes.stepNumber}>{number}</span>
      <h3 id={titleId}>{title}</h3>
      {aside}
    </div>
  );
}

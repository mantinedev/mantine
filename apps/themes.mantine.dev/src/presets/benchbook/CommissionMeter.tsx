import { STAGES } from './data';
import classes from './CommissionMeter.module.css';

interface CommissionMeterProps {
  stage: number;
}

export function CommissionMeter({ stage }: CommissionMeterProps) {
  return (
    <span className={classes.meter} aria-hidden>
      {STAGES.map((label, index) => (
        <i key={label} className={classes.pip} data-on={index <= stage || undefined} />
      ))}
    </span>
  );
}

export function StageStepper({ stage }: CommissionMeterProps) {
  return (
    <div
      className={classes.stepper}
      role="img"
      aria-label={`Stage ${stage + 1} of ${STAGES.length}, ${STAGES[stage]}`}
    >
      {STAGES.map((label, index) => (
        <div
          key={label}
          className={classes.step}
          data-done={index < stage || undefined}
          data-current={index === stage || undefined}
        >
          <span className={classes.bar} />
          <span className={classes.label}>{label}</span>
        </div>
      ))}
    </div>
  );
}

import { morningSteps } from './data';
import { SectionHead } from './SectionHead';
import { kelvinAt, kelvinToRgb, rgb, SUNRISE_MINUTES } from './sunrise';
import common from './Halcyon.module.css';
import classes from './Morning.module.css';

export function Morning() {
  return (
    <section className={common.section} id="morning" aria-labelledby="hc-morning-title">
      <SectionHead
        id="hc-morning-title"
        title="How a morning goes"
        lead="Set for 07:00, with a 30-minute sunrise. Every step is a little brighter and a little cooler in colour, the way real dawn is."
      />
      <ol className={classes.timeline}>
        {morningSteps.map((step) => {
          const color = kelvinToRgb(kelvinAt(step.minute));
          const strength = 0.25 + 0.75 * (step.minute / SUNRISE_MINUTES);
          return (
            <li key={step.time} className={classes.step}>
              <span
                className={classes.dot}
                style={
                  {
                    background: rgb(color),
                    '--hc-halo': rgb(color, (0.55 * strength).toFixed(2)),
                  } as React.CSSProperties
                }
              />
              <time className={classes.time}>{step.time}</time>
              <b className={classes.stepTitle}>{step.title}</b>
              <p className={classes.body}>{step.body}</p>
            </li>
          );
        })}
      </ol>
    </section>
  );
}

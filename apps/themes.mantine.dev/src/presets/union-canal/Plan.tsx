import { Badge, Image, Timeline, Title } from '@mantine/core';
import { CanalMap } from './CanalMap';
import { phaseDotColor, phases, PHOTOS } from './data';
import classes from './Plan.module.css';
import sections from './Sections.module.css';

export function Plan() {
  return (
    <section className={sections.block} id="plan" aria-labelledby="plan-title">
      <div className={sections.head}>
        <Title order={2} id="plan-title">
          What your money will fix, in order
        </Title>
        <p>The work runs west to east, so each stretch can reopen as soon as it is finished.</p>
      </div>

      <figure className={classes.photo}>
        <Image
          src={`${PHOTOS}/wester-hailes-towpath.jpg`}
          alt="The towpath at Wester Hailes on a grey autumn day, with worn tarmac along the canal edge and tower blocks behind"
          radius="lg"
          className={classes.photoImage}
        />
        <figcaption>
          The Wester Hailes towpath today. The edging along this stretch is where most of the money
          goes.
        </figcaption>
      </figure>

      <div className={classes.plan}>
        <Timeline
          role="list"
          className={classes.phases}
          classNames={{ itemBullet: classes.bullet }}
        >
          {phases.map((phase, index) => (
            <Timeline.Item
              key={phase.title}
              role="listitem"
              data-status={phase.status}
              className={classes.phase}
              bullet={index + 1}
              title={<Title order={3}>{phase.title}</Title>}
            >
              <p className={classes.phaseText}>{phase.description}</p>
              <Badge variant="dot" color={phaseDotColor[phase.status]} className={classes.status}>
                {phase.statusLabel}
              </Badge>
            </Timeline.Item>
          ))}
        </Timeline>

        <CanalMap />
      </div>
    </section>
  );
}

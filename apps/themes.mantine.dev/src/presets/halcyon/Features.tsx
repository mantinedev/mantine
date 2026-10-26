import { Card, Title } from '@mantine/core';
import { SectionHead } from './SectionHead';
import classes from './Features.module.css';
import common from './Halcyon.module.css';

function TouchDiagram() {
  return (
    <svg className={classes.diagram} viewBox="0 0 300 150" aria-hidden="true">
      <circle cx="150" cy="80" r="44" className={classes.soft} />
      <circle cx="150" cy="80" r="20" fill="none" className={classes.accent} strokeWidth="2" />
      <path d="M150 20v14M150 126v14" className={classes.soft} />
      <text x="200" y="64">
        Tap the top
      </text>
      <text x="200" y="80">
        to snooze
      </text>
    </svg>
  );
}

function DialsDiagram() {
  return (
    <svg className={classes.diagram} viewBox="0 0 300 150" aria-hidden="true">
      <rect x="70" y="40" width="160" height="70" rx="14" className={classes.soft} />
      <circle cx="115" cy="75" r="18" className={classes.line} />
      <path d="M115 75l0-12" className={classes.line} />
      <circle cx="185" cy="75" r="18" className={classes.line} />
      <path d="M185 75l9 6" className={classes.line} />
      <text x="98" y="128">
        Wake time
      </text>
      <text x="166" y="128">
        Sunrise
      </text>
    </svg>
  );
}

function SunsetDiagram() {
  return (
    <svg className={classes.diagram} viewBox="0 0 300 150" aria-hidden="true">
      <path
        d="M40 40 C 110 40, 150 110, 260 116"
        fill="none"
        className={classes.accent}
        strokeWidth="2.5"
      />
      <path d="M40 120h220" className={classes.soft} />
      <text x="40" y="34">
        22:30
      </text>
      <text x="228" y="108">
        23:00
      </text>
    </svg>
  );
}

const features = [
  {
    title: 'One touch, no screen',
    body: 'Tap the top of the globe to snooze for nine minutes. Hold it to switch the light off. That’s the whole interface.',
    diagram: <TouchDiagram />,
  },
  {
    title: 'Set it with two dials',
    body: 'A wake-time dial and a sunrise-length dial on the back. The app is there if you want weekday schedules, but you never need it.',
    diagram: <DialsDiagram />,
  },
  {
    title: 'A sunset to fall asleep to',
    body: 'Run it backwards at night. The light warms and fades over thirty minutes, so reading in bed ends on its own.',
    diagram: <SunsetDiagram />,
  },
];

export function Features() {
  return (
    <section className={common.section} id="features" aria-labelledby="hc-features-title">
      <SectionHead
        id="hc-features-title"
        title="Less in the bedroom"
        lead="No screen to glow at 3am, no app to update, nothing that asks for your attention."
      />
      <div className={classes.trio}>
        {features.map((feature) => (
          <Card key={feature.title} component="article" className={classes.feature}>
            {feature.diagram}
            <Title order={3}>{feature.title}</Title>
            <p className={classes.body}>{feature.body}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}

'use client';

import {
  IconAlertTriangle,
  IconChevronRight,
  IconInfoCircle,
  IconPointFilled,
} from '@tabler/icons-react';
import { Accordion, Badge, Title } from '@mantine/core';
import { Answer } from './Answer';
import { type CiteCounter, renderRich } from './citations';
import { risks, type Severity, thinkingSteps } from './data';
import classes from './Clerk.module.css';

const SEVERITY_ICONS: Record<Severity, React.ReactNode> = {
  high: <IconAlertTriangle stroke={2} />,
  medium: <IconInfoCircle stroke={2} />,
  low: <IconPointFilled />,
};

const SEVERITY_LABELS: Record<Severity, string> = { high: 'High', medium: 'Medium', low: 'Low' };

interface RiskAnswerProps {
  onToast: (message: string) => void;
}

export function RiskAnswer({ onToast }: RiskAnswerProps) {
  const counter: CiteCounter = new Map();

  return (
    <Answer mode="Careful review" time="10:44" withActions onToast={onToast}>
      <Accordion className={classes.thinking} chevron={<IconChevronRight stroke={1.7} />}>
        <Accordion.Item value="thinking">
          <Accordion.Control>Checked 3 files in 41 seconds</Accordion.Control>
          <Accordion.Panel>
            <ol className={classes.steps}>
              {thinkingSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>

      <Title order={3} className={classes.answerTitle}>
        Risks found
      </Title>
      <p>
        Four points to raise with Hollis Property before Thursday. Two of them would hurt a bakery
        specifically.
      </p>

      <ol className={classes.risks}>
        {risks.map((risk) => (
          <li key={risk.ref} className={classes.risk}>
            <Badge
              mod={{ tone: risk.severity }}
              leftSection={SEVERITY_ICONS[risk.severity]}
              className={classes.severity}
            >
              {SEVERITY_LABELS[risk.severity]}
            </Badge>
            <b className={classes.riskTitle}>{risk.title}</b>
            <div>
              <div>{renderRich(risk.body, counter, `${risk.ref}-body`)}</div>
              <div className={classes.fix}>
                <em>Ask for</em> {renderRich(risk.fix, counter, `${risk.ref}-fix`)}
              </div>
            </div>
          </li>
        ))}
      </ol>

      <p>
        The suggested wording for each change is below. Accepted changes show in the lease on the
        right.
      </p>
    </Answer>
  );
}

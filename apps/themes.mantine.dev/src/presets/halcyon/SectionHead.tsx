import { Title } from '@mantine/core';
import classes from './Halcyon.module.css';

interface SectionHeadProps {
  id: string;
  title: string;
  lead?: string;
}

export function SectionHead({ id, title, lead }: SectionHeadProps) {
  return (
    <div className={classes.secHead}>
      <Title order={2} id={id} className={classes.secTitle}>
        {title}
      </Title>
      {lead && <p className={classes.secLead}>{lead}</p>}
    </div>
  );
}

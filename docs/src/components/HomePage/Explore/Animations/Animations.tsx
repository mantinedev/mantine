import React from 'react';
import { Section } from '../Section/Section';
import { AnimationsDemo } from './AnimationsDemo';

export function Animations() {
  return (
    <Section
      title="Transitions API"
      description="Animate presence with premade transition or build your own animation with simple API, all Mantine components support custom transitions"
      link="/core/transition/"
      label="Learn more about Transition component"
    >
      <AnimationsDemo />
    </Section>
  );
}

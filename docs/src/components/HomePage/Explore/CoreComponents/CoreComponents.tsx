import React from 'react';
import { Section } from '../Section/Section';
import { CoreDemo } from './core/Core';

export function CoreComponents() {
  return (
    <Section
      title="Core components library"
      description="Mantine core library includes all essential components: inputs, buttons, modals, popovers, typography elements, layout management, etc."
    >
      <CoreDemo />
    </Section>
  );
}

import React from 'react';
import { Section } from '../Section/Section';
import { ThemingDemo } from './ThemingDemo';

export function Theming() {
  return (
    <Section
      title="Theming"
      description="Extend default theme with any amount of additional colors, replace shadows, radius, spacing, fonts and many other properties to match your design requirements"
      link="/theming/extend-theme/"
      label="Learn more about theming"
    >
      <ThemingDemo />
    </Section>
  );
}

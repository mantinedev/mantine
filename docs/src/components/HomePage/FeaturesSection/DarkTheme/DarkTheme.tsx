import React from 'react';
import { Section } from '../Section/Section';
import { DarkThemeDemo } from './DarkThemeDemo';

export function DarkTheme() {
  return (
    <Section
      title="Dark theme"
      description="Add dark theme to your application with just a few lines of code – Mantine exports global styles both for light and dark theme, all components support dark theme out of the box."
      link="/theming/dark-theme/"
      label="Learn how to setup dark theme"
    >
      <DarkThemeDemo />
    </Section>
  );
}

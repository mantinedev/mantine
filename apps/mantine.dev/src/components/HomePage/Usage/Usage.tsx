import React from 'react';
import { Space } from '@mantine/core';
import { FrameworksGuides } from '../../FrameworksGuides';
import { PageSection } from '../PageSection/PageSection';

export function Usage() {
  return (
    <PageSection
      title="Ready to get started?"
      description="Mantine works in all modern environments – get started instantly with Next.js, Gatsby.js, Redwood, Vite or Remix by following getting started guide:"
      alt
    >
      <Space h="xl" />
      <FrameworksGuides />
      <Space h="xl" />
    </PageSection>
  );
}

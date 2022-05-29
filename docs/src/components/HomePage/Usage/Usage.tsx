import React from 'react';
import { Space } from '@mantine/core';
import { FrameworksControls } from '../../FrameworksControls/FrameworksControls';
import { PageSection } from '../PageSection/PageSection';

export function Usage() {
  return (
    <PageSection
      title="Use anywhere"
      description="Mantine works in all modern environments – get started instantly with Next.js, Gatsby.js, create-react-app, Vite or Remix by following getting started guide:"
    >
      <Space h="xl" />
      <FrameworksControls />
    </PageSection>
  );
}

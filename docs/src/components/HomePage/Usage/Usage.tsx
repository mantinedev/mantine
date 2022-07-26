import React from 'react';
import { Space } from '@mantine/core';
import { FrameworksControls } from '../../FrameworksControls/FrameworksControls';
import { PageSection } from '../PageSection/PageSection';

export function Usage() {
  return (
    <PageSection
      title="Ready to get started?"
      description="Mantine works in all modern environments – get started instantly with Next.js, Gatsby.js, create-react-app, Vite or Remix by following getting started guide:"
      sx={(theme) => ({
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
      })}
    >
      <Space h="xl" />
      <FrameworksControls />
      <Space h="xl" />
    </PageSection>
  );
}

import { Space } from '@mantine/core';
import { FrameworksGuides } from '../../FrameworksGuides';
import { PageSection } from '../PageSection/PageSection';

export function Usage() {
  return (
    <PageSection
      title="Ready to get started?"
      description="Mantine can be used both for SPA and SSR applications. Follow one of the getting started guides to build an application with Mantine using Vite, Next.js, Remix, RedwoodJS or Gatsby:"
    >
      <Space h="xl" />
      <FrameworksGuides />
      <Space h="xl" />
    </PageSection>
  );
}

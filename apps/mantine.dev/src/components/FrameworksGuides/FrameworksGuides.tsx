import { SimpleGrid, Space } from '@mantine/core';
import { GettingStartedCard } from './GettingStartedCard/GettingStartedCard';

export function FrameworksGuides() {
  return (
    <>
      <SimpleGrid type="container" cols={{ base: 1, '800px': 2 }} spacing="lg">
        <GettingStartedCard
          title="Vite"
          description="Best choice for a single page application (SPA)"
          logo="vite"
          type="primary"
          link="/guides/vite"
        />
        <GettingStartedCard
          title="Next.js"
          description="Best choice for an application with SSR"
          logo="next"
          type="primary"
          link="/guides/next"
        />
      </SimpleGrid>

      <SimpleGrid type="container" cols={{ base: 1, '580px': 2, '920px': 3 }} mt="lg" spacing="lg">
        <GettingStartedCard
          title="React Router"
          logo="react-router"
          type="secondary"
          link="/guides/react-router"
          description="Get started with React Router"
        />

        <GettingStartedCard
          title="Redwood"
          description="Get started with RedwoodJS"
          logo="redwood"
          type="secondary"
          link="/guides/redwood"
        />
        <GettingStartedCard
          title="Gatsby"
          logo="gatsby"
          type="secondary"
          link="/guides/gatsby"
          description="Get started with Gatsby"
        />
      </SimpleGrid>
      <Space h="xl" />
    </>
  );
}

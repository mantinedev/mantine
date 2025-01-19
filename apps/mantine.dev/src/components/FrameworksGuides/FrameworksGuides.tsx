import { SimpleGrid, SimpleGridProps, Space } from '@mantine/core';
import { GettingStartedCard } from './GettingStartedCard/GettingStartedCard';

interface FrameworksGuidesProps {
  primaryCols?: SimpleGridProps['cols'];
  secondaryCols?: SimpleGridProps['cols'];
  secondaryBreakpoint?: 'md' | 'xl';
}

export function FrameworksGuides({
  primaryCols = { md: 2 },
  secondaryCols = { md: 3 },
  secondaryBreakpoint = 'md',
}: FrameworksGuidesProps) {
  return (
    <>
      <SimpleGrid cols={primaryCols} spacing="lg">
        <GettingStartedCard
          title="Vite"
          description="Best choice for a single page application (SPA)"
          logo="vite"
          type="primary"
          link="/guides/vite"
          secondaryBreakpoint={secondaryBreakpoint}
        />
        <GettingStartedCard
          title="Next.js"
          description="Best choice for an application with SSR"
          logo="next"
          type="primary"
          link="/guides/next"
          secondaryBreakpoint={secondaryBreakpoint}
        />
      </SimpleGrid>

      <SimpleGrid cols={secondaryCols} mt="lg" spacing="lg">
        <GettingStartedCard
          title="React Router"
          logo="react-router"
          type="secondary"
          link="/guides/react-router"
          description="Get started with React Router"
          secondaryBreakpoint={secondaryBreakpoint}
        />

        <GettingStartedCard
          title="Redwood"
          description="Get started with RedwoodJS"
          logo="redwood"
          type="secondary"
          link="/guides/redwood"
          secondaryBreakpoint={secondaryBreakpoint}
        />
        <GettingStartedCard
          title="Gatsby"
          logo="gatsby"
          type="secondary"
          link="/guides/gatsby"
          description="Get started with Gatsby"
          secondaryBreakpoint={secondaryBreakpoint}
        />
      </SimpleGrid>
      <Space h="xl" />
    </>
  );
}

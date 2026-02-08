import { Paper, Text } from '../../index';
import { Button } from '../Button';
import { SimpleGrid } from './SimpleGrid';

export default { title: 'SimpleGrid' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <SimpleGrid cols={{ sm: 2, md: 5 }} spacing={{ sm: 100 }} verticalSpacing={{ sm: 10 }}>
        {Array(10)
          .fill(0)
          .map((_, index) => (
            <Button key={index}>{index}</Button>
          ))}
      </SimpleGrid>
    </div>
  );
}

export function ContainerQueries() {
  return (
    <div style={{ padding: 40 }}>
      <SimpleGrid
        type="container"
        cols={{ '1000px': 5, '700px': 2 }}
        spacing={{ base: 'sm', '500px': 'md', '700px': 'xl', '900px': 50 }}
        styles={{ container: { border: '1px solid red', resize: 'both', overflow: 'hidden' } }}
      >
        {Array(10)
          .fill(0)
          .map((_, index) => (
            <Button key={index}>{index}</Button>
          ))}
      </SimpleGrid>
    </div>
  );
}

function GridItem({ children }: { children: React.ReactNode }) {
  return (
    <Paper withBorder p="md" radius="md">
      <Text size="sm" fw={500}>
        {children}
      </Text>
    </Paper>
  );
}

export function AutoFill() {
  return (
    <div style={{ padding: 40 }}>
      <Text fw={700} mb="md">
        auto-fill with minColWidth=250px (columns collapse as viewport shrinks)
      </Text>
      <SimpleGrid minColWidth="250px" spacing="md">
        {Array(8)
          .fill(0)
          .map((_, index) => (
            <GridItem key={index}>Item {index + 1}</GridItem>
          ))}
      </SimpleGrid>
    </div>
  );
}

export function AutoFit() {
  return (
    <div style={{ padding: 40 }}>
      <Text fw={700} mb="md">
        auto-fit with minColWidth=250px (columns stretch to fill remaining space)
      </Text>
      <SimpleGrid minColWidth="250px" autoFlow="auto-fit" spacing="md">
        {Array(3)
          .fill(0)
          .map((_, index) => (
            <GridItem key={index}>Item {index + 1}</GridItem>
          ))}
      </SimpleGrid>
    </div>
  );
}

export function AutoFillVsAutoFit() {
  return (
    <div style={{ padding: 40 }}>
      <Text fw={700} mb="md">
        auto-fill (empty tracks preserved, items don&apos;t stretch)
      </Text>
      <SimpleGrid minColWidth="200px" autoFlow="auto-fill" spacing="md" mb="xl">
        {Array(3)
          .fill(0)
          .map((_, index) => (
            <GridItem key={index}>auto-fill {index + 1}</GridItem>
          ))}
      </SimpleGrid>

      <Text fw={700} mb="md">
        auto-fit (empty tracks collapsed, items stretch to fill)
      </Text>
      <SimpleGrid minColWidth="200px" autoFlow="auto-fit" spacing="md">
        {Array(3)
          .fill(0)
          .map((_, index) => (
            <GridItem key={index}>auto-fit {index + 1}</GridItem>
          ))}
      </SimpleGrid>
    </div>
  );
}

export function AutoFillContainerQueries() {
  return (
    <div style={{ padding: 40 }}>
      <Text fw={700} mb="md">
        auto-fill with container queries (resize the container)
      </Text>
      <SimpleGrid
        type="container"
        minColWidth="200px"
        spacing="md"
        styles={{ container: { border: '1px solid red', resize: 'both', overflow: 'hidden' } }}
      >
        {Array(8)
          .fill(0)
          .map((_, index) => (
            <GridItem key={index}>Item {index + 1}</GridItem>
          ))}
      </SimpleGrid>
    </div>
  );
}

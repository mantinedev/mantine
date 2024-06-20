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

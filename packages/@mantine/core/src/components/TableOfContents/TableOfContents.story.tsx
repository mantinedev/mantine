import { TableOfContents } from './TableOfContents';

export default { title: 'TableOfContents' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <TableOfContents
        initialData={[
          { id: '1', value: 'Heading 1', depth: 1 },
          { id: '2', value: 'Heading 2', depth: 2 },
          { id: '3', value: 'Heading 3', depth: 3 },
        ]}
      />
    </div>
  );
}

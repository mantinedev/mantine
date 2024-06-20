import { Group } from './Group';

export default { title: 'Group' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <Group component="nav">
        <button type="button">First</button>
        <button type="button">Second</button>
        <button type="button">Third</button>
      </Group>
    </div>
  );
}

export function Grow() {
  return (
    <div style={{ padding: 40 }}>
      <Group grow>
        <button type="button">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ducimus necessitatibus
          placeat tenetur error officia vero accusantium? Dolorem commodi quaerat incidunt odit
          eligendi beatae tempore ducimus, unde obcaecati dolor at?
        </button>
        <button type="button">Second</button>
        <button type="button">Third</button>
      </Group>
    </div>
  );
}

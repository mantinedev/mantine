import { Stack } from './Stack';

export default { title: 'Stack' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <Stack>
        <button type="button">First</button>
        <button type="button">Second</button>
        <button type="button">Third</button>
      </Stack>
    </div>
  );
}

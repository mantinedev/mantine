export function randomId() {
  return `mantine-${Math.random().toString(36).slice(2, 11)}`;
}

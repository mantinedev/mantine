export function randomId() {
  return `mantine-${Math.random().toString(36).substr(2, 9)}`;
}

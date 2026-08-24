import { Surface } from './Surface';

export default { title: 'Surface' };

export function Usage() {
  return (
    <div style={{ padding: 40, maxWidth: 600 }}>
      <Surface shadow="md" withBorder p="xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, et illo? Dolores
        mollitia, maiores est totam ab libero itaque fuga, dolorum hic nesciunt quibusdam, esse amet
        magni quia voluptatibus molestias!
      </Surface>
    </div>
  );
}

export function NestedSurfaces() {
  return (
    <div style={{ padding: 40, maxWidth: 600 }}>
      <Surface p="xl" radius="md">
        Level 1
        <Surface p="xl" radius="md" mt="md">
          Level 2
          <Surface p="xl" radius="md" mt="md">
            Level 2 (clamped)
          </Surface>
        </Surface>
      </Surface>
    </div>
  );
}

export function ExplicitLevel() {
  return (
    <div style={{ padding: 40, maxWidth: 600 }}>
      <Surface p="xl" radius="md" level={2}>
        Explicit level 2
        <Surface p="xl" radius="md" mt="md" level="-1">
          Relative level -1 (resolves to 1)
        </Surface>
      </Surface>
    </div>
  );
}

export function AutoDepthDisabled() {
  return (
    <div style={{ padding: 40, maxWidth: 600 }}>
      <Surface p="xl" radius="md">
        Level 1
        <Surface p="xl" radius="md" mt="md" autoDepth={false}>
          autoDepth=false (stays at level 1)
        </Surface>
      </Surface>
    </div>
  );
}

import { Checkbox } from '../Checkbox';
import { Group } from '../Group';
import { Radio } from '../Radio';
import { Select } from '../Select';
import { Stack } from '../Stack';
import { TagsInput } from '../TagsInput';
import { Text } from '../Text';
import { Textarea } from '../Textarea';
import { TextInput } from '../TextInput';
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

export function WithInputs() {
  const fields = (
    <Stack gap="sm">
      <TextInput label="Title" defaultValue="Launching Mantine 10" />
      <TagsInput label="Tags" defaultValue={['release', 'news']} />
      <Select label="Category" data={['News', 'Guides']} defaultValue="News" />
      <Textarea label="Excerpt" defaultValue="Everything that changed in the new major release." />
      <Checkbox label="Featured" defaultChecked />
      <Radio.Group label="Visibility" defaultValue="public">
        <Group mt="xs">
          <Radio value="public" label="Public" />
          <Radio value="private" label="Private" />
        </Group>
      </Radio.Group>
    </Stack>
  );

  return (
    <div style={{ padding: 40, maxWidth: 600 }}>
      <Text size="sm" mb="xs">
        Level 0 (page)
      </Text>
      {fields}
      <Surface withBorder p="md" mt="xl">
        <Text size="sm" mb="xs">
          Level 1
        </Text>
        {fields}
        <Surface withBorder p="md" mt="md">
          <Text size="sm" mb="xs">
            Level 2
          </Text>
          {fields}
        </Surface>
      </Surface>
    </div>
  );
}

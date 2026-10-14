import { Button, Group, Select, Stack, Textarea, TextInput } from '@mantine/core';

export function SettingsForm() {
  return (
    <Stack maw={480}>
      <TextInput label="Project name" placeholder="My project" defaultValue="Website redesign" />
      <TextInput label="Slug" placeholder="my-project" defaultValue="website-redesign" />
      <Textarea
        label="Description"
        placeholder="What is this project about?"
        autosize
        minRows={3}
        maxRows={6}
        defaultValue="New marketing website with updated branding, launching in Q1."
      />
      <Select
        label="Visibility"
        placeholder="Pick visibility"
        data={['Private', 'Team', 'Public']}
        defaultValue="Team"
      />
      <Group justify="flex-end" mt="sm">
        <Button variant="default">Cancel</Button>
        <Button>Save changes</Button>
      </Group>
    </Stack>
  );
}

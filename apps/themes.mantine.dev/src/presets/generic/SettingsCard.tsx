'use client';

import {
  Button,
  Checkbox,
  Chip,
  Divider,
  Group,
  MultiSelect,
  NumberInput,
  Paper,
  Radio,
  Select,
  SimpleGrid,
  Slider,
  Stack,
  Switch,
  Text,
  Textarea,
  TextInput,
  Title,
} from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';

export function SettingsCard() {
  return (
    <Paper withBorder p="md" component="form" onSubmit={(event) => event.preventDefault()}>
      <Title order={3} size="h4">
        Project settings
      </Title>
      <Text size="sm" mb="lg">
        Billing project, visible to everyone in the workspace
      </Text>

      <Stack gap="md">
        <SimpleGrid cols={{ base: 1, xs: 2 }}>
          <TextInput label="Project name" defaultValue="Billing" required />
          <Select
            label="Owner"
            data={['Ines Duarte', 'Maya Chen', 'Leo Martins', 'Priya Nair']}
            defaultValue="Ines Duarte"
          />
          <DatePickerInput
            label="Target release"
            placeholder="Pick a date"
            defaultValue="2026-12-01"
          />
          <NumberInput label="Sprint length" suffix=" days" defaultValue={14} min={7} max={28} />
        </SimpleGrid>

        <MultiSelect
          label="Labels"
          data={['Frontend', 'Backend', 'Design', 'Infrastructure', 'Payments']}
          defaultValue={['Frontend', 'Payments']}
        />

        <Textarea
          label="Description"
          description="Shown on the project page and in search results"
          defaultValue="Invoices, payment methods and usage-based pricing for all plans."
          autosize
          minRows={2}
        />

        <Divider />

        <Radio.Group label="Visibility" defaultValue="workspace">
          <Stack gap="xs" mt="xs">
            <Radio value="workspace" label="Everyone in the workspace" />
            <Radio value="members" label="Project members only" />
            <Radio value="private" label="Only me" />
          </Stack>
        </Radio.Group>

        <Stack gap="xs">
          <Text size="sm" fw={500}>
            Notify me about
          </Text>
          <Chip.Group multiple defaultValue={['mentions', 'reviews']}>
            <Group gap="xs">
              <Chip value="mentions">Mentions</Chip>
              <Chip value="reviews">Review requests</Chip>
              <Chip value="status">Status changes</Chip>
              <Chip value="comments">All comments</Chip>
            </Group>
          </Chip.Group>
        </Stack>

        <div>
          <Text size="sm" fw={500} mb="xs">
            Work in progress limit
          </Text>
          <Slider
            defaultValue={6}
            min={1}
            max={12}
            marks={[
              { value: 1, label: '1' },
              { value: 6, label: '6' },
              { value: 12, label: '12' },
            ]}
            thumbLabel="Work in progress limit"
            mb="lg"
          />
        </div>

        <Switch label="Close tasks automatically when the pull request is merged" defaultChecked />
        <Checkbox label="Archive the project after the target release" />

        <Divider />

        <Group justify="flex-end" gap="xs">
          <Button variant="default">Cancel</Button>
          <Button type="submit">Save changes</Button>
        </Group>
      </Stack>
    </Paper>
  );
}

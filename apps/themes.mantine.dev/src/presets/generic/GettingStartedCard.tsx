import { IconAlertTriangle, IconInfoCircle } from '@tabler/icons-react';
import { Accordion, Alert, Button, Paper, Stack, Stepper, Text, Title } from '@mantine/core';

export function GettingStartedCard() {
  return (
    <Stack gap="md">
      <Alert
        variant="default"
        color="blue"
        title="New: automations"
        icon={<IconInfoCircle size={18} />}
      >
        Move tasks between columns automatically when pull requests are opened or merged.
      </Alert>

      <Alert
        color="yellow"
        title="Usage export is delayed"
        icon={<IconAlertTriangle size={18} />}
        withCloseButton
        closeButtonLabel="Dismiss"
      >
        Reports for large workspaces may take up to an hour while we increase storage quota.
      </Alert>

      <Paper withBorder p="md">
        <Title order={3} size="h4" mb="md">
          Set up your workspace
        </Title>
        <Stepper active={2} orientation="vertical" size="sm">
          <Stepper.Step label="Create a project" description="Billing" />
          <Stepper.Step label="Invite your team" description="4 members joined" />
          <Stepper.Step label="Connect GitHub" description="Link pull requests to tasks" />
          <Stepper.Step label="Plan the first sprint" description="Pick tasks for two weeks" />
        </Stepper>
        <Button mt="md" fullWidth>
          Connect GitHub
        </Button>
      </Paper>

      <Paper withBorder>
        <Accordion defaultValue="estimates">
          <Accordion.Item value="estimates">
            <Accordion.Control>How are estimates calculated?</Accordion.Control>
            <Accordion.Panel>
              <Text size="sm">
                Estimates use the median cycle time of the last 30 closed tasks with the same
                labels.
              </Text>
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item value="guests">
            <Accordion.Control>Can guests see private projects?</Accordion.Control>
            <Accordion.Panel>
              <Text size="sm">No. Guests only see projects they were invited to.</Text>
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item value="export">
            <Accordion.Control>How do I export tasks?</Accordion.Control>
            <Accordion.Panel>
              <Text size="sm">Open Reports and choose CSV or JSON in the export menu.</Text>
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </Paper>
    </Stack>
  );
}

import React from 'react';
import { User, MapPin, CircleCheck } from 'tabler-icons-react';
import {
  TextInput,
  useMantineTheme,
  Textarea,
  Group,
  Button,
  Text,
  SimpleGrid,
  Accordion,
  useAccordionState,
} from '@mantine/core';

const code = `
import { User, MapPin, CircleCheck } from 'tabler-icons-react';
import { TextInput, Textarea, Group, Button, ThemeIcon, Text, SimpleGrid, Accordion, useAccordionState } from '@mantine/core';

function Demo() {
  const [state, handlers] = useAccordionState({ total: 3, initialItem: 0 });
  const theme = useMantineTheme();
  const breakpoints = [{ maxWidth: 'sm' as const, cols: 1 }];

  return (
    <Accordion state={state} onChange={handlers.setState} disableIconRotation>
      <Accordion.Item label="Personal information" icon={<User color={theme.colors.blue[6]} />}>
        <SimpleGrid cols={2} breakpoints={breakpoints}>
          <TextInput label="Email" placeholder="Email" required />
          <TextInput label="Full name" placeholder="Full name" required />
        </SimpleGrid>
        <Textarea
          label="Your message"
          placeholder="Message (optional)"
          mt="md"
          minRows={2}
          autosize
        />
        <Group position="right" mt="xl">
          <Button onClick={() => handlers.toggle(1)}>Next step</Button>
        </Group>
      </Accordion.Item>
      <Accordion.Item label="Shipping address" icon={<MapPin color={theme.colors.red[6]} />}>
        <SimpleGrid cols={3} breakpoints={breakpoints}>
          <TextInput label="City" placeholder="City" />
          <TextInput label="State" placeholder="State" />
          <TextInput label="Zip" placeholder="Zip" />
        </SimpleGrid>

        <Textarea
          label="Additional information"
          placeholder="Additional information"
          autosize
          mt="md"
          minRows={2}
        />

        <Group position="apart" mt="xl">
          <Button variant="default" onClick={() => handlers.toggle(0)}>
            Previous step
          </Button>
          <Button onClick={() => handlers.toggle(2)}>Next step</Button>
        </Group>
      </Accordion.Item>
      <Accordion.Item label="Confirmation" icon={<CircleCheck color={theme.colors.teal[6]} />}>
        <Text>All done!</Text>
        <Text color="dimmed" size="sm">
          We will start processing your order soon
        </Text>
        <Group position="left" mt="xl">
          <Button variant="default" onClick={() => handlers.toggle(1)}>
            Previous step
          </Button>
        </Group>
      </Accordion.Item>
    </Accordion>
  );
}
`;

function Demo() {
  const [state, handlers] = useAccordionState({ total: 3, initialItem: 0 });
  const theme = useMantineTheme();
  const breakpoints = [{ maxWidth: 'sm' as const, cols: 1 }];

  return (
    <Accordion state={state} onChange={handlers.setState} disableIconRotation>
      <Accordion.Item label="Personal information" icon={<User color={theme.colors.blue[6]} />}>
        <SimpleGrid cols={2} breakpoints={breakpoints}>
          <TextInput label="Email" placeholder="Email" required />
          <TextInput label="Full name" placeholder="Full name" required />
        </SimpleGrid>
        <Textarea
          label="Your message"
          placeholder="Message (optional)"
          mt="md"
          minRows={2}
          autosize
        />
        <Group position="right" mt="xl">
          <Button onClick={() => handlers.toggle(1)}>Next step</Button>
        </Group>
      </Accordion.Item>
      <Accordion.Item label="Shipping address" icon={<MapPin color={theme.colors.red[6]} />}>
        <SimpleGrid cols={3} breakpoints={breakpoints}>
          <TextInput label="City" placeholder="City" />
          <TextInput label="State" placeholder="State" />
          <TextInput label="Zip" placeholder="Zip" />
        </SimpleGrid>

        <Textarea
          label="Additional information"
          placeholder="Additional information"
          autosize
          mt="md"
          minRows={2}
        />

        <Group position="apart" mt="xl">
          <Button variant="default" onClick={() => handlers.toggle(0)}>
            Previous step
          </Button>
          <Button onClick={() => handlers.toggle(2)}>Next step</Button>
        </Group>
      </Accordion.Item>
      <Accordion.Item label="Confirmation" icon={<CircleCheck color={theme.colors.teal[6]} />}>
        <Text>All done!</Text>
        <Text color="dimmed" size="sm">
          We will start processing your order soon
        </Text>
        <Group position="left" mt="xl">
          <Button variant="default" onClick={() => handlers.toggle(1)}>
            Previous step
          </Button>
        </Group>
      </Accordion.Item>
    </Accordion>
  );
}

export const form: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};

import React from 'react';
import { User, MapPin, CircleCheck } from 'tabler-icons-react';
import { useMantineTheme } from '@mantine/styles';
import { TextInput } from '../../TextInput';
import { Textarea } from '../../Textarea';
import { Group } from '../../Group';
import { Button } from '../../Button';
import { ThemeIcon } from '../../ThemeIcon';
import { Text } from '../../Text';
import { SimpleGrid } from '../../SimpleGrid';
import { Accordion, useAccordionState } from '../index';

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
        <Group position="center" mt="xl">
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

        <Group position="center" mt="xl">
          <Button variant="default" onClick={() => handlers.toggle(0)}>
            Previous step
          </Button>
          <Button onClick={() => handlers.toggle(2)}>Next step</Button>
        </Group>
      </Accordion.Item>
      <Accordion.Item label="Confirmation" icon={<CircleCheck color={theme.colors.teal[6]} />}>
        <Group position="center" direction="column">
          <ThemeIcon size={80} color="teal" variant="light" radius={80}>
            <CircleCheck size={50} />
          </ThemeIcon>

          <Text size="xl" weight={500} align="center">
            All done!
          </Text>
        </Group>
        <Group position="center" mt="xl">
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
        <Group position="center" mt="xl">
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

        <Group position="center" mt="xl">
          <Button variant="default" onClick={() => handlers.toggle(0)}>
            Previous step
          </Button>
          <Button onClick={() => handlers.toggle(2)}>Next step</Button>
        </Group>
      </Accordion.Item>
      <Accordion.Item label="Confirmation" icon={<CircleCheck color={theme.colors.teal[6]} />}>
        <Group position="center" direction="column">
          <ThemeIcon size={80} color="teal" variant="light" radius={80}>
            <CircleCheck size={50} />
          </ThemeIcon>

          <Text size="xl" weight={500} align="center">
            All done!
          </Text>
        </Group>
        <Group position="center" mt="xl">
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

import { Code, Group, Text, Textarea, TextInput } from '@mantine/core';
import { useActiveElement } from '@mantine/hooks';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Code, Group, Text, Textarea, TextInput } from '@mantine/core';
import { useActiveElement } from '@mantine/hooks';

function describe(element: Element | null) {
  if (!element) {
    return 'null';
  }

  return element.id ? \`\${element.tagName.toLowerCase()}#\${element.id}\` : element.tagName.toLowerCase();
}

function Demo() {
  const activeElement = useActiveElement();

  return (
    <>
      <Text>
        Focused element: <Code>{describe(activeElement)}</Code>
      </Text>

      <Group grow mt="md">
        <TextInput id="first-name" label="First name" placeholder="First name" />
        <TextInput id="last-name" label="Last name" placeholder="Last name" />
      </Group>

      <Textarea id="message" mt="md" label="Message" placeholder="Your message" />
    </>
  );
}
`;

function describe(element: Element | null) {
  if (!element) {
    return 'null';
  }

  return element.id
    ? `${element.tagName.toLowerCase()}#${element.id}`
    : element.tagName.toLowerCase();
}

function Demo() {
  const activeElement = useActiveElement();

  return (
    <>
      <Text>
        Focused element: <Code>{describe(activeElement)}</Code>
      </Text>

      <Group grow mt="md">
        <TextInput id="first-name" label="First name" placeholder="First name" />
        <TextInput id="last-name" label="Last name" placeholder="Last name" />
      </Group>

      <Textarea id="message" mt="md" label="Message" placeholder="Your message" />
    </>
  );
}

export const usage: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
};

import { IconBrandCodesandbox } from '@tabler/icons-react';
import hljs from 'highlight.js';
import { createHighlightJsAdapter } from '../CodeHighlightProvider/adapters/highlight-js-adapter';
import { createPlainTextAdapter } from '../CodeHighlightProvider/adapters/plain-text-adapter';
import { createShikiAdapter } from '../CodeHighlightProvider/adapters/shiki-adapter';
import { CodeHighlightAdapterProvider } from '../CodeHighlightProvider/CodeHighlightProvider';
import { CodeHighlight } from './CodeHighlight';

export default { title: 'CodeHighlight2' };

const tsxCode = `
import { forwardRef } from 'react';
import { Group, Avatar, Text, Select } from '@mantine/core';

// Data for select
// You can use any data structure you want

const data = [
  {
    image: 'https://img.icons8.com/clouds/256/000000/futurama-bender.png',
    label: 'Bender Bending Rodríguez',
    value: 'Bender Bending Rodríguez',
    description: 'Fascinated with cooking',
  },

  {
    image: 'https://img.icons8.com/clouds/256/000000/futurama-mom.png',
    label: 'Carol Miller',
    value: 'Carol Miller',
    description: 'One of the richest people on Earth',
  },
  {
    image: 'https://img.icons8.com/clouds/256/000000/homer-simpson.png',
    label: 'Homer Simpson',
    value: 'Homer Simpson',
    description: 'Overweight, lazy, and often ignorant',
  },
  {
    image: 'https://img.icons8.com/clouds/256/000000/spongebob-squarepants.png',
    label: 'Spongebob Squarepants',
    value: 'Spongebob Squarepants',
    description: 'Not just a sponge',
  },
];

interface ItemProps extends React.ComponentPropsWithoutRef<'div'> {
  image: string;
  label: string;
  description: string;
}

const SelectItem = forwardRef<HTMLDivElement, ItemProps>(
  ({ image, label, description, ...others }: ItemProps, ref) => (
    <div ref={ref} {...others}>
      <Group noWrap>
        <Avatar src={image} />

        <div>
          <Text size="sm">{label}</Text>
          <Text size="xs" opacity={0.65}>
            {description}
          </Text>
        </div>
      </Group>
    </div>
  )
);

function Demo() {
  return (
    <Select
      label="Choose employee of the month"
      placeholder="Pick one"
      itemComponent={SelectItem}
      data={data}
      searchable
      maxDropdownHeight={400}
      nothingFound="Nobody here"
      filter={(value, item) =>
        item.label.toLowerCase().includes(value.toLowerCase().trim()) ||
        item.description.toLowerCase().includes(value.toLowerCase().trim())
      }
    />
  );
}
`;

const plainTextAdapter = createPlainTextAdapter();

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <CodeHighlightAdapterProvider adapter={plainTextAdapter}>
        <CodeHighlight
          code={tsxCode}
          withExpandButton
          defaultExpanded={false}
          radius="md"
          withBorder
        />
      </CodeHighlightAdapterProvider>
    </div>
  );
}

async function loadShiki() {
  const { getHighlighter } = await import('shiki');
  const shiki = await getHighlighter({
    langs: ['tsx', 'scss', 'html', 'bash', 'json'],
    themes: [],
  });

  return shiki;
}

const shikiAdapter = createShikiAdapter(loadShiki);

export function ShikiAdapter() {
  return (
    <div style={{ padding: 40 }}>
      <CodeHighlightAdapterProvider adapter={shikiAdapter}>
        <CodeHighlight
          code={tsxCode}
          withExpandButton
          defaultExpanded={false}
          radius="md"
          withBorder
          language="tsx"
        />
      </CodeHighlightAdapterProvider>
    </div>
  );
}

const highlightJSAdapter = createHighlightJsAdapter(hljs);

export function HighlightJsAdapter() {
  return (
    <div style={{ padding: 40 }}>
      <CodeHighlightAdapterProvider adapter={highlightJSAdapter}>
        <CodeHighlight
          code={tsxCode}
          withExpandButton
          defaultExpanded={false}
          radius="md"
          withBorder
          language="tsx"
          background="var(--mantine-color-dark-8)"
        />
      </CodeHighlightAdapterProvider>
    </div>
  );
}

export function ExtraControls() {
  return (
    <div style={{ padding: 40 }}>
      <CodeHighlightAdapterProvider adapter={plainTextAdapter}>
        <CodeHighlight
          code={tsxCode}
          withExpandButton
          defaultExpanded={false}
          radius="md"
          withBorder
          controls={[
            <CodeHighlight.Control
              tooltipLabel="Open in codesandbox"
              component="a"
              href="https://codesandbox.io"
              target="_blank"
            >
              <IconBrandCodesandbox />
            </CodeHighlight.Control>,
          ]}
        />
      </CodeHighlightAdapterProvider>
    </div>
  );
}

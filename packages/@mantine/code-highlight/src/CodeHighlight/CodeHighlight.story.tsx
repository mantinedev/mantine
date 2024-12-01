import { IconBrandCodesandbox } from '@tabler/icons-react';
import hljs from 'highlight.js';
import { getCodeFileIcon } from '@mantinex/dev-icons';
import { createHighlightJsAdapter } from '../CodeHighlightProvider/adapters/highlight-js-adapter';
import { createShikiAdapter } from '../CodeHighlightProvider/adapters/shiki-adapter';
import { CodeHighlightAdapterProvider } from '../CodeHighlightProvider/CodeHighlightProvider';
import { CodeHighlightTabs } from '../CodeHighlightTabs/CodeHighlightTabs';
import { CodeHighlight } from './CodeHighlight';
import { InlineCodeHighlight } from './InlineCodeHighlight';

export default { title: 'CodeHighlight' };

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

const cssCode = `.root {
  --ai-size-xs: rem(18px);
  --ai-size-sm: rem(22px);
  --ai-size-md: rem(28px);
  --ai-size-lg: rem(34px);
  --ai-size-xl: rem(44px);

  --bg: var(--ai-bg);
  --color: var(--ai-color);
  --cursor: pointer;

  line-height: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  user-select: none;

  width: var(--ai-size);
  height: var(--ai-size);
  min-width: var(--ai-size);
  min-height: var(--ai-size);
  border-radius: var(--ai-radius);
  background: var(--bg);
  color: var(--color);
  border: var(--ai-bd);
  cursor: var(--cursor);

  @mixin hover {
    &:not([data-loading]):not(:disabled):not([data-disabled]) {
      --bg: var(--ai-hover);
    }
  }

  @mixin light {
    --loading-overlay-bg: rgba(255, 255, 255, 0.35);
    --disabled-bg: var(--mantine-color-gray-1);
    --disabled-color: var(--mantine-color-gray-5);
  }

  @mixin dark {
    --loading-overlay-bg: rgba(0, 0, 0, 0.35);
    --disabled-bg: var(--mantine-color-dark-6);
    --disabled-color: var(--mantine-color-dark-3);
  }

  &[data-loading] {
    --cursor: not-allowed;

    &::before {
      content: '';
      position: absolute;
      inset: rem(-1px);
      border-radius: var(--ai-radius);
      background-color: var(--loading-overlay_bg);
    }
  }

  &:disabled:not([data-loading]),
  &[data-disabled]:not([data-loading]) {
    --cursor: not-allowed;
    --bg: var(--disabled-bg);
    --color: var(--disabled-color);
  }
}

.loader {
  z-index: 1;
}
`;

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <CodeHighlight
        code={tsxCode}
        withExpandButton
        defaultExpanded={false}
        radius="md"
        withBorder
      />
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
          codeColorScheme="dark"
        />
      </CodeHighlightAdapterProvider>
    </div>
  );
}

export function ExtraControls() {
  return (
    <div style={{ padding: 40 }}>
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
    </div>
  );
}

export function Tabs() {
  return (
    <div style={{ padding: 40 }}>
      <CodeHighlightAdapterProvider adapter={shikiAdapter}>
        <CodeHighlightTabs
          withExpandButton
          defaultExpanded={false}
          radius="md"
          getFileIcon={getCodeFileIcon}
          code={[
            { fileName: 'Component.tsx', code: tsxCode, language: 'tsx' },
            { fileName: 'Component.module.css', code: cssCode, language: 'scss' },
            {
              fileName: 'Long-file-name-that-will-break-to-another-line.css',
              code: cssCode,
              language: 'scss',
            },
          ]}
        />
      </CodeHighlightAdapterProvider>
    </div>
  );
}

export function Inline() {
  return (
    <div style={{ padding: 40 }}>
      <CodeHighlightAdapterProvider adapter={shikiAdapter}>
        <p>
          Here is some text <InlineCodeHighlight code="const a = 5;" language="tsx" withBorder />{' '}
          surrounding the code
        </p>
      </CodeHighlightAdapterProvider>
    </div>
  );
}

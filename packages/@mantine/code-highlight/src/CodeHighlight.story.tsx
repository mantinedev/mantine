import { useState } from 'react';
import { CodeHighlight } from './CodeHighlight';
import { CodeHighlightTabs } from './CodeHighlightTabs';
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

function TsIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width={18} height={18} {...props}>
      <path fill="#1976d2" d="M6 6h36v36H6z" />
      <path
        fill="#fff"
        d="M27.49 22H14.227v3.264h4.757V40h3.769V25.264h4.737zM39.194 26.084s-1.787-1.192-3.807-1.192-2.747.96-2.747 1.986c0 2.648 7.381 2.383 7.381 7.712 0 8.209-11.254 4.568-11.254 4.568V35.22s2.152 1.622 4.733 1.622 2.483-1.688 2.483-1.92c0-2.449-7.315-2.449-7.315-7.878 0-7.381 10.658-4.469 10.658-4.469l-.132 3.509z"
      />
    </svg>
  );
}

function CSSIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width={18} height={18} {...props}>
      <path fill="#0277BD" d="M41 5H7l3 34 14 4 14-4 3-34z" />
      <path fill="#039BE5" d="M24 8v31.9l11.2-3.2L37.7 8z" />
      <path fill="#FFF" d="M33.1 13H24v4h4.9l-.3 4H24v4h4.4l-.3 4.5-4.1 1.4v4.2l7.9-2.6.7-11.5z" />
      <path
        fill="#EEE"
        d="M24 13v4h-8.9l-.3-4H24zm-4.6 8l.2 4H24v-4h-4.6zm.4 6h-4l.3 5.5 7.9 2.6v-4.2l-4.1-1.4-.1-2.5z"
      />
    </svg>
  );
}

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <CodeHighlight code={tsxCode} highlightOnClient />
    </div>
  );
}

export function Unstyled() {
  return (
    <div style={{ padding: 40 }}>
      <CodeHighlight code={tsxCode} highlightOnClient unstyled />
    </div>
  );
}

export function Tabs() {
  return (
    <div style={{ padding: 40 }}>
      <CodeHighlightTabs
        code={[
          { code: tsxCode, language: 'tsx', icon: <TsIcon />, fileName: 'Component.tsx' },
          { code: cssCode, language: 'scss', icon: <CSSIcon />, fileName: 'Component.module.css' },
          {
            code: cssCode,
            language: 'scss',
            icon: <CSSIcon />,
            fileName: 'Long-file-name-that-will-break-to-another-line.css',
          },
        ]}
        defaultExpanded={false}
      >
        {tsxCode}
      </CodeHighlightTabs>
    </div>
  );
}

export function TabsUnstyled() {
  return (
    <div style={{ padding: 40 }}>
      <CodeHighlightTabs
        unstyled
        code={[
          { code: tsxCode, language: 'tsx', icon: <TsIcon />, fileName: 'Component.tsx' },
          { code: cssCode, language: 'scss', icon: <CSSIcon />, fileName: 'Component.module.css' },
          {
            code: cssCode,
            language: 'scss',
            icon: <CSSIcon />,
            fileName: 'Long-file-name-that-will-break-to-another-line.css',
          },
        ]}
        defaultExpanded={false}
      >
        {tsxCode}
      </CodeHighlightTabs>
    </div>
  );
}

export function Inline() {
  return (
    <div style={{ padding: 40 }}>
      <p>
        Hello there! this is{' '}
        <InlineCodeHighlight code='<InlineCodeHighlight code="" language="tsx" />' language="tsx" />{' '}
        some code Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid reiciendis,
        facilis repudiandae vero mollitia non dolorum cupiditate assumenda odio unde quaerat beatae
        explicabo veritatis nam temporibus! Quibusdam quod enim voluptatibus?
      </p>
    </div>
  );
}

export function DataChangesOverTime() {
  const [code, setCode] = useState('a');
  return (
    <>
      <button
        type="button"
        onClick={() => {
          setCode((c) => (c === 'a' ? 'b' : 'a'));
        }}
      >
        Toggle
      </button>
      <CodeHighlight code={code} />
      {code}
    </>
  );
}

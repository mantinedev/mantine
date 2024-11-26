import { useState } from 'react';
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import { DEFAULT_THEME, rem } from '../../core';
import { Button, ButtonProps } from './Button';

export default { title: 'Button' };

export function RenderRoot() {
  return <Button renderRoot={(props) => <a {...props} href="#" />}>Some content</Button>;
}

export function AutoContrast() {
  const buttons = Array(10)
    .fill(0)
    .map((_, index) => (
      <Button key={index} color={`red.${index}`} autoContrast>
        Button
      </Button>
    ));

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 10,
        padding: 40,
      }}
    >
      {buttons}
    </div>
  );
}

export function PolymorphicAlignment() {
  return (
    <div style={{ padding: 40 }}>
      <Button>Button</Button>
      <Button component="div">Div</Button>
      <Button component="a">Link</Button>
    </div>
  );
}

export function SingleButton() {
  return (
    <div style={{ padding: 40 }}>
      <div>
        <Button variant="outline" size="xl">
          Button
        </Button>
      </div>
      <div>
        <Button disabled variant="outline" size="xl">
          Button
        </Button>
      </div>
    </div>
  );
}

export function WithinDisabledFieldset() {
  return (
    <fieldset disabled style={{ padding: 40 }}>
      <legend>Disabled fieldset</legend>
      <Button size="lg">Disabled button</Button>
    </fieldset>
  );
}

function Colors({ index, ...others }: ButtonProps & { index?: number }) {
  const colors = Object.keys(DEFAULT_THEME.colors).map((color) => (
    <Button
      color={`${color}${typeof index === 'number' ? `.${index}` : ''}`}
      key={color}
      {...others}
    >
      Button
    </Button>
  ));
  return <div style={{ display: 'flex', gap: 20, padding: 40 }}>{colors}</div>;
}

export function Usage() {
  return (
    <>
      Default variant:
      <Colors variant="default" />
      Filled variant:
      <Colors />
      Filled variant index
      <Colors index={4} />
      Light variant:
      <Colors variant="light" />
      Light variant index:
      <Colors variant="light" index={5} />
      Subtle variant:
      <Colors variant="subtle" />
      Subtle variant index:
      <Colors variant="subtle" index={5} />
      Outline variant:
      <Colors variant="outline" disabled />
      Outline variant index:
      <Colors variant="outline" index={4} />
      Transparent variant:
      <Colors variant="transparent" />
      Transparent variant index:
      <Colors variant="transparent" index={4} />
      <div style={{ backgroundColor: 'rgba(0,0,0,.5)' }}>
        White variant:
        <Colors variant="white" />
        White variant index:
        <Colors variant="white" index={4} />
      </div>
    </>
  );
}

export function FullWidth() {
  return (
    <div style={{ padding: 40 }}>
      <Button fullWidth leftSection="L" rightSection="R" justify="space-between">
        Button
      </Button>
    </div>
  );
}

export function Sizes() {
  return (
    <>
      <div style={{ padding: 40 }}>
        <Button size="xs">Button xs</Button>
        <Button size="sm">Button sm</Button>
        <Button size="md">Button md</Button>
        <Button size="lg">Button lg</Button>
        <Button size="xl">Button xl</Button>
      </div>

      <div style={{ padding: 40 }}>
        <Button size="compact-xs">Button compact xs</Button>
        <Button size="compact-sm">Button compact sm</Button>
        <Button size="compact-md">Button compact md</Button>
        <Button size="compact-lg">Button compact lg</Button>
        <Button size="compact-xl">Button compact xl</Button>
      </div>
    </>
  );
}

export function CssColor() {
  return (
    <div style={{ padding: 40 }}>
      Filled variant
      <div>
        <Button size="xl" radius="xl" color="#ff00ff">
          $$
        </Button>
      </div>
      Light variant
      <div>
        <Button size="xl" radius="xl" color="#ff00ff" variant="light">
          $$
        </Button>
      </div>
      Outline variant
      <div>
        <Button size="xl" radius="xl" color="#ff00ff" variant="outline">
          $$
        </Button>
      </div>
      Subtle variant
      <div>
        <Button size="xl" radius="xl" color="#ff00ff" variant="subtle">
          $$
        </Button>
      </div>
      Transparent variant
      <div>
        <Button size="xl" radius="xl" color="#ff00ff" variant="transparent">
          $$
        </Button>
      </div>
      White variant
      <div style={{ backgroundColor: 'rgba(0,0,0,.5)' }}>
        <Button size="xl" radius="xl" color="#ff00ff" variant="white">
          $$
        </Button>
      </div>
    </div>
  );
}

export function GradientVariant() {
  return (
    <div style={{ padding: 40, display: 'flex', gap: 40 }}>
      <Button size="lg" variant="gradient">
        $$
      </Button>
      <Button size="lg" variant="gradient" gradient={{ from: 'red', to: 'cyan' }}>
        $$
      </Button>
      <Button size="lg" variant="gradient" gradient={{ from: '#FF00FF', to: '#00FF00' }}>
        $$
      </Button>
    </div>
  );
}

export function AsLink() {
  return (
    <div style={{ padding: 40 }}>
      <Button
        size="xl"
        component="a"
        href="https://mantine.dev"
        onClick={(event) => event.preventDefault()}
      >
        $$
      </Button>
      <Button size="xl" onClick={(event) => event.preventDefault()}>
        $$
      </Button>
    </div>
  );
}

export function Variables() {
  return (
    <div style={{ padding: 40 }}>
      <Button
        size="xl"
        __vars={{ '--aasdsad': 'asdasd' }}
        vars={(_theme, props) => {
          const result = { root: {} as any };
          if (props.size === 'xl') {
            result.root['--ai-size'] = rem('12rem');
            result.root['--ai-bg'] = 'pink';
            result.root['--ai-hover'] = 'orange';
          }

          return result;
        }}
      >
        $$
      </Button>
    </div>
  );
}

export function Loading() {
  return (
    <div style={{ padding: 40, display: 'flex', gap: 20 }}>
      <Button loading size="xs">
        Button xs
      </Button>
      <Button loading size="sm">
        Button sm
      </Button>
      <Button loading size="md">
        Button md
      </Button>
      <Button loading size="lg">
        Button lg
      </Button>
      <Button loading size="xl">
        Button xl
      </Button>
    </div>
  );
}

export function ToggleLoading() {
  const [loading, setLoading] = useState(false);
  return (
    <div style={{ padding: 40, display: 'flex', gap: 20 }}>
      <Button loading={loading} size="lg">
        Save to database
      </Button>

      <Button onClick={() => setLoading((l) => !l)} size="lg">
        Toggle loading state
      </Button>
    </div>
  );
}

export function Disabled() {
  return (
    <div style={{ padding: 40, display: 'flex', gap: 20 }}>
      <Button disabled size="lg">
        $$
      </Button>
    </div>
  );
}

export function Sections() {
  return (
    <div style={{ padding: 40, display: 'flex', gap: 20 }}>
      <Button leftSection="L">With Left</Button>
      <Button rightSection="R">With Right</Button>
      <Button leftSection="L" rightSection="R">
        With Both
      </Button>
    </div>
  );
}

export function ButtonGroup() {
  return (
    <div style={{ padding: 40, display: 'flex', gap: 20 }}>
      <Button size="lg" variant="default">
        S
      </Button>
      <Button.Group>
        <Button size="lg" variant="default">
          S
        </Button>
      </Button.Group>

      <Button.Group borderWidth={1}>
        <Button size="lg" variant="default" component="a" href="https://mantine.dev">
          2
        </Button>
        <Button size="lg" variant="default">
          1
        </Button>

        <Button size="lg" variant="default">
          2
        </Button>
        <Button size="lg" variant="default">
          3
        </Button>
      </Button.Group>

      <Button.Group orientation="vertical">
        <Button size="lg" variant="default">
          1
        </Button>
        <Button size="lg" variant="default">
          2
        </Button>
        <Button size="lg" variant="default">
          2
        </Button>
        <Button size="lg" variant="default">
          3
        </Button>
      </Button.Group>
    </div>
  );
}

export function Unstyled() {
  return (
    <div style={{ padding: 40 }}>
      <Button unstyled loading>
        Unstyled
      </Button>
    </div>
  );
}

export function GroupSection() {
  return (
    <div>
      <Button.Group>
        <Button variant="default" size="lg" radius="md">
          <IconChevronDown color="var(--mantine-color-red-text)" />
        </Button>
        <Button.GroupSection variant="default" size="lg" bg="var(--mantine-color-body)">
          118
        </Button.GroupSection>
        <Button variant="default" size="lg" radius="md">
          <IconChevronUp color="var(--mantine-color-teal-text)" />
        </Button>
      </Button.Group>
    </div>
  );
}

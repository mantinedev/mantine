import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import { DEFAULT_THEME, MantineThemeProvider, rem } from '../../core';
import { ActionIcon, ActionIconProps } from './ActionIcon';

export default { title: 'ActionIcon' };

function Colors({ index, ...others }: ActionIconProps & { index?: number }) {
  const colors = Object.keys(DEFAULT_THEME.colors).map((color) => (
    <ActionIcon
      color={`${color}${typeof index === 'number' ? `.${index}` : ''}`}
      key={color}
      {...others}
      size="lg"
    >
      $$
    </ActionIcon>
  ));
  return <div style={{ display: 'flex', gap: 20, padding: 40 }}>{colors}</div>;
}

export function AutoContrast() {
  const buttons = Array(10)
    .fill(0)
    .map((_, index) => (
      <ActionIcon key={index} color={`red.${index}`} autoContrast>
        $$
      </ActionIcon>
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

export function SingleButton() {
  return (
    <div style={{ padding: 40 }}>
      <MantineThemeProvider
        theme={{
          components: {
            ActionIcon: ActionIcon.extend({
              defaultProps: {
                // Color: 'red',
              },
            }),
          },
        }}
      >
        <ActionIcon loading>$$</ActionIcon>
      </MantineThemeProvider>
    </div>
  );
}

export function WithinDisabledFieldset() {
  return (
    <fieldset disabled style={{ padding: 40 }}>
      <legend>Disabled fieldset</legend>
      <ActionIcon size="lg" p={45}>
        $$
      </ActionIcon>
    </fieldset>
  );
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

export function CssColor() {
  return (
    <div style={{ padding: 40 }}>
      Filled variant
      <div>
        <ActionIcon size="xl" radius="xl" color="#ff00ff">
          $$
        </ActionIcon>
      </div>
      Light variant
      <div>
        <ActionIcon size="xl" radius="xl" color="#ff00ff" variant="light">
          $$
        </ActionIcon>
      </div>
      Outline variant
      <div>
        <ActionIcon size="xl" radius="xl" color="#ff00ff" variant="outline">
          $$
        </ActionIcon>
      </div>
      Subtle variant
      <div>
        <ActionIcon size="xl" radius="xl" color="#ff00ff" variant="subtle">
          $$
        </ActionIcon>
      </div>
      Transparent variant
      <div>
        <ActionIcon size="xl" radius="xl" color="#ff00ff" variant="transparent">
          $$
        </ActionIcon>
      </div>
      White variant
      <div style={{ backgroundColor: 'rgba(0,0,0,.5)' }}>
        <ActionIcon size="xl" radius="xl" color="#ff00ff" variant="white">
          $$
        </ActionIcon>
      </div>
    </div>
  );
}

export function GradientVariant() {
  return (
    <div style={{ padding: 40, display: 'flex', gap: 40 }}>
      <ActionIcon size="lg" variant="gradient">
        $$
      </ActionIcon>
      <ActionIcon size="lg" variant="gradient" gradient={{ from: 'red', to: 'cyan' }}>
        $$
      </ActionIcon>
      <ActionIcon size="lg" variant="gradient" gradient={{ from: '#FF00FF', to: '#00FF00' }}>
        $$
      </ActionIcon>
    </div>
  );
}

export function AsLink() {
  return (
    <div style={{ padding: 40 }}>
      <ActionIcon size="xl" component="a" href="https://mantine.dev">
        $$
      </ActionIcon>
    </div>
  );
}

export function Variables() {
  return (
    <div style={{ padding: 40 }}>
      <ActionIcon
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
      </ActionIcon>
    </div>
  );
}

export function Loading() {
  return (
    <div style={{ padding: 40, display: 'flex', gap: 20 }}>
      <ActionIcon loading size="lg">
        $$
      </ActionIcon>
      <ActionIcon loading variant="subtle" size="lg">
        $$
      </ActionIcon>
      <ActionIcon loading variant="subtle" color="orange" size="lg">
        $$
      </ActionIcon>
    </div>
  );
}

export function Disabled() {
  return (
    <div style={{ padding: 40, display: 'flex', gap: 20 }}>
      <ActionIcon disabled size="lg">
        $$
      </ActionIcon>
    </div>
  );
}

export function ActionIconGroup() {
  return (
    <div style={{ padding: 40, display: 'flex', gap: 20 }}>
      <ActionIcon size="lg" variant="default">
        S
      </ActionIcon>
      <ActionIcon.Group>
        <ActionIcon size="lg" variant="default">
          S
        </ActionIcon>
      </ActionIcon.Group>

      <ActionIcon.Group borderWidth={1}>
        <ActionIcon size="lg" variant="default">
          1
        </ActionIcon>
        <ActionIcon size="lg" variant="default" component="a" href="https://mantine.dev">
          2
        </ActionIcon>
        <ActionIcon size="lg" variant="default">
          2
        </ActionIcon>
        <ActionIcon size="lg" variant="default">
          3
        </ActionIcon>
      </ActionIcon.Group>

      <ActionIcon.Group orientation="vertical">
        <ActionIcon size="lg" variant="default">
          1
        </ActionIcon>
        <ActionIcon size="lg" variant="default">
          2
        </ActionIcon>
        <ActionIcon size="lg" variant="default">
          2
        </ActionIcon>
        <ActionIcon size="lg" variant="default">
          3
        </ActionIcon>
      </ActionIcon.Group>
    </div>
  );
}

export function Unstyled() {
  return (
    <div style={{ padding: 40 }}>
      <ActionIcon.Group unstyled>
        <ActionIcon unstyled size="lg" variant="default">
          $$
        </ActionIcon>
        <ActionIcon unstyled size="lg" variant="default">
          $$
        </ActionIcon>
      </ActionIcon.Group>
    </div>
  );
}

export function GroupSection() {
  return (
    <div>
      <ActionIcon.Group>
        <ActionIcon variant="default" size="lg" radius="md">
          <IconChevronDown color="var(--mantine-color-red-text)" />
        </ActionIcon>
        <ActionIcon.GroupSection variant="default" size="lg" bg="var(--mantine-color-body)">
          118
        </ActionIcon.GroupSection>
        <ActionIcon variant="default" size="lg" radius="md">
          <IconChevronUp color="var(--mantine-color-teal-text)" />
        </ActionIcon>
      </ActionIcon.Group>
    </div>
  );
}

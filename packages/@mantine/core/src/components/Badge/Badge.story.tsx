import { IconStarFilled } from '@tabler/icons-react';
import { Group } from '../Group';
import { Badge } from './Badge';

export default { title: 'Badge' };

export function Usage() {
  return (
    <div
      style={{
        padding: 40,
        display: 'flex',
        gap: '1rem',
        background: 'rgba(0, 0, 0, 0.05)',
        flexWrap: 'wrap',
      }}
    >
      <Badge>Filled</Badge>
      <Badge variant="light">Light</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="dot">Dot</Badge>
      <Badge variant="transparent">Transparent</Badge>
      <Badge variant="white">White</Badge>
      <Badge variant="gradient">Gradient</Badge>
      <Badge variant="default">Default</Badge>

      <Badge leftSection="L">Left section</Badge>
      <Badge rightSection="R">Right section</Badge>
      <Badge leftSection="L" rightSection="R">
        Both sections
      </Badge>
    </div>
  );
}

export function WithFixedWidth() {
  return (
    <div style={{ padding: 40 }}>
      <Badge w={200} rightSection="R" leftSection="L">
        Badge
      </Badge>
      <Badge w={200} leftSection="L">
        Badge
      </Badge>
      <Badge w={200} rightSection="R">
        Badge
      </Badge>
      <Badge w={200}>Badge</Badge>
      <span>Other content</span>
    </div>
  );
}

export function WithIconInSection() {
  return (
    <Badge
      leftSection={<IconStarFilled size={12} color="var(--mantine-color-yellow-5)" />}
      color="dark"
      variant="filled"
    >
      Badge with icon
    </Badge>
  );
}

export function Round() {
  return (
    <div style={{ padding: 40 }}>
      <Badge circle size="md">
        12
      </Badge>
    </div>
  );
}

export function AutoContrast() {
  const buttons = Array(10)
    .fill(0)
    .map((_, index) => (
      <Badge key={index} color={`blue.${index}`} autoContrast>
        Badge
      </Badge>
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

export function Variants() {
  return (
    <Group p={40}>
      <Badge variant="light" rightSection="R" leftSection="L">
        Light
      </Badge>
      <Badge variant="filled">Filled</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="dot">Dot</Badge>
      <Badge variant="gradient">Gradient</Badge>
      <Badge variant="gradient" gradient={{ deg: 30, from: 'red', to: 'orange' }}>
        Custom gradient
      </Badge>
      <Badge variant="gradient" gradient={{ deg: 115, from: '#FC00CF', to: '#CCFFEF' }}>
        hex gradient
      </Badge>
    </Group>
  );
}

export function WithinGroup() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Badge>Single badge within group</Badge>
    </div>
  );
}

export function Unstyled() {
  return (
    <div style={{ padding: 40 }}>
      <Badge unstyled leftSection="$$">
        Unstyled badge
      </Badge>
    </div>
  );
}

export function CustomComponent() {
  return (
    <div style={{ padding: 40 }}>
      <Badge component="a" href="https://mantine.dev/">
        Anchor
      </Badge>

      <Badge component="button" type="button">
        Button
      </Badge>
    </div>
  );
}

export function ColorsIndex() {
  return (
    <div style={{ padding: 40 }}>
      <Badge color="violet.2" variant="dot">
        Anchor
      </Badge>
    </div>
  );
}

export function Sizes() {
  const sizes = ['xs', 'sm', 'md', 'lg', 'xl'].map((size) => (
    <Badge size={size} key={size}>
      Badge {size}
    </Badge>
  ));

  return <div style={{ padding: 40, display: 'flex', gap: 40 }}>{sizes}</div>;
}

export function DotWithRightSection() {
  return (
    <>
      <Badge variant="dot" rightSection="R" color="red" w={300}>
        Badge
      </Badge>
      <Badge variant="dot" color="red" w={300}>
        Badge
      </Badge>
    </>
  );
}

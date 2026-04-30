import { Badge } from '../Badge';
import { Group } from '../Group';
import { Scroller } from './Scroller';

export default { title: 'Scroller' };

function ColorBadges() {
  return Array.from({ length: 20 }).map((_, index) => (
    <Badge key={index} variant="light" size="lg" miw="fit-content">
      Badge {index + 1}
    </Badge>
  ));
}

export function Usage() {
  return (
    <div style={{ padding: 40, maxWidth: 600 }}>
      <Scroller>
        <Group gap="xs" wrap="nowrap">
          <ColorBadges />
        </Group>
      </Scroller>
    </div>
  );
}

export function WithBadges() {
  return (
    <div style={{ padding: 40, maxWidth: 600 }}>
      <Scroller>
        <Group gap="xs" wrap="nowrap">
          {Array.from({ length: 15 }).map((_, index) => (
            <Badge key={index} variant="light" size="lg" miw="fit-content">
              Badge {index + 1}
            </Badge>
          ))}
        </Group>
      </Scroller>
    </div>
  );
}

export function CustomScrollAmount() {
  return (
    <div style={{ padding: 40, maxWidth: 600 }}>
      <Scroller scrollAmount={400}>
        <Group gap="xs" wrap="nowrap">
          <ColorBadges />
        </Group>
      </Scroller>
    </div>
  );
}

export function SmallControlSize() {
  return (
    <div style={{ padding: 40, maxWidth: 600 }}>
      <Scroller controlSize="xs">
        <Group gap="xs" wrap="nowrap">
          <ColorBadges />
        </Group>
      </Scroller>
    </div>
  );
}

export function LargeControlSize() {
  return (
    <div style={{ padding: 40, maxWidth: 600 }}>
      <Scroller controlSize="xl">
        <Group gap="xs" wrap="nowrap">
          <ColorBadges />
        </Group>
      </Scroller>
    </div>
  );
}

export function AlwaysShowControls() {
  return (
    <div style={{ padding: 40, maxWidth: 600 }}>
      <Scroller showStartControl showEndControl>
        <Group gap="xs" wrap="nowrap">
          <ColorBadges />
        </Group>
      </Scroller>
    </div>
  );
}

export function NoOverflow() {
  return (
    <div style={{ padding: 40, maxWidth: 600 }}>
      <Scroller>
        <Group gap="xs" wrap="nowrap">
          <Badge variant="light" size="lg" miw="fit-content">
            Badge 1
          </Badge>
          <Badge variant="light" size="lg" miw="fit-content">
            Badge 2
          </Badge>
          <Badge variant="light" size="lg" miw="fit-content">
            Badge 3
          </Badge>
        </Group>
      </Scroller>
    </div>
  );
}

export function Rtl() {
  return (
    <div style={{ padding: 40, maxWidth: 600 }} dir="rtl">
      <Scroller>
        <Group gap="xs" wrap="nowrap">
          <ColorBadges />
        </Group>
      </Scroller>
    </div>
  );
}

export function WithTabs() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <Scroller>
        <Group gap={0} wrap="nowrap">
          {Array.from({ length: 12 }).map((_, index) => (
            <Badge key={index} variant="subtle" radius={0} size="lg" miw="fit-content">
              Tab {index + 1}
            </Badge>
          ))}
        </Group>
      </Scroller>
    </div>
  );
}

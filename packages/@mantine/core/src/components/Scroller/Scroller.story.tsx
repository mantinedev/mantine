import { useState } from 'react';
import { Badge } from '../Badge';
import { Button } from '../Button';
import { Group } from '../Group';
import { Tabs } from '../Tabs';
import { Scroller } from './Scroller';

export default { title: 'Scroller' };

function ColorBadges() {
  return Array.from({ length: 20 }).map((_, index) => (
    <Badge key={index} variant="default" size="lg" miw="fit-content">
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
          <Badge variant="default" size="lg" miw="fit-content">
            Badge 1
          </Badge>
          <Badge variant="default" size="lg" miw="fit-content">
            Badge 2
          </Badge>
          <Badge variant="default" size="lg" miw="fit-content">
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
      <Tabs defaultValue="tab-1">
        <Scroller>
          <Tabs.List style={{ flexWrap: 'nowrap' }}>
            {Array.from({ length: 12 }).map((_, index) => (
              <Tabs.Tab key={index} value={`tab-${index + 1}`}>
                Tab {index + 1}
              </Tabs.Tab>
            ))}
          </Tabs.List>
        </Scroller>
      </Tabs>
    </div>
  );
}

export function NotDraggable() {
  return (
    <div style={{ padding: 40, maxWidth: 600 }}>
      <Scroller draggable={false}>
        <Group gap="xs" wrap="nowrap">
          <ColorBadges />
        </Group>
      </Scroller>
    </div>
  );
}

export function WithLinks() {
  const [clicks, setClicks] = useState(0);

  return (
    <div style={{ padding: 40, maxWidth: 600 }}>
      <Scroller>
        <Group gap="md" wrap="nowrap">
          {Array.from({ length: 20 }).map((_, index) => (
            <a key={index} href={`#link-${index + 1}`} style={{ whiteSpace: 'nowrap' }}>
              Link {index + 1}
            </a>
          ))}
        </Group>
      </Scroller>
      <Button mt="md" variant="default" onClick={() => setClicks((c) => c + 1)}>
        Outside button clicked {clicks} times
      </Button>
    </div>
  );
}

import { useState } from 'react';
import { Badge } from '../Badge';
import { Button } from '../Button';
import { Group } from '../Group';
import { HoverCard } from '../HoverCard';
import { Text } from '../Text';
import { Tooltip } from '../Tooltip';
import { OverflowList } from './OverflowList';

export default { title: 'OverflowList' };

const fruits = [
  'Apple',
  'Banana',
  'Cherry',
  'Date',
  'Elderberry',
  'Fig',
  'Grape',
  'Honeydew',
  'Indian Fig',
  'Jackfruit',
  'Kiwi',
  'Lemon',
  'Mango',
  'Nectarine',
  'Orange',
  'Papaya',
];

export function Usage() {
  return (
    <div style={{ padding: 40, maxWidth: 500 }}>
      <OverflowList
        data={fruits}
        maxRows={2}
        gap={4}
        renderOverflow={(items) => <Badge>+{items.length} more</Badge>}
        renderItem={(item) => <Badge>{item}</Badge>}
      />
    </div>
  );
}

const short = ['A', 'B', 'C', 'D', 'E', 'VeryLongItemNameThatTakesSpace'];
const reordered = ['VeryLongItemNameThatTakesSpace', 'A', 'B', 'C', 'D', 'E'];

export function ReorderRecompute() {
  const [data, setData] = useState(short);

  return (
    <div style={{ padding: 40 }}>
      <Group mb="md">
        <Button
          data-testid="reorder"
          onClick={() => setData((d) => (d === short ? reordered : short))}
        >
          Toggle order (same length)
        </Button>
      </Group>

      <div data-testid="container" style={{ width: 320, border: '2px solid red', padding: 4 }}>
        <OverflowList
          data={data}
          maxRows={1}
          gap={4}
          renderOverflow={(items) => (
            <Badge color="orange" data-testid="overflow">
              +{items.length} more
            </Badge>
          )}
          renderItem={(item) => <Badge data-testid="item">{item}</Badge>}
        />
      </div>
    </div>
  );
}

export function LayoutEdgeCases() {
  return (
    <div style={{ padding: 40, display: 'flex', flexDirection: 'column', gap: 24, width: 260 }}>
      <OverflowList
        data-testid="padded"
        data={fruits}
        gap={4}
        collapseFrom="start"
        p="md"
        bd="1px solid var(--mantine-color-default-border)"
        renderOverflow={(items) => <Badge>+{items.length} more</Badge>}
        renderItem={(item) => <Badge>{item}</Badge>}
      />

      <OverflowList
        data-testid="oversized"
        data={['Apple', 'Banana', 'A very long item that is wider than the list itself', 'Cherry']}
        gap={4}
        maxRows={3}
        renderOverflow={(items) => <Badge>+{items.length} more</Badge>}
        renderItem={(item) => (
          <Text size="sm" style={{ whiteSpace: 'nowrap' }}>
            {item}
          </Text>
        )}
      />

      <OverflowList
        data-testid="string-indicator"
        data={fruits}
        gap={4}
        maxRows={2}
        renderOverflow={(items) => `+${items.length} more`}
        renderItem={(item) => <Badge>{item}</Badge>}
      />
    </div>
  );
}

export function RemeasureInputs() {
  const [wideGap, setWideGap] = useState(false);
  const [longIndicator, setLongIndicator] = useState(false);

  const renderOverflow = (items: string[]) => (
    <Badge data-testid="overflow">
      {longIndicator ? `and ${items.length} more fruits` : `+${items.length}`}
    </Badge>
  );

  return (
    <div style={{ padding: 40, display: 'flex', flexDirection: 'column', gap: 24, width: 400 }}>
      <Group>
        <Button data-testid="toggle-gap" onClick={() => setWideGap((v) => !v)}>
          Toggle gap
        </Button>
        <Button data-testid="toggle-indicator" onClick={() => setLongIndicator((v) => !v)}>
          Toggle indicator
        </Button>
      </Group>

      <Group data-testid="in-group" wrap="nowrap">
        <Text size="sm">Tags:</Text>
        <OverflowList
          data={fruits}
          gap={wideGap ? 'xl' : 4}
          renderOverflow={renderOverflow}
          renderItem={(item) => <Badge>{item}</Badge>}
        />
      </Group>

      <div data-testid="inline-block" style={{ display: 'inline-block', maxWidth: 300 }}>
        <OverflowList
          data={fruits}
          gap={wideGap ? 'xl' : 4}
          renderOverflow={renderOverflow}
          renderItem={(item) => <Badge>{item}</Badge>}
        />
      </div>

      <div style={{ position: 'relative', height: 30 }}>
        <div data-testid="absolute" style={{ position: 'absolute', maxWidth: 300 }}>
          <OverflowList
            data={fruits}
            gap={wideGap ? 'xl' : 4}
            renderOverflow={renderOverflow}
            renderItem={(item) => <Badge>{item}</Badge>}
          />
        </div>
      </div>

      <OverflowList
        data-testid="flex-grow"
        data={fruits}
        gap={wideGap ? 'xl' : 4}
        renderOverflow={renderOverflow}
        renderItem={(item) => <Badge style={{ flexGrow: 1 }}>{item}</Badge>}
      />

      <OverflowList
        data-testid="margins"
        data={fruits}
        gap={0}
        renderOverflow={renderOverflow}
        renderItem={(item) => <Badge mr="md">{item}</Badge>}
      />

      <OverflowList
        data-testid="auto-margin"
        data={fruits}
        gap={wideGap ? 'xl' : 4}
        maxRows={2}
        renderOverflow={(items) => (
          <Badge data-testid="overflow" ml="auto">
            {longIndicator ? `and ${items.length} more fruits` : `+${items.length}`}
          </Badge>
        )}
        renderItem={(item) => <Badge>{item}</Badge>}
      />
    </div>
  );
}

export function InlineDropdowns() {
  const renderOverflow = (keepMounted: boolean) => (items: string[]) => (
    <HoverCard withinPortal={false} keepMounted={keepMounted}>
      <HoverCard.Target>
        <Badge component="button" type="button" data-testid="overflow">
          +{items.length} more
        </Badge>
      </HoverCard.Target>
      <HoverCard.Dropdown>
        {items.map((item) => (
          <div key={item}>{item}</div>
        ))}
      </HoverCard.Dropdown>
    </HoverCard>
  );

  return (
    <div style={{ padding: 40, display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div data-testid="hover-card" style={{ resize: 'horizontal', overflow: 'auto', width: 400 }}>
        <OverflowList
          data={fruits}
          gap={4}
          renderOverflow={renderOverflow(false)}
          renderItem={(item) => <Badge>{item}</Badge>}
        />
      </div>

      <div
        data-testid="keep-mounted"
        style={{ resize: 'horizontal', overflow: 'auto', width: 400 }}
      >
        <OverflowList
          data={fruits}
          gap={4}
          collapseFrom="start"
          renderOverflow={renderOverflow(true)}
          renderItem={(item) => <Badge>{item}</Badge>}
        />
      </div>

      <div data-testid="tooltip" style={{ resize: 'horizontal', overflow: 'auto', width: 400 }}>
        <OverflowList
          data={fruits}
          gap={4}
          renderOverflow={(items) => <Badge>+{items.length} more</Badge>}
          renderItem={(item) => (
            <Tooltip label={item} withinPortal={false}>
              <Badge>{item}</Badge>
            </Tooltip>
          )}
        />
      </div>
    </div>
  );
}

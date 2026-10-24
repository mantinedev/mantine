import { useEffect, useRef, useState } from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';
import { Button, Menu } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useEffect, useRef, useState } from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';
import { Button, Menu } from '@mantine/core';

const users = Array.from({ length: 10000 }, (_, index) => \`User \${index + 1}\`);

function Demo() {
  const [viewport, setViewport] = useState<HTMLDivElement | null>(null);
  const pendingFocusIndex = useRef<number | null>(null);

  const virtualizer = useVirtualizer({
    count: users.length,
    getScrollElement: () => viewport,
    estimateSize: () => 36,
    overscan: 10,
  });

  const getItem = (index: number) =>
    viewport?.querySelector<HTMLElement>(\`[data-index="\${index}"]\`) ?? null;

  const focusItem = (index: number) => {
    virtualizer.scrollToIndex(index);
    const item = getItem(index);
    if (item) {
      item.focus();
    } else {
      pendingFocusIndex.current = index;
    }
  };

  useEffect(() => {
    if (pendingFocusIndex.current === null) {
      return;
    }
    const item = getItem(pendingFocusIndex.current);
    if (item) {
      pendingFocusIndex.current = null;
      item.focus();
    }
  });

  const handleKeyDownCapture = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const index = Number((event.target as HTMLElement).dataset.index);
    if (Number.isNaN(index)) {
      return;
    }

    const last = users.length - 1;
    let next: number | null = null;

    if (event.key === 'Home') {
      next = 0;
    } else if (event.key === 'End') {
      next = last;
    } else if (event.key === 'ArrowDown' && index === last) {
      next = 0;
    } else if (event.key === 'ArrowUp' && index === 0) {
      next = last;
    }

    if (next !== null) {
      event.preventDefault();
      event.stopPropagation();
      focusItem(next);
    }
  };

  return (
    <Menu width={220}>
      <Menu.Target>
        <Button variant="default">Assign to user</Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.ScrollArea mah={260} viewportRef={setViewport}>
          <div
            role="presentation"
            onKeyDownCapture={handleKeyDownCapture}
            style={{ height: virtualizer.getTotalSize(), position: 'relative' }}
          >
            {virtualizer.getVirtualItems().map((virtualItem) => (
              <Menu.Item
                key={virtualItem.key}
                ref={virtualizer.measureElement}
                data-index={virtualItem.index}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  transform: \`translateY(\${virtualItem.start}px)\`,
                }}
              >
                {users[virtualItem.index]}
              </Menu.Item>
            ))}
          </div>
        </Menu.ScrollArea>
      </Menu.Dropdown>
    </Menu>
  );
}
`;

const users = Array.from({ length: 10000 }, (_, index) => `User ${index + 1}`);

function Demo() {
  const [viewport, setViewport] = useState<HTMLDivElement | null>(null);
  const pendingFocusIndex = useRef<number | null>(null);

  const virtualizer = useVirtualizer({
    count: users.length,
    getScrollElement: () => viewport,
    estimateSize: () => 36,
    overscan: 10,
  });

  const getItem = (index: number) =>
    viewport?.querySelector<HTMLElement>(`[data-index="${index}"]`) ?? null;

  const focusItem = (index: number) => {
    virtualizer.scrollToIndex(index);
    const item = getItem(index);
    if (item) {
      item.focus();
    } else {
      pendingFocusIndex.current = index;
    }
  };

  useEffect(() => {
    if (pendingFocusIndex.current === null) {
      return;
    }
    const item = getItem(pendingFocusIndex.current);
    if (item) {
      pendingFocusIndex.current = null;
      item.focus();
    }
  });

  const handleKeyDownCapture = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const index = Number((event.target as HTMLElement).dataset.index);
    if (Number.isNaN(index)) {
      return;
    }

    const last = users.length - 1;
    let next: number | null = null;

    if (event.key === 'Home') {
      next = 0;
    } else if (event.key === 'End') {
      next = last;
    } else if (event.key === 'ArrowDown' && index === last) {
      next = 0;
    } else if (event.key === 'ArrowUp' && index === 0) {
      next = last;
    }

    if (next !== null) {
      event.preventDefault();
      event.stopPropagation();
      focusItem(next);
    }
  };

  return (
    <Menu width={220}>
      <Menu.Target>
        <Button variant="default">Assign to user</Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.ScrollArea mah={260} viewportRef={setViewport}>
          <div
            role="presentation"
            onKeyDownCapture={handleKeyDownCapture}
            style={{ height: virtualizer.getTotalSize(), position: 'relative' }}
          >
            {virtualizer.getVirtualItems().map((virtualItem) => (
              <Menu.Item
                key={virtualItem.key}
                ref={virtualizer.measureElement}
                data-index={virtualItem.index}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  transform: `translateY(${virtualItem.start}px)`,
                }}
              >
                {users[virtualItem.index]}
              </Menu.Item>
            ))}
          </div>
        </Menu.ScrollArea>
      </Menu.Dropdown>
    </Menu>
  );
}

export const virtualized: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
  defaultExpanded: false,
};

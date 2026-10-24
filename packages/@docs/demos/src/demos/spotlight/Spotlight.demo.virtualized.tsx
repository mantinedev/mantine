import { useEffect, useMemo, useState } from 'react';
import { MagnifyingGlassIcon } from '@phosphor-icons/react';
import { useVirtualizer } from '@tanstack/react-virtual';
import { Button } from '@mantine/core';
import { createSpotlight, Spotlight, useSpotlight } from '@mantine/spotlight';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useEffect, useState } from 'react';
import { MagnifyingGlassIcon } from '@phosphor-icons/react';
import { useVirtualizer } from '@tanstack/react-virtual';
import { Button } from '@mantine/core';
import { createSpotlight, Spotlight, useSpotlight } from '@mantine/spotlight';

const [store, spotlight] = createSpotlight();

const data = Array.from({ length: 10000 }, (_, index) => ({
  id: \`action-\${index}\`,
  label: \`Action \${index + 1}\`,
  description: \`Description of action \${index + 1}\`,
}));

function Demo() {
  const [query, setQuery] = useState('');
  const [viewport, setViewport] = useState<HTMLDivElement | null>(null);
  const { selected } = useSpotlight(store);

  const filtered = data.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase().trim())
  );

  const virtualizer = useVirtualizer({
    count: filtered.length,
    getScrollElement: () => viewport,
    estimateSize: () => 54,
    overscan: 10,
  });

  useEffect(() => {
    if (selected !== -1) {
      virtualizer.scrollToIndex(selected);
    }
  }, [selected, query]);

  return (
    <>
      <Button onClick={spotlight.open}>Open spotlight</Button>

      <Spotlight.Root store={store} query={query} onQueryChange={setQuery}>
        <Spotlight.Search placeholder="Search..." leftSection={<MagnifyingGlassIcon />} />
        <Spotlight.ActionsList totalActionsCount={filtered.length} viewportRef={setViewport}>
          {filtered.length === 0 && <Spotlight.Empty>Nothing found...</Spotlight.Empty>}
          <div style={{ height: virtualizer.getTotalSize(), position: 'relative' }}>
            {virtualizer.getVirtualItems().map((virtualItem) => {
              const item = filtered[virtualItem.index];
              return (
                <Spotlight.Action
                  key={item.id}
                  ref={virtualizer.measureElement}
                  data-index={virtualItem.index}
                  label={item.label}
                  description={item.description}
                  selected={virtualItem.index === selected}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    transform: \`translateY(\${virtualItem.start}px)\`,
                  }}
                />
              );
            })}
          </div>
        </Spotlight.ActionsList>
      </Spotlight.Root>
    </>
  );
}
`;

const data = Array.from({ length: 10000 }, (_, index) => ({
  id: `action-${index}`,
  label: `Action ${index + 1}`,
  description: `Description of action ${index + 1}`,
}));

function Demo() {
  const [store, spotlight] = useMemo(createSpotlight, []);
  const [query, setQuery] = useState('');
  const [viewport, setViewport] = useState<HTMLDivElement | null>(null);
  const { selected } = useSpotlight(store);

  const filtered = data.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase().trim())
  );

  const virtualizer = useVirtualizer({
    count: filtered.length,
    getScrollElement: () => viewport,
    estimateSize: () => 54,
    overscan: 10,
  });

  useEffect(() => {
    if (selected !== -1) {
      virtualizer.scrollToIndex(selected);
    }
  }, [selected, query]);

  return (
    <>
      <Button onClick={spotlight.open}>Open spotlight</Button>

      <Spotlight.Root store={store} query={query} onQueryChange={setQuery} shortcut={null}>
        <Spotlight.Search placeholder="Search..." leftSection={<MagnifyingGlassIcon />} />
        <Spotlight.ActionsList totalActionsCount={filtered.length} viewportRef={setViewport}>
          {filtered.length === 0 && <Spotlight.Empty>Nothing found...</Spotlight.Empty>}
          <div style={{ height: virtualizer.getTotalSize(), position: 'relative' }}>
            {virtualizer.getVirtualItems().map((virtualItem) => {
              const item = filtered[virtualItem.index];
              return (
                <Spotlight.Action
                  key={item.id}
                  ref={virtualizer.measureElement}
                  data-index={virtualItem.index}
                  label={item.label}
                  description={item.description}
                  selected={virtualItem.index === selected}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    transform: `translateY(${virtualItem.start}px)`,
                  }}
                />
              );
            })}
          </div>
        </Spotlight.ActionsList>
      </Spotlight.Root>
    </>
  );
}

export const virtualized: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  centered: true,
  defaultExpanded: false,
};

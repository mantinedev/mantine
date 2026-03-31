# useResizeObserver
Package: @mantine/hooks
Import: import { UseResizeObserver } from '@mantine/hooks';

## Usage

```tsx
// Demo.tsx
import { Group, Table } from '@mantine/core';
import { useResizeObserver } from '@mantine/hooks';

function Demo() {
  const [ref, rect] = useResizeObserver();

  return (
    <div className={classes.root}>
      <Group justify="center">
        <div ref={ref} className={classes.demo}>
          Resize me!
        </div>
      </Group>

      <Table
        captionSide="top"
        data={{
          caption: 'Resize element by dragging its right bottom corner',
          head: ['Property', 'Value'],
          body: [
            ['width', rect.width],
            ['height', rect.height],
          ],
        }}
      />
    </div>
  );
}

// Demo.module.css
.root {
  min-height: 380px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.demo {
  width: 400px;
  max-width: 800px;
  min-width: 160px;
  height: 200px;
  max-height: 220px;
  min-height: 80px;
  background-color: light-dark(var(--mantine-color-blue-6), var(--mantine-color-blue-8));
  resize: both;
  overflow: auto;
  color: var(--mantine-color-white);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 600;
}
```


## API

The `use-resize-observer` hook returns a `ref` object that should be passed to the observed element, and the current element content rect, as returned by the `ResizeObserver`'s callback `entry.contentRect`.
See the [Resize Observer API](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver) documentation to learn more.
On the first render (as well as during SSR), or when no element is being observed, all of the properties are equal to `0`.

```tsx
import { useResizeObserver } from '@mantine/hooks';

function Demo() {
  const [ref, rect] = useResizeObserver();
  return <div ref={ref}>Observed</div>;
}
```

See also the [use-element-size](https://mantine.dev/llms/hooks-use-element-size.md) hook in case you need to subscribe only to `width` and `height`.

## Definition

```tsx
type ObserverRect = Omit<DOMRectReadOnly, 'toJSON'>;

function useResizeObserver<T extends HTMLElement = any>(
  options?: ResizeObserverOptions
): readonly [React.RefObject<T>, ObserverRect];
```

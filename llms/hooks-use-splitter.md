# useSplitter
Package: @mantine/hooks
Import: import { UseSplitter } from '@mantine/hooks';

## Usage

`use-splitter` hook provides resizable split-pane functionality. It handles pointer drag
on resize handles, keyboard navigation following the WAI-ARIA Window Splitter pattern,
collapsible panels and min/max constraints. All sizes are percentages to avoid
SSR/hydration issues.

```tsx
import React from 'react';
import { DotsSixVerticalIcon } from '@phosphor-icons/react';
import { useSplitter } from '@mantine/hooks';

const colors = ['var(--mantine-color-blue-filled)', 'var(--mantine-color-teal-filled)'];
const labels = ['Panel A', 'Panel B'];

function Demo() {
  const splitter = useSplitter({
    panels: [
      { defaultSize: 50, min: 20 },
      { defaultSize: 50, min: 20 },
    ],
  });

  return (
    <div
      ref={splitter.ref}
      style={{
        display: 'flex',
        height: 200,
        borderRadius: 'var(--mantine-radius-md)',
        overflow: 'hidden',
      }}
    >
      {splitter.sizes.map((size, i) => (
        <React.Fragment key={i}>
          {i > 0 && (
            <div
              {...splitter.getHandleProps({ index: i - 1 })}
              style={{
                width: 4,
                flexShrink: 0,
                cursor: 'col-resize',
                touchAction: 'none',
                backgroundColor: 'var(--mantine-color-default-border)',
                position: 'relative',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: 8,
                  height: 40,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 'var(--mantine-radius-xs)',
                  backgroundColor: 'var(--mantine-color-default)',
                  border: '1px solid var(--mantine-color-default-border)',
                  color: 'var(--mantine-color-dimmed)',
                }}
              >
                <DotsSixVerticalIcon />
              </div>
            </div>
          )}
          <div
            style={{
              width: `${size}%`,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: colors[i],
              color: 'var(--mantine-color-white)',
              fontWeight: 500,
              whiteSpace: 'nowrap',
              gap: 2,
            }}
          >
            {labels[i]} ({Math.round(size)}%)
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}
```


## Vertical orientation

Set `orientation="vertical"` to create a vertical split layout.
Keyboard navigation uses ArrowUp/ArrowDown instead of ArrowLeft/ArrowRight:

```tsx
import React from 'react';
import { DotsSixIcon } from '@phosphor-icons/react';
import { useSplitter } from '@mantine/hooks';

const colors = ['var(--mantine-color-blue-filled)', 'var(--mantine-color-teal-filled)'];
const labels = ['Panel A', 'Panel B'];

function Demo() {
  const splitter = useSplitter({
    panels: [
      { defaultSize: 50, min: 20 },
      { defaultSize: 50, min: 20 },
    ],
    orientation: 'vertical',
  });

  return (
    <div
      ref={splitter.ref}
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: 300,
        borderRadius: 'var(--mantine-radius-md)',
        overflow: 'hidden',
      }}
    >
      {splitter.sizes.map((size, i) => (
        <React.Fragment key={i}>
          {i > 0 && (
            <div
              {...splitter.getHandleProps({ index: i - 1 })}
              style={{
                height: 4,
                flexShrink: 0,
                cursor: 'row-resize',
                touchAction: 'none',
                backgroundColor: 'var(--mantine-color-default-border)',
                position: 'relative',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: 40,
                  height: 8,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 'var(--mantine-radius-xs)',
                  backgroundColor: 'var(--mantine-color-default)',
                  border: '1px solid var(--mantine-color-default-border)',
                  color: 'var(--mantine-color-dimmed)',
                }}
              >
                <DotsSixIcon />
              </div>
            </div>
          )}
          <div
            style={{
              height: `${size}%`,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: colors[i],
              color: 'var(--mantine-color-white)',
              fontWeight: 500,
              whiteSpace: 'nowrap',
              gap: 2,
            }}
          >
            {labels[i]} ({Math.round(size)}%)
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}
```


## Collapsible panels

Set `collapsible: true` on a panel to allow it to collapse to zero size.
When dragged below the `collapseThreshold` (defaults to `min`), the panel
snaps to 0%. Use `collapse()`, `expand()` and `toggleCollapse()` for
programmatic control. Press Enter on a handle to toggle the smaller adjacent
collapsible panel:

```tsx
import { DotsSixVerticalIcon } from '@phosphor-icons/react';
import { Button, Group } from '@mantine/core';
import { useSplitter } from '@mantine/hooks';

function Demo() {
  const splitter = useSplitter({
    panels: [
      { defaultSize: 30, collapsible: true, min: 15 },
      { defaultSize: 70, min: 20 },
    ],
  });

  return (
    <>
      <div
        ref={splitter.ref}
        style={{
          display: 'flex',
          height: 200,
          borderRadius: 'var(--mantine-radius-md)',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            width: `${splitter.sizes[0]}%`,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'var(--mantine-color-blue-filled)',
            color: 'var(--mantine-color-white)',
            fontWeight: 500,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            gap: 2,
          }}
        >
          {!splitter.collapsed[0] && `Panel A (${Math.round(splitter.sizes[0])}%)`}
        </div>
        <div
          {...splitter.getHandleProps({ index: 0 })}
          style={{
            width: 4,
            flexShrink: 0,
            cursor: 'col-resize',
            touchAction: 'none',
            backgroundColor: 'var(--mantine-color-default-border)',
            position: 'relative',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 8,
              height: 40,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 'var(--mantine-radius-xs)',
              backgroundColor: 'var(--mantine-color-default)',
              border: '1px solid var(--mantine-color-default-border)',
              color: 'var(--mantine-color-dimmed)',
            }}
          >
            <DotsSixVerticalIcon />
          </div>
        </div>
        <div
          style={{
            width: `${splitter.sizes[1]}%`,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'var(--mantine-color-teal-filled)',
            color: 'var(--mantine-color-white)',
            fontWeight: 500,
            whiteSpace: 'nowrap',
            gap: 2,
          }}
        >
          Panel B ({Math.round(splitter.sizes[1])}%)
        </div>
      </div>
      <Group mt="md">
        <Button size="xs" onClick={() => splitter.toggleCollapse(0)}>
          {splitter.collapsed[0] ? 'Expand Panel A' : 'Collapse Panel A'}
        </Button>
      </Group>
    </>
  );
}
```


## Multiple panels

The hook supports any number of panels. Each handle controls the boundary
between its two adjacent panels:

```tsx
import React from 'react';
import { DotsSixVerticalIcon } from '@phosphor-icons/react';
import { useSplitter } from '@mantine/hooks';

const colors = [
  'var(--mantine-color-blue-filled)',
  'var(--mantine-color-teal-filled)',
  'var(--mantine-color-grape-filled)',
];
const labels = ['Panel A', 'Panel B', 'Panel C'];

function Demo() {
  const splitter = useSplitter({
    panels: [
      { defaultSize: 25, min: 10 },
      { defaultSize: 50, min: 20 },
      { defaultSize: 25, min: 10 },
    ],
  });

  return (
    <div
      ref={splitter.ref}
      style={{
        display: 'flex',
        height: 200,
        borderRadius: 'var(--mantine-radius-md)',
        overflow: 'hidden',
      }}
    >
      {splitter.sizes.map((size, i) => (
        <React.Fragment key={i}>
          {i > 0 && (
            <div
              {...splitter.getHandleProps({ index: i - 1 })}
              style={{
                width: 4,
                flexShrink: 0,
                cursor: 'col-resize',
                touchAction: 'none',
                backgroundColor: 'var(--mantine-color-default-border)',
                position: 'relative',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: 8,
                  height: 40,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 'var(--mantine-radius-xs)',
                  backgroundColor: 'var(--mantine-color-default)',
                  border: '1px solid var(--mantine-color-default-border)',
                  color: 'var(--mantine-color-dimmed)',
                }}
              >
                <DotsSixVerticalIcon />
              </div>
            </div>
          )}
          <div
            style={{
              width: `${size}%`,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: colors[i],
              color: 'var(--mantine-color-white)',
              fontWeight: 500,
              whiteSpace: 'nowrap',
              gap: 2,
            }}
          >
            {labels[i]} ({Math.round(size)}%)
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}
```


## Redistribute

By default, each handle only affects its two adjacent panels. When a neighbor panel
is at its minimum, the handle stops. Use the `redistribute` prop to allow borrowing
space from panels further away when the immediate neighbor cannot shrink any more.

### Nearest

`redistribute="nearest"` takes space from the nearest panel in the drag direction first,
then moves to the next one if more space is needed. Try dragging the first handle to
the right — when the second panel hits its minimum (20%), space is taken from the third
and fourth panels:

```tsx
import React from 'react';
import { DotsSixVerticalIcon } from '@phosphor-icons/react';
import { useSplitter } from '@mantine/hooks';

const colors = [
  'var(--mantine-color-blue-filled)',
  'var(--mantine-color-teal-filled)',
  'var(--mantine-color-grape-filled)',
  'var(--mantine-color-orange-filled)',
];
const labels = ['Panel A', 'Panel B', 'Panel C', 'Panel D'];

function Demo() {
  const splitter = useSplitter({
    panels: [
      { defaultSize: 25, min: 10 },
      { defaultSize: 25, min: 20 },
      { defaultSize: 25, min: 10 },
      { defaultSize: 25, min: 10 },
    ],
    redistribute: 'nearest',
  });

  return (
    <div
      ref={splitter.ref}
      style={{
        display: 'flex',
        height: 200,
        borderRadius: 'var(--mantine-radius-md)',
        overflow: 'hidden',
      }}
    >
      {splitter.sizes.map((size, i) => (
        <React.Fragment key={i}>
          {i > 0 && (
            <div
              {...splitter.getHandleProps({ index: i - 1 })}
              style={{
                width: 4,
                flexShrink: 0,
                cursor: 'col-resize',
                touchAction: 'none',
                backgroundColor: 'var(--mantine-color-default-border)',
                position: 'relative',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: 8,
                  height: 40,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 'var(--mantine-radius-xs)',
                  backgroundColor: 'var(--mantine-color-default)',
                  border: '1px solid var(--mantine-color-default-border)',
                  color: 'var(--mantine-color-dimmed)',
                }}
              >
                <DotsSixVerticalIcon />
              </div>
            </div>
          )}
          <div
            style={{
              width: `${size}%`,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: colors[i],
              color: 'var(--mantine-color-white)',
              fontWeight: 500,
              whiteSpace: 'nowrap',
              gap: 2,
            }}
          >
            {labels[i]} ({Math.round(size)}%)
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}
```


### Equal

`redistribute="equal"` distributes the needed space equally among all panels in the
drag direction, respecting each panel's minimum. Panels that hit their minimum are
excluded and the remaining deficit is re-distributed among the rest:

```tsx
import React from 'react';
import { DotsSixVerticalIcon } from '@phosphor-icons/react';
import { useSplitter } from '@mantine/hooks';

const colors = [
  'var(--mantine-color-blue-filled)',
  'var(--mantine-color-teal-filled)',
  'var(--mantine-color-grape-filled)',
  'var(--mantine-color-orange-filled)',
];
const labels = ['Panel A', 'Panel B', 'Panel C', 'Panel D'];

function Demo() {
  const splitter = useSplitter({
    panels: [
      { defaultSize: 25, min: 10 },
      { defaultSize: 25, min: 20 },
      { defaultSize: 25, min: 10 },
      { defaultSize: 25, min: 10 },
    ],
    redistribute: 'equal',
  });

  return (
    <div
      ref={splitter.ref}
      style={{
        display: 'flex',
        height: 200,
        borderRadius: 'var(--mantine-radius-md)',
        overflow: 'hidden',
      }}
    >
      {splitter.sizes.map((size, i) => (
        <React.Fragment key={i}>
          {i > 0 && (
            <div
              {...splitter.getHandleProps({ index: i - 1 })}
              style={{
                width: 4,
                flexShrink: 0,
                cursor: 'col-resize',
                touchAction: 'none',
                backgroundColor: 'var(--mantine-color-default-border)',
                position: 'relative',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: 8,
                  height: 40,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 'var(--mantine-radius-xs)',
                  backgroundColor: 'var(--mantine-color-default)',
                  border: '1px solid var(--mantine-color-default-border)',
                  color: 'var(--mantine-color-dimmed)',
                }}
              >
                <DotsSixVerticalIcon />
              </div>
            </div>
          )}
          <div
            style={{
              width: `${size}%`,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: colors[i],
              color: 'var(--mantine-color-white)',
              fontWeight: 500,
              whiteSpace: 'nowrap',
              gap: 2,
            }}
          >
            {labels[i]} ({Math.round(size)}%)
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}
```


### Custom function

Pass a function to `redistribute` for full control over how space is borrowed.
The function receives `{ sizes, panels, handleIndex, delta }` and must return
a new sizes array. This example always borrows from the last panel when growing
and from the first panel when shrinking:

```tsx
import { DotsSixVerticalIcon } from '@phosphor-icons/react';
import { useSplitter, UseSplitterRedistributeInput } from '@mantine/hooks';

// Custom strategy: only take from the last panel, leave others untouched
function redistributeFromLast(input: UseSplitterRedistributeInput) {
  const { sizes, panels, handleIndex, delta } = input;
  const result = [...sizes];

  if (delta > 0) {
    const lastIdx = result.length - 1;
    const minLast = panels[lastIdx].min ?? 0;
    const maxGrow = (panels[handleIndex].max ?? 100) - result[handleIndex];
    const canTake = result[lastIdx] - minLast;
    const take = Math.min(delta, maxGrow, canTake);
    result[handleIndex] += take;
    result[lastIdx] -= take;
  } else {
    const firstIdx = 0;
    const minFirst = panels[firstIdx].min ?? 0;
    const growIdx = handleIndex + 1;
    const maxGrow = (panels[growIdx].max ?? 100) - result[growIdx];
    const canTake = result[firstIdx] - minFirst;
    const take = Math.min(Math.abs(delta), maxGrow, canTake);
    result[growIdx] += take;
    result[firstIdx] -= take;
  }

  return result;
}

function Demo() {
  const splitter = useSplitter({
    panels: [
      { defaultSize: 25, min: 10 },
      { defaultSize: 25, min: 20 },
      { defaultSize: 50, min: 10 },
    ],
    redistribute: redistributeFromLast,
  });

  return (
    <div
      ref={splitter.ref}
      style={{
        display: 'flex',
        height: 200,
        borderRadius: 'var(--mantine-radius-md)',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          width: `${splitter.sizes[0]}%`,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'var(--mantine-color-blue-filled)',
          color: 'var(--mantine-color-white)',
          fontWeight: 500,
          whiteSpace: 'nowrap',
          gap: 2,
        }}
      >
        Panel A ({Math.round(splitter.sizes[0])}%)
      </div>
      <div
        {...splitter.getHandleProps({ index: 0 })}
        style={{
          width: 4,
          flexShrink: 0,
          cursor: 'col-resize',
          touchAction: 'none',
          backgroundColor: 'var(--mantine-color-default-border)',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 8,
            height: 40,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 'var(--mantine-radius-xs)',
            backgroundColor: 'var(--mantine-color-default)',
            border: '1px solid var(--mantine-color-default-border)',
            color: 'var(--mantine-color-dimmed)',
          }}
        >
          <DotsSixVerticalIcon />
        </div>
      </div>
      <div
        style={{
          width: `${splitter.sizes[1]}%`,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'var(--mantine-color-teal-filled)',
          color: 'var(--mantine-color-white)',
          fontWeight: 500,
          whiteSpace: 'nowrap',
          gap: 2,
        }}
      >
        Panel B ({Math.round(splitter.sizes[1])}%)
      </div>
      <div
        {...splitter.getHandleProps({ index: 1 })}
        style={{
          width: 4,
          flexShrink: 0,
          cursor: 'col-resize',
          touchAction: 'none',
          backgroundColor: 'var(--mantine-color-default-border)',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 8,
            height: 40,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 'var(--mantine-radius-xs)',
            backgroundColor: 'var(--mantine-color-default)',
            border: '1px solid var(--mantine-color-default-border)',
            color: 'var(--mantine-color-dimmed)',
          }}
        >
          <DotsSixVerticalIcon />
        </div>
      </div>
      <div
        style={{
          width: `${splitter.sizes[2]}%`,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'var(--mantine-color-grape-filled)',
          color: 'var(--mantine-color-white)',
          fontWeight: 500,
          whiteSpace: 'nowrap',
          gap: 2,
        }}
      >
        Panel C ({Math.round(splitter.sizes[2])}%)
      </div>
    </div>
  );
}
```


## Grip only handle

You can make the drag handle a small floating grip button instead of a full-height bar.
In this example, only the grip icon is draggable — the thin line between panels is not
interactive:

```tsx
import { DotsSixVerticalIcon } from '@phosphor-icons/react';
import { useSplitter } from '@mantine/hooks';

function Demo() {
  const splitter = useSplitter({
    panels: [
      { defaultSize: 50, min: 20 },
      { defaultSize: 50, min: 20 },
    ],
  });

  return (
    <div
      ref={splitter.ref}
      style={{
        display: 'flex',
        height: 200,
        borderRadius: 'var(--mantine-radius-md)',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          width: `${splitter.sizes[0]}%`,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'var(--mantine-color-blue-filled)',
          color: 'var(--mantine-color-white)',
          fontWeight: 500,
          whiteSpace: 'nowrap',
          gap: 2,
        }}
      >
        Panel A ({Math.round(splitter.sizes[0])}%)
      </div>
      <div
        style={{
          width: 1,
          flexShrink: 0,
          backgroundColor: 'var(--mantine-color-default-border)',
          position: 'relative',
        }}
      >
        <div
          {...splitter.getHandleProps({ index: 0 })}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 20,
            height: 40,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'col-resize',
            touchAction: 'none',
            backgroundColor: 'var(--mantine-color-default)',
            border: '1px solid var(--mantine-color-default-border)',
            borderRadius: 'var(--mantine-radius-sm)',
            color: 'var(--mantine-color-dimmed)',
            zIndex: 1,
          }}
        >
          <DotsSixVerticalIcon />
        </div>
      </div>
      <div
        style={{
          width: `${splitter.sizes[1]}%`,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'var(--mantine-color-teal-filled)',
          color: 'var(--mantine-color-white)',
          fontWeight: 500,
          whiteSpace: 'nowrap',
          gap: 2,
        }}
      >
        Panel B ({Math.round(splitter.sizes[1])}%)
      </div>
    </div>
  );
}
```


## Nested layout

Compose multiple `useSplitter` instances to create complex layouts with both
horizontal and vertical splits. Here the right side of a horizontal split contains
a vertical split:

```tsx
import { DotsSixVerticalIcon, DotsSixIcon } from '@phosphor-icons/react';
import { useSplitter } from '@mantine/hooks';

function Demo() {
  const horizontal = useSplitter({
    panels: [
      { defaultSize: 30, min: 15 },
      { defaultSize: 70, min: 30 },
    ],
  });

  const vertical = useSplitter({
    panels: [
      { defaultSize: 60, min: 20 },
      { defaultSize: 40, min: 20 },
    ],
    orientation: 'vertical',
  });

  return (
    <div
      ref={horizontal.ref}
      style={{
        display: 'flex',
        height: 350,
        borderRadius: 'var(--mantine-radius-md)',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          width: `${horizontal.sizes[0]}%`,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'var(--mantine-color-blue-filled)',
          color: 'var(--mantine-color-white)',
          fontWeight: 500,
          whiteSpace: 'nowrap',
          gap: 2,
        }}
      >
        Panel A ({Math.round(horizontal.sizes[0])}%)
      </div>
      <div
        {...horizontal.getHandleProps({ index: 0 })}
        style={{
          width: 4,
          flexShrink: 0,
          cursor: 'col-resize',
          touchAction: 'none',
          backgroundColor: 'var(--mantine-color-default-border)',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 8,
            height: 40,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 'var(--mantine-radius-xs)',
            backgroundColor: 'var(--mantine-color-default)',
            border: '1px solid var(--mantine-color-default-border)',
            color: 'var(--mantine-color-dimmed)',
          }}
        >
          <DotsSixVerticalIcon style={{ width: '100%', height: '100%' }} />
        </div>
      </div>
      <div
        ref={vertical.ref}
        style={{
          width: `${horizontal.sizes[1]}%`,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div
          style={{
            height: `${vertical.sizes[0]}%`,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'var(--mantine-color-teal-filled)',
            color: 'var(--mantine-color-white)',
            fontWeight: 500,
            whiteSpace: 'nowrap',
            gap: 2,
          }}
        >
          Panel B ({Math.round(vertical.sizes[0])}%)
        </div>
        <div
          {...vertical.getHandleProps({ index: 0 })}
          style={{
            height: 4,
            flexShrink: 0,
            cursor: 'row-resize',
            touchAction: 'none',
            backgroundColor: 'var(--mantine-color-default-border)',
            position: 'relative',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 40,
              height: 8,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 'var(--mantine-radius-xs)',
              backgroundColor: 'var(--mantine-color-default)',
              border: '1px solid var(--mantine-color-default-border)',
              color: 'var(--mantine-color-dimmed)',
            }}
          >
            <DotsSixIcon style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
        <div
          style={{
            height: `${vertical.sizes[1]}%`,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'var(--mantine-color-grape-filled)',
            color: 'var(--mantine-color-white)',
            fontWeight: 500,
            whiteSpace: 'nowrap',
            gap: 2,
          }}
        >
          Panel C ({Math.round(vertical.sizes[1])}%)
        </div>
      </div>
    </div>
  );
}
```


## Code editor layout

A real-world example combining a collapsible file explorer sidebar, a code editor
panel and a terminal — similar to VS Code:

```tsx
import { DotsSixVerticalIcon, DotsSixIcon } from '@phosphor-icons/react';
import { Code, ScrollArea, Text } from '@mantine/core';
import { useSplitter } from '@mantine/hooks';

const files = [
  'src/App.tsx',
  'src/index.tsx',
  'src/components/Header.tsx',
  'src/components/Sidebar.tsx',
  'src/hooks/useAuth.ts',
  'src/utils/api.ts',
  'package.json',
  'tsconfig.json',
];

const sampleCode = `import { useState } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

export function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <Header title="My App" />
      <div className="content">
        <Sidebar />
        <main>
          <h1>Welcome</h1>
          <p>Count: {count}</p>
          <button onClick={() => setCount(c => c + 1)}>
            Increment
          </button>
        </main>
      </div>
    </div>
  );
}`;

const output = `[vite] Dev server running at:

  > Local:    http://localhost:5173/
  > Network:  http://192.168.1.42:5173/

  ready in 142ms.

[vite] page reload src/App.tsx
[vite] hmr update /src/App.tsx`;

const handleH: React.CSSProperties = {
  width: 4,
  flexShrink: 0,
  cursor: 'col-resize',
  touchAction: 'none',
  backgroundColor: 'var(--mantine-color-default-border)',
  position: 'relative',
};

const handleV: React.CSSProperties = {
  height: 4,
  flexShrink: 0,
  cursor: 'row-resize',
  touchAction: 'none',
  backgroundColor: 'var(--mantine-color-default-border)',
  position: 'relative',
};

const gripH: React.CSSProperties = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 8,
  height: 40,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 'var(--mantine-radius-xs)',
  backgroundColor: 'var(--mantine-color-default)',
  border: '1px solid var(--mantine-color-default-border)',
  color: 'var(--mantine-color-dimmed)',
};

const gripV: React.CSSProperties = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 40,
  height: 8,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 'var(--mantine-radius-xs)',
  backgroundColor: 'var(--mantine-color-default)',
  border: '1px solid var(--mantine-color-default-border)',
  color: 'var(--mantine-color-dimmed)',
};

function Demo() {
  const horizontal = useSplitter({
    panels: [
      { defaultSize: 20, min: 10, collapsible: true },
      { defaultSize: 80, min: 30 },
    ],
  });

  const vertical = useSplitter({
    panels: [
      { defaultSize: 70, min: 20 },
      { defaultSize: 30, min: 10 },
    ],
    orientation: 'vertical',
  });

  return (
    <div
      ref={horizontal.ref}
      style={{
        display: 'flex',
        height: 400,
        border: '1px solid var(--mantine-color-default-border)',
        borderRadius: 'var(--mantine-radius-md)',
        overflow: 'hidden',
        fontSize: 'var(--mantine-font-size-sm)',
      }}
    >
      <div style={{ width: \\`\\${horizontal.sizes[0]}%\\`, overflow: 'hidden' }}>
        <div
          style={{
            padding: '8px 12px',
            fontWeight: 600,
            borderBottom: '1px solid var(--mantine-color-default-border)',
            whiteSpace: 'nowrap',
          }}
        >
          Explorer
        </div>
        <ScrollArea h="calc(100% - 37px)">
          {files.map((file) => (
            <div
              key={file}
              style={{
                padding: '4px 12px',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {file}
            </div>
          ))}
        </ScrollArea>
      </div>

      <div {...horizontal.getHandleProps({ index: 0 })} style={handleH}>
        <div style={gripH}>
          <DotsSixVerticalIcon style={{ width: '100%', height: '100%' }} />
        </div>
      </div>

      <div
        ref={vertical.ref}
        style={{
          width: \\`\\${horizontal.sizes[1]}%\\`,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div style={{ height: \\`\\${vertical.sizes[0]}%\\`, overflow: 'hidden' }}>
          <div
            style={{
              padding: '8px 12px',
              fontWeight: 600,
              borderBottom: '1px solid var(--mantine-color-default-border)',
              whiteSpace: 'nowrap',
            }}
          >
            src/App.tsx
          </div>
          <ScrollArea h="calc(100% - 37px)">
            <Code block style={{ border: 'none', borderRadius: 0, background: 'transparent' }}>
              {sampleCode}
            </Code>
          </ScrollArea>
        </div>

        <div {...vertical.getHandleProps({ index: 0 })} style={handleV}>
          <div style={gripV}>
            <DotsSixIcon style={{ width: '100%', height: '100%' }} />
          </div>
        </div>

        <div style={{ height: \\`\\${vertical.sizes[1]}%\\`, overflow: 'hidden' }}>
          <div
            style={{
              padding: '8px 12px',
              fontWeight: 600,
              borderBottom: '1px solid var(--mantine-color-default-border)',
              whiteSpace: 'nowrap',
            }}
          >
            Terminal
          </div>
          <ScrollArea h="calc(100% - 37px)">
            <Text
              component="pre"
              size="xs"
              style={{ margin: 0, padding: '8px 12px', fontFamily: 'monospace' }}
            >
              {output}
            </Text>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
}
```


## Controlled mode

Pass `sizes` and `onSizeChange` to control the sizes externally.
Use `setSizes()` for programmatic updates:

```tsx
import { useState } from 'react';
import { DotsSixVerticalIcon } from '@phosphor-icons/react';
import { Button, Group, Text } from '@mantine/core';
import { useSplitter } from '@mantine/hooks';

function Demo() {
  const [sizes, setSizes] = useState([50, 50]);

  const splitter = useSplitter({
    panels: [
      { defaultSize: 50, min: 20 },
      { defaultSize: 50, min: 20 },
    ],
    sizes,
    onSizeChange: setSizes,
  });

  return (
    <>
      <div
        ref={splitter.ref}
        style={{
          display: 'flex',
          height: 200,
          borderRadius: 'var(--mantine-radius-md)',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            width: `${splitter.sizes[0]}%`,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'var(--mantine-color-blue-filled)',
            color: 'var(--mantine-color-white)',
            fontWeight: 500,
            whiteSpace: 'nowrap',
            gap: 2,
          }}
        >
          Panel A ({Math.round(splitter.sizes[0])}%)
        </div>
        <div
          {...splitter.getHandleProps({ index: 0 })}
          style={{
            width: 4,
            flexShrink: 0,
            cursor: 'col-resize',
            touchAction: 'none',
            backgroundColor: 'var(--mantine-color-default-border)',
            position: 'relative',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 8,
              height: 40,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 'var(--mantine-radius-xs)',
              backgroundColor: 'var(--mantine-color-default)',
              border: '1px solid var(--mantine-color-default-border)',
              color: 'var(--mantine-color-dimmed)',
            }}
          >
            <DotsSixVerticalIcon />
          </div>
        </div>
        <div
          style={{
            width: `${splitter.sizes[1]}%`,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'var(--mantine-color-teal-filled)',
            color: 'var(--mantine-color-white)',
            fontWeight: 500,
            whiteSpace: 'nowrap',
            gap: 2,
          }}
        >
          Panel B ({Math.round(splitter.sizes[1])}%)
        </div>
      </div>
      <Text size="sm" mt="sm">
        Current sizes: [{sizes.map((s) => Math.round(s)).join(', ')}]
      </Text>
      <Group mt="xs">
        <Button size="xs" onClick={() => setSizes([30, 70])}>30 / 70</Button>
        <Button size="xs" onClick={() => setSizes([50, 50])}>50 / 50</Button>
        <Button size="xs" onClick={() => setSizes([70, 30])}>70 / 30</Button>
      </Group>
    </>
  );
}
```


## Keyboard support

Handles follow the WAI-ARIA Window Splitter pattern:

| Key | Action |
|-----|--------|
| ArrowLeft/ArrowRight | Resize by `step` (horizontal) |
| ArrowUp/ArrowDown | Resize by `step` (vertical) |
| Shift + Arrow | Resize by `shiftStep` |
| Home | Shrink panel before handle to its min |
| End | Grow panel before handle to its max |
| Enter | Toggle collapse of the smaller adjacent collapsible panel |

## Touch support

The hook uses the Pointer Events API which handles both mouse and touch automatically.
Set `touch-action: none` on the handle element to prevent the browser from
interpreting touch drag as scroll:

```css
.handle {
  touch-action: none;
}
```

## Definition

```tsx
interface UseSplitterPanel {
  /** Initial size as percentage (0-100). All panels must sum to 100. */
  defaultSize: number;
  /** Minimum size percentage, `0` by default */
  min?: number;
  /** Maximum size percentage, `100` by default */
  max?: number;
  /** Whether this panel can be collapsed, `false` by default */
  collapsible?: boolean;
  /** Size below which the panel snaps to collapsed (percentage), defaults to `min` */
  collapseThreshold?: number;
}

type UseSplitterRedistributeFn = (input: {
  sizes: number[];
  panels: UseSplitterPanel[];
  handleIndex: number;
  delta: number;
}) => number[];

interface UseSplitterOptions {
  /** Panel configuration array (minimum 2 panels) */
  panels: UseSplitterPanel[];
  /** Layout direction, `'horizontal'` by default */
  orientation?: 'horizontal' | 'vertical';
  /** Controlled sizes (percentages summing to 100) */
  sizes?: number[];
  /** Called during resize with updated sizes */
  onSizeChange?: (sizes: number[]) => void;
  /** Called when drag starts */
  onResizeStart?: (handleIndex: number) => void;
  /** Called when drag ends */
  onResizeEnd?: (handleIndex: number, sizes: number[]) => void;
  /** Called when a panel collapses or expands */
  onCollapseChange?: (panelIndex: number, collapsed: boolean) => void;
  /** How to borrow space from non-adjacent panels */
  redistribute?: 'nearest' | 'equal' | UseSplitterRedistributeFn;
  /** Keyboard step size in percentage, `1` by default */
  step?: number;
  /** Shift+arrow step size in percentage, `10` by default */
  shiftStep?: number;
  /** Text direction for keyboard nav, `'ltr'` by default */
  dir?: 'ltr' | 'rtl';
  /** Enable/disable the hook, `true` by default */
  enabled?: boolean;
}

interface UseSplitterReturnValue<T extends HTMLElement = any> {
  /** Ref callback for the container element */
  ref: React.RefCallback<T | null>;
  /** Current panel sizes as percentages */
  sizes: number[];
  /** Which panels are currently collapsed */
  collapsed: boolean[];
  /** Index of handle being dragged, or -1 */
  activeHandle: number;
  /** Get props to spread on each resize handle */
  getHandleProps: (input: { index: number }) => HandleProps;
  /** Programmatically set sizes */
  setSizes: (sizes: number[]) => void;
  /** Collapse a panel */
  collapse: (panelIndex: number) => void;
  /** Expand a collapsed panel */
  expand: (panelIndex: number) => void;
  /** Toggle collapse of a panel */
  toggleCollapse: (panelIndex: number) => void;
}

function useSplitter<T extends HTMLElement = any>(
  options: UseSplitterOptions
): UseSplitterReturnValue<T>
```

## Exported types

`UseSplitterPanel`, `UseSplitterOptions`, `UseSplitterReturnValue`, `UseSplitterRedistributeInput`
and `UseSplitterRedistributeFn` types are exported from the `@mantine/hooks` package:

```tsx
import type {
  UseSplitterPanel,
  UseSplitterOptions,
  UseSplitterReturnValue,
  UseSplitterRedistributeInput,
  UseSplitterRedistributeFn,
} from '@mantine/hooks';
```

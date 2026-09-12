import { Select } from '../Select';
import { FloatingWindow } from './FloatingWindow';

export default { title: 'FloatingWindow' };

const lorem =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis doloremque quod rem temporibus velit, possimus quam eius laudantium impedit. Ipsam debitis quo molestias commodi totam fugit! Eos voluptas ut in!';

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <FloatingWindow
        bg="red"
        p={40}
        w={400}
        h={200}
        bottom={40}
        right={40}
        constrainOffset={20}
        enabled
      >
        This is a floating window
      </FloatingWindow>
      <p>{lorem}</p>
      <p>{lorem}</p>
      <p>{lorem}</p>
      <p>{lorem}</p>
    </div>
  );
}

export function SelectDropdown() {
  return (
    <FloatingWindow
      p="md"
      w={320}
      h={256}
      withBorder
      shadow="md"
      initialPosition={{ top: 100, left: 100 }}
    >
      <Select
        label="Your favorite library"
        placeholder="Pick value"
        data={['React', 'Angular', 'Vue', 'Svelte']}
        defaultDropdownOpened
      />
    </FloatingWindow>
  );
}

export function ResizeHandle() {
  return (
    <div style={{ padding: 40 }}>
      <FloatingWindow
        p="md"
        withBorder
        shadow="sm"
        dimensions={{
          initialWidth: 260,
          maxWidth: 500,
          minWidth: 160,
          initialHeight: 180,
          maxHeight: 400,
          minHeight: 120,
        }}
        constrainOffset={20}
        initialPosition={{ top: 200, left: 40 }}
        dragHandleSelector=".drag-handle"
        style={{ overflow: 'hidden' }}
      >
        <div
          className="drag-handle"
          style={{
            cursor: 'move',
            padding: '8px 12px',
            borderBottom: '1px solid var(--mantine-color-default-border)',
            fontWeight: 500,
          }}
        >
          Resize handle demo
        </div>
        <div style={{ padding: 12, fontSize: 14 }}>
          Drag the corner icon to resize. Use Arrow keys when focused: Left/Right for width, Up/Down
          for height.
        </div>
        <FloatingWindow.ResizeHandle
          style={{
            position: 'absolute',
            right: 0,
            bottom: 0,
            width: 20,
            height: 20,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'nwse-resize',
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRight: '2px solid var(--mantine-color-dimmed)',
              borderBottom: '2px solid var(--mantine-color-dimmed)',
            }}
          />
        </FloatingWindow.ResizeHandle>
      </FloatingWindow>
      <p>{lorem}</p>
      <p>{lorem}</p>
    </div>
  );
}

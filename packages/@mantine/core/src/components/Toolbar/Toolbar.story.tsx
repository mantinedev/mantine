import { useState } from 'react';
import { Toolbar } from './Toolbar';

export default { title: 'Toolbar' };

export function Usage() {
  const [formatting, setFormatting] = useState<string[]>([]);
  const [alignment, setAlignment] = useState<string | null>('left');

  return (
    <div style={{ padding: 40 }}>
      <Toolbar>
        <Toolbar.ToggleGroup type="multiple" value={formatting} onChange={setFormatting}>
          <Toolbar.ToggleItem value="bold" aria-label="Bold">
            B
          </Toolbar.ToggleItem>
          <Toolbar.ToggleItem value="italic" aria-label="Italic">
            I
          </Toolbar.ToggleItem>
          <Toolbar.ToggleItem value="underline" aria-label="Underline">
            U
          </Toolbar.ToggleItem>
        </Toolbar.ToggleGroup>

        <Toolbar.Divider />

        <Toolbar.ToggleGroup type="single" value={alignment} onChange={setAlignment}>
          <Toolbar.ToggleItem value="left" aria-label="Align left">
            L
          </Toolbar.ToggleItem>
          <Toolbar.ToggleItem value="center" aria-label="Align center">
            C
          </Toolbar.ToggleItem>
          <Toolbar.ToggleItem value="right" aria-label="Align right">
            R
          </Toolbar.ToggleItem>
        </Toolbar.ToggleGroup>

        <Toolbar.Divider />

        <Toolbar.Toggle
          component="a"
          href="https://mantine.dev"
          target="_blank"
          aria-label="Mantine website"
        >
          Link
        </Toolbar.Toggle>
      </Toolbar>
    </div>
  );
}

export function Vertical() {
  return (
    <div style={{ padding: 40 }}>
      <Toolbar orientation="vertical">
        <Toolbar.Group>
          <Toolbar.Toggle aria-label="Bold">B</Toolbar.Toggle>
          <Toolbar.Toggle aria-label="Italic">I</Toolbar.Toggle>
        </Toolbar.Group>

        <Toolbar.Divider />

        <Toolbar.Toggle active aria-label="Active toggle">
          A
        </Toolbar.Toggle>
      </Toolbar>
    </div>
  );
}

export function Sizes() {
  return (
    <div style={{ padding: 40, display: 'flex', flexDirection: 'column', gap: 20 }}>
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
        <Toolbar key={size} size={size}>
          <Toolbar.Toggle aria-label="Bold">B</Toolbar.Toggle>
          <Toolbar.Toggle aria-label="Italic">I</Toolbar.Toggle>
          <Toolbar.Divider />
          <Toolbar.Toggle active aria-label="Active">
            A
          </Toolbar.Toggle>
        </Toolbar>
      ))}
    </div>
  );
}

export function Unstyled() {
  return (
    <div style={{ padding: 40 }}>
      <Toolbar unstyled>
        <Toolbar.Toggle aria-label="Bold">B</Toolbar.Toggle>
        <Toolbar.Divider />
        <Toolbar.Toggle aria-label="Italic">I</Toolbar.Toggle>
      </Toolbar>
    </div>
  );
}

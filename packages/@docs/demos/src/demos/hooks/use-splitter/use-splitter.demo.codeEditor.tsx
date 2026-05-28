import { DotsSixIcon, DotsSixVerticalIcon } from '@phosphor-icons/react';
import { Code, ScrollArea, Text } from '@mantine/core';
import { useSplitter } from '@mantine/hooks';
import { MantineDemo } from '@mantinex/demo';

const code = `
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

const sampleCode = \`import { useState } from 'react';
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
}\`;

const output = \`[vite] Dev server running at:

  > Local:    http://localhost:5173/
  > Network:  http://192.168.1.42:5173/

  ready in 142ms.

[vite] page reload src/App.tsx
[vite] hmr update /src/App.tsx\`;

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
      <div style={{ width: \\\`\\\${horizontal.sizes[0]}%\\\`, overflow: 'hidden' }}>
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
          width: \\\`\\\${horizontal.sizes[1]}%\\\`,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div style={{ height: \\\`\\\${vertical.sizes[0]}%\\\`, overflow: 'hidden' }}>
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

        <div style={{ height: \\\`\\\${vertical.sizes[1]}%\\\`, overflow: 'hidden' }}>
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
`;

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
      <div style={{ width: `${horizontal.sizes[0]}%`, overflow: 'hidden' }}>
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
          width: `${horizontal.sizes[1]}%`,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div style={{ height: `${vertical.sizes[0]}%`, overflow: 'hidden' }}>
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

        <div style={{ height: `${vertical.sizes[1]}%`, overflow: 'hidden' }}>
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

export const codeEditor: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
};

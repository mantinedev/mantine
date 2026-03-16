import { useSplitter } from '@mantine/hooks';
import { MantineDemo } from '@mantinex/demo';

const code = `
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
        border: '1px solid var(--mantine-color-default-border)',
        borderRadius: 'var(--mantine-radius-md)',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          width: \`\${splitter.sizes[0]}%\`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'var(--mantine-color-blue-light)',
        }}
      >
        Panel 1 ({Math.round(splitter.sizes[0])}%)
      </div>
      <div
        {...splitter.getHandleProps({ index: 0 })}
        style={{
          width: 4,
          flexShrink: 0,
          backgroundColor: 'var(--mantine-color-default-border)',
          cursor: 'col-resize',
          touchAction: 'none',
        }}
      />
      <div
        style={{
          width: \`\${splitter.sizes[1]}%\`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'var(--mantine-color-teal-light)',
        }}
      >
        Panel 2 ({Math.round(splitter.sizes[1])}%)
      </div>
    </div>
  );
}
`;

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
        border: '1px solid var(--mantine-color-default-border)',
        borderRadius: 'var(--mantine-radius-md)',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          width: `${splitter.sizes[0]}%`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'var(--mantine-color-blue-light)',
        }}
      >
        Panel 1 ({Math.round(splitter.sizes[0])}%)
      </div>
      <div
        {...splitter.getHandleProps({ index: 0 })}
        style={{
          width: 4,
          flexShrink: 0,
          backgroundColor: 'var(--mantine-color-default-border)',
          cursor: 'col-resize',
          touchAction: 'none',
        }}
      />
      <div
        style={{
          width: `${splitter.sizes[1]}%`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'var(--mantine-color-teal-light)',
        }}
      >
        Panel 2 ({Math.round(splitter.sizes[1])}%)
      </div>
    </div>
  );
}

export const useSplitterUsage: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
};

import { useSplitter } from '@mantine/hooks';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useSplitter } from '@mantine/hooks';

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
        {Math.round(splitter.sizes[0])}%
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
        {Math.round(splitter.sizes[1])}%
      </div>
      <div
        {...splitter.getHandleProps({ index: 1 })}
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
          width: \`\${splitter.sizes[2]}%\`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'var(--mantine-color-grape-light)',
        }}
      >
        {Math.round(splitter.sizes[2])}%
      </div>
    </div>
  );
}
`;

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
        {Math.round(splitter.sizes[0])}%
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
        {Math.round(splitter.sizes[1])}%
      </div>
      <div
        {...splitter.getHandleProps({ index: 1 })}
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
          width: `${splitter.sizes[2]}%`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'var(--mantine-color-grape-light)',
        }}
      >
        {Math.round(splitter.sizes[2])}%
      </div>
    </div>
  );
}

export const useSplitterMultiple: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
};

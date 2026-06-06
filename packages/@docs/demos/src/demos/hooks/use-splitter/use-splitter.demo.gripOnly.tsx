import { DotsSixVerticalIcon } from '@phosphor-icons/react';
import { useSplitter } from '@mantine/hooks';
import { MantineDemo } from '@mantinex/demo';

const code = `
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
          width: \`\${splitter.sizes[0]}%\`,
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
        Panel A ({Math.round(splitter.sizes[0] as number)}%)
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
          width: \`\${splitter.sizes[1]}%\`,
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
        Panel B ({Math.round(splitter.sizes[1] as number)}%)
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
        Panel A ({Math.round(splitter.sizes[0] as number)}%)
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
        Panel B ({Math.round(splitter.sizes[1] as number)}%)
      </div>
    </div>
  );
}

export const gripOnly: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
};

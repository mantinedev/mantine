import { DotsSixVerticalIcon } from '@phosphor-icons/react';
import { useSplitter, UseSplitterRedistributeInput } from '@mantine/hooks';
import { MantineDemo } from '@mantinex/demo';

const code = `
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
          width: \`\${splitter.sizes[2]}%\`,
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
`;

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

export const redistributeCustom: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
};

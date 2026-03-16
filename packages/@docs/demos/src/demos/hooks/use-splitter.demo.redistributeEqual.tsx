import React from 'react';
import { DotsSixVerticalIcon } from '@phosphor-icons/react';
import { useSplitter } from '@mantine/hooks';
import { MantineDemo } from '@mantinex/demo';

const code = `
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
              width: \`\${size}%\`,
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
`;

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

export const useSplitterRedistributeEqual: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
};

import { Button, Group } from '@mantine/core';
import { useSplitter } from '@mantine/hooks';
import { MantineDemo } from '@mantinex/demo';

const code = `
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
            overflow: 'hidden',
          }}
        >
          {splitter.collapsed[0] ? '' : \`Sidebar (\${Math.round(splitter.sizes[0])}%)\`}
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
          Content ({Math.round(splitter.sizes[1])}%)
        </div>
      </div>
      <Group mt="md">
        <Button size="xs" variant="light" onClick={() => splitter.toggleCollapse(0)}>
          {splitter.collapsed[0] ? 'Expand sidebar' : 'Collapse sidebar'}
        </Button>
      </Group>
    </>
  );
}
`;

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
            overflow: 'hidden',
          }}
        >
          {splitter.collapsed[0] ? '' : `Sidebar (${Math.round(splitter.sizes[0])}%)`}
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
          Content ({Math.round(splitter.sizes[1])}%)
        </div>
      </div>
      <Group mt="md">
        <Button size="xs" variant="light" onClick={() => splitter.toggleCollapse(0)}>
          {splitter.collapsed[0] ? 'Expand sidebar' : 'Collapse sidebar'}
        </Button>
      </Group>
    </>
  );
}

export const useSplitterCollapsible: MantineDemo = {
  type: 'code',
  code,
  component: Demo,
};

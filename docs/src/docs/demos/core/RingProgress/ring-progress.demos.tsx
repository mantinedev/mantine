import React from 'react';
import { RingProgress, Text } from '@mantine/core';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

const code = `
import React from 'react';
import { RingProgress } from '@mantine/core';

function Demo() {
  return (
    <>
      <RingProgress sections={[{ color: 'red', value: 50 }]} />
    </>
  );
}
`;

export function RingProgressDemo() {
  return (
    <CodeDemo code={code} language="tsx">
      <RingProgress sections={[{ color: 'red', value: 50 }]} />
    </CodeDemo>
  );
}

const thicknessCode = `
import React from 'react';
import { RingProgress } from '@mantine/core';

function Demo() {
  return (
    <>
      <RingProgress thickness={2} sections={[{ color: 'red', value: 70 }]} />
      <RingProgress
        thickness={4}
        sections={[{ color: 'red', value: 80 }]}
        style={{ marginTop: 10 }}
      />
    </>
  );
}
`;

export function RingProgressThicknessDemo() {
  return (
    <CodeDemo code={thicknessCode} language="tsx">
      <RingProgress thickness={2} sections={[{ color: 'red', value: 70 }]} />
      <RingProgress
        thickness={4}
        sections={[{ color: 'red', value: 80 }]}
        style={{ marginTop: 10 }}
      />
    </CodeDemo>
  );
}

const labelCode = `
import React from 'react';
import { RingProgress } from '@mantine/core';

function Demo() {
  return (
    <>
      <RingProgress
        sections={[{ color: 'red', value: 50 }]}
        label={<Text style={{ color: 'red' }}>50</Text>}
      />
    </>
  );
}
`;

export function RingProgressLabelDemo() {
  return (
    <CodeDemo code={labelCode} language="tsx">
      <RingProgress
        sections={[{ color: 'red', value: 50 }]}
        label={<Text style={{ color: 'red' }}>50</Text>}
      />
    </CodeDemo>
  );
}

const sectionsCode = `
import React from 'react';
import { RingProgress } from '@mantine/core';

function Demo() {
  return (
    <>
      <RingProgress
        sections={[
          { color: 'red', value: 50 },
          { color: 'blue', value: 10 },
          { color: 'green', value: 10 },
        ]}
      />
    </>
  );
}
`;

export function RingProgressSectionsDemo() {
  return (
    <CodeDemo code={sectionsCode} language="tsx">
      <RingProgress
        sections={[
          { color: 'red', value: 50 },
          { color: 'blue', value: 10 },
          { color: 'green', value: 10 },
        ]}
      />
    </CodeDemo>
  );
}

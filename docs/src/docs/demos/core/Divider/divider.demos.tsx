import React from 'react';
import { Divider, Badge } from '@mantine/core';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

const code = `import React from 'react';
import { Divider } from '@mantine/core';

function Demo() {
  return (
    <>
      <Divider />
      <Divider variant="solid" />
      <Divider variant="dotted" />
    </>
  );
}`;

export function DividerBaseDemo() {
  return (
    <CodeDemo code={code} language="tsx">
      <Divider />
      <Divider variant="dashed" style={{ marginTop: 10 }} />
      <Divider variant="dotted" style={{ marginTop: 10 }} />
    </CodeDemo>
  );
}

const colorCode = `import React from 'react';
import { Divider } from '@mantine/core';

function Demo() {
  return (
    <>
      <Divider color="blue" />
      <Divider color="red" />
      <Divider color="green" />
    </>
  );
}`;

export function DividerColorDemo() {
  return (
    <CodeDemo code={colorCode} language="tsx">
      <Divider color="blue" />
      <Divider color="red" style={{ marginTop: 10 }} />
      <Divider color="green" style={{ marginTop: 10 }} />
    </CodeDemo>
  );
}

const sizesCode = `import React from 'react';
import { Divider } from '@mantine/core';

function Demo() {
  return (
    <>
      <Divider size="xs" />
      <Divider size="sm" />
      <Divider size="md" />
      <Divider size="lg" />
      <Divider size="xl" />
      <Divider size={10} />
    </>
  );
}`;

export function DividerSizesDemo() {
  return (
    <CodeDemo code={sizesCode} language="tsx">
      <Divider size="xs" />
      <Divider size="sm" style={{ marginTop: 10 }} />
      <Divider size="md" style={{ marginTop: 10 }} />
      <Divider size="lg" style={{ marginTop: 10 }} />
      <Divider size="xl" style={{ marginTop: 10 }} />
      <Divider size={10} style={{ marginTop: 10 }} />
    </CodeDemo>
  );
}

const subHeaderCode = `import React from 'react';
import { Divider } from '@mantine/core';

function Demo() {
  return (
    <>
      <Divider subHeader="Subheader" />
      <Divider subHeader="Subheader" subHeaderProps={{ align: 'center' }} />
      <Divider subHeader="Subheader" subHeaderProps={{ align: 'right' }} />
    </>
  );
}`;

export function DividerSubHeaderDemo() {
  return (
    <CodeDemo code={subHeaderCode} language="tsx">
      <Divider subHeader="Subheader" />
      <Divider
        subHeader="Subheader"
        subHeaderProps={{ align: 'center' }}
        style={{ marginTop: 10 }}
      />
      <Divider
        subHeader="Subheader"
        subHeaderProps={{ align: 'right' }}
        style={{ marginTop: 10 }}
      />
    </CodeDemo>
  );
}

const orientationCode = `import React from 'react';
import { Divider, Badge } from '@mantine/core';

function Demo() {
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}
      >
        <Badge>Badge</Badge>
        <Divider orientation="vertical" />
        <Badge>Badge</Badge>
        <Divider orientation="vertical" />
        <Badge>Badge</Badge>
      </div>
    </>
  );
}`;

export function DividerOrientationDemo() {
  return (
    <CodeDemo code={orientationCode} language="tsx">
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Badge>Badge</Badge>
        <Divider orientation="vertical" margins="md" />
        <Badge>Badge</Badge>
        <Divider orientation="vertical" margins="md" />
        <Badge>Badge</Badge>
      </div>
    </CodeDemo>
  );
}

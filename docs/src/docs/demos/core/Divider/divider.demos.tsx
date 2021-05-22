import React from 'react';
import { Divider, Badge } from '@mantine/core';
import { MagnifyingGlassIcon } from '@modulz/radix-icons';
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
import { MagnifyingGlassIcon } from '@modulz/radix-icons';

function Demo() {
  return (
    <>
      <Divider label="Label on the left" />
      <Divider label="Label in the center" labelPosition="center" />
      <Divider label="Label on the right" labelPosition="right" />
      <Divider
        variant="dashed"
        labelPosition="center"
        label={
          <>
            <MagnifyingGlassIcon style={{ width: 12, height: 12 }} />
            <span style={{ marginLeft: 5 }}>Search results</span>
          </>
        }
      />
      <Divider
        label="Link label"
        labelProps={{ component: 'a', href: 'https://mantine.dev', variant: 'link', color: 'blue' }}
      />
    </>
  );
}`;

export function DividerLabelDemo({ toggle = false }: { toggle: boolean }) {
  return (
    <CodeDemo code={subHeaderCode} language="tsx" toggle={toggle}>
      <Divider label="Label on the left" />
      <Divider label="Label in the center" labelPosition="center" style={{ marginTop: 10 }} />
      <Divider label="Label on the right" labelPosition="right" style={{ marginTop: 10 }} />
      <Divider
        style={{ marginTop: 10 }}
        variant="dashed"
        labelPosition="center"
        label={
          <>
            <MagnifyingGlassIcon style={{ width: 12, height: 12 }} />
            <span style={{ marginLeft: 5 }}>Search results</span>
          </>
        }
      />
      <Divider
        style={{ marginTop: 10 }}
        label="Link label"
        labelProps={{ component: 'a', href: 'https://mantine.dev', variant: 'link', color: 'blue' }}
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

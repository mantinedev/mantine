import React from 'react';
import { Hr } from '@mantine/core';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

const code = `import React from 'react';
import { Hr } from '@mantine/core';

function Demo() {
  return (
    <>
      <Hr />
      <Hr variant="solid" />
      <Hr variant="dotted" />
    </>
  );
}`;

export function HrBaseDemo() {
  return (
    <CodeDemo code={code} language="tsx">
      <Hr />
      <Hr variant="solid" style={{ marginTop: 10 }} />
      <Hr variant="dotted" style={{ marginTop: 10 }} />
    </CodeDemo>
  );
}

const colorCode = `import React from 'react';
import { Hr } from '@mantine/core';

function Demo() {
  return (
    <>
      <Hr color="blue" />
      <Hr color="red" />
      <Hr color="green" />
    </>
  );
}`;

export function HrColorDemo() {
  return (
    <CodeDemo code={colorCode} language="tsx">
      <Hr color="blue" />
      <Hr color="red" style={{ marginTop: 10 }} />
      <Hr color="green" style={{ marginTop: 10 }} />
    </CodeDemo>
  );
}

const insetCode = `import React from 'react';
import { Hr } from '@mantine/core';
function Demo() {
  return (
    <>
      <Hr inset={true} />
      <Hr inset={true} insetType="left" />
      <Hr inset={true} insetType="right" />
      <Hr inset={true} insetType="middle" />
    </>
  );
}`;

export function HrInsetDemo() {
  return (
    <CodeDemo code={insetCode} language="tsx">
      <Hr inset={true} />
      <Hr inset={true} insetType="left" style={{ marginTop: 10 }} />
      <Hr inset={true} insetType="right" style={{ marginTop: 10 }} />
      <Hr inset={true} insetType="middle" style={{ marginTop: 10 }} />
    </CodeDemo>
  );
}

const sizesCode = `import React from 'react';
import { Hr } from '@mantine/core';

function Demo() {
  return (
    <>
      <Hr size="xs" />
      <Hr size="sm" />
      <Hr size="md" />
      <Hr size="lg" />
      <Hr size="xl" />
      <Hr size={10} />
    </>
  );
}`;

export function HrSizesDemo() {
  return (
    <CodeDemo code={sizesCode} language="tsx">
      <Hr size="xs" />
      <Hr size="sm" style={{ marginTop: 10 }} />
      <Hr size="md" style={{ marginTop: 10 }} />
      <Hr size="lg" style={{ marginTop: 10 }} />
      <Hr size="xl" style={{ marginTop: 10 }} />
      <Hr size={10} style={{ marginTop: 10 }} />
    </CodeDemo>
  );
}

const subHeaderCode = `import React from 'react';
import { Hr } from '@mantine/core';
function Demo() {
  return (
    <>
      <Hr subHeader="Test" />
      <Hr inset={true} subHeader="Test" />
      <Hr subHeader="Test" subHeaderStyle={{ color : "red" }} />
      <Hr inset={true} insetType="right" subHeader="Test" />
    </>
  );
}`;

export function HrSubHeaderDemo() {
  return (
    <CodeDemo code={subHeaderCode} language="tsx">
      <Hr subHeader="Test" />
      <Hr inset={true} subHeader="Test" style={{ marginTop: 10 }} />
      <Hr subHeader="Mantine" subHeaderStyle={{ color: 'red' }} style={{ marginTop: 10 }} />
      <Hr inset={true} insetType="right" subHeader="Mantine" style={{ marginTop: 10 }} />
    </CodeDemo>
  );
}

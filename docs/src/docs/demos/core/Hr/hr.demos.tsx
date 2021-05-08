import React from 'react';
import { Hr, Badge } from '@mantine/core';
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
      <Hr variant="dashed" style={{ marginTop: 10 }} />
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
      <Hr
        subHeader="Test"
        subHeaderProps={{ style: { textAlign: 'center' }, color: 'red' }}
        style={{ marginTop: 10 }}
      />
      <Hr
        subHeader="Test"
        subHeaderProps={{ style: { textAlign: 'end', fontFamily: 'cursive' } }}
        style={{ marginTop: 10 }}
      />
      <Hr 
        subHeader="Test" 
        subHeaderProps={{ style: { fontSize: 20 } }} 
        style={{ marginTop: 15 }} 
      />
    </>
  );
}`;

export function HrSubHeaderDemo() {
  return (
    <CodeDemo code={subHeaderCode} language="tsx">
      <Hr subHeader="Test" />
      <Hr
        subHeader="Test"
        subHeaderProps={{ style: { textAlign: 'center' }, color: 'red' }}
        style={{ marginTop: 10 }}
      />
      <Hr
        subHeader="Test"
        subHeaderProps={{ style: { textAlign: 'end', fontFamily: 'cursive' } }}
        style={{ marginTop: 10 }}
      />
      <Hr subHeader="Test" subHeaderProps={{ style: { fontSize: 20 } }} style={{ marginTop: 15 }} />
    </CodeDemo>
  );
}

const orientationCode = `import React from 'react';
import { Hr } from '@mantine/core';

function Demo() {
  return (
    <>
      <Hr orientation="horizontal" />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginTop: 15,
        }}
      >
        <Badge>Light</Badge>
        <Hr orientation="vertical" />
        <Badge variant="outline">Outline</Badge>
        <Hr orientation="vertical" />
        <Badge variant="filled">Filled</Badge>
      </div>
    </>
  );
}`;

export function HrOrientationDemo() {
  return (
    <CodeDemo code={orientationCode} language="tsx">
      <Hr orientation="horizontal" />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginTop: 15,
        }}
      >
        <Badge>Light</Badge>
        <Hr orientation="vertical" />
        <Badge variant="outline">Outline</Badge>
        <Hr orientation="vertical" />
        <Badge variant="filled">Filled</Badge>
      </div>
    </CodeDemo>
  );
}

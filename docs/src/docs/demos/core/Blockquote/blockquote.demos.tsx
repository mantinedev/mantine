import React from 'react';
import { Blockquote } from '@mantine/core';
import { LightningBoltIcon } from '@modulz/radix-icons';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

const code = `import React from 'react';
import { Blockquote } from '@mantine/core';

export function BlockquoteDemo() {
  return (
    <Blockquote cite="– Forrest Gump">
      Life is like an npm install – you never know what you are going to get.
    </Blockquote>
  );
}`;

export function BlockquoteBaseDemo() {
  return (
    <CodeDemo code={code} language="tsx">
      <div style={{ maxWidth: 420, margin: 'auto' }}>
        <Blockquote cite="– Forrest Gump">
          Life is like an npm install – you never know what you gonna get.
        </Blockquote>
      </div>
    </CodeDemo>
  );
}

const iconCode = `import React from 'react';
import { Blockquote } from '@mantine/core';
import { LightningBoltIcon } from '@modulz/radix-icons';

export function BlockquoteDemo() {
  return (
    <Blockquote
      cite="– Your poor i3 from 2012 struggling its best"
      icon={<LightningBoltIcon style={{ width: 18, height: 18 }} />}
    >
      webpack built 40a9bf3d1a0a0914ed84 in 28259ms
    </Blockquote>
  );
}`;

export function BlockquoteIconDemo() {
  return (
    <CodeDemo code={iconCode} language="tsx">
      <div style={{ maxWidth: 420, margin: 'auto' }}>
        <Blockquote
          cite="– Your poor i3 from 2012 struggling its best"
          icon={<LightningBoltIcon style={{ width: 18, height: 18 }} />}
        >
          webpack built 40a9bf3d1a0a0914ed84 in 28259ms
        </Blockquote>
      </div>
    </CodeDemo>
  );
}

const noIconCode = `import React from 'react';
import { Blockquote } from '@mantine/core';
import { LightningBoltIcon } from '@modulz/radix-icons';

export function BlockquoteDemo() {
  return (
    <Blockquote cite="– Dan Abramov, 2016" icon={null}>
      I have a Sublime Text license on another laptop
    </Blockquote>
  );
}`;

export function BlockquoteNoIconDemo() {
  return (
    <CodeDemo code={noIconCode} language="tsx">
      <div style={{ maxWidth: 420, margin: 'auto' }}>
        <Blockquote cite="– Dan Abramov, 2016" icon={null}>
          I have a Sublime Text license on another laptop
        </Blockquote>
      </div>
    </CodeDemo>
  );
}

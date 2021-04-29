import React from 'react';
import { Image } from '@mantine/core';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

const code = `import React from 'react';
import { Image } from '@mantine/core';

function Demo() {
  return (
    <div style={{ width: 200, margin: 'auto' }}>
      <Image
        radius="md"
        src="https://images.unsplash.com/long-image-url-was-here.jpg"
        alt="Random unsplash image"
      />
    </div>
  );
}`;

export function ImageBaseDemo() {
  return (
    <CodeDemo code={code} language="tsx">
      <div style={{ width: 200, margin: 'auto' }}>
        <Image
          radius="md"
          src="https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
          alt="Random unsplash image"
        />
      </div>
    </CodeDemo>
  );
}

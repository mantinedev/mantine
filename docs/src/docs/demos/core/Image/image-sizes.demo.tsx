import React from 'react';
import { Image, Group } from '@mantine/core';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

const code = `import React from 'react';
import { Image } from '@mantine/core';

function Demo() {
  return (
    <>
      // By default image will have object-fit: cover
      <Image
        width={200}
        height={80}
        src="https://images.unsplash.com/long-image-url-was-here.jpg"
      />

      // Set fit="contain" to preserve image proportions
      // in this case image wrapper will still have given width and height
      <Image
        width={200}
        height={80}
        fit="contain"
        src="https://images.unsplash.com/long-image-url-was-here.jpg"
      />

      // It's not necessary to use both width and height
      <Image
        height={80}
        src="https://images.unsplash.com/long-image-url-was-here.jpg"
      />
    </>
  );
}`;

export function ImageSizesDemo() {
  return (
    <CodeDemo code={code} language="tsx">
      <Group position="center">
        <Image
          data-mantine-composable
          width={200}
          height={80}
          src="https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
        />

        <Image
          data-mantine-composable
          width={200}
          height={80}
          fit="contain"
          src="https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
        />

        <Image
          data-mantine-composable
          height={80}
          src="https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
        />
      </Group>
    </CodeDemo>
  );
}

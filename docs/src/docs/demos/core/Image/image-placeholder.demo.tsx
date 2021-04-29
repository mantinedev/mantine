import React from 'react';
import { Image, Text, ElementsGroup } from '@mantine/core';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

const code = `import React from 'react';
import { Image } from '@mantine/core';

function Demo() {
  return (
    <>
      <Image
        width={200}
        height={120}
        src={null}
        alt="Without placeholder"
      />

      <Image
        width={200}
        height={120}
        src={null}
        alt="With default placeholder"
        withPlaceholder
      />

      <Image
        height={120}
        width={200}
        src="42.png"
        alt="With custom placeholder"
        withPlaceholder
        placeholder={<Text align="center">This image contained the meaning of life</Text>}
      />
    </>
  );
}`;

export function ImagePlaceholderDemo() {
  return (
    <CodeDemo code={code} language="tsx">
      <ElementsGroup position="center">
        <Image
          data-mantine-composable
          width={200}
          height={120}
          src={null}
          alt="Without placeholder"
        />

        <Image
          data-mantine-composable
          width={200}
          height={120}
          src={null}
          alt="With default placeholder"
          withPlaceholder
        />

        <Image
          data-mantine-composable
          height={120}
          width={200}
          src="42.png"
          alt="With custom placeholder"
          withPlaceholder
          placeholder={<Text align="center">This image contained the meaning of life</Text>}
        />
      </ElementsGroup>
    </CodeDemo>
  );
}

import { TableOfContents } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { TableOfContents } from '@mantine/core';

function Demo() {
  return (
    <TableOfContents
      minDepthToOffset={0}
      depthOffset={40}
      scrollSpyOptions={{
        selector: 'h1, h2, h3, h4, h5, h6',
      }}
    />
  );
}
`;

function Demo() {
  return (
    <TableOfContents
      minDepthToOffset={0}
      depthOffset={40}
      scrollSpyOptions={{
        selector: 'h1, h2, h3, h4, h5, h6',
      }}
    />
  );
}

export const depthOffset: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  maxWidth: 340,
  centered: true,
};

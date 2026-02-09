import { Scroller, Tabs } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Scroller, Tabs } from '@mantine/core';

function Demo() {
  return (
    <Tabs defaultValue="tab-1">
      <Tabs.List>
        <Scroller>
          <Tabs.Tab value="tab-1">First tab</Tabs.Tab>
          <Tabs.Tab value="tab-2">Second tab</Tabs.Tab>
          <Tabs.Tab value="tab-3">Third tab</Tabs.Tab>
          <Tabs.Tab value="tab-4">Fourth tab</Tabs.Tab>
          <Tabs.Tab value="tab-5">Fifth tab</Tabs.Tab>
          <Tabs.Tab value="tab-6">Sixth tab</Tabs.Tab>
          <Tabs.Tab value="tab-7">Seventh tab</Tabs.Tab>
          <Tabs.Tab value="tab-8">Eighth tab</Tabs.Tab>
          <Tabs.Tab value="tab-9">Ninth tab</Tabs.Tab>
          <Tabs.Tab value="tab-10">Tenth tab</Tabs.Tab>
        </Scroller>
      </Tabs.List>
    </Tabs>
  );
}
`;

function Demo() {
  return (
    <Tabs defaultValue="tab-1">
      <Tabs.List>
        <Scroller>
          <Tabs.Tab value="tab-1">First tab</Tabs.Tab>
          <Tabs.Tab value="tab-2">Second tab</Tabs.Tab>
          <Tabs.Tab value="tab-3">Third tab</Tabs.Tab>
          <Tabs.Tab value="tab-4">Fourth tab</Tabs.Tab>
          <Tabs.Tab value="tab-5">Fifth tab</Tabs.Tab>
          <Tabs.Tab value="tab-6">Sixth tab</Tabs.Tab>
          <Tabs.Tab value="tab-7">Seventh tab</Tabs.Tab>
          <Tabs.Tab value="tab-8">Eighth tab</Tabs.Tab>
          <Tabs.Tab value="tab-9">Ninth tab</Tabs.Tab>
          <Tabs.Tab value="tab-10">Tenth tab</Tabs.Tab>
        </Scroller>
      </Tabs.List>
    </Tabs>
  );
}

export const scroller: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  maxWidth: 500,
  centered: true,
};

import React from 'react';
import { Tabs } from '@mantine/core';
import { PageSection } from '../PageSection/PageSection';
import { SxDemo } from './demos/SxDemo';
import { CreateStylesDemo } from './demos/CreateStylesDemo';
import { ThemeDemo } from './demos/ThemeDemo';
import { FunctionsDemo } from './demos/FunctionsDemo';

export function Styles() {
  return (
    <PageSection
      title="Based on emotion"
      description="Mantine is based on emotion 👩‍🎤, take advantage of core emotion features: auto vendor-prefixing, critical css extraction during server side rendering, lazy evaluation, dynamic theming, type safe styles with TypeScript and more."
      sx={(theme) => ({
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
      })}
    >
      <Tabs
        defaultValue="sx"
        variant="pills"
        mt="xl"
        mb="xl"
        radius="md"
        styles={{
          tab: {
            fontWeight: 600,
            fontSize: 16,
          },

          tabsList: {
            flexWrap: 'wrap',
          },
        }}
      >
        <Tabs.List>
          <Tabs.Tab value="sx">sx prop</Tabs.Tab>
          <Tabs.Tab value="createStyles">createStyles</Tabs.Tab>
          <Tabs.Tab value="theme">Theme subscription</Tabs.Tab>
          <Tabs.Tab value="functions">Theme functions</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="sx">
          <SxDemo />
        </Tabs.Panel>
        <Tabs.Panel value="createStyles">
          <CreateStylesDemo />
        </Tabs.Panel>
        <Tabs.Panel value="theme">
          <ThemeDemo />
        </Tabs.Panel>
        <Tabs.Panel value="functions">
          <FunctionsDemo />
        </Tabs.Panel>
      </Tabs>
    </PageSection>
  );
}

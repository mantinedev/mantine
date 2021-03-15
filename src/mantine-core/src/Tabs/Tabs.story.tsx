import React from 'react';
import { storiesOf } from '@storybook/react';
import { Text } from '../Text/Text';
import { Tabs, Tab } from './Tabs';

storiesOf('@mantine/core', module).add('Tabs', () => (
  <div style={{ padding: 50 }}>
    <Tabs>
      <Tab title="React">
        <Text color="gray" size="sm">
          A JavaScript library for building user interfaces
        </Text>
        <Text style={{ marginTop: 7 }}>
          React makes it painless to create interactive UIs. Design simple views for each state in
          your application, and React will efficiently update and render just the right components
          when your data changes.
        </Text>
        <Text style={{ marginTop: 7 }}>
          Build encapsulated components that manage their own state, then compose them to make
          complex UIs.
        </Text>
      </Tab>

      <Tab title="Angular">
        <Text color="gray" size="sm">
          The modern web developer&apos;s platform
        </Text>
        <Text style={{ marginTop: 7 }}>
          Learn one way to build applications with Angular and reuse your code and abilities to
          build apps for any deployment target. For web, mobile web, native mobile and native
          desktop.
        </Text>
        <Text style={{ marginTop: 7 }}>
          Achieve the maximum speed possible on the Web Platform today, and take it further, via Web
          Workers and server-side rendering.
        </Text>
      </Tab>

      <Tab title="Vue">
        <Text color="gray" size="sm">
          The Progressive JavaScript Framework
        </Text>
        <Text style={{ marginTop: 7 }}>
          Already know HTML, CSS and JavaScript? Read the guide and start building things in no
          time!
        </Text>
        <Text style={{ marginTop: 7 }}>
          An incrementally adoptable ecosystem that scales between a library and a full-featured
          framework.
        </Text>
      </Tab>
    </Tabs>
  </div>
));

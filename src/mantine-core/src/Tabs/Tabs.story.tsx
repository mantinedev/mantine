import React from 'react';
import { storiesOf } from '@storybook/react';
import { DEFAULT_THEME, MantineProvider } from '@mantine/theme';
import { Text } from '../Text/Text';
import { Tabs, Tab } from './Tabs';

function NgIcon() {
  return (
    <svg
      preserveAspectRatio="xMidYMid"
      viewBox="0 0 256 272"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: 12 }}
    >
      <path
        d="M.1 45.522L125.908.697l129.196 44.028-20.919 166.45-108.277 59.966-106.583-59.169L.1 45.522z"
        fill="#E23237"
      />
      <path d="M255.104 44.725L125.908.697v270.444l108.277-59.866 20.919-166.55z" fill="#B52E31" />
      <path
        d="M126.107 32.274L47.714 206.693l29.285-.498 15.739-39.347h70.325l17.233 39.845 27.99.498-82.179-174.917zm.2 55.882l26.496 55.383h-49.806l23.31-55.383z"
        fill="#FFF"
      />
    </svg>
  );
}

function VueIcon() {
  return (
    <svg
      preserveAspectRatio="xMidYMid"
      viewBox="0 0 256 221"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: 12 }}
    >
      <path d="M204.8 0H256L128 220.8 0 0h97.92L128 51.2 157.44 0h47.36z" fill="#41B883" />
      <path d="M0 0l128 220.8L256 0h-51.2L128 132.48 50.56 0H0z" fill="#41B883" />
      <path d="M50.56 0L128 133.12 204.8 0h-47.36L128 51.2 97.92 0H50.56z" fill="#35495E" />
    </svg>
  );
}

storiesOf('@mantine/core/Tabs', module)
  .add('General usage', () => (
    <div style={{ padding: 50 }}>
      <Tabs>
        <Tab label="React" color="cyan">
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

        <Tab label="Angular" icon={<NgIcon />}>
          <Text color="gray" size="sm">
            The modern web developer&apos;s platform
          </Text>
          <Text style={{ marginTop: 7 }}>
            Learn one way to build applications with Angular and reuse your code and abilities to
            build apps for any deployment target. For web, mobile web, native mobile and native
            desktop.
          </Text>
          <Text style={{ marginTop: 7 }}>
            Achieve the maximum speed possible on the Web Platform today, and take it further, via
            Web Workers and server-side rendering.
          </Text>
        </Tab>

        <Tab icon={<VueIcon />}>
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
  ))
  .add('Positions', () => (
    <div style={{ padding: 50 }}>
      <Tabs style={{ marginTop: 20 }}>
        <Tab label="No body" />
        <Tab label="Only tabs" />
        <Tab label="Nothing here" />
      </Tabs>

      <Tabs style={{ marginTop: 20 }} position="right">
        <Tab label="No body" />
        <Tab label="Only tabs" />
        <Tab label="Nothing here" />
      </Tabs>

      <Tabs style={{ marginTop: 20 }} position="center">
        <Tab label="No body" />
        <Tab label="Only tabs" />
        <Tab label="Nothing here" />
      </Tabs>

      <Tabs style={{ marginTop: 20 }} position="apart">
        <Tab label="No body" />
        <Tab label="Only tabs" />
        <Tab label="Nothing here" />
      </Tabs>
    </div>
  ))
  .add('Grow', () => (
    <div style={{ padding: 50 }}>
      <Tabs style={{ marginTop: 20 }} grow>
        <Tab label="No body" />
        <Tab label="Only tabs" />
        <Tab label="Nothing here" />
      </Tabs>
    </div>
  ))
  .add('Disabled', () => (
    <div style={{ padding: 50 }}>
      <Tabs style={{ marginTop: 20 }}>
        <Tab label="First Disabled" disabled />
        <Tab label="Only tabs" />
        <Tab label="Nothing here" />
      </Tabs>

      <Tabs style={{ marginTop: 20 }}>
        <Tab label="Multiple disabled" />
        <Tab label="2" disabled />
        <Tab label="3" disabled />
        <Tab label="4" />
        <Tab label="5" />
        <Tab label="5" disabled />
        <Tab label="6a" disabled />
        <Tab label="6b" disabled />
        <Tab label="6c" />
        <Tab label="7" disabled />
        <Tab label="8" />
      </Tabs>
    </div>
  ))
  .add('Dark theme', () => (
    <MantineProvider theme={{ colorScheme: 'dark' }}>
      <div
        style={{ backgroundColor: DEFAULT_THEME.colors.dark[7], padding: 40, minHeight: '100vh' }}
      >
        <div style={{ padding: 50 }}>
          <Tabs>
            <Tab label="Disabled" disabled />
            <Tab label="React" color="cyan">
              <Text color="gray" size="sm">
                A JavaScript library for building user interfaces
              </Text>
              <Text style={{ marginTop: 7 }}>
                React makes it painless to create interactive UIs. Design simple views for each
                state in your application, and React will efficiently update and render just the
                right components when your data changes.
              </Text>
              <Text style={{ marginTop: 7 }}>
                Build encapsulated components that manage their own state, then compose them to make
                complex UIs.
              </Text>
            </Tab>

            <Tab label="Angular" icon={<NgIcon />}>
              <Text color="gray" size="sm">
                The modern web developer&apos;s platform
              </Text>
              <Text style={{ marginTop: 7 }}>
                Learn one way to build applications with Angular and reuse your code and abilities
                to build apps for any deployment target. For web, mobile web, native mobile and
                native desktop.
              </Text>
              <Text style={{ marginTop: 7 }}>
                Achieve the maximum speed possible on the Web Platform today, and take it further,
                via Web Workers and server-side rendering.
              </Text>
            </Tab>

            <Tab icon={<VueIcon />}>
              <Text color="gray" size="sm">
                The Progressive JavaScript Framework
              </Text>
              <Text style={{ marginTop: 7 }}>
                Already know HTML, CSS and JavaScript? Read the guide and start building things in
                no time!
              </Text>
              <Text style={{ marginTop: 7 }}>
                An incrementally adoptable ecosystem that scales between a library and a
                full-featured framework.
              </Text>
            </Tab>
          </Tabs>
        </div>
      </div>
    </MantineProvider>
  ));

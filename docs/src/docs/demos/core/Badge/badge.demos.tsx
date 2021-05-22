import React from 'react';
import { Badge, Button, ActionIcon, Group, DEFAULT_THEME } from '@mantine/core';
import { GearIcon } from '@modulz/radix-icons';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

const code = `import React from 'react';
import { Badge, Group } from '@mantine/core';

function Demo() {
  return (
    <Group position="center">
      <Badge>Light</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="filled">Filled</Badge>
    </Group>
  );
}`;

export function BadgeBaseDemo() {
  return (
    <CodeDemo code={code} language="tsx">
      <Group position="center">
        <Badge>Light</Badge>
        <Badge variant="outline">Outline</Badge>
        <Badge variant="filled">Filled</Badge>
      </Group>
    </CodeDemo>
  );
}

const fullWidth = `import React from 'react';
import { Badge, Group } from '@mantine/core';

function Demo() {
  return (
    <>
      <div style={{ width: 200 }}>
        <Badge variant="filled" fullWidth>Full width badge</Badge>
      </div>

      <div style={{ width: 120 }}>
        <Badge variant="filled" fullWidth>Badge with overflow</Badge>
      </div>
    </>
  );
}`;

export function BadgeFullWidthDemo() {
  return (
    <CodeDemo code={fullWidth} language="tsx">
      <div style={{ width: 200 }}>
        <Badge variant="filled" fullWidth>
          Full width badge
        </Badge>
      </div>

      <div style={{ width: 130, marginTop: 20 }}>
        <Badge variant="filled" fullWidth>
          Badge with overflow
        </Badge>
      </div>
    </CodeDemo>
  );
}

const customComponentCode = `import React from 'react';
import { Badge, Group } from '@mantine/core';

const CustomComponent = ({ pads, children, ...others }) => (
  <div {...others}>
    {pads} {children} {pads}
  </div>
);


function Demo() {
  return (
    <Group position="center">
      <Badge component="a" href="https://mantine.dev" variant="outline">
        Link badge
      </Badge>
      <Badge component={CustomComponent} pads="$$$" variant="filled">
        Get lots of money
      </Badge>
    </Group>
  );
}`;

const CustomComponent = ({
  pads,
  children,
  ...others
}: {
  pads: string;
  children: React.ReactNode;
}) => (
  <div {...others}>
    {pads} {children} {pads}
  </div>
);

export function BadgeCustomComponentDemo() {
  return (
    <CodeDemo code={customComponentCode} language="tsx">
      <Group position="center">
        <Badge variant="outline" component="a" href="https://mantine.dev">
          Link badge
        </Badge>
        <Badge component={CustomComponent} pads="$$$" variant="filled">
          Get lots of money
        </Badge>
      </Group>
    </CodeDemo>
  );
}

const composeCode = `import React from 'react';
import { Badge, Button, ActionIcon, Group } from '@mantine/core';
import { GearIcon } from '@modulz/radix-icons';

function Demo() {
  return (
    <Group position="center">
      <Badge variant="filled">badge 1</Badge>
      <Badge variant="filled">badge 2</Badge>
      <ActionIcon title="Setting">
        <GearIcon />
      </ActionIcon>
      <Button>Button</Button>
    </Group>
  );
}`;

export function BadgeComposeDemo() {
  return (
    <CodeDemo code={composeCode} language="tsx">
      <Group position="center">
        <Badge variant="filled">badge 1</Badge>
        <Badge variant="filled">badge 2</Badge>
        <ActionIcon title="Setting">
          <GearIcon />
        </ActionIcon>
        <Button>Button</Button>
      </Group>
    </CodeDemo>
  );
}

const getThemes = (props?: any) =>
  Object.keys(DEFAULT_THEME.colors)
    .filter((color) => color !== 'dark')
    .map((color) => (
      <Badge key={color} color={color} {...props}>
        {color}
      </Badge>
    ));

export function BadgeLightVariantDemo() {
  return (
    <CodeDemo>
      <Group position="center">{getThemes()}</Group>
    </CodeDemo>
  );
}

export function BadgeOutlineVariantDemo() {
  return (
    <CodeDemo>
      <Group position="center">{getThemes({ variant: 'outline' })}</Group>
    </CodeDemo>
  );
}

export function BadgeFilledVariantDemo() {
  return (
    <CodeDemo>
      <Group position="center">{getThemes({ variant: 'filled' })}</Group>
    </CodeDemo>
  );
}

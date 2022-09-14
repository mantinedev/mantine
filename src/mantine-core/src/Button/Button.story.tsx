import React, { CSSProperties } from 'react';
import { MANTINE_COLORS, useMantineTheme } from '@mantine/styles';
import { IconExternalLink } from '@tabler/icons';
import { Button } from './Button';
import { Group } from '../Group';
import { Center } from '../Center';
import { BUTTON_VARIANTS } from './Button.styles';

export default { title: 'Button' };

export function Colors() {
  const items = MANTINE_COLORS.map((color) => (
    <Group mt="xl" key={color}>
      <Button color={color}>Filled</Button>
      <Button color={color} variant="default">
        Default
      </Button>
      <Button color={color} variant="white">
        White
      </Button>
      <Button color={color} variant="light">
        Light
      </Button>
      <Button color={color} variant="outline">
        Outline
      </Button>
      <Button color={color} variant="gradient">
        Gradient
      </Button>
    </Group>
  ));

  return <div style={{ padding: 40, backgroundColor: 'rgba(0,0,0,0.1)' }}>{items}</div>;
}

export function States() {
  const theme = useMantineTheme();

  const sharedStyles: CSSProperties = {
    padding: '10px 20px',
    border: `1px solid ${
      theme.colorScheme === 'light' ? theme.colors.gray[1] : theme.colors.dark[6]
    }`,
  };

  const states = [
    {
      name: 'enabled',
      props: undefined,
    },
    {
      name: 'disabled',
      props: {
        disabled: true,
      },
    },
    {
      name: 'loading',
      props: {
        loading: true,
      },
    },
  ];

  return (
    <div
      style={{
        padding: '40px',
      }}
    >
      <table
        style={{
          borderCollapse: 'collapse',
        }}
      >
        <thead>
          <tr>
            <th
              style={{
                ...sharedStyles,
              }}
            >
              &nbsp;
            </th>

            {BUTTON_VARIANTS.map((variant) => (
              <th
                key={variant}
                style={{
                  ...sharedStyles,
                }}
              >
                {variant}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {states.map((state) => (
            <tr key={state.name}>
              <td
                style={{
                  ...sharedStyles,
                }}
              >
                {state.name}
              </td>

              {BUTTON_VARIANTS.map((variant) => (
                <td
                  key={variant}
                  style={{
                    ...sharedStyles,
                  }}
                >
                  <Center>
                    <Button variant={variant} {...state.props}>
                      {state.name}
                    </Button>
                  </Center>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/**
 * All buttons should be disabled
 */
export function StatesInFieldsetDisabled() {
  return (
    <fieldset disabled>
      <States />
    </fieldset>
  );
}
export function CustomComponent() {
  return (
    <div style={{ padding: 40 }}>
      <Button component="a" href="https://mantine.dev">
        Anchor
      </Button>
    </div>
  );
}

export function WithIcon() {
  return (
    <Group style={{ padding: 40 }}>
      <Button rightIcon={<IconExternalLink size={16} />}>Right icon</Button>
      <Button leftIcon={<IconExternalLink size={16} />}>LeftIcon</Button>
      <Button leftIcon={<IconExternalLink size={16} />} rightIcon={<IconExternalLink size={16} />}>
        Both icons
      </Button>
    </Group>
  );
}

export function Groups() {
  return (
    <div style={{ padding: 40 }}>
      <Button.Group>
        <Button variant="default">First</Button>
        <Button variant="default">Second</Button>
        <Button variant="default">Third</Button>
        <Button variant="default">Forth</Button>
        <Button variant="default">Last</Button>
      </Button.Group>
      <Button.Group mt="xl" orientation="vertical">
        <Button variant="default">First</Button>
        <Button variant="default">Second</Button>
        <Button variant="default">Third</Button>
        <Button variant="default">Forth</Button>
        <Button variant="default">Last</Button>
      </Button.Group>
    </div>
  );
}

export function ColorsIndex() {
  return (
    <Group m={50}>
      <Button color="green.6">Filled</Button>
      <Button color="green.6" variant="default">
        Default
      </Button>
      <Button color="green.6" variant="white">
        White
      </Button>
      <Button color="green.6" variant="light">
        Light
      </Button>
      <Button color="green.6" variant="outline">
        Outline
      </Button>
      <Button color="green.6" variant="gradient">
        Gradient
      </Button>
    </Group>
  );
}

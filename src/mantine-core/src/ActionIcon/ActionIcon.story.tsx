import { MANTINE_COLORS, useMantineTheme } from '@mantine/styles';
import React, { CSSProperties } from 'react';
import { ActionIcon } from './ActionIcon';
import { Center } from '../Center';
import { ACTION_ICON_VARIANTS } from './ActionIcon.styles';

export default { title: 'ActionIcon' };

export function AsLink() {
  return (
    <div style={{ padding: 40 }}>
      <ActionIcon component="a" href="https://mantine.dev">
        $
      </ActionIcon>
    </div>
  );
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

            {ACTION_ICON_VARIANTS.map((variant) => (
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

              {ACTION_ICON_VARIANTS.map((variant) => (
                <td
                  key={variant}
                  style={{
                    ...sharedStyles,
                  }}
                >
                  <Center>
                    <ActionIcon variant={variant} color="blue" {...state.props}>
                      #
                    </ActionIcon>
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

export function StatesInsideFieldsetDisabled() {
  return (
    <fieldset disabled>
      <States />
    </fieldset>
  );
}

export function ColorsIndex() {
  return (
    <div style={{ padding: 40 }}>
      <ActionIcon color="violet.1">$</ActionIcon>
    </div>
  );
}

export function Colors() {
  const theme = useMantineTheme();

  const sharedStyles: CSSProperties = {
    padding: '10px 20px',
    border: `1px solid ${
      theme.colorScheme === 'light' ? theme.colors.gray[1] : theme.colors.dark[6]
    }`,
  };

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

            {ACTION_ICON_VARIANTS.map((variant) => (
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
          {MANTINE_COLORS.map((color) => (
            <tr key={color}>
              <td
                style={{
                  color: theme.colors[color][theme.fn.primaryShade()],
                  ...sharedStyles,
                }}
              >
                {color}
              </td>

              {ACTION_ICON_VARIANTS.map((variant) => (
                <td
                  key={variant}
                  style={{
                    ...sharedStyles,
                  }}
                >
                  <Center>
                    <ActionIcon variant={variant} color={color}>
                      #
                    </ActionIcon>
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

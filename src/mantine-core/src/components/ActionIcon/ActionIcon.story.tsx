import React, { CSSProperties } from 'react';
import { storiesOf } from '@storybook/react';
import { MantineProvider, MANTINE_COLORS, useMantineTheme } from '@mantine/styles';
import { StylesAPIStory } from '@mantine/storybook';
import { ActionIcon } from './ActionIcon';
import { ACTION_ICON_VARIANTS } from './ActionIcon.styles';
import { Center } from '../Center';

storiesOf('ActionIcon', module)
  .add('Styles API', () => (
    <StylesAPIStory name="ActionIcon" component={ActionIcon} props={{ children: '$' }} />
  ))
  .add('Default radius on theme', () => (
    <MantineProvider theme={{ defaultRadius: 0 }}>
      <ActionIcon variant="filled" m={40} size="xl">
        $
      </ActionIcon>
    </MantineProvider>
  ))
  .add('Default props on MantineProvider', () => (
    <MantineProvider defaultProps={{ ActionIcon: { color: 'blue', radius: 'xl' } }}>
      <ActionIcon variant="filled" m={40} size="xl">
        $
      </ActionIcon>
    </MantineProvider>
  ))
  .add('Colors', () => {
    const theme = useMantineTheme();

    const sharedStyles: CSSProperties = {
      padding: '10px',
      border: `1px solid ${theme.colors.gray[5]}`,
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
                color
              </th>

              {ACTION_ICON_VARIANTS.map((variant) => (
                <th
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
              <tr>
                <td
                  style={{
                    color: theme.colors[color][6],
                    ...sharedStyles,
                  }}
                >
                  {color}
                </td>

                {ACTION_ICON_VARIANTS.map((variant) => (
                  <td
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
  });

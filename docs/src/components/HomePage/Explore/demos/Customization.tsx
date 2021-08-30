import React from 'react';
import { Prism } from '@mantine/prism';
import { Slider, Text, useMantineTheme } from '@mantine/core';
import { LinkTitle } from './LinkTitle';

const code = `
<Slider
  defaultValue={40}
  marks={marks}
  labelTransition="fade"
  size={2}
  styles={{
    track: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.blue[1] },
    mark: { width: 6, height: 6, borderRadius: 6, transform: 'translateX(-3px) translateY(-2px)', borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.blue[1] },
    markFilled: { borderColor: theme.colors.blue[6] },
    markLabel: { fontSize: theme.fontSizes.xs, marginBottom: 5, marginTop: 0 },
    thumb: { height: 16, width: 16, backgroundColor: theme.white, borderWidth: 1, boxShadow: theme.shadows.sm },
  }}
/>
`.trim();

export function CustomizationDemo() {
  const theme = useMantineTheme();

  const marks = [
    { value: 20, label: '20%' },
    { value: 50, label: '50%' },
    { value: 80, label: '80%' },
  ];

  return (
    <>
      <LinkTitle
        title="Customize components"
        link="/theming/styles-api/"
        label="Learn about styles API"
      />

      <div style={{ marginBottom: 20, marginTop: 15 }}>
        <Text style={{ marginBottom: 5 }} size="lg">
          Default slider styles
        </Text>
        <Slider defaultValue={40} marks={marks} />
        <Prism style={{ marginTop: 25 }} language="tsx" noCopy>
          {'<Slider defaultValue={40} marks={marks} />'}
        </Prism>
      </div>

      <Text style={{ marginBottom: 20, marginTop: 30 }} size="lg">
        Slider with custom styles
      </Text>
      <Slider
        defaultValue={40}
        marks={marks}
        labelTransition="fade"
        size={2}
        styles={{
          track: {
            backgroundColor:
              theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.blue[1],
          },
          mark: {
            width: 6,
            height: 6,
            borderRadius: 6,
            transform: 'translateX(-3px) translateY(-2px)',
            borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.blue[1],
          },
          markFilled: {
            borderColor: theme.colors.blue[6],
          },
          markLabel: { fontSize: theme.fontSizes.xs, marginBottom: 5, marginTop: 0 },
          thumb: {
            height: 16,
            width: 16,
            backgroundColor: theme.white,
            borderWidth: 1,
            boxShadow: theme.shadows.sm,
          },
        }}
      />

      <Prism style={{ marginTop: 25 }} language="tsx" noCopy>
        {code}
      </Prism>
    </>
  );
}

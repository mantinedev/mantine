import React from 'react';
import { Prism } from '@mantine/prism';
import { Slider, Text, useMantineTheme } from '@mantine/core';
import { LinkTitle } from './LinkTitle';

const code = `
<Slider
  defaultValue={40}
  marks={marks}
  labelTransition="fade"
  styles={{
    track: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.blue[1] },
    label: { fontSize: 16, top: 'unset' },
    mark: { width: 2, borderRadius: 0, transform: 'translateX(-2px)', borderColor: theme.colors.blue[3] },
    markLabel: { fontSize: theme.fontSizes.xs, marginBottom: 5, marginTop: 0 },
    markWrapper: { display: 'flex', flexDirection: 'column-reverse', top: 'unset', bottom: 0 },
    thumb: { backgroundColor: theme.colors.blue[6], borderRadius: 0, borderColor: theme.colors.blue[6] },
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
        link="/guides/styles/"
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
        styles={{
          track: {
            backgroundColor:
              theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.blue[1],
          },
          label: { fontSize: 16, top: 'unset' },
          mark: {
            width: 2,
            borderRadius: 0,
            transform: 'translateX(-2px)',
            borderColor: theme.colors.blue[3],
          },
          markLabel: { fontSize: theme.fontSizes.xs, marginBottom: 5, marginTop: 0 },
          markWrapper: {
            display: 'flex',
            flexDirection: 'column-reverse',
            top: 'unset',
            bottom: 0,
          },
          thumb: {
            backgroundColor: theme.colors.blue[6],
            borderRadius: 0,
            borderColor: theme.colors.blue[6],
          },
        }}
      />

      <Prism style={{ marginTop: 25 }} language="tsx" noCopy>
        {code}
      </Prism>
    </>
  );
}

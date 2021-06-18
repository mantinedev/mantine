import React from 'react';
import { useMantineTheme } from '../../../theme';
import { Slider } from '../Slider/Slider';

const code = `
<Slider
  defaultValue={40}
  marks={marks}
  labelTransition="fade"
  styles={{
    track: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.blue[1] },
    label: { fontSize: 16, bottom: -36, top: 'unset' },
    mark: { width: 2, borderRadius: 0, transform: 'translateX(-2px)', borderColor: theme.colors.blue[3] },
    markLabel: { fontSize: theme.fontSizes.xs, marginBottom: 5, marginTop: 0 },
    markWrapper: { display: 'flex', flexDirection: 'column-reverse', top: 'unset', bottom: 0 },
    thumb: { backgroundColor: theme.white, border: \`1px solid \${theme.colors.gray[3]}\`, boxShadow: theme.shadows.sm, },
  }}
/>
`;

function Demo() {
  const theme = useMantineTheme();
  const marks = [
    { value: 20, label: '20%' },
    { value: 50, label: '50%' },
    { value: 80, label: '80%' },
  ];

  return (
    <div style={{ paddingTop: 15, maxWidth: 400, margin: 'auto' }}>
      <Slider
        defaultValue={40}
        marks={marks}
        labelTransition="fade"
        styles={{
          track: {
            backgroundColor:
              theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.blue[1],
          },
          label: { fontSize: 16, bottom: -36, top: 'unset' },
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
            backgroundColor: theme.white,
            border: `1px solid ${theme.colors.gray[3]}`,
            boxShadow: theme.shadows.sm,
          },
        }}
      />
    </div>
  );
}

export const customize: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};

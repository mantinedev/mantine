import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { WithinOverlays, SubmitForm } from '@mantine/storybook';
import { MantineProvider } from '@mantine/styles';
import { Autocomplete } from './Autocomplete';

function DynamicData() {
  const [value, setValue] = useState('');
  const data =
    value.trim().length > 0 && !value.includes('@')
      ? ['gmail.com', 'outlook.com', 'yahoo.com'].map((provider) => ({
          value: `${value}@${provider}`,
        }))
      : [];

  return (
    <Autocomplete value={value} onChange={setValue} label="Email" placeholder="Email" data={data} />
  );
}

function Controlled() {
  const [value, setValue] = useState('');
  return <Autocomplete data={['React', 'Angular']} value={value} onChange={setValue} />;
}

storiesOf('Autocomplete', module)
  .add('Controlled', () => <Controlled />)
  .add('Repetitive data', () => (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <Autocomplete
        label="Choose your favorite library/framework"
        placeholder="Choose value"
        data={[{ value: 'AA' }, { value: 'AAA' }, { value: 'AAAA' }]}
      />
    </div>
  ))
  .add('Fixed value', () => (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <Autocomplete
        label="Choose your favorite library/framework"
        placeholder="Choose value"
        value="React"
        onChange={() => {}}
        data={[{ value: 'React' }, { value: 'Angular' }, { value: 'Svelte' }, { value: 'Vue' }]}
      />
    </div>
  ))
  .add('Dynamic data', () => (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <DynamicData />
    </div>
  ))
  .add('Strings as data', () => (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <Autocomplete
        label="Choose your favorite library/framework"
        placeholder="Choose value"
        data={['React', 'Angular', 'Svelte', 'Vue']}
      />
    </div>
  ))
  .add('Within overlays', () => (
    <WithinOverlays>
      <Autocomplete
        label="Choose your favorite library/framework"
        placeholder="Choose value"
        data={['React', 'Angular', 'Svelte', 'Vue']}
        withinPortal={false}
      />
    </WithinOverlays>
  ))
  .add('Within form', () => (
    <SubmitForm>
      <Autocomplete
        label="Press enter"
        placeholder="Choose value"
        data={['React', 'Angular', 'Svelte', 'Vue']}
      />
    </SubmitForm>
  ))
  .add('Default props on MantineProvider', () => (
    <MantineProvider defaultProps={{ Autocomplete: { placeholder: 'Default placeholder' } }}>
      <Autocomplete label="Default props" data={['React', 'Angular', 'Svelte', 'Vue']} />
    </MantineProvider>
  ))
  .add('Default radius on MantineProvider', () => (
    <MantineProvider theme={{ defaultRadius: 0 }}>
      <Autocomplete label="Default radius" data={['React', 'Angular', 'Svelte', 'Vue']} />
    </MantineProvider>
  ))
  .add('Styles API on MantineProvider', () => (
    <MantineProvider
      styles={{
        Autocomplete: (theme) => ({
          label: { backgroundColor: theme.colors.red[5] },
          dropdown: { backgroundColor: theme.colors.orange[5] },
        }),

        InputWrapper: (theme) => ({
          description: { backgroundColor: theme.colors.blue[5] },
        }),

        Input: (theme) => ({
          input: { backgroundColor: theme.colors.green[5] },
        }),
      }}
    >
      <Autocomplete
        label="label"
        description="description"
        data={['React', 'Angular', 'Svelte', 'Vue']}
        sx={{ maxWidth: 400 }}
        mx="auto"
        my="xl"
      />
    </MantineProvider>
  ));

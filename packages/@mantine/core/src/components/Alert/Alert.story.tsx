import { IconPhoto } from '@tabler/icons-react';
import { MantineThemeProvider } from '../../core';
import { Alert } from './Alert';

export default { title: 'Alert' };

export function Variants() {
  return (
    <div style={{ maxWidth: 500, margin: 'auto', padding: 40, background: 'rgba(0, 0, 0, 0.1)' }}>
      <Alert
        icon={<IconPhoto stroke={1.5} />}
        title="Bummer!"
        color="red"
        variant="light"
        withCloseButton
      >
        Something terrible happened! You made a mistake and there is no going back, your data was
        lost forever!
      </Alert>
      <Alert
        icon={<IconPhoto stroke={1.5} />}
        withCloseButton
        title="Bummer!"
        color="red"
        variant="filled"
        mt="xl"
      >
        Something terrible happened! You made a mistake and there is no going back, your data was
        lost forever!
      </Alert>
      <Alert
        icon={<IconPhoto stroke={1.5} />}
        withCloseButton
        title="Bummer!"
        color="red"
        variant="outline"
        mt="xl"
      >
        Something terrible happened! You made a mistake and there is no going back, your data was
        lost forever!
      </Alert>

      <Alert
        icon={<IconPhoto stroke={1.5} />}
        withCloseButton
        title="Bummer!"
        color="red"
        variant="default"
        mt="xl"
      >
        Something terrible happened! You made a mistake and there is no going back, your data was
        lost forever!
      </Alert>

      <Alert
        icon={<IconPhoto stroke={1.5} />}
        withCloseButton
        title="Bummer!"
        color="red"
        variant="white"
        mt="xl"
      >
        Something terrible happened! You made a mistake and there is no going back, your data was
        lost forever!
      </Alert>

      <Alert
        icon={<IconPhoto stroke={1.5} />}
        withCloseButton
        title="Bummer!"
        color="red"
        variant="transparent"
        mt="xl"
      >
        Something terrible happened! You made a mistake and there is no going back, your data was
        lost forever!
      </Alert>
    </div>
  );
}

export function AutoContrast() {
  const buttons = Array(10)
    .fill(0)
    .map((_, index) => (
      <Alert
        withCloseButton
        title="Bummer!"
        color={`yellow.${index}`}
        variant="filled"
        mt="xl"
        autoContrast
        key={index}
      >
        Something terrible happened! You made a mistake and there is no going back, your data was
        lost forever!
      </Alert>
    ));

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 10,
        padding: 40,
      }}
    >
      {buttons}
    </div>
  );
}

export function Unstyled() {
  return (
    <div style={{ maxWidth: 500, margin: 'auto', padding: 40 }}>
      <Alert title="Bummer!" color="red" variant="light" withCloseButton unstyled>
        Something terrible happened! You made a mistake and there is no going back, your data was
        lost forever!
      </Alert>
    </div>
  );
}

export function WithoutDescription() {
  return (
    <div style={{ maxWidth: 500, margin: 'auto', padding: 40 }}>
      <Alert icon="$" title="Bummer!" color="red" variant="light" withCloseButton />
    </div>
  );
}

export function CSSVariables() {
  return (
    <MantineThemeProvider
      theme={{
        components: {
          Alert: Alert.extend({
            defaultProps: {
              // Color: 'red',
            },
          }),
        },
      }}
    >
      <div style={{ maxWidth: 500, margin: 'auto', padding: 40 }}>
        <Alert title="Bummer!" withCloseButton>
          Something terrible happened! You made a mistake and there is no going back, your data was
          lost forever!
        </Alert>
      </div>
    </MantineThemeProvider>
  );
}

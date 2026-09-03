import {
  CheckCircleIcon,
  ImageIcon,
  InfoIcon,
  WarningIcon,
  XCircleIcon,
} from '@phosphor-icons/react';
import { MantineThemeProvider } from '../../core';
import { Alert } from './Alert';

export default { title: 'Alert' };

export function Variants() {
  return (
    <div style={{ maxWidth: 500, margin: 'auto', padding: 40, background: 'rgba(0, 0, 0, 0.1)' }}>
      <Alert icon={<ImageIcon />} title="Bummer!" color="red" variant="light" withCloseButton>
        Something terrible happened! You made a mistake and there is no going back, your data was
        lost forever!
      </Alert>
      <Alert
        icon={<ImageIcon />}
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
        icon={<ImageIcon />}
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
        icon={<ImageIcon />}
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
        icon={<ImageIcon />}
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
        icon={<ImageIcon />}
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

export function Semantic() {
  const variants = ['light', 'filled', 'outline', 'default', 'white', 'transparent'] as const;
  const items = [
    { color: 'blue', icon: <InfoIcon />, title: 'Payment method expires soon' },
    { color: 'teal', icon: <CheckCircleIcon />, title: 'Changes saved' },
    { color: 'yellow', icon: <WarningIcon />, title: 'Storage almost full' },
    { color: 'red', icon: <XCircleIcon />, title: 'Build failed' },
  ];

  return (
    <div style={{ maxWidth: 500, margin: 'auto', padding: 40 }}>
      {variants.map((variant) =>
        items.map((item) => (
          <Alert
            key={`${variant}-${item.color}`}
            variant={variant}
            color={item.color}
            icon={item.icon}
            title={item.title}
            withCloseButton
            closeButtonLabel="Dismiss"
            mb="md"
          >
            The card ending in 4242 expires on 30 September. Update it to keep your subscription
            active.
          </Alert>
        ))
      )}
    </div>
  );
}

export function Sizes() {
  const sizes = ['xs', 'sm', 'md', 'lg', 'xl'] as const;

  return (
    <div style={{ maxWidth: 500, margin: 'auto', padding: 40 }}>
      {sizes.map((size) => (
        <Alert
          key={size}
          size={size}
          icon={<InfoIcon />}
          title="Payment method expires soon"
          withCloseButton
          closeButtonLabel="Dismiss"
          mb="md"
        >
          The card ending in 4242 expires on 30 September. Update it to keep your subscription
          active.
        </Alert>
      ))}
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

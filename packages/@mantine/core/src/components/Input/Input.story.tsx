import { Input } from './Input';

export default { title: 'Input' };

export function WithinDisabledFieldset() {
  return (
    <fieldset disabled style={{ padding: 40 }}>
      <legend>Disabled fieldset</legend>
      <Input size="lg" placeholder="Disabled input within fieldset" />
      <Input size="lg" placeholder="Disabled input" disabled mt="md" />
    </fieldset>
  );
}

export function Error() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <Input placeholder="With error" error inputSize="5" />
    </div>
  );
}

export function Variants() {
  return (
    <div style={{ padding: 40 }}>
      <Input placeholder="default" />
      <Input placeholder="cursor pointer" pointer mt="md" />
      <Input placeholder="input with error" mt="md" error leftSection="##" />
      <Input placeholder="disabled" mt="md" disabled />
      <Input placeholder="with icon" mt="md" leftSection="$" />
      <Input placeholder="filled" variant="filled" mt="md" />
      <Input placeholder="unstyled" variant="unstyled" mt="md" />
      <Input placeholder="none" variant="none" mt="md" />
    </div>
  );
}

export function Sizes() {
  const sizes = (['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
    <Input
      placeholder={`Input ${size}`}
      size={size}
      key={size}
      leftSection={size}
      rightSection={size}
      mt="md"
      styles={{
        section: { backgroundColor: 'pink' },
      }}
    />
  ));

  return <div style={{ padding: 40 }}>{sizes}</div>;
}

export function WithSections() {
  return (
    <div style={{ padding: 40, maxWidth: 300 }}>
      <Input
        placeholder="Input with right section"
        rightSection="$"
        leftSection="$"
        defaultValue="asdasdnjknwebdkjwbjrbfkjberfhjbrefhberjfbjherbfjherbfjhb"
        rightSectionWidth={40}
        leftSectionWidth={100}
        styles={{
          section: { border: '1px solid pink' },
        }}
      />
      <Input
        placeholder="Input with right section"
        rightSection="$"
        defaultValue="asdasdnjknwebdkjwbjrbfkjberfhjbrefhberjfbjherbfjherbfjhb"
        rightSectionWidth={40}
        leftSectionWidth={100}
        styles={{
          section: { border: '1px solid pink' },
        }}
      />
      <Input
        placeholder="Input with right section"
        leftSection="$"
        defaultValue="asdasdnjknwebdkjwbjrbfkjberfhjbrefhberjfbjherbfjherbfjhb"
        rightSectionWidth={40}
        leftSectionWidth={100}
        styles={{
          section: { border: '1px solid pink' },
        }}
      />
    </div>
  );
}

export function Multiline() {
  const sizes = (['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
    <div style={{ padding: 40, display: 'flex' }} key={size}>
      <Input defaultValue="default input" size={size} />
      <Input
        size={size}
        component="textarea"
        placeholder="Multiline input"
        defaultValue="asdasdnjknwebdkjwbjrbfkjberfhjbrefhberjfbjherbfjherbfjhb"
        multiline
        rows={3}
      />
    </div>
  ));

  return <>{sizes}</>;
}

export function CompoundComponents() {
  return (
    <div style={{ padding: 40 }}>
      <Input.Label required>Input label</Input.Label>
      <Input.Error>Input error</Input.Error>
      <Input.Description>Input description</Input.Description>
      <Input.Placeholder>Input placeholder</Input.Placeholder>

      <Input.Wrapper
        label="Your name"
        required
        mt="xl"
        description="Input description"
        error="Input error"
        id="test-id"
        styles={(_theme, props) => ({
          description: {
            background: props.required ? 'orange' : 'pink',
          },
          error: {
            background: props.required ? 'orange' : 'pink',
          },
          label: {
            background: props.error ? 'orange' : 'pink',
          },
        })}
      >
        {/* <Input placeholder="Inside wrapper" id="test-id" /> */}
      </Input.Wrapper>
    </div>
  );
}

export function UnstyledInput() {
  return (
    <div style={{ padding: 40, maxWidth: 300, background: 'pink' }}>
      <Input variant="unstyled" placeholder="Unstyled input" />
      <Input variant="unstyled" placeholder="With right section" rightSection="$$" />
      <Input variant="unstyled" placeholder="With left section" leftSection="$$" />
    </div>
  );
}

import { IconCalendar, IconPhone } from '@tabler/icons-react';
import { ColorInput } from '../ColorInput';
import { Input } from '../Input';
import { MultiSelect } from '../MultiSelect';
import { NumberInput } from '../NumberInput';
import { SimpleGrid } from '../SimpleGrid';
import { TextInput } from './TextInput';

export default { title: 'TextInput' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <TextInput
        label="Text input"
        placeholder="This is text input"
        description="Description"
        error="Error"
        id="test-id"
        labelProps={{ style: { color: 'red' } }}
        descriptionProps={{ style: { color: 'red' } }}
        errorProps={{ style: { color: 'blue' } }}
      />
    </div>
  );
}

export function InputWrapperOrder() {
  const props = {
    label: 'Label',
    placeholder: 'Placeholder',
    description: 'Description',
    error: 'Error',
    withErrorStyles: false,
    my: 'xl',
  };

  return (
    <div style={{ padding: 40 }}>
      <TextInput {...props} inputWrapperOrder={['label', 'description', 'input', 'error']} />
      <TextInput {...props} inputWrapperOrder={['description', 'label', 'error', 'input']} />
      <TextInput {...props} inputWrapperOrder={['label', 'description', 'error', 'input']} />
      <TextInput {...props} inputWrapperOrder={['label', 'input', 'description', 'error']} />
    </div>
  );
}

export function ErrorWithIcon() {
  return (
    <div style={{ padding: 40 }}>
      <TextInput
        label="Text input"
        leftSection={<IconPhone />}
        rightSection={<IconPhone />}
        error="Error"
        placeholder="This is text input"
        description="Description"
        id="test-id"
      />
    </div>
  );
}

export function DisabledWithRightSection() {
  return (
    <div style={{ padding: 40 }}>
      <TextInput
        label="Text input"
        placeholder="This is text input"
        description="Description"
        disabled
        rightSection="$$$"
      />
    </div>
  );
}

export function Unstyled() {
  return (
    <div style={{ padding: 40 }}>
      <TextInput
        label="Text input"
        placeholder="This is text input"
        description="Description"
        error="Error"
        unstyled
      />
    </div>
  );
}

export function WithoutErrorStyles() {
  return (
    <div style={{ padding: 40 }}>
      <TextInput
        label="Text input without error styles"
        description="Description"
        withErrorStyles={false}
        error="Error"
      />
    </div>
  );
}

export function Breakpoints() {
  return (
    <div style={{ padding: 40 }}>
      <TextInput label="Text input without error styles" bg="red" hiddenFrom="sm" />
      <TextInput label="Text input without error styles" bg="blue" visibleFrom="md" />
    </div>
  );
}

export function HomepageCollage() {
  return (
    <div style={{ padding: 40 }}>
      <SimpleGrid cols={2} maw={700} spacing="md">
        <TextInput
          label="Appointment date"
          value="September 30, 2021"
          withAsterisk
          leftSection={<IconCalendar size={24} stroke={1.5} color="var(--mantine-color-gray-5)" />}
          rightSection={<Input.ClearButton />}
          leftSectionWidth={36}
          radius="md"
          size="md"
        />
        <NumberInput
          label="Age"
          leftSectionWidth={48}
          value={29}
          radius="md"
          size="md"
          withAsterisk
        />

        <ColorInput
          label="Favorite color"
          radius="md"
          size="md"
          format="rgba"
          defaultValue="rgba(8, 156, 253, 0.76)"
        />

        <MultiSelect
          label="Skills"
          value={['React', 'Next.js']}
          radius="md"
          size="md"
          styles={{
            input: {
              paddingLeft: 9.5,
            },
          }}
        />
      </SimpleGrid>
    </div>
  );
}

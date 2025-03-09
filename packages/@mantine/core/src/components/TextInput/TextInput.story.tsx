import { IconCalendar, IconPhone } from '@tabler/icons-react';
import { Checkbox } from '../Checkbox';
import { ColorInput } from '../ColorInput';
import { Group } from '../Group';
import { Input } from '../Input';
import { MultiSelect } from '../MultiSelect';
import { NumberInput } from '../NumberInput';
import { Radio } from '../Radio';
import { SimpleGrid } from '../SimpleGrid';
import { RangeSlider } from '../Slider';
import { Stack } from '../Stack';
import { Switch } from '../Switch';
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
    <div style={{}}>
      <SimpleGrid cols={2} maw={820} spacing="md" py={60} px={30}>
        <TextInput
          label="Appointment date"
          value="September 30, 2021"
          withAsterisk
          leftSection={<IconCalendar size={24} stroke={1.5} color="var(--mantine-color-gray-5)" />}
          rightSection={<Input.ClearButton />}
          leftSectionWidth={36}
          styles={{ input: { paddingLeft: 39.5 } }}
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

        <Stack gap="lg">
          <Radio.Group label="Favorite library" size="md" defaultValue="react">
            <Group mt={7}>
              <Radio value="react" label="React" size="md" />
              <Radio value="vue" label="Vue" size="md" />
              <Radio value="svelte" label="Svelte" size="md" />
            </Group>
          </Radio.Group>
          <Checkbox label="I agree to terms and condition" size="md" defaultChecked />
        </Stack>

        <Stack gap="lg">
          <div>
            <Input.Label size="md">Settings</Input.Label>
            <Switch label="Push notifications" size="md" defaultChecked onLabel="ON" mt={7} />
          </div>

          <RangeSlider
            defaultValue={[20, 60]}
            marks={[
              { value: 0 },
              { value: 20 },
              { value: 40 },
              { value: 60 },
              { value: 80 },
              { value: 100 },
            ]}
          />
        </Stack>
      </SimpleGrid>
    </div>
  );
}

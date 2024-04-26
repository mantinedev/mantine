import { Checkbox } from '../Checkbox';
import { Stack } from '../Stack';
import { Radio } from './Radio';

export default { title: 'Radio' };

export function Usage() {
  return (
    <div style={{ padding: 20, display: 'flex', gap: 40 }}>
      <Radio iconColor="dark.8" color="lime.4" label="React" value="react" name="hello" />
      <Radio iconColor="dark.8" color="lime.4" label="Angular" value="nu" name="hello" />
      <Radio
        iconColor="dark.8"
        color="lime.4"
        label="Svelte"
        value="sv"
        disabled={false}
        name="hello"
      />
    </div>
  );
}

export function AutoContrast() {
  return (
    <div style={{ padding: 40 }}>
      <Radio
        label="Auto contrast icon color"
        value="hello"
        defaultChecked
        color="lime.4"
        autoContrast
      />
    </div>
  );
}

export function OutlineVariant() {
  return (
    <div style={{ padding: 20, display: 'flex', gap: 40 }}>
      <Radio variant="outline" label="React" value="react" name="hello" defaultChecked />
      <Radio variant="outline" label="Angular" value="nu" name="hello" disabled />
      <Radio variant="outline" label="Svelte" value="sv" disabled={false} name="hello" />
    </div>
  );
}

export function Unstyled() {
  return (
    <div style={{ padding: 20 }}>
      <Radio label="React" value="react" name="hello" unstyled />
    </div>
  );
}

export function RadioGroup() {
  return (
    <div style={{ padding: 20 }}>
      <Radio.Group defaultValue="ng" readOnly>
        <Radio label="React" value="react" />
        <Radio label="Angular" value="ng" />
        <Radio label="Svelte" value="sv" />
      </Radio.Group>
    </div>
  );
}

export function Sizes() {
  const items = (['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
    <Radio.Group defaultValue="ng" key={size} size={size}>
      <Radio label="React" value="react" />
      <Radio label="Angular" value="ng" />
      <Radio label="Svelte" value="sv" disabled />
    </Radio.Group>
  ));

  return (
    <div style={{ padding: 20 }}>
      <Stack>
        <div>
          Independent Radio buttons:
          <Radio label="React" value="react" size="xs" />
          <Radio label="React" value="react" size="sm" />
          <Radio label="React" value="react" size="md" />
          <Radio label="React" value="react" size="lg" />
          <Radio label="React" value="react" size="xl" />
        </div>
        <div>
          Radio Group:
          {items}
        </div>
        <div>
          Override size of specific radio button in group:
          <Radio.Group size="sm">
            <Radio label="default" value="def1" />
            <Radio label="xs" value="xs" size="xs" />
            <Radio label="sm" value="sm" size="sm" />
            <Radio label="md" value="md" size="md" />
            <Radio label="lg" value="lg" size="lg" />
            <Radio label="xl" value="xl" size="xl" />
            <Radio label="default" value="def2" />
          </Radio.Group>
        </div>
      </Stack>
    </div>
  );
}

export function ComparedToCheckbox() {
  return (
    <div style={{ padding: 20 }}>
      <Radio.Group defaultValue="ng">
        <Radio label="React" value="react" name="hello" />
        <Radio label="Angular" value="ng" name="hello" />
        <Radio label="Svelte" value="sv" disabled name="hello" />
      </Radio.Group>

      <Checkbox.Group defaultValue={['ng']}>
        <Checkbox label="React" value="react" name="hello" />
        <Checkbox label="Angular" value="ng" name="hello" />
        <Checkbox label="Svelte" value="sv" disabled name="hello" />
      </Checkbox.Group>
    </div>
  );
}

export function Asterisk() {
  return (
    <div style={{ width: 300, padding: 20 }}>
      <Radio.Group label="With required asterisk" withAsterisk>
        <Radio value="1" />
      </Radio.Group>
      <Radio.Group label="Just required" required>
        <Radio value="1" />
      </Radio.Group>
      <Radio.Group label="Required asterisk off" required withAsterisk={false}>
        <Radio value="1" />
      </Radio.Group>
      <Radio.Group label="Required false asterisk on" required={false} withAsterisk>
        <Radio value="1" />
      </Radio.Group>
    </div>
  );
}

export function WithNameAttribute() {
  return (
    <div style={{ width: 300, padding: 20 }}>
      <Radio.Group label="group1" name="group1">
        <Radio value="1" label="1" />
        <Radio value="2" label="2" />
        <Radio value="3" label="3" />
      </Radio.Group>
      <Radio.Group label="group2" name="group2">
        <Radio value="a" label="a" />
        <Radio value="b" label="b" />
        <Radio value="c" label="c" />
      </Radio.Group>
    </div>
  );
}

export function labelPosition() {
  return (
    <Stack style={{ width: 300, padding: 20 }}>
      <Radio labelPosition="left" label="Hello from left" value="1" />
      <Radio labelPosition="right" label="Hello from right" value="1" />
    </Stack>
  );
}

export function WithDesciprtion() {
  return (
    <Stack style={{ width: 300, padding: 20 }}>
      <Radio
        description="This is left Checkbox"
        labelPosition="left"
        label="Hello from left"
        value="1"
      />
      <Radio
        description="This is right Checkbox"
        labelPosition="right"
        label="Hello from right"
        value="1"
      />
    </Stack>
  );
}

export function WithError() {
  return (
    <Stack style={{ width: 300, padding: 20 }}>
      <Radio label="Invalid Radio without message" value="1" error />
      <Radio error="This is error message" labelPosition="right" label="Invalid Radio" value="1" />
      <Radio error="Radio with error without label" value="1" />
    </Stack>
  );
}

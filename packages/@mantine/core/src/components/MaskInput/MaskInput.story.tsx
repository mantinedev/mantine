import { useState } from 'react';
import { useForm } from '@mantine/form';
import { Button } from '../Button';
import { Group } from '../Group';
import { Stack } from '../Stack';
import { Text } from '../Text';
import { MaskInput } from './MaskInput';

export default { title: 'MaskInput' };

export function Usage() {
  return (
    <div style={{ padding: 40, maxWidth: 340 }}>
      <MaskInput label="Phone" placeholder="(___) ___-____" mask="(999) 999-9999" />
    </div>
  );
}

export function DynamicMask() {
  return (
    <div style={{ padding: 40, maxWidth: 340 }}>
      <MaskInput
        label="Card number"
        mask="9999 9999 9999 9999"
        modify={(value) =>
          /^3[47]/.test(value) ? { mask: '9999 999999 99999' } : { mask: '9999 9999 9999 9999' }
        }
      />
    </div>
  );
}

export function AlwaysShowMask() {
  return (
    <div style={{ padding: 40, maxWidth: 340 }}>
      <MaskInput label="Phone" mask="(999) 999-9999" alwaysShowMask />
    </div>
  );
}

export function AutoClear() {
  return (
    <div style={{ padding: 40, maxWidth: 340 }}>
      <MaskInput
        label="Phone"
        description="Cleared on blur when incomplete"
        mask="(999) 999-9999"
        autoClear
      />
    </div>
  );
}

export function Controlled() {
  const [value, setValue] = useState('');

  return (
    <Stack p={40} maw={340}>
      <MaskInput
        label="Phone"
        mask="(999) 999-9999"
        value={value}
        onChange={setValue}
        data-testid="controlled-input"
      />
      <Text size="sm" data-testid="controlled-raw">
        Raw: {value}
      </Text>
      <Group>
        <Button variant="default" onClick={() => setValue('')}>
          Reset
        </Button>
        <Button variant="default" onClick={() => setValue('5551234567')}>
          Set 5551234567
        </Button>
      </Group>
    </Stack>
  );
}

function FormStory({ mode }: { mode: 'controlled' | 'uncontrolled' }) {
  const [submitted, setSubmitted] = useState('');
  const form = useForm({
    mode,
    initialValues: { phone: '' },
    validate: { phone: (value: string) => (value.length < 10 ? 'Enter full phone number' : null) },
  });

  return (
    <form onSubmit={form.onSubmit((values) => setSubmitted(JSON.stringify(values)))}>
      <Stack p={40} maw={340}>
        <MaskInput
          label="Phone"
          mask="(999) 999-9999"
          {...form.getInputProps('phone')}
          data-testid="form-input"
        />
        <Group>
          <Button type="submit">Submit</Button>
          <Button variant="default" onClick={() => form.setFieldValue('phone', '5551234567')}>
            Set value
          </Button>
          <Button variant="default" onClick={() => form.reset()}>
            Reset
          </Button>
        </Group>
        <Text size="sm" data-testid="form-submitted">
          Submitted: {submitted}
        </Text>
      </Stack>
    </form>
  );
}

export function WithUseFormControlled() {
  return <FormStory mode="controlled" />;
}

export function WithUseFormUncontrolled() {
  return <FormStory mode="uncontrolled" />;
}

export function ErrorState() {
  return (
    <div style={{ padding: 40, maxWidth: 340 }}>
      <MaskInput label="Phone" mask="(999) 999-9999" error="Invalid phone number" />
    </div>
  );
}

export function GrowingDynamicMask() {
  return (
    <div style={{ padding: 40, maxWidth: 340 }}>
      <MaskInput
        label="Brazil phone"
        mask="(99) 9999-9999"
        modify={(value) => (value.length >= 10 ? { mask: '(99) 99999-9999' } : undefined)}
        defaultValue="11987654321"
      />
    </div>
  );
}

export function DynamicMaskBeyondCapacity() {
  return (
    <div style={{ padding: 40, maxWidth: 340 }}>
      <MaskInput
        label="Phone with optional country code"
        mask="(999) 999-9999"
        modify={(value) => (value.length > 10 ? { mask: '9 (999) 999-9999' } : undefined)}
      />
    </div>
  );
}

export function OptionalExtensionWithUseForm() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: { phone: '5551234567' },
  });

  return (
    <Stack p={40} maw={340}>
      <MaskInput
        label="Phone"
        mask="(999) 999-9999? x9999"
        {...form.getInputProps('phone')}
        data-testid="optional-input"
      />
      <Group>
        <Button variant="default" onClick={() => form.setFieldValue('phone', '55598765431234')}>
          Set with extension
        </Button>
        <Button variant="default" onClick={() => form.reset()}>
          Reset
        </Button>
      </Group>
    </Stack>
  );
}

export function AlwaysShowMaskWithoutFocusMask() {
  return (
    <div style={{ padding: 40, maxWidth: 340 }}>
      <MaskInput
        label="Expiry"
        mask="99/99"
        alwaysShowMask
        showMaskOnFocus={false}
        data-testid="always-show-input"
      />
    </div>
  );
}

export function MixedTokenClasses() {
  const [key, setKey] = useState(0);
  const form = useForm({ mode: 'controlled', initialValues: { code: 'XYZ1234' } });

  return (
    <Stack p={40} maw={340}>
      <MaskInput key={key} label="Code" mask="AAA-9999" {...form.getInputProps('code')} />
      <Text size="sm">Raw: {form.values.code}</Text>
      <Group>
        <Button variant="default" onClick={() => form.setFieldValue('code', form.values.code)}>
          Write back
        </Button>
        <Button variant="default" onClick={() => setKey((k) => k + 1)}>
          Remount
        </Button>
      </Group>
    </Stack>
  );
}

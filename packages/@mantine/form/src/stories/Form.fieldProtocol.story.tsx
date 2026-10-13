import { Profiler, useEffect, useRef, useState } from 'react';
import {
  ActionIcon,
  Badge,
  Button,
  Checkbox,
  Code,
  Group,
  Input,
  NativeSelect,
  SegmentedControl,
  Select,
  SelectProps,
  Stack,
  Text,
  TextInput,
} from '@mantine/core';
import { useFormField } from '@mantine/hooks';
import { FormMode } from '../types';
import { useField } from '../use-field';
import { useForm } from '../use-form';

export default { title: 'Form' };

function RenderCount({ label }: { label: string }) {
  const renders = useRef(0);
  renders.current += 1;
  return <Badge variant="light">{`${label} renders: ${renders.current}`}</Badge>;
}

function Counted({ label, children }: { label: string; children: React.ReactNode }) {
  const count = useRef(0);
  const node = useRef<HTMLSpanElement>(null);

  const sync = () => {
    if (node.current) {
      node.current.textContent = String(count.current);
    }
  };

  useEffect(sync);

  return (
    <div>
      <Profiler
        id={label}
        onRender={() => {
          count.current += 1;
          sync();
        }}
      >
        {children}
      </Profiler>
      <Text size="xs" c="dimmed" mt={4}>
        {label} renders: <span ref={node}>0</span>
      </Text>
    </div>
  );
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Stack p={40} maw={520} mx="auto">
      {children}
    </Stack>
  );
}

const languages = [
  { value: 'en', label: 'English' },
  { value: 'de', label: 'German' },
  { value: 'fr', label: 'French' },
  { value: 'es', label: 'Spanish' },
];

function LanguageSelect(props: SelectProps) {
  return <Select data={languages} {...props} />;
}

function LanguageSelectWrapped({ onChange, ...others }: SelectProps) {
  return (
    <Select
      data={languages}
      {...others}
      onChange={(value, option) => onChange?.(value ?? 'en', option)}
    />
  );
}

function LanguageSelectWithHook({ value, onChange, ...others }: SelectProps) {
  const field = useFormField<string | null>(onChange);

  return (
    <Select
      data={languages}
      {...others}
      value={field.subscribed ? field.value : value}
      onChange={(nextValue, option) => onChange?.(nextValue ?? 'en', option)}
    />
  );
}

function RerendersForm({ mode }: { mode: FormMode }) {
  const form = useForm({
    mode,
    initialValues: {
      name: '',
      email: '',
      language: 'en',
      wrappedLanguage: 'en',
      hookLanguage: 'en',
    },
    validate: { name: (value) => (value.length < 2 ? 'Name is too short' : null) },
  });

  return (
    <>
      <RenderCount label="form" />

      <Counted label="Name">
        <TextInput label="Name" {...form.getInputProps('name')} />
      </Counted>

      <Counted label="Email">
        <TextInput label="Email" {...form.getInputProps('email')} />
      </Counted>

      <Counted label="LanguageSelect">
        <LanguageSelect
          label="Language (wrapper passes onChange through)"
          {...form.getInputProps('language')}
        />
      </Counted>

      <Counted label="LanguageSelectWrapped">
        <LanguageSelectWrapped
          label="Language (wrapper replaces onChange)"
          {...form.getInputProps('wrappedLanguage')}
        />
      </Counted>

      <Counted label="LanguageSelectWithHook">
        <LanguageSelectWithHook
          label="Language (wrapper replaces onChange and calls useFormField)"
          {...form.getInputProps('hookLanguage')}
        />
      </Counted>

      <Group>
        <Button variant="default" onClick={() => form.setFieldValue('name', 'John')}>
          Set name
        </Button>
        <Button
          variant="default"
          onClick={() =>
            form.setValues({ language: 'de', wrappedLanguage: 'de', hookLanguage: 'de' })
          }
        >
          Set languages
        </Button>
        <Button variant="default" onClick={form.reset}>
          Reset
        </Button>
        <Button onClick={() => form.validate()}>Validate</Button>
      </Group>
    </>
  );
}

export function FieldRerenders() {
  const [mode, setMode] = useState<FormMode>('uncontrolled');

  return (
    <Layout>
      <SegmentedControl
        value={mode}
        onChange={(value) => setMode(value as FormMode)}
        data={['uncontrolled', 'controlled']}
      />
      <Text size="sm" c="dimmed">
        In uncontrolled mode an input renders alone. The form renders when an error changes, on
        programmatic writes and when the changed input is not subscribed.
      </Text>
      <RerendersForm key={mode} mode={mode} />
    </Layout>
  );
}

export function FieldUncontrolledWithoutKey() {
  const form = useForm({
    initialValues: { name: '', role: 'react', country: 'de', terms: false, user: { email: '' } },
    validate: { name: (value) => (value.length < 2 ? 'Name is too short' : null) },
  });

  return (
    <Layout>
      <RenderCount label="form" />

      <TextInput label="Name" {...form.getInputProps('name')} />
      <TextInput label="Email (user.email)" {...form.getInputProps('user.email')} />
      <Select label="Role" data={['react', 'vue', 'svelte']} {...form.getInputProps('role')} />
      <NativeSelect label="Country" data={['de', 'fr', 'us']} {...form.getInputProps('country')} />
      <Checkbox label="Accept terms" {...form.getInputProps('terms', { type: 'checkbox' })} />

      <Group>
        <Button variant="default" onClick={() => form.setFieldValue('name', 'John')}>
          Set name
        </Button>
        <Button
          variant="default"
          onClick={() => form.setFieldValue('user', { email: 'jane@mantine.dev' })}
        >
          Set user
        </Button>
        <Button
          variant="default"
          onClick={() => form.setValues({ role: 'vue', country: 'us', terms: true })}
        >
          Set values
        </Button>
        <Button variant="default" onClick={form.reset}>
          Reset
        </Button>
        <Button onClick={() => form.validate()}>Validate</Button>
      </Group>
    </Layout>
  );
}

interface ExpiryInputProps {
  label: string;
  value?: string;
  onChange?: (value: string) => void;
  error?: React.ReactNode;
  cleanup?: boolean;
}

function splitExpiry(value: string | undefined) {
  const [month = '', year = ''] = (value || '').split('/');
  return { month, year };
}

function ExpiryInput({ label, value, onChange, error, cleanup = true }: ExpiryInputProps) {
  const [parts, setParts] = useState(() => splitExpiry(value));

  useFormField<string>(onChange, {
    subscribe: false,
    onExternalWrite: (external) => cleanup && setParts(splitExpiry(external)),
  });

  const handleChange = (next: { month: string; year: string }) => {
    setParts(next);
    const complete = next.month.length === 2 && next.year.length === 2;
    onChange?.(complete ? `${next.month}/${next.year}` : '');
  };

  return (
    <Input.Wrapper label={label} error={error}>
      <Group gap="xs">
        <Input
          w={70}
          placeholder="MM"
          maxLength={2}
          value={parts.month}
          onChange={(event) => handleChange({ ...parts, month: event.currentTarget.value })}
        />
        <Input
          w={70}
          placeholder="YY"
          maxLength={2}
          value={parts.year}
          onChange={(event) => handleChange({ ...parts, year: event.currentTarget.value })}
        />
      </Group>
    </Input.Wrapper>
  );
}

function CleanupForm({ mode }: { mode: FormMode }) {
  const form = useForm({ mode, initialValues: { withCleanup: '', withoutCleanup: '' } });
  const [values, setValues] = useState(form.getValues());

  return (
    <>
      <Text size="sm" c="dimmed">
        Both inputs report an empty string until month and year are complete. Type only the month,
        then press Reset: the first input is cleared by onExternalWrite, the second one keeps the
        partial entry.
      </Text>

      <ExpiryInput label="With onExternalWrite" {...form.getInputProps('withCleanup')} />
      <ExpiryInput
        label="Without onExternalWrite"
        cleanup={false}
        {...form.getInputProps('withoutCleanup')}
      />

      <Group>
        <Button variant="default" onClick={form.reset}>
          Reset
        </Button>
        <Button
          variant="default"
          onClick={() => form.setValues({ withCleanup: '12/30', withoutCleanup: '12/30' })}
        >
          Set 12/30
        </Button>
        <Button
          variant="default"
          onClick={() => form.setValues({ withCleanup: '', withoutCleanup: '' })}
        >
          Set empty
        </Button>
        <Button onClick={() => setValues(form.getValues())}>Read values</Button>
      </Group>
      <Code block>{JSON.stringify(values, null, 2)}</Code>
    </>
  );
}

export function FieldExternalWriteCleanup() {
  const [mode, setMode] = useState<FormMode>('uncontrolled');

  return (
    <Layout>
      <SegmentedControl
        value={mode}
        onChange={(value) => setMode(value as FormMode)}
        data={['uncontrolled', 'controlled']}
      />
      <CleanupForm key={mode} mode={mode} />
    </Layout>
  );
}

export function FieldListWithIndexKeys() {
  const form = useForm({
    initialValues: { people: [{ name: 'One' }, { name: 'Two' }, { name: 'Three' }] },
  });

  return (
    <Layout>
      <RenderCount label="form" />
      <Text size="sm" c="dimmed">
        Rows use the index as the React key and no key is stored in values.
      </Text>

      {form.getValues().people.map((_, index) => (
        <Group key={index}>
          <TextInput
            style={{ flex: 1 }}
            aria-label={`Person ${index}`}
            {...form.getInputProps(`people.${index}.name`)}
          />
          <ActionIcon
            variant="default"
            aria-label="Remove"
            onClick={() => form.removeListItem('people', index)}
          >
            ×
          </ActionIcon>
        </Group>
      ))}

      <Group>
        <Button variant="default" onClick={() => form.insertListItem('people', { name: 'New' }, 0)}>
          Insert first
        </Button>
        <Button
          variant="default"
          onClick={() => form.reorderListItem('people', { from: 0, to: 1 })}
        >
          Swap first two
        </Button>
        <Button variant="default" onClick={form.reset}>
          Reset
        </Button>
      </Group>
      <Code block>{JSON.stringify(form.getValues(), null, 2)}</Code>
    </Layout>
  );
}

export function FieldUseFieldUncontrolled() {
  const field = useField({ initialValue: '' });
  const nativeField = useField({ initialValue: '' });

  return (
    <Layout>
      <RenderCount label="host" />
      <TextInput label="TextInput (subscribed)" {...field.getInputProps()} />
      <Input.Wrapper label="Native input (not subscribed)">
        <input aria-label="Native input" {...nativeField.getInputProps({ withError: false })} />
      </Input.Wrapper>
      <Group>
        <Button
          variant="default"
          onClick={() => {
            field.setValue('Programmatic');
            nativeField.setValue('Programmatic');
          }}
        >
          Set values
        </Button>
        <Button
          variant="default"
          onClick={() => {
            field.reset();
            nativeField.reset();
          }}
        >
          Reset
        </Button>
      </Group>
    </Layout>
  );
}

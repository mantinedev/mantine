import { Badge, Button, Group, ScrollArea, Stack, TextInput } from '@mantine/core';
import { FormErrors, isNotEmpty, useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';

type LargeFormValues = Record<string, string>;

const FIELDS = Array.from({ length: 200 }, (_, index) => `field${index}`);

const initialValues: LargeFormValues = Object.fromEntries(FIELDS.map((field) => [field, '']));

const validate = Object.fromEntries(FIELDS.map((field) => [field, isNotEmpty('Required')]));

export function LargeForm() {
  const form = useForm<LargeFormValues>({
    initialValues,
    validate,
  });

  const errorsCount = Object.keys(form.errors).length;

  const handleSubmit = (values: LargeFormValues) => {
    notifications.show({
      title: 'Form submitted',
      message: `Submitted ${Object.keys(values).length} fields`,
    });
  };

  const handleErrors = (errors: FormErrors) => {
    const firstErrorPath = Object.keys(errors)[0];
    const node = form.getInputNode(firstErrorPath);
    node?.scrollIntoView({ block: 'center' });
    node?.focus({ preventScroll: true });
  };

  const handleFillAll = () => {
    form.setValues(Object.fromEntries(FIELDS.map((field, index) => [field, `Value ${index + 1}`])));
  };

  const inputs = FIELDS.map((field, index) => (
    <TextInput
      key={field}
      label={`Field ${index + 1}`}
      placeholder={`Value ${index + 1}`}
      withAsterisk
      {...form.getInputProps(field)}
    />
  ));

  return (
    <form onSubmit={form.onSubmit(handleSubmit, handleErrors)}>
      <Stack>
        <Group>
          <Badge color={errorsCount > 0 ? 'red' : 'teal'}>Errors: {errorsCount}</Badge>
        </Group>

        <ScrollArea h={400} type="auto" offsetScrollbars>
          <Stack gap="xs" pr="xs">
            {inputs}
          </Stack>
        </ScrollArea>

        <Group justify="flex-end">
          <Button variant="default" onClick={handleFillAll}>
            Fill all
          </Button>

          <Button variant="default" onClick={form.reset}>
            Reset
          </Button>

          <Button type="submit">Submit</Button>
        </Group>
      </Stack>
    </form>
  );
}

import { Button, Fieldset, Group, Stack, TextInput } from '@mantine/core';
import { FormErrors, isNotEmpty, useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { EmailField, emailRule } from './EmailField';

interface CheckoutValues {
  contact: {
    fullName: string;
    email: string;
  };
  invoice: {
    company: string;
    email: string;
  };
}

export function CheckoutForm() {
  const form = useForm<CheckoutValues>({
    initialValues: {
      contact: {
        fullName: '',
        email: '',
      },
      invoice: {
        company: '',
        email: '',
      },
    },
    validate: {
      contact: {
        fullName: isNotEmpty('Full name is required'),
        email: emailRule,
      },
      invoice: {
        email: (value) => (value ? emailRule(value) : null),
      },
    },
  });

  const handleSubmit = (values: CheckoutValues) => {
    const invoiceEmail = values.invoice.email || values.contact.email;

    notifications.show({
      title: 'Order placed',
      message: `Order confirmation goes to ${values.contact.email}, invoice to ${invoiceEmail}`,
    });
  };

  const handleErrors = (errors: FormErrors) => {
    form.getInputNode(Object.keys(errors)[0])?.focus();
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit, handleErrors)}>
      <Stack>
        <Fieldset legend="Contact">
          <Stack gap="sm">
            <TextInput
              size="md"
              label="Full name"
              placeholder="Jane Doe"
              withAsterisk
              {...form.getInputProps('contact.fullName')}
            />

            <EmailField field={form.getField('contact.email')} withAsterisk />
          </Stack>
        </Fieldset>

        <Fieldset legend="Invoice">
          <Stack gap="sm">
            <TextInput
              size="md"
              label="Company"
              placeholder="Mantine Inc."
              {...form.getInputProps('invoice.company')}
            />

            <EmailField
              field={form.getField('invoice.email')}
              label="Invoice email"
              placeholder="billing@mantine.dev"
              description="Leave empty to send the invoice to the contact email"
            />
          </Stack>
        </Fieldset>

        <Group justify="flex-end">
          <Button size="md" type="submit">
            Place order
          </Button>
        </Group>
      </Stack>
    </form>
  );
}

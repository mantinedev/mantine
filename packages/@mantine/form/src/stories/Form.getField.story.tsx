import { Button, Group, TextInput } from '@mantine/core';
import { useField, UseFieldReturnType } from '../use-field';
import { useForm } from '../use-form';
import { isEmail } from '../validators';
import { FormBase } from './_base';

export default { title: 'Form' };

const emailRule = isEmail('Invalid email');

function EmailField({
  field,
  label = 'Email',
}: {
  field: UseFieldReturnType<string>;
  label?: string;
}) {
  const inputProps = field.getInputProps();

  const handleBlur = () => {
    inputProps.onBlur?.();
    const normalized = field.getValue().trim().toLowerCase();

    if (normalized !== field.getValue()) {
      field.setValue(normalized);
    }
  };

  return <TextInput label={label} mt="md" {...inputProps} onBlur={handleBlur} />;
}

export function GetField() {
  const signup = useForm({
    initialValues: { email: '' },
    validate: { email: emailRule },
  });

  const checkout = useForm({
    initialValues: { contact: { email: '' }, invoice: { email: '' } },
    validate: { contact: { email: emailRule } },
    validateInputOnBlur: true,
  });

  const newsletter = useField({ initialValue: '', validate: emailRule, validateOnBlur: true });

  return (
    <>
      <FormBase form={signup}>
        <EmailField field={signup.getField('email')} label="Signup email" />
      </FormBase>

      <FormBase form={checkout}>
        <EmailField field={checkout.getField('contact.email')} label="Contact email" />
        <EmailField field={checkout.getField('invoice.email')} label="Invoice email" />
      </FormBase>

      <div style={{ maxWidth: 400, margin: '0 auto' }}>
        <EmailField field={newsletter} label="Newsletter email" />
        <Group justify="flex-end" mt="md">
          <Button variant="default" onClick={() => newsletter.reset()}>
            Reset newsletter
          </Button>
          <Button onClick={() => newsletter.validate()}>Validate newsletter</Button>
        </Group>
      </div>
    </>
  );
}

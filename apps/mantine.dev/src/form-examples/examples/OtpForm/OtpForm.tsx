import { Anchor, Input, PinInput, Stack, Text } from '@mantine/core';
import { hasLength, useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';

const CODE_LENGTH = 6;
const VALID_CODE = '123456';

interface OtpValues {
  code: string;
}

function verifyCode(code: string) {
  return new Promise<boolean>((resolve) => {
    setTimeout(() => resolve(code === VALID_CODE), 1000);
  });
}

export function OtpForm() {
  const form = useForm<OtpValues>({
    mode: 'uncontrolled',
    initialValues: { code: '' },
    validate: {
      code: hasLength(CODE_LENGTH, `Enter all ${CODE_LENGTH} digits`),
    },
  });

  const handleSubmit = async (values: OtpValues) => {
    const valid = await verifyCode(values.code);

    if (valid) {
      form.reset();
      notifications.show({ title: 'Code verified', message: 'Your phone number is confirmed' });
    } else {
      form.setFieldError('code', `Invalid code, enter ${VALID_CODE}`);
    }
  };

  form.watch('code', ({ value }) => {
    if (value.length === CODE_LENGTH) {
      form.onSubmit(handleSubmit)();
    }
  });

  const error = form.errors.code;

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Stack gap="xs" align="flex-start">
        <div>
          <Text size="sm" fw={500} mb={3}>
            Verification code
          </Text>
          <Text size="xs" c="dimmed" mb={8}>
            Enter the code sent to your phone. Hint: {VALID_CODE}
          </Text>
          <PinInput
            length={CODE_LENGTH}
            type="number"
            size="lg"
            oneTimeCode
            disabled={form.submitting}
            error={!!error}
            {...form.getInputProps('code', { withError: false })}
          />
          {error && <Input.Error mt={6}>{error}</Input.Error>}
        </div>
        <Anchor
          component="button"
          type="button"
          size="sm"
          disabled={form.submitting}
          onClick={form.reset}
        >
          Resend code
        </Anchor>
      </Stack>
    </form>
  );
}

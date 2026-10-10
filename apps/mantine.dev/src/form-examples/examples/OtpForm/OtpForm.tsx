import { Anchor, Input, PinInput, Stack, usePinInput } from '@mantine/core';
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
    initialValues: {
      code: '',
    },
    validate: {
      code: hasLength(CODE_LENGTH, `Enter all ${CODE_LENGTH} digits`),
    },
  });

  const codeProps = form.getInputProps('code', { withError: false });
  const pinInput = usePinInput({
    length: CODE_LENGTH,
    value: codeProps.value,
    onChange: codeProps.onChange,
  });

  const handleSubmit = async (values: OtpValues) => {
    const valid = await verifyCode(values.code);

    if (valid) {
      form.reset();
      notifications.show({ title: 'Code verified', message: 'Your phone number is confirmed' });
    } else {
      form.setFieldError('code', `Invalid code, enter ${VALID_CODE}`);
      pinInput.focus(CODE_LENGTH - 1);
    }
  };

  form.watch('code', ({ value }) => {
    if (value.length === CODE_LENGTH) {
      form.onSubmit(handleSubmit)();
    }
  });

  const handleResend = () => {
    form.reset();
    pinInput.focus(0);
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Stack gap="xs" align="flex-start">
        <Input.Wrapper
          label="Verification code"
          description={`Enter the code sent to your phone. Hint: ${VALID_CODE}`}
          error={form.errors.code}
        >
          <PinInput
            controller={pinInput}
            type="number"
            size="lg"
            readOnly={form.submitting}
            error={!!form.errors.code}
            onFocus={codeProps.onFocus}
            onBlur={codeProps.onBlur}
          />
        </Input.Wrapper>

        <Anchor
          component="button"
          type="button"
          size="sm"
          disabled={form.submitting}
          onClick={handleResend}
        >
          Resend code
        </Anchor>
      </Stack>
    </form>
  );
}

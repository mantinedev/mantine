import { Anchor, Input, PinInput, Stack, usePinInput } from '@mantine/core';
import { hasLength, useForm } from '@mantine/form';
import { useDidUpdate } from '@mantine/hooks';
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

  const submitting = form.submitting;

  const handleSubmit = async (values: OtpValues) => {
    const valid = await verifyCode(values.code);

    if (valid) {
      form.reset();
      notifications.show({ title: 'Code verified', message: 'Your phone number is confirmed' });
    } else {
      form.setFieldValue('code', '');
      form.setFieldError('code', `Invalid code, enter ${VALID_CODE}`);
    }
  };

  form.watch('code', ({ value }) => {
    if (value.length === CODE_LENGTH) {
      form.onSubmit(handleSubmit)();
    }
  });

  // Inputs are disabled while the code is verified, focus returns once they are enabled again
  useDidUpdate(() => {
    if (!submitting && form.errors.code) {
      pinInput.focus(0);
    }
  }, [submitting]);

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    const inputs = Array.from({ length: CODE_LENGTH }, (_, index) => pinInput.getInputNode(index));
    const firstEmptyIndex = inputs.findIndex((input) => input?.value === '');
    const clickedIndex = inputs.indexOf(event.target as HTMLInputElement);

    if (firstEmptyIndex !== -1 && clickedIndex > firstEmptyIndex) {
      event.preventDefault();
      pinInput.focus(firstEmptyIndex);
    }
  };

  const handleResend = () => {
    form.reset();
    pinInput.focus(0);
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Stack gap="xs" align="flex-start">
        <Input.Wrapper
          size="md"
          label="Verification code"
          description={
            submitting
              ? 'Verifying code…'
              : `Enter the code sent to your phone. Hint: ${VALID_CODE}`
          }
          error={form.errors.code}
        >
          <PinInput
            controller={pinInput}
            type="number"
            size="md"
            disabled={submitting}
            error={!!form.errors.code}
            onMouseDown={handleMouseDown}
            onFocus={codeProps.onFocus}
            onBlur={codeProps.onBlur}
          />
        </Input.Wrapper>

        <Anchor
          component="button"
          type="button"
          size="sm"
          disabled={submitting}
          onClick={handleResend}
        >
          Resend code
        </Anchor>
      </Stack>
    </form>
  );
}

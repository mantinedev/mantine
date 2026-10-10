import {
  Button,
  Group,
  NumberInput,
  PhoneInput,
  SimpleGrid,
  Stack,
  Textarea,
  TextInput,
} from '@mantine/core';
import { hasLength, isEmail, isInRange, isNotEmpty, isUrl, useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';

interface ApplicationValues {
  fullName: string;
  email: string;
  phone: string;
  linkedin: string;
  salary: number | '';
  experience: number | '';
  coverLetter: string;
}

function sendApplication(values: ApplicationValues) {
  return new Promise<ApplicationValues>((resolve) => {
    setTimeout(() => resolve(values), 1200);
  });
}

export function JobApplication() {
  const form = useForm<ApplicationValues>({
    mode: 'uncontrolled',
    initialValues: {
      fullName: '',
      email: '',
      phone: '',
      linkedin: '',
      salary: '',
      experience: '',
      coverLetter: '',
    },
    validateInputOnBlur: ['email', 'phone', 'linkedin'],
    validateInputOnChange: ['salary', 'experience'],
    validate: {
      fullName: isNotEmpty('Full name is required'),
      email: isEmail('Invalid email'),
      phone: (value) =>
        isNotEmpty('Phone number is required')(value) ||
        (value.replace(/\D/g, '').length >= 7 ? null : 'Invalid phone number'),
      linkedin: isUrl('Invalid LinkedIn profile URL'),
      salary: isInRange(
        { min: 30000, max: 300000 },
        'Expected salary must be between $30,000 and $300,000'
      ),
      experience: isInRange({ min: 0, max: 50 }, 'Years of experience must be between 0 and 50'),
      coverLetter: hasLength({ min: 50 }, 'Cover letter must be at least 50 characters'),
    },
  });

  const handleSubmit = async (values: ApplicationValues) => {
    const application = await sendApplication(values);
    notifications.show({
      title: 'Application sent',
      message: `Thank you, ${application.fullName}! We will contact you at ${application.email}`,
    });
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Stack>
        <SimpleGrid cols={{ base: 1, sm: 2 }}>
          <TextInput
            label="Full name"
            placeholder="John Doe"
            withAsterisk
            {...form.getInputProps('fullName')}
          />
          <TextInput
            label="Email"
            placeholder="john@mantine.dev"
            withAsterisk
            {...form.getInputProps('email')}
          />
        </SimpleGrid>
        <PhoneInput
          label="Phone"
          placeholder="+1 (555) 123-4567"
          defaultCountry="us"
          withAsterisk
          {...form.getInputProps('phone')}
        />
        <TextInput
          label="LinkedIn profile"
          placeholder="https://linkedin.com/in/johndoe"
          withAsterisk
          {...form.getInputProps('linkedin')}
        />
        <SimpleGrid cols={{ base: 1, sm: 2 }}>
          <NumberInput
            label="Expected salary"
            placeholder="85,000"
            withAsterisk
            prefix="$"
            thousandSeparator=","
            min={0}
            max={1_000_000}
            step={1000}
            {...form.getInputProps('salary')}
          />
          <NumberInput
            label="Years of experience"
            placeholder="5"
            withAsterisk
            min={0}
            max={50}
            {...form.getInputProps('experience')}
          />
        </SimpleGrid>
        <Textarea
          label="Cover letter"
          placeholder="Tell us why you are a great fit for this role"
          withAsterisk
          autosize
          minRows={4}
          {...form.getInputProps('coverLetter')}
        />
        <Group justify="flex-end">
          <Button type="submit" loading={form.submitting}>
            Send application
          </Button>
        </Group>
      </Stack>
    </form>
  );
}

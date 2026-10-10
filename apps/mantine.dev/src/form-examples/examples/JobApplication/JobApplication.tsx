import {
  Button,
  Group,
  NumberInput,
  PhoneInput,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
  TextInput,
} from '@mantine/core';
import { hasLength, isEmail, isInRange, isNotEmpty, matches, useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';

const MIN_COVER_LETTER_LENGTH = 50;

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
    initialValues: {
      fullName: '',
      email: '',
      phone: '',
      linkedin: '',
      salary: '',
      experience: '',
      coverLetter: '',
    },
    // Phone is a multi-part input and cover letter is long text, both are validated on submit only
    validateInputOnBlur: ['email', 'linkedin', 'salary', 'experience'],
    validate: {
      fullName: isNotEmpty('Full name is required'),
      email: isEmail('Invalid email'),
      phone: (value) =>
        isNotEmpty('Phone number is required')(value) ||
        (value.replace(/\D/g, '').length >= 7 ? null : 'Invalid phone number'),
      linkedin: matches(
        /^https:\/\/(www\.)?linkedin\.com\/in\/[\w-]+\/?(\?.*)?$/,
        'Enter a profile URL like https://linkedin.com/in/johndoe'
      ),
      salary: isInRange(
        { min: 30_000, max: 300_000 },
        'Expected salary must be between $30,000 and $300,000'
      ),
      experience: (value) => (value === '' ? 'Years of experience is required' : null),
      coverLetter: hasLength(
        { min: MIN_COVER_LETTER_LENGTH },
        `Cover letter must be at least ${MIN_COVER_LETTER_LENGTH} characters`
      ),
    },
  });

  const coverLetter = form.useWatchValue('coverLetter');

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
            size="md"
            label="Full name"
            placeholder="John Doe"
            withAsterisk
            {...form.getInputProps('fullName')}
          />

          <TextInput
            size="md"
            label="Email"
            placeholder="john@mantine.dev"
            withAsterisk
            {...form.getInputProps('email')}
          />
        </SimpleGrid>

        <PhoneInput
          size="md"
          label="Phone"
          placeholder="Your phone number"
          defaultCountry="us"
          withAsterisk
          {...form.getInputProps('phone')}
        />

        <TextInput
          size="md"
          label="LinkedIn profile"
          placeholder="https://linkedin.com/in/johndoe"
          withAsterisk
          {...form.getInputProps('linkedin')}
        />

        <SimpleGrid cols={{ base: 1, sm: 2 }}>
          <NumberInput
            size="md"
            label="Expected salary"
            placeholder="Annual salary in USD"
            withAsterisk
            prefix="$"
            thousandSeparator=","
            allowNegative={false}
            allowDecimal={false}
            step={1000}
            {...form.getInputProps('salary')}
          />

          <NumberInput
            size="md"
            label="Years of experience"
            placeholder="Full years"
            withAsterisk
            allowNegative={false}
            allowDecimal={false}
            min={0}
            max={50}
            clampBehavior="strict"
            {...form.getInputProps('experience')}
          />
        </SimpleGrid>

        <Textarea
          size="md"
          label="Cover letter"
          placeholder="Tell us why you are a great fit for this role"
          withAsterisk
          autosize
          minRows={4}
          maxRows={8}
          bottomSection={
            <Text size="sm">
              {coverLetter.length} characters, at least {MIN_COVER_LETTER_LENGTH} required
            </Text>
          }
          {...form.getInputProps('coverLetter')}
        />

        <Group justify="flex-end">
          <Button size="md" type="submit" loading={form.submitting}>
            Send application
          </Button>
        </Group>
      </Stack>
    </form>
  );
}

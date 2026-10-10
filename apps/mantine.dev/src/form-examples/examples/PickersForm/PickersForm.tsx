import {
  Button,
  Chip,
  ColorInput,
  Group,
  Input,
  NativeSelect,
  Rating,
  SegmentedControl,
  SimpleGrid,
  Slider,
  Stack,
  Switch,
} from '@mantine/core';
import { isNotEmpty, useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { fontSizeMarks, interests, languages } from './data';

interface Values {
  accentColor: string;
  fontSize: number;
  satisfaction: number;
  interests: string[];
  newsletter: boolean;
  theme: 'light' | 'dark' | 'auto';
  language: string;
}

export function PickersForm() {
  const form = useForm<Values>({
    initialValues: {
      accentColor: '#228be6',
      fontSize: 16,
      satisfaction: 0,
      interests: [],
      newsletter: true,
      theme: 'auto',
      language: 'en',
    },
    validate: {
      accentColor: isNotEmpty('Pick an accent color'),
      satisfaction: (value) => (value > 0 ? null : 'Rate your satisfaction'),
      interests: isNotEmpty('Pick at least one interest'),
    },
  });

  const handleSubmit = () => {
    notifications.show({ title: 'Preferences saved', message: 'Preferences saved' });
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Stack>
        <SimpleGrid cols={{ base: 1, sm: 2 }}>
          <ColorInput
            size="md"
            label="Accent color"
            placeholder="#228be6"
            withAsterisk
            {...form.getInputProps('accentColor')}
          />

          <NativeSelect
            size="md"
            label="Language"
            data={languages}
            {...form.getInputProps('language')}
          />
        </SimpleGrid>

        <Input.Wrapper size="md" label="Font size" mb="md">
          <Slider
            size="md"
            min={12}
            max={24}
            step={1}
            marks={fontSizeMarks}
            label={(value) => `${value}px`}
            mt="xs"
            {...form.getInputProps('fontSize', { withError: false })}
          />
        </Input.Wrapper>

        <Input.Wrapper size="md" label="Satisfaction" withAsterisk error={form.errors.satisfaction}>
          <Rating size="md" mt={5} {...form.getInputProps('satisfaction', { withError: false })} />
        </Input.Wrapper>

        <Input.Wrapper size="md" label="Interests" withAsterisk error={form.errors.interests}>
          <Chip.Group multiple {...form.getInputProps('interests', { withError: false })}>
            <Group gap="xs" mt="xs" mb={form.errors.interests ? 5 : 0}>
              {interests.map((item) => (
                <Chip key={item.value} value={item.value} size="md">
                  {item.label}
                </Chip>
              ))}
            </Group>
          </Chip.Group>
        </Input.Wrapper>

        <SimpleGrid cols={{ base: 1, sm: 2 }}>
          <Input.Wrapper size="md" label="Theme">
            <SegmentedControl
              size="md"
              fullWidth
              mt={5}
              data={[
                { value: 'light', label: 'Light' },
                { value: 'dark', label: 'Dark' },
                { value: 'auto', label: 'Auto' },
              ]}
              {...form.getInputProps('theme', { withError: false })}
            />
          </Input.Wrapper>

          <Input.Wrapper size="md" label="Newsletter">
            <Switch
              size="md"
              mt={9}
              label="Send me product updates"
              {...form.getInputProps('newsletter', { type: 'checkbox' })}
            />
          </Input.Wrapper>
        </SimpleGrid>

        <Group justify="flex-end">
          <Button size="md" variant="default" onClick={form.reset}>
            Reset
          </Button>

          <Button size="md" type="submit">
            Save preferences
          </Button>
        </Group>
      </Stack>
    </form>
  );
}

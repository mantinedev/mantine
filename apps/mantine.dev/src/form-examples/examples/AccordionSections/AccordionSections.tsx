import { Accordion, Button, Group } from '@mantine/core';
import { isEmail, isNotEmpty, isUrl, useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { CompanySection } from './CompanySection';
import { PersonalSection } from './PersonalSection';
import { PreferencesSection } from './PreferencesSection';
import { SectionControl } from './SectionControl';
import { OnboardingValues } from './types';

function completeOnboarding(values: OnboardingValues) {
  return new Promise<OnboardingValues>((resolve) => {
    setTimeout(() => resolve(values), 1000);
  });
}

export function AccordionSections() {
  const form = useForm<OnboardingValues>({
    initialValues: {
      personal: { firstName: '', lastName: '', email: '' },
      company: { name: '', website: '' },
      preferences: { language: null, newsletter: false },
    },
    validate: {
      personal: {
        firstName: isNotEmpty('First name is required'),
        lastName: isNotEmpty('Last name is required'),
        email: isEmail('Invalid email'),
      },
      company: {
        name: isNotEmpty('Company name is required'),
        website: isUrl('Invalid URL'),
      },
      preferences: {
        language: isNotEmpty('Select a language'),
      },
    },
  });

  // Subscribe to each section so completion indicators update while typing
  form.useWatchValue('personal');
  form.useWatchValue('company');
  form.useWatchValue('preferences');

  const handleSubmit = async (values: OnboardingValues) => {
    const { personal, company } = await completeOnboarding(values);
    notifications.show({
      title: 'Onboarding complete',
      message: `Welcome, ${personal.firstName} ${personal.lastName} from ${company.name}`,
    });
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Accordion multiple defaultValue={['personal']} variant="separated">
        <Accordion.Item value="personal">
          <Accordion.Control>
            <SectionControl label="Personal" valid={form.isValid('personal')} />
          </Accordion.Control>
          <Accordion.Panel>
            <PersonalSection form={form} />
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="company">
          <Accordion.Control>
            <SectionControl label="Company" valid={form.isValid('company')} />
          </Accordion.Control>
          <Accordion.Panel>
            <CompanySection form={form} />
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="preferences">
          <Accordion.Control>
            <SectionControl label="Preferences" valid={form.isValid('preferences')} />
          </Accordion.Control>
          <Accordion.Panel>
            <PreferencesSection form={form} />
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>

      <Group justify="flex-end" mt="md">
        <Button type="submit" loading={form.submitting}>
          Complete onboarding
        </Button>
      </Group>
    </form>
  );
}

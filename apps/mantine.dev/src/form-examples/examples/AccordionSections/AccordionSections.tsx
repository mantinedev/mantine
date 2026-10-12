import { useRef } from 'react';
import { flushSync } from 'react-dom';
import { Accordion, Button, Group, useAccordion } from '@mantine/core';
import { FormErrors, isEmail, isNotEmpty, isUrl, useForm } from '@mantine/form';
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
  const accordion = useAccordion({
    multiple: true,
    defaultValue: ['personal'],
  });

  const pendingFocusPath = useRef<string | null>(null);

  const form = useForm<OnboardingValues>({
    initialValues: {
      personal: {
        firstName: '',
        lastName: '',
        email: '',
      },
      company: {
        name: '',
        website: '',
      },
      preferences: {
        language: null,
        newsletter: false,
      },
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

  const handleErrors = (errors: FormErrors) => {
    const paths = Object.keys(errors);
    flushSync(() => paths.forEach((path) => accordion.expand(path.split('.')[0])));

    const node = form.getInputNode(paths[0]);
    node?.focus();

    if (node && document.activeElement !== node) {
      pendingFocusPath.current = paths[0];
    }
  };

  const focusPendingField = () => {
    if (pendingFocusPath.current) {
      form.getInputNode(pendingFocusPath.current)?.focus();
      pendingFocusPath.current = null;
    }
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit, handleErrors)}>
      <Accordion controller={accordion} variant="separated">
        <Accordion.Item value="personal">
          <Accordion.Control>
            <SectionControl label="Personal" valid={form.isValid('personal')} />
          </Accordion.Control>
          <Accordion.Panel onTransitionEnd={focusPendingField}>
            <PersonalSection form={form} />
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="company">
          <Accordion.Control>
            <SectionControl label="Company" valid={form.isValid('company')} />
          </Accordion.Control>
          <Accordion.Panel onTransitionEnd={focusPendingField}>
            <CompanySection form={form} />
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="preferences">
          <Accordion.Control>
            <SectionControl label="Preferences" valid={form.isValid('preferences')} />
          </Accordion.Control>
          <Accordion.Panel onTransitionEnd={focusPendingField}>
            <PreferencesSection form={form} />
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>

      <Group justify="flex-end" mt="md">
        <Button size="md" type="submit" loading={form.submitting}>
          Complete onboarding
        </Button>
      </Group>
    </form>
  );
}

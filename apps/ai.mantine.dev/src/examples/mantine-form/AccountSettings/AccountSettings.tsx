import { useEffect, useState } from 'react';
import { Container, Divider, Stack, Title } from '@mantine/core';
import { useForm } from '@mantine/form';
import { fetchSettings } from './api';
import { BillingSection } from './BillingSection';
import { SECTION_LABELS } from './constants';
import { DangerZone } from './DangerZone/DangerZone';
import {
  EMPTY_BILLING,
  EMPTY_NOTIFICATIONS,
  EMPTY_ORGANIZATION,
  EMPTY_PROFILE,
} from './initial-values';
import { NotificationsSection } from './NotificationsSection/NotificationsSection';
import { OrganizationSection } from './OrganizationSection';
import { ProfileSection } from './ProfileSection';
import { SettingsSection } from './SettingsSection/SettingsSection';
import type {
  BillingValues,
  NotificationsValues,
  OrganizationValues,
  ProfileValues,
} from './types';
import { UnsavedChangesBar } from './UnsavedChangesBar';
import { useSaveSections, type SettingsSectionForm } from './use-save-sections';
import { billingRules, notificationsRules, organizationRules, profileRules } from './validation';

export function AccountSettings() {
  const [loading, setLoading] = useState(true);
  const [organizationName, setOrganizationName] = useState('');

  const profileForm = useForm<ProfileValues>({
    name: 'profile',
    initialValues: EMPTY_PROFILE,
    validate: profileRules,
    validateInputOnBlur: ['email'],
  });

  const organizationForm = useForm<OrganizationValues>({
    name: 'organization',
    initialValues: EMPTY_ORGANIZATION,
    validate: organizationRules,
    validateInputOnBlur: ['website'],
  });

  const billingForm = useForm<BillingValues>({
    name: 'billing',
    initialValues: EMPTY_BILLING,
    validate: billingRules,
    validateInputOnBlur: ['billingEmail'],
  });

  const notificationsForm = useForm<NotificationsValues>({
    name: 'notifications',
    initialValues: EMPTY_NOTIFICATIONS,
    validate: notificationsRules,
  });

  const sections: SettingsSectionForm[] = [
    { key: 'profile', form: profileForm },
    { key: 'organization', form: organizationForm },
    { key: 'billing', form: billingForm },
    { key: 'notifications', form: notificationsForm },
  ];

  const dirtyFlags = [
    profileForm.useDirty(),
    organizationForm.useDirty(),
    billingForm.useDirty(),
    notificationsForm.useDirty(),
  ];
  const dirtySections = sections
    .filter((_, index) => dirtyFlags[index])
    .map((section) => SECTION_LABELS[section.key]);

  const { saving, save, cancel } = useSaveSections(sections, (key, values) => {
    key === 'organization' && setOrganizationName(values.name);
  });

  useEffect(() => {
    let cancelled = false;
    void fetchSettings().then((settings) => {
      if (cancelled) {
        return;
      }
      profileForm.initialize(settings.profile);
      organizationForm.initialize(settings.organization);
      billingForm.initialize(settings.billing);
      notificationsForm.initialize(settings.notifications);
      setOrganizationName(settings.organization.name);
      setLoading(false);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  // A billing address copied from the organization follows later edits of the organization address
  organizationForm.watch('address', ({ value }) => {
    if (billingForm.getValues().sameAsOrganization) {
      billingForm.setFieldValue('address', { ...value });
    }
  });

  useEffect(() => {
    // The browser shows its own "Leave site?" dialog when preventDefault is called
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (sections.some(({ form }) => form.isDirty())) {
        event.preventDefault();
      }
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, []);

  return (
    <Container size="md" py="xl" pb={120}>
      <Title order={2} c="var(--mantine-color-bright)" mb="xl">
        Account settings
      </Title>

      <Stack gap="xl">
        <SettingsSection
          title="Profile"
          description="How you appear to other members of the organization."
          loading={loading}
        >
          <ProfileSection form={profileForm} />
        </SettingsSection>
        <Divider />
        <SettingsSection
          title="Organization"
          description="Company details shown on your workspace and documents."
          loading={loading}
        >
          <OrganizationSection form={organizationForm} />
        </SettingsSection>
        <Divider />
        <SettingsSection
          title="Billing"
          description="Where invoices are sent and the address printed on them."
          loading={loading}
        >
          <BillingSection
            form={billingForm}
            getOrganizationAddress={() => organizationForm.getValues().address}
          />
        </SettingsSection>
        <Divider />
        <SettingsSection
          title="Notifications"
          description="Choose how you hear about activity in the organization."
          loading={loading}
        >
          <NotificationsSection form={notificationsForm} />
        </SettingsSection>
        <Divider />
        <SettingsSection
          title="Danger zone"
          description="Actions that change who controls the organization or remove it."
          loading={loading}
        >
          <DangerZone organizationName={organizationName} />
        </SettingsSection>
      </Stack>

      <UnsavedChangesBar
        dirtySections={dirtySections}
        saving={saving}
        onCancel={cancel}
        onSave={save}
      />
    </Container>
  );
}

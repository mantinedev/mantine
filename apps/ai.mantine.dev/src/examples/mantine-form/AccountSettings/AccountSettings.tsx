import { useEffect, useState } from 'react';
import { Container, Text, Title } from '@mantine/core';
import { useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { fetchAccountSettings } from './api';
import { BillingSection } from './BillingSection/BillingSection';
import { DangerZone } from './DangerZone/DangerZone';
import { emptyBilling, emptyNotifications, emptyOrganization, emptyProfile, MEMBERS } from './data';
import { formatList } from './format-list';
import { NotificationsSection } from './NotificationsSection/NotificationsSection';
import { OrganizationSection } from './OrganizationSection/OrganizationSection';
import { ProfileSection } from './ProfileSection/ProfileSection';
import { saveSections, type SettingsSectionEntry } from './save-sections';
import { SettingsSection } from './SettingsSection/SettingsSection';
import type {
  BillingValues,
  NotificationsValues,
  OrganizationValues,
  ProfileValues,
} from './types';
import { UnsavedChangesBar } from './UnsavedChangesBar/UnsavedChangesBar';
import { billingRules, notificationsRules, organizationRules, profileRules } from './validation';
import classes from './AccountSettings.module.css';

export function AccountSettings() {
  const [organizationName, setOrganizationName] = useState('');
  const [ownerId, setOwnerId] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [saving, setSaving] = useState(false);

  const profileForm = useForm<ProfileValues>({
    name: 'profile-settings',
    initialValues: emptyProfile,
    validate: profileRules,
  });

  const organizationForm = useForm<OrganizationValues>({
    name: 'organization-settings',
    initialValues: emptyOrganization,
    validate: organizationRules,
  });

  const billingForm = useForm<BillingValues>({
    name: 'billing-settings',
    initialValues: emptyBilling,
    validate: billingRules,
    // Inputs of the copied address are rendered from the whole `address` object set at once
    cascadeUpdates: true,
  });

  const notificationsForm = useForm<NotificationsValues>({
    name: 'notification-settings',
    initialValues: emptyNotifications,
    validate: notificationsRules,
  });

  const sections: SettingsSectionEntry[] = [
    { id: 'profile', label: 'Profile', form: profileForm, dirty: profileForm.useDirty() },
    {
      id: 'organization',
      label: 'Organization',
      form: organizationForm,
      dirty: organizationForm.useDirty(),
    },
    { id: 'billing', label: 'Billing', form: billingForm, dirty: billingForm.useDirty() },
    {
      id: 'notifications',
      label: 'Notifications',
      form: notificationsForm,
      dirty: notificationsForm.useDirty(),
    },
  ];
  const dirtySections = sections.filter((section) => section.dirty);
  const hasUnsavedChanges = dirtySections.length > 0;

  useEffect(() => {
    let cancelled = false;
    void fetchAccountSettings().then((data) => {
      if (cancelled) {
        return;
      }
      profileForm.initialize(data.profile);
      organizationForm.initialize(data.organization);
      billingForm.initialize(data.billing);
      notificationsForm.initialize(data.notifications);
      setOrganizationName(data.organization.name);
      setOwnerId(data.ownerId);
      setLoaded(true);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!hasUnsavedChanges) {
      return undefined;
    }
    // The browser shows its own "Leave site?" dialog when preventDefault is called
    const handleBeforeUnload = (event: BeforeUnloadEvent) => event.preventDefault();
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [hasUnsavedChanges]);

  const handleCancel = () => dirtySections.forEach((section) => section.form.reset());

  const handleSave = async () => {
    setSaving(true);
    const result = await saveSections(dirtySections);
    setSaving(false);

    if (result.saved.some((section) => section.id === 'organization')) {
      setOrganizationName(organizationForm.getInitialValues().name);
    }

    if (result.failed.length === 0 && result.invalid.length === 0) {
      notifications.show({
        title: 'Changes saved',
        message: `${formatList(result.saved.map((section) => section.label))} updated`,
      });
      return;
    }

    const failedLabels = formatList([...result.invalid, ...result.failed].map((s) => s.label));
    notifications.show({
      color: 'red',
      title: `Could not save ${failedLabels}`,
      message: 'Check the highlighted fields and try again',
    });
  };

  return (
    <Container size="md" className={classes.root}>
      <div className={classes.header}>
        <Title order={2} c="var(--mantine-color-bright)">
          Account settings
        </Title>
        <Text size="sm">Manage your profile, organization and notification preferences.</Text>
      </div>

      <div className={classes.sections}>
        <SettingsSection
          title="Profile"
          description="How you appear to other members of your organization."
          loading={!loaded}
        >
          <ProfileSection form={profileForm} />
        </SettingsSection>

        <SettingsSection
          title="Organization"
          description="Company details shown on your workspace and documents."
          loading={!loaded}
        >
          <OrganizationSection form={organizationForm} />
        </SettingsSection>

        <SettingsSection
          title="Billing"
          description="Where invoices are sent and the address printed on them."
          loading={!loaded}
        >
          <BillingSection form={billingForm} organizationForm={organizationForm} />
        </SettingsSection>

        <SettingsSection
          title="Notifications"
          description="Choose which events reach you and through which channels."
          loading={!loaded}
        >
          <NotificationsSection form={notificationsForm} />
        </SettingsSection>

        <SettingsSection
          title="Danger zone"
          description="Actions that change who controls the organization or remove it for good."
          loading={!loaded}
        >
          <DangerZone
            organizationName={organizationName}
            members={MEMBERS.filter((member) => member.value !== ownerId)}
            onOwnershipTransferred={setOwnerId}
          />
        </SettingsSection>
      </div>

      <UnsavedChangesBar
        dirtySections={dirtySections.map((section) => section.label)}
        saving={saving}
        onCancel={handleCancel}
        onSave={handleSave}
      />
    </Container>
  );
}

export type SettingsTab = 'profile' | 'security' | 'notifications';

export const TABS: { value: SettingsTab; label: string }[] = [
  { value: 'profile', label: 'Profile' },
  { value: 'security', label: 'Security' },
  { value: 'notifications', label: 'Notifications' },
];

export const TAB_FIELDS: Record<SettingsTab, string[]> = {
  profile: ['name', 'email'],
  security: ['password', 'confirmPassword'],
  notifications: ['emailNotifications', 'pushNotifications'],
};

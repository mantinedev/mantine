export type PresetId = 'dashboard' | 'blog' | 'marketing';

export interface Preset {
  id: PresetId;
  label: string;
}

export const presets: Preset[] = [
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'blog', label: 'Blog' },
  { id: 'marketing', label: 'Marketing' },
];

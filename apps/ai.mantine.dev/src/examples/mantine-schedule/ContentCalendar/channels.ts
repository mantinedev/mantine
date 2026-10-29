import type { Channel, PostStatus } from './types';

export const CHANNELS: { value: Channel; label: string; color: string }[] = [
  { value: 'blog', label: 'Blog', color: 'teal' },
  { value: 'newsletter', label: 'Newsletter', color: 'grape' },
  { value: 'linkedin', label: 'LinkedIn', color: 'blue' },
  { value: 'instagram', label: 'Instagram', color: 'pink' },
];

export const CHANNEL_LABELS = Object.fromEntries(
  CHANNELS.map((channel) => [channel.value, channel.label])
) as Record<Channel, string>;

export const CHANNEL_COLORS = Object.fromEntries(
  CHANNELS.map((channel) => [channel.value, channel.color])
) as Record<Channel, string>;

export const STATUSES: { value: PostStatus; label: string }[] = [
  { value: 'draft', label: 'Draft' },
  { value: 'scheduled', label: 'Scheduled' },
  { value: 'published', label: 'Published' },
];

export const STATUS_LABELS = Object.fromEntries(
  STATUSES.map((status) => [status.value, status.label])
) as Record<PostStatus, string>;

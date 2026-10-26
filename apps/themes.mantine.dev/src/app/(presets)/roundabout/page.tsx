import type { Metadata } from 'next';
import { Roundabout } from '@/presets/roundabout';

export const metadata: Metadata = {
  title: 'Roundabout preset',
};

export default function RoundaboutPage() {
  return <Roundabout />;
}

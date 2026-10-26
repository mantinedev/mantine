import type { Metadata } from 'next';
import { Riverline } from '@/presets/riverline';

export const metadata: Metadata = {
  title: 'Riverline preset',
};

export default function RiverlinePage() {
  return <Riverline />;
}

import type { Metadata } from 'next';
import { Quarry } from '@/presets/quarry';

export const metadata: Metadata = {
  title: 'Quarry preset',
};

export default function QuarryPage() {
  return <Quarry />;
}

import type { Metadata } from 'next';
import { Larder } from '@/presets/larder';

export const metadata: Metadata = {
  title: 'Larder preset',
};

export default function LarderPage() {
  return <Larder />;
}

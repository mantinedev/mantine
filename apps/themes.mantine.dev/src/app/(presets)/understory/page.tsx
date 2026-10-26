import type { Metadata } from 'next';
import { Understory } from '@/presets/understory';

export const metadata: Metadata = {
  title: 'Understory preset',
};

export default function UnderstoryPage() {
  return <Understory />;
}

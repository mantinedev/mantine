import type { Metadata } from 'next';
import { Halcyon } from '@/presets/halcyon';

export const metadata: Metadata = {
  title: 'Halcyon preset',
};

export default function HalcyonPage() {
  return <Halcyon />;
}

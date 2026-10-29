import type { Metadata } from 'next';
import { Generic } from '@/presets/generic';

export const metadata: Metadata = {
  title: 'Generic preset',
};

export default function GenericPage() {
  return <Generic />;
}

import type { Metadata } from 'next';
import { Tern } from '@/presets/tern';

export const metadata: Metadata = {
  title: 'Tern preset',
};

export default function TernPage() {
  return <Tern />;
}

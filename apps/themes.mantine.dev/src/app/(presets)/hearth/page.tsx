import type { Metadata } from 'next';
import { Hearth } from '@/presets/hearth';

export const metadata: Metadata = {
  title: 'Hearth preset',
};

export default function HearthPage() {
  return <Hearth />;
}

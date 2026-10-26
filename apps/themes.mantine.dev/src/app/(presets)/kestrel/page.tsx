import type { Metadata } from 'next';
import { Kestrel } from '@/presets/kestrel';

export const metadata: Metadata = {
  title: 'Kestrel preset',
};

export default function KestrelPage() {
  return <Kestrel />;
}

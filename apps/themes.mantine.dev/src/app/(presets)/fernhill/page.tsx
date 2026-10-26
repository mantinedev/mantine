import type { Metadata } from 'next';
import { Fernhill } from '@/presets/fernhill';

export const metadata: Metadata = {
  title: 'Fernhill preset',
};

export default function FernhillPage() {
  return <Fernhill />;
}

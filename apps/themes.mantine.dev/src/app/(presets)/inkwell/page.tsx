import type { Metadata } from 'next';
import { Inkwell } from '@/presets/inkwell';

export const metadata: Metadata = {
  title: 'Inkwell preset',
};

export default function InkwellPage() {
  return <Inkwell />;
}

import type { Metadata } from 'next';
import { Benchbook } from '@/presets/benchbook';

export const metadata: Metadata = {
  title: 'Benchbook preset',
};

export default function BenchbookPage() {
  return <Benchbook />;
}

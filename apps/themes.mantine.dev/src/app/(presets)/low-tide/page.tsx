import type { Metadata } from 'next';
import { LowTide } from '@/presets/low-tide';

export const metadata: Metadata = {
  title: 'Low Tide preset',
};

export default function LowTidePage() {
  return <LowTide />;
}

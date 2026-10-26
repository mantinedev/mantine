import type { Metadata } from 'next';
import { NightShift } from '@/presets/night-shift';

export const metadata: Metadata = {
  title: 'Night Shift preset',
};

export default function NightShiftPage() {
  return <NightShift />;
}

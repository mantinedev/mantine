import type { Metadata } from 'next';
import { Shelfwise } from '@/presets/shelfwise';

export const metadata: Metadata = {
  title: 'Shelfwise preset',
};

export default function ShelfwisePage() {
  return <Shelfwise />;
}

import type { Metadata } from 'next';
import { Saltwater } from '@/presets/saltwater';

export const metadata: Metadata = {
  title: 'Saltwater Pass preset',
};

export default function SaltwaterPage() {
  return <Saltwater />;
}

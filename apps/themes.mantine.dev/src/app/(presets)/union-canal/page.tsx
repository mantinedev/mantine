import type { Metadata } from 'next';
import { UnionCanal } from '@/presets/union-canal';

export const metadata: Metadata = {
  title: 'Union Canal preset',
};

export default function UnionCanalPage() {
  return <UnionCanal />;
}

import type { Metadata } from 'next';
import { Slate } from '@/presets/slate';

export const metadata: Metadata = {
  title: 'Slate preset',
};

export default function SlatePage() {
  return <Slate />;
}

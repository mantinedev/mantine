import type { Metadata } from 'next';
import { Tidewrack } from '@/presets/tidewrack';

export const metadata: Metadata = {
  title: 'Tidewrack preset',
};

export default function TidewrackPage() {
  return <Tidewrack />;
}

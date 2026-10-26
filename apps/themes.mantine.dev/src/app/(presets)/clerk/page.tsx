import type { Metadata } from 'next';
import { Clerk } from '@/presets/clerk';

export const metadata: Metadata = {
  title: 'Clerk preset',
};

export default function ClerkPage() {
  return <Clerk />;
}

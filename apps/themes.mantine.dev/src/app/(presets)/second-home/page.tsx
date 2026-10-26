import type { Metadata } from 'next';
import { SecondHome } from '@/presets/second-home';

export const metadata: Metadata = {
  title: 'Second Home preset',
};

export default function SecondHomePage() {
  return <SecondHome />;
}

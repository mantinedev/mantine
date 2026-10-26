import type { Metadata } from 'next';
import { Fieldwork } from '@/presets/fieldwork';

export const metadata: Metadata = {
  title: 'Fieldwork preset',
};

export default function FieldworkPage() {
  return <Fieldwork />;
}

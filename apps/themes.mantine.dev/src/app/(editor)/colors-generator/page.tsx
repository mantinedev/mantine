import type { Metadata } from 'next';
import { ColorsGenerator } from '@/components/ColorsGenerator';

export const metadata: Metadata = {
  title: 'Mantine colors generator',
  description:
    'Generate 10 shades for Mantine theme colors from a single color with adjustable lightness, saturation and hue shift',
};

export default function ColorsGeneratorPage() {
  return <ColorsGenerator />;
}

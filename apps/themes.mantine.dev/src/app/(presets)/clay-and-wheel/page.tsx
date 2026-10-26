import type { Metadata } from 'next';
import { ClayAndWheel } from '@/presets/clay-and-wheel';

export const metadata: Metadata = {
  title: 'Clay & Wheel preset',
};

export default function ClayAndWheelPage() {
  return <ClayAndWheel />;
}

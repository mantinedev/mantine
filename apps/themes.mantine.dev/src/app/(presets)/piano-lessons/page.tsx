import type { Metadata } from 'next';
import { PianoLessons } from '@/presets/piano-lessons';

export const metadata: Metadata = {
  title: 'Piano Lessons preset',
};

export default function PianoLessonsPage() {
  return <PianoLessons />;
}

import { useRef } from 'react';
import { Badge } from '@mantine/core';

interface RenderCountBadgeProps {
  label: string;
}

export function RenderCountBadge({ label }: RenderCountBadgeProps) {
  const renders = useRef(0);
  renders.current += 1;

  return (
    <Badge>
      {label}: {renders.current}
    </Badge>
  );
}

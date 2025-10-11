import { Box } from '../../../core';

export interface ThumbProps extends React.ComponentPropsWithoutRef<'div'> {
  variant?: string;
  position: { x: number; y: number };
}

export function Thumb({ position, ...others }: ThumbProps) {
  return (
    <Box
      __vars={{
        '--thumb-y-offset': `${position.y * 100}%`,
        '--thumb-x-offset': `${position.x * 100}%`,
      }}
      {...others}
    />
  );
}

Thumb.displayName = '@mantine/core/ColorPickerThumb';

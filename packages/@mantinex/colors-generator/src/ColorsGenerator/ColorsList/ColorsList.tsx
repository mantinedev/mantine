import { ColorSwatch, Group } from '@mantine/core';

export interface ColorsListProps {
  colors: string[];
}

export function ColorsList({ colors }: ColorsListProps) {
  const swatches = colors.map((color, index) => (
    <div>
      <ColorSwatch key={index} radius={0} withShadow={false} size={100} color={color} />
      {index}:{color}
    </div>
  ));
  return <Group gap={1}>{swatches}</Group>;
}

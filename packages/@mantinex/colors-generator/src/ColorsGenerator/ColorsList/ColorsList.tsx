import chroma from 'chroma-js';
import { ColorSwatch, Group, Text } from '@mantine/core';

export interface ColorsListProps {
  colors: string[];
  withSample?: boolean;
}

export function ColorsList({ colors, withSample }: ColorsListProps) {
  const swatches = colors.map((color, index) => {
    const contrast = chroma.contrast(color, '#fff');
    return (
      <div key={index}>
        <ColorSwatch key={index} radius={0} withShadow={false} size={100} color={color} />
        <Text fz="sm" ff="monospace">
          {index}: {color}
        </Text>

        <Text>
          <Text span inherit fw="bold" c={contrast < 4.5 ? 'red' : 'green'}>
            {contrast.toFixed(2)}
          </Text>
        </Text>
      </div>
    );
  });

  return (
    <div>
      <Group gap={1} my="md">
        {swatches}
      </Group>

      {withSample && (
        <Group>
          <div
            style={{
              width: 200,
              height: 60,
              textAlign: 'center',
              fontWeight: 'bold',
              color: 'white',
              background: colors[6],
              lineHeight: '60px',
            }}
          >
            SAMPLE LIGHT
          </div>

          <div
            style={{
              width: 200,
              height: 60,
              textAlign: 'center',
              fontWeight: 'bold',
              color: 'white',
              background: colors[8],
              lineHeight: '60px',
            }}
          >
            SAMPLE DARK
          </div>
        </Group>
      )}
    </div>
  );
}

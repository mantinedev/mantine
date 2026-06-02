import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { generateColorFormats } from '@mantine/colors-generator';
import { Title } from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';
import { ColorsInput } from './ColorsInput/ColorsInput';
import { ColorsList } from './ColorsList/ColorsList';
import { ColorsOutput } from './ColorsOutput/ColorsOutput';
import { ComponentsPreview } from './ComponentsPreview/ComponentsPreview';

export type ColorFormat = 'oklch' | 'hex' | 'rgb' | 'hsl';

export function ColorsGenerator() {
  const router = useRouter();
  const urlColor = `#${router.query.color}`;
  const [color, setColor] = useState('#5474B4');
  const [colorFormat, setColorFormat] = useState<ColorFormat>('oklch');
  const { baseColorIndex, formats } = generateColorFormats(color);
  const [displayColorsInfo, setDisplayColorsInfo] = useLocalStorage({
    key: 'display-colors-info',
    defaultValue: true,
  });

  useEffect(() => {
    if (/^#[0-9A-F]{6}$/i.test(urlColor)) {
      setColor(urlColor);
    }
  }, [router.query.color]);

  const outputColors = formats[colorFormat];

  return (
    <div style={{ maxWidth: 'calc(100vw - var(--mantine-spacing-lg) * 2)' }}>
      <Title fw={500} mb="md" pt="lg" c="bright">
        Mantine colors generator
      </Title>
      <ColorsInput
        value={color}
        onChange={setColor}
        displayColorsInfo={displayColorsInfo}
        setDisplayColorsInfo={setDisplayColorsInfo}
        colorFormat={colorFormat}
        setColorFormat={setColorFormat}
      />
      <ColorsList
        hexColors={formats.hex}
        displayColors={outputColors}
        baseColorIndex={baseColorIndex}
        displayColorsInfo={displayColorsInfo}
      />

      <ComponentsPreview colors={formats.oklch as any} />

      <ColorsOutput colors={outputColors} />
    </div>
  );
}

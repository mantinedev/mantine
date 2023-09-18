import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useLocalStorage } from '@mantine/hooks';
import { generateColorsMap } from '@mantine/colors-generator';
import { MdxTitle } from '@/components/MdxProvider';
import { ColorsList } from './ColorsList/ColorsList';
import { ColorsInput } from './ColorsInput/ColorsInput';
import { ComponentsPreview } from './ComponentsPreview/ComponentsPreview';
import { ColorsOutput } from './ColorsOutput/ColorsOutput';

export function ColorsGenerator() {
  const router = useRouter();
  const urlColor = `#${router.query.color}`;
  const [color, setColor] = useState('#5474B4');
  const { colors, baseColorIndex } = generateColorsMap(color);
  const [displayColorsInfo, setDisplayColorsInfo] = useLocalStorage({
    key: 'display-colors-info',
    defaultValue: true,
  });

  useEffect(() => {
    if (/^#[0-9A-F]{6}$/i.test(urlColor)) {
      setColor(urlColor);
    }
  }, [router.query.color]);

  return (
    <div>
      <MdxTitle order={1}>Mantine colors generator</MdxTitle>
      <ColorsInput
        value={color}
        onChange={setColor}
        displayColorsInfo={displayColorsInfo}
        setDisplayColorsInfo={setDisplayColorsInfo}
      />
      <ColorsList
        colors={colors}
        baseColorIndex={baseColorIndex}
        displayColorsInfo={displayColorsInfo}
      />

      <ComponentsPreview colors={colors.map((c) => c.hex()) as any} />

      <ColorsOutput colors={colors.map((c) => c.hex())} />
    </div>
  );
}

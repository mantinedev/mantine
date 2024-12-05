import { IconHeart, IconHeartBroken } from '@tabler/icons-react';
import { RangeSlider, Slider } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { Slider, RangeSlider } from '@mantine/core';
import { IconHeart, IconHeartBroken } from '@tabler/icons-react';

function Demo() {
  return (
    <>
      <Slider
        thumbChildren={<IconHeart size={16} />}
        color="red"
        label={null}
        defaultValue={40}
        thumbSize={26}
        styles={{ thumb: { borderWidth: 2, padding: 3 } }}
      />

      <RangeSlider
        mt="xl"
        styles={{ thumb: { borderWidth: 2, padding: 3 } }}
        color="red"
        label={null}
        defaultValue={[20, 60]}
        thumbSize={26}
        thumbChildren={[<IconHeart size={16} key="1" />, <IconHeartBroken size={16} key="2" />]}
      />
    </>
  );
}
`;

function Demo() {
  return (
    <>
      <Slider
        thumbChildren={<IconHeart size={16} stroke={1.5} />}
        color="red"
        label={null}
        defaultValue={40}
        thumbSize={26}
        styles={{ thumb: { borderWidth: 2, padding: 3 } }}
      />

      <RangeSlider
        mt="xl"
        styles={{ thumb: { borderWidth: 2, padding: 3 } }}
        color="red"
        label={null}
        defaultValue={[20, 60]}
        thumbSize={26}
        thumbChildren={[
          <IconHeart size={16} stroke={1.5} key="1" />,
          <IconHeartBroken size={16} stroke={1.5} key="2" />,
        ]}
      />
    </>
  );
}

export const thumbChildren: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
  maxWidth: 400,
  centered: true,
};

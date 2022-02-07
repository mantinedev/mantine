import React from 'react';
import { Slider, RangeSlider } from '@mantine/core';
import { Heart, HeartBroken } from 'tabler-icons-react';

const styles = { thumb: { borderWidth: 2, height: 26, width: 26, padding: 3 } };

export function SliderIcon() {
  return (
    <>
      <Slider
        thumbChildren={<Heart size={16} />}
        color="red"
        label={null}
        defaultValue={40}
        styles={styles}
      />

      <RangeSlider
        mt="xl"
        styles={styles}
        color="red"
        label={null}
        defaultValue={[20, 60]}
        thumbChildren={[<Heart size={16} key="1" />, <HeartBroken size={16} key="2" />]}
      />
    </>
  );
}

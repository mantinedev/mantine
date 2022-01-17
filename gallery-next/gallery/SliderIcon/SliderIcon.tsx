import React from 'react';
import { Slider, RangeSlider } from '@mantine/core';
import { HeartFillIcon, HeartIcon } from '@primer/octicons-react';

const styles = { thumb: { borderWidth: 2, height: 26, width: 26, padding: 3 } };

export function SliderIcon() {
  return (
    <>
      <Slider
        thumbChildren={<HeartFillIcon size={12} />}
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
        thumbChildren={[<HeartIcon size={12} key="1" />, <HeartFillIcon size={12} key="2" />]}
      />
    </>
  );
}

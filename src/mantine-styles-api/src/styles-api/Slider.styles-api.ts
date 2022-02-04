import type { SliderStylesNames } from '@mantine/core';

export const Slider: Record<SliderStylesNames, string> = {
  root: 'Root element',
  track: 'Track element, contains all other elements',
  bar: 'Filled part of the track',
  thumb: 'Main control',
  dragging: 'Styles added to thumb while dragging',
  label: 'Label element, displayed above thumb',
  markWrapper: 'Wrapper around mark, contains mark and mark label',
  mark: 'Mark displayed on the track',
  markFilled: 'Styles added to mark when it is located in filled area',
  markLabel: 'Mark label, displayed below track',
};

export const RangeSlider: Record<SliderStylesNames, string> = Slider;

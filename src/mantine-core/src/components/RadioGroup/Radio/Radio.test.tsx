import React from 'react';
import {
  checkAccessibility,
  itRendersChildren,
  itConnectsLabelAndInput,
  itSupportsSystemProps,
} from '@mantine/tests';
import { Radio, RadioProps } from './Radio';

const defaultProps: RadioProps = {
  value: 'test-radio',
  children: 'test-radio-label',
};

describe('@mantine/core/Radio', () => {
  itConnectsLabelAndInput(Radio, defaultProps);
  checkAccessibility([<Radio {...defaultProps} />]);
  itRendersChildren(Radio, defaultProps);
  itSupportsSystemProps({
    component: Radio,
    props: defaultProps,
    displayName: '@mantine/core/Radio',
    refType: HTMLInputElement,
    excludeOthers: true,
  });
});

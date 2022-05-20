import React from 'react';
import {
  checkAccessibility,
  itConnectsLabelAndInput,
  itSupportsSystemProps,
  itSupportsWrapperProps,
} from '@mantine/tests';
import { Radio, RadioProps } from './Radio';

const defaultProps: RadioProps = {
  value: 'test-radio',
  label: 'test-radio-label',
};

describe('@mantine/core/Radio', () => {
  itConnectsLabelAndInput(Radio, defaultProps);
  itSupportsWrapperProps(Radio, defaultProps);
  checkAccessibility([<Radio {...defaultProps} />]);
  itSupportsSystemProps({
    component: Radio,
    props: defaultProps,
    displayName: '@mantine/core/Radio',
    refType: HTMLInputElement,
    othersSelector: 'input',
    providerName: 'Radio',
  });
});

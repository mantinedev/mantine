import React from 'react';
import {
  checkAccessibility,
  itRendersChildren,
  itSupportsSystemProps,
  itSupportsProviderVariant,
} from '@mantine/tests';
import { Spoiler, SpoilerProps } from './Spoiler';

const defaultProps: SpoilerProps = {
  maxHeight: 100,
  showLabel: 'show',
  hideLabel: 'hide',
  children: 'test-children',
};

describe('@mantine/core/Spoiler', () => {
  checkAccessibility([<Spoiler {...defaultProps} />]);
  itRendersChildren(Spoiler, defaultProps);
  itSupportsProviderVariant(Spoiler, defaultProps, 'Spoiler');
  itSupportsSystemProps({
    component: Spoiler,
    props: defaultProps,
    displayName: '@mantine/core/Spoiler',
    refType: HTMLDivElement,
    providerName: 'Spoiler',
  });
});

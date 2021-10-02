import React from 'react';
import { mount } from 'enzyme';
import {
  checkAccessibility,
  itSupportsStyle,
  itRendersChildren,
  itSupportsClassName,
  itSupportsOthers,
  itSupportsStylesApi,
  itSupportsMargins,
} from '@mantine/tests';
import { Spoiler } from './Spoiler';
import { Spoiler as SpoilerStylesApi } from './styles.api';

const defaultProps = { maxHeight: 100, showLabel: 'show', hideLabel: 'hide' };

describe('@mantine/core/Spoiler', () => {
  checkAccessibility([
    mount(
      <Spoiler {...defaultProps}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa ea eum quis officia dolor
        esse inventore ex consequatur magni minima voluptatem, cumque, commodi, voluptatum mollitia
        neque asperiores obcaecati ducimus delectus?
      </Spoiler>
    ),
  ]);

  itSupportsOthers(Spoiler, defaultProps);
  itSupportsMargins(Spoiler, defaultProps);
  itSupportsClassName(Spoiler, defaultProps);
  itRendersChildren(Spoiler, defaultProps);
  itSupportsStyle(Spoiler, defaultProps);
  itSupportsStylesApi(
    Spoiler,
    { ...defaultProps, initialState: true },
    Object.keys(SpoilerStylesApi),
    'spoiler'
  );

  it('has correct displayName', () => {
    expect(Spoiler.displayName).toEqual('@mantine/core/Spoiler');
  });
});

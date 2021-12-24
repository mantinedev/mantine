import React from 'react';
import { render } from '@testing-library/react';
import {
  checkAccessibility,
  itSupportsStyle,
  itRendersChildren,
  itSupportsClassName,
  itSupportsOthers,
  itSupportsMargins,
  itSupportsRef,
  itSupportsSx,
} from '@mantine/tests';
import { Spoiler } from './Spoiler';

const defaultProps = { maxHeight: 100, showLabel: 'show', hideLabel: 'hide' };

describe('@mantine/core/Spoiler', () => {
  checkAccessibility([
    render(
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
  itSupportsSx(Spoiler, defaultProps);
  itSupportsRef(Spoiler, defaultProps, HTMLDivElement);

  it('has correct displayName', () => {
    expect(Spoiler.displayName).toEqual('@mantine/core/Spoiler');
  });
});

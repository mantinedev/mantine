import React from 'react';
import { mount } from 'enzyme';
import {
  checkAccessibility,
  itSupportsStyle,
  itRendersChildren,
  itSupportsClassName,
  itSupportsOthers,
} from '@mantine/tests';
import { Spoiler } from './Spoiler';

describe('@mantine/core/Spoiler', () => {
  checkAccessibility([
    mount(
      <Spoiler maxHeight={100} showLabel="Show" hideLabel="Hide">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa ea eum quis officia dolor
        esse inventore ex consequatur magni minima voluptatem, cumque, commodi, voluptatum mollitia
        neque asperiores obcaecati ducimus delectus?
      </Spoiler>
    ),
  ]);

  itSupportsOthers(Spoiler, { maxHeight: 100, showLabel: 'show', hideLabel: 'hide' });
  itSupportsClassName(Spoiler, { maxHeight: 100, showLabel: 'show', hideLabel: 'hide' });
  itRendersChildren(Spoiler, { maxHeight: 100, showLabel: 'show', hideLabel: 'hide' });
  itSupportsStyle(Spoiler, { maxHeight: 100, showLabel: 'show', hideLabel: 'hide' });

  it('has correct displayName', () => {
    expect(Spoiler.displayName).toEqual('@mantine/core/Spoiler');
  });
});

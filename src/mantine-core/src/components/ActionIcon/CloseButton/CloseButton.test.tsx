import React from 'react';
import { mount, shallow } from 'enzyme';
import {
  checkAccessibility,
  itSupportsClassName,
  itSupportsOthers,
  itSupportsRef,
  itSupportsStyle,
  itIsPolymorphic,
  itSupportsMargins,
} from '@mantine/tests';
import { CloseButton } from './CloseButton';
import { CloseIcon } from './CloseIcon';

describe('@mantine/core/CloseButton', () => {
  checkAccessibility([
    mount(<CloseButton aria-label="test" />),
    mount(<CloseButton title="test" />),
  ]);

  itSupportsClassName(CloseButton, {});
  itSupportsOthers(CloseButton, {});
  itSupportsStyle(CloseButton, {});
  itSupportsMargins(CloseButton, {});
  itSupportsRef(CloseButton, {}, HTMLButtonElement);
  itIsPolymorphic(CloseButton, {}, { dive: 2 });

  it('sets width and height on CloseIcon based on iconSize prop', () => {
    const element = shallow(<CloseButton iconSize={45} />);
    const styles = element.find(CloseIcon).prop('style');
    expect(styles.width).toBe(45);
    expect(styles.height).toBe(45);
  });

  it('has correct displayName', () => {
    expect(CloseButton.displayName).toEqual('@mantine/core/CloseButton');
    expect(CloseIcon.displayName).toEqual('@mantine/core/CloseIcon');
  });
});

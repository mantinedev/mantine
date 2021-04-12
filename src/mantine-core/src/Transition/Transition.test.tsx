import React from 'react';
import { mount } from 'enzyme';
import { getTransitionStyles } from './get-transition-styles/get-transition-styles';
import { Transition } from './Transition';

describe('@mantine/core/Transition', () => {
  it('has correct displayName', () => {
    expect(Transition.displayName).toEqual('@mantine/core/Transition');
  });

  it('calls children function with selected transition', () => {
    const spy = jest.fn();
    mount(
      <Transition mounted transition="skew-up" duration={555} timingFunction="ease">
        {spy}
      </Transition>
    );

    expect(spy).toHaveBeenCalledWith(
      getTransitionStyles({
        transition: 'skew-up',
        duration: 555,
        timingFunction: 'ease',
        state: 'entered',
      })
    );
  });
});

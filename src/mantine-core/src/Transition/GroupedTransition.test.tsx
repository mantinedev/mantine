import React from 'react';
import { mount } from 'enzyme';
import { getTransitionStyles } from './get-transition-styles/get-transition-styles';
import { GroupedTransition } from './GroupedTransition';

describe('@mantine/core/GroupedTransition', () => {
  it('has correct displayName', () => {
    expect(GroupedTransition.displayName).toEqual('@mantine/core/GroupedTransition');
  });

  it('calls children function with selected transition', () => {
    const spy = jest.fn();
    mount(
      <GroupedTransition
        mounted
        transitions={{
          modal: { duration: 55, timingFunction: 'ease', transition: 'fade' },
          overlay: { duration: 525, timingFunction: 'linear', transition: 'slide-right' },
        }}
      >
        {spy}
      </GroupedTransition>
    );

    expect(spy).toHaveBeenCalledWith({
      modal: getTransitionStyles({
        transition: 'fade',
        duration: 55,
        timingFunction: 'ease',
        state: 'entered',
      }),
      overlay: getTransitionStyles({
        transition: 'slide-right',
        duration: 525,
        timingFunction: 'linear',
        state: 'entered',
      }),
    });
  });
});

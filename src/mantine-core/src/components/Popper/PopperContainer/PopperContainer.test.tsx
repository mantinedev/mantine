import React from 'react';
import { mount } from 'enzyme';
import { itRendersChildren, itSupportsClassName } from '@mantine/tests';
import { PopperContainer } from './PopperContainer';

describe('@mantine/core/PopperContainer', () => {
  // Clean up dom as jest does not do this automatically
  afterEach(() => {
    document.getElementsByTagName('body')[0].innerHTML = '';
  });

  itRendersChildren(PopperContainer, { withinPortal: false });
  itSupportsClassName(PopperContainer, { withinPortal: false });

  it('has correct displayName', () => {
    expect(PopperContainer.displayName).toEqual('@mantine/core/PopperContainer');
  });

  it('adds z-index styles from prop', () => {
    const target = document.createElement('div');
    document.body.appendChild(target);

    mount(
      <PopperContainer withinPortal={false} className="test-popper-container" zIndex={1543}>
        test-popper-container
      </PopperContainer>,
      { attachTo: target }
    );

    const container = document.querySelector('.test-popper-container');
    expect(window.getComputedStyle(container).zIndex).toBe('1543');
  });

  it('supports rendering inside its virtual DOM parent', () => {
    const target = document.createElement('div');
    document.body.appendChild(target);

    mount(
      <div className="virtual-dom-parent">
        <PopperContainer withinPortal={false} className="test-in-parent">
          test-in-parent
        </PopperContainer>
      </div>,
      { attachTo: target }
    );

    const container = document.querySelector('.test-in-parent');
    const parent = document.querySelector('.virtual-dom-parent');

    expect(container.parentNode).toEqual(parent);
    expect(parent.childNodes).toHaveLength(1);
  });

  it('supports rendering inside a portal', () => {
    const target = document.createElement('div');
    document.body.appendChild(target);

    mount(
      <div className="virtual-dom-parent">
        <PopperContainer className="test-in-portal" withinPortal>
          test-in-portal
        </PopperContainer>
      </div>,
      { attachTo: target }
    );

    const container = document.querySelector('.test-in-portal');
    const parent = document.querySelector('.virtual-dom-parent');

    expect(container.parentNode).not.toEqual(parent);
    expect(parent.childNodes).toHaveLength(0);
  });
});

import { RefObject } from 'react';
import {
  handleResourcesGridKeyDown,
  ResourcesGridControlsRef,
} from './handle-resources-grid-key-down';

function createGrid(slotCounts: number[]): {
  controlsRef: ResourcesGridControlsRef;
  buttons: HTMLButtonElement[][];
} {
  const buttons = slotCounts.map((count) =>
    Array.from({ length: count }, () => {
      const button = document.createElement('button');
      document.body.appendChild(button);
      return button;
    })
  );

  const controlsRef: ResourcesGridControlsRef = { current: buttons };
  return { controlsRef, buttons };
}

function keyEvent(key: string) {
  const preventDefault = jest.fn();
  return { key, preventDefault } as unknown as React.KeyboardEvent<HTMLButtonElement> & {
    preventDefault: jest.Mock;
  };
}

afterEach(() => {
  document.body.replaceChildren();
});

describe('@mantine/schedule/handle-resources-grid-key-down', () => {
  it('ArrowRight moves focus to the next slot in the same resource', () => {
    const { controlsRef, buttons } = createGrid([3, 3]);
    handleResourcesGridKeyDown({
      controlsRef,
      resourceIndex: 0,
      slotIndex: 0,
      event: keyEvent('ArrowRight'),
    });
    expect(buttons[0][1]).toHaveFocus();
  });

  it('ArrowLeft moves focus to the previous slot in the same resource', () => {
    const { controlsRef, buttons } = createGrid([3, 3]);
    handleResourcesGridKeyDown({
      controlsRef,
      resourceIndex: 0,
      slotIndex: 2,
      event: keyEvent('ArrowLeft'),
    });
    expect(buttons[0][1]).toHaveFocus();
  });

  it('ArrowDown moves focus to the same slot in the next resource', () => {
    const { controlsRef, buttons } = createGrid([3, 3]);
    handleResourcesGridKeyDown({
      controlsRef,
      resourceIndex: 0,
      slotIndex: 2,
      event: keyEvent('ArrowDown'),
    });
    expect(buttons[1][2]).toHaveFocus();
  });

  it('ArrowUp moves focus to the same slot in the previous resource', () => {
    const { controlsRef, buttons } = createGrid([3, 3]);
    handleResourcesGridKeyDown({
      controlsRef,
      resourceIndex: 1,
      slotIndex: 1,
      event: keyEvent('ArrowUp'),
    });
    expect(buttons[0][1]).toHaveFocus();
  });

  it('does not move focus past the last slot (ArrowRight at the right edge)', () => {
    const { controlsRef, buttons } = createGrid([2, 2]);
    buttons[0][1].focus();
    handleResourcesGridKeyDown({
      controlsRef,
      resourceIndex: 0,
      slotIndex: 1,
      event: keyEvent('ArrowRight'),
    });
    expect(buttons[0][1]).toHaveFocus();
  });

  it('does not move focus above the first resource (ArrowUp at the top)', () => {
    const { controlsRef, buttons } = createGrid([2, 2]);
    buttons[0][0].focus();
    handleResourcesGridKeyDown({
      controlsRef,
      resourceIndex: 0,
      slotIndex: 0,
      event: keyEvent('ArrowUp'),
    });
    expect(buttons[0][0]).toHaveFocus();
  });

  it('clamps the slot index when the next resource has fewer slots', () => {
    const { controlsRef, buttons } = createGrid([3, 1]);
    handleResourcesGridKeyDown({
      controlsRef,
      resourceIndex: 0,
      slotIndex: 2,
      event: keyEvent('ArrowDown'),
    });
    expect(buttons[1][0]).toHaveFocus();
  });

  it('skips a disabled control and focuses the next focusable one', () => {
    const { controlsRef, buttons } = createGrid([1, 1, 1]);
    buttons[1][0].disabled = true;
    handleResourcesGridKeyDown({
      controlsRef,
      resourceIndex: 0,
      slotIndex: 0,
      event: keyEvent('ArrowDown'),
    });
    expect(buttons[2][0]).toHaveFocus();
  });

  it('skips a control marked with data-hidden', () => {
    const { controlsRef, buttons } = createGrid([1, 1, 1]);
    buttons[1][0].setAttribute('data-hidden', 'true');
    handleResourcesGridKeyDown({
      controlsRef,
      resourceIndex: 0,
      slotIndex: 0,
      event: keyEvent('ArrowDown'),
    });
    expect(buttons[2][0]).toHaveFocus();
  });

  it('ignores non-arrow keys and does not call preventDefault', () => {
    const { controlsRef, buttons } = createGrid([2, 2]);
    buttons[0][0].focus();
    const event = keyEvent('Enter');
    handleResourcesGridKeyDown({ controlsRef, resourceIndex: 0, slotIndex: 0, event });
    expect(event.preventDefault).not.toHaveBeenCalled();
    expect(buttons[0][0]).toHaveFocus();
  });

  it('returns early when the controls ref is empty', () => {
    const controlsRef: ResourcesGridControlsRef = { current: null } as unknown as RefObject<
      HTMLButtonElement[][]
    >;
    expect(() =>
      handleResourcesGridKeyDown({
        controlsRef,
        resourceIndex: 0,
        slotIndex: 0,
        event: keyEvent('ArrowRight'),
      })
    ).not.toThrow();
  });
});

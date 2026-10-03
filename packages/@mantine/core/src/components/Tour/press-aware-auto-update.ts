import { autoUpdate, type ReferenceType } from '@floating-ui/react';

export function pressAwareAutoUpdate(
  reference: ReferenceType,
  floating: HTMLElement,
  update: () => void
) {
  const target = reference instanceof Element ? reference : null;
  let pressed = false;
  let pending = false;
  let frame = -1;

  const handlePointerDown = () => {
    pressed = true;
  };

  const handlePointerUp = () => {
    if (!pressed) {
      return;
    }

    pressed = false;

    if (pending) {
      pending = false;
      frame = requestAnimationFrame(update);
    }
  };

  target?.addEventListener('pointerdown', handlePointerDown);
  window.addEventListener('pointerup', handlePointerUp, true);
  window.addEventListener('pointercancel', handlePointerUp, true);

  const cleanup = autoUpdate(reference, floating, () => {
    if (pressed) {
      pending = true;
    } else {
      update();
    }
  });

  return () => {
    cleanup();
    cancelAnimationFrame(frame);
    target?.removeEventListener('pointerdown', handlePointerDown);
    window.removeEventListener('pointerup', handlePointerUp, true);
    window.removeEventListener('pointercancel', handlePointerUp, true);
  };
}

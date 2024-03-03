import React, { RefObject, useCallback, useEffect, useRef, useState } from 'react';
import classes from './FloatingIndicator.module.css';

interface FloatingIndicatorProps {
  target: HTMLElement | null | undefined;
  parent: HTMLElement | null | undefined;
}

function useMutationObserver<Element extends HTMLLIElement>(
  callback: MutationCallback,
  options: MutationObserverInit,
  target?: HTMLElement | (() => HTMLElement) | null
) {
  const observer = useRef<MutationObserver>();
  const ref: RefObject<Element> = useRef(null);

  useEffect(() => {
    const targetElement = typeof target === 'function' ? target() : target;

    if (targetElement || ref.current) {
      observer.current = new MutationObserver(callback);
      observer.current.observe(targetElement || ref.current!, options);
    }

    return () => {
      observer.current?.disconnect();
    };
  }, [callback, options]);
}

export function FloatingIndicator({ target, parent }: FloatingIndicatorProps) {
  const calculate = useCallback(() => {
    if (!target || !parent) {
      return { top: 0, left: 0, width: 0, height: 0 };
    }

    const targetRect = target.getBoundingClientRect();
    const parentRect = parent.getBoundingClientRect();

    return {
      top: targetRect.top - parentRect.top,
      left: targetRect.left - parentRect.left,
      width: targetRect.width,
      height: targetRect.height,
    };
  }, [target, parent]);

  const [position, setPosition] = useState(calculate());
  const updatePosition = useCallback(() => setPosition(calculate()), [calculate]);

  useEffect(() => {
    updatePosition();
  }, [parent, target]);

  useMutationObserver(
    (mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'dir') {
          updatePosition();
        }
      });
    },
    { attributes: true, attributeFilter: ['dir'] },
    () => document.documentElement
  );

  if (!target || !parent) {
    return null;
  }

  return (
    <div
      className={classes.root}
      style={{
        transform: `translateY(${position.top}px) translateX(${position.left}px)`,
        width: position.width,
        height: position.height,
      }}
    >
      Indicator
    </div>
  );
}

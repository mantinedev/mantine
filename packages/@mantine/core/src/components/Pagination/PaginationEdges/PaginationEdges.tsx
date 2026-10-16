import { useRef } from 'react';
import { useIsomorphicEffect, useMergedRef } from '@mantine/hooks';
import { BoxProps, polymorphic, useProps } from '../../../core';
import { usePaginationContext } from '../Pagination.context';
import {
  PaginationFirstIcon,
  PaginationIconProps,
  PaginationLastIcon,
  PaginationNextIcon,
  PaginationPreviousIcon,
} from '../Pagination.icons';
import { PaginationControl } from '../PaginationControl/PaginationControl';

export interface CreateEdgeComponent {
  icon: React.FC<PaginationIconProps>;
  name: string;
  action: 'onNext' | 'onPrevious' | 'onFirst' | 'onLast';
  type: 'next' | 'previous';
}

export interface PaginationEdgeProps extends BoxProps {
  /** An icon component to replace the default icon */
  icon?: React.FC<PaginationIconProps>;
}

function getActiveElement(node: HTMLElement) {
  return (node.getRootNode() as Document | ShadowRoot).activeElement;
}

function isFocusLost(node: HTMLElement) {
  const activeElement = getActiveElement(node);
  return !activeElement || activeElement === node.ownerDocument.body;
}

function focusClosestControl(root: HTMLElement, type: 'next' | 'previous') {
  const controls = Array.from(root.querySelectorAll<HTMLElement>('button:not(:disabled)'));
  const candidates = [
    root.querySelector<HTMLElement>('[data-active]:not(:disabled)'),
    ...(type === 'next' ? controls.reverse() : controls),
  ];

  for (const candidate of candidates) {
    candidate?.focus();
    if (candidate && getActiveElement(root) === candidate) {
      return;
    }
  }
}

export function createEdgeComponent({ icon, name, action, type }: CreateEdgeComponent) {
  const defaultProps = { icon } satisfies Partial<PaginationEdgeProps>;

  const Component = (props: PaginationEdgeProps & { ref?: React.Ref<HTMLButtonElement> }) => {
    const { icon: Icon, ref, ...others } = useProps(name, defaultProps, props);
    const ctx = usePaginationContext();
    const disabled = type === 'next' ? ctx.active === ctx.total : ctx.active === ctx.startValue;
    const controlRef = useRef<HTMLButtonElement>(null);
    const mergedRef = useMergedRef(ref, controlRef);
    const focusedOnClick = useRef(false);
    const wasDisabled = useRef(disabled);

    useIsomorphicEffect(() => {
      const control = controlRef.current;
      const root = ctx.rootRef.current;
      const becameDisabled = disabled && !wasDisabled.current;
      const wasFocused = focusedOnClick.current;
      wasDisabled.current = disabled;
      focusedOnClick.current = false;

      if (
        becameDisabled &&
        control &&
        root &&
        ((wasFocused && isFocusLost(control)) || getActiveElement(control) === control)
      ) {
        focusClosestControl(root, type);
      }
    });

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      focusedOnClick.current = getActiveElement(event.currentTarget) === event.currentTarget;
      ctx[action]();
    };

    return (
      <PaginationControl
        ref={mergedRef}
        disabled={ctx.disabled || disabled}
        onClick={handleClick}
        withPadding={false}
        {...others}
      >
        <Icon
          className="mantine-rotate-rtl"
          style={{
            width: 'calc(var(--pagination-control-size) / 1.8)',
            height: 'calc(var(--pagination-control-size) / 1.8)',
          }}
        />
      </PaginationControl>
    );
  };

  Component.displayName = `@mantine/core/${name}`;
  return polymorphic<'button', PaginationEdgeProps>(Component);
}

export const PaginationNext = createEdgeComponent({
  icon: PaginationNextIcon,
  name: 'PaginationNext',
  action: 'onNext',
  type: 'next',
});

export const PaginationPrevious = createEdgeComponent({
  icon: PaginationPreviousIcon,
  name: 'PaginationPrevious',
  action: 'onPrevious',
  type: 'previous',
});

export const PaginationFirst = createEdgeComponent({
  icon: PaginationFirstIcon,
  name: 'PaginationFirst',
  action: 'onFirst',
  type: 'previous',
});

export const PaginationLast = createEdgeComponent({
  icon: PaginationLastIcon,
  name: 'PaginationLast',
  action: 'onLast',
  type: 'next',
});

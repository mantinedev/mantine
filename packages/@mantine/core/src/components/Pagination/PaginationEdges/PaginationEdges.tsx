import { forwardRef } from 'react';
import { BoxProps, createPolymorphicComponent, useProps } from '../../../core';
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

export function createEdgeComponent({ icon, name, action, type }: CreateEdgeComponent) {
  const defaultProps: Partial<PaginationEdgeProps> = { icon };

  const Component = forwardRef<HTMLButtonElement, PaginationEdgeProps>((props, ref) => {
    const { icon: _icon, ...others } = useProps(name, defaultProps, props);
    const Icon = _icon!;
    const ctx = usePaginationContext();
    const disabled = type === 'next' ? ctx.active === ctx.total : ctx.active === 1;

    return (
      <PaginationControl
        disabled={ctx.disabled || disabled}
        ref={ref}
        onClick={ctx[action]}
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
  });

  Component.displayName = `@mantine/core/${name}`;
  return createPolymorphicComponent<'button', PaginationEdgeProps>(Component);
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

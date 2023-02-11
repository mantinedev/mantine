import React, { forwardRef } from 'react';
import { useComponentDefaultProps, MantineNumberSize, DefaultProps } from '@mantine/styles';
import { createPolymorphicComponent } from '@mantine/utils';
import { usePaginationContext } from '../Pagination.context';
import {
  PaginationNextIcon,
  PaginationPreviousIcon,
  PaginationFirstIcon,
  PaginationLastIcon,
  PaginationIconProps,
  getIconSize,
} from '../Pagination.icons';
import { PaginationControl } from '../PaginationControl/PaginationControl';

export interface CreateEdgeComponent {
  icon: React.FC<PaginationIconProps>;
  name: string;
  action: 'onNext' | 'onPrevious' | 'onFirst' | 'onLast';
}

export interface PaginationEdgeProps extends DefaultProps {
  size?: MantineNumberSize;
  icon?: React.FC<PaginationIconProps>;
}

export function createEdgeComponent({ icon, name, action }: CreateEdgeComponent) {
  const defaultProps: Partial<PaginationEdgeProps> = {
    icon,
    size: 'md',
  };

  const Component = forwardRef<HTMLButtonElement, PaginationEdgeProps>((props, ref) => {
    const { size, icon: Icon, ...others } = useComponentDefaultProps(name, defaultProps, props);
    const ctx = usePaginationContext();
    return (
      <PaginationControl
        {...others}
        size={size}
        ref={ref}
        onClick={ctx[action]}
        withPadding={false}
      >
        <Icon size={getIconSize(size)} />
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
});

export const PaginationPrevious = createEdgeComponent({
  icon: PaginationPreviousIcon,
  name: 'PaginationPrevious',
  action: 'onPrevious',
});

export const PaginationFirst = createEdgeComponent({
  icon: PaginationFirstIcon,
  name: 'PaginationFirst',
  action: 'onFirst',
});

export const PaginationLast = createEdgeComponent({
  icon: PaginationLastIcon,
  name: 'PaginationLast',
  action: 'onLast',
});

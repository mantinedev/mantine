import React, { forwardRef } from 'react';
import {
  useComponentDefaultProps,
  getSize,
  MantineNumberSize,
  DefaultProps,
} from '@mantine/styles';
import { packSx, createPolymorphicComponent } from '@mantine/utils';
import { usePaginationContext } from '../Pagination.context';
import { sizes } from '../PaginationControl/PaginationControl.styles';
import {
  PaginationNextIcon,
  PaginationPreviousIcon,
  PaginationFirstIcon,
  PaginationLastIcon,
  PaginationIconProps,
} from '../Pagination.icons';
import { PaginationControl } from '../PaginationControl/PaginationControl';

export interface CreateEdgeComponent {
  icon: React.FC<PaginationIconProps>;
  name: string;
  action: 'onNext' | 'onPrevious' | 'onFirst' | 'onLast';
}

export interface PaginationEdgeProps extends DefaultProps {
  size?: MantineNumberSize;
  icon?: PaginationIconProps;
}

export function createEdgeComponent({ icon: Icon, name, action }: CreateEdgeComponent) {
  const Component = forwardRef<HTMLButtonElement, PaginationEdgeProps>((props, ref) => {
    const { size, sx, ...others } = useComponentDefaultProps(name, {}, props);
    const ctx = usePaginationContext();
    return (
      <PaginationControl
        {...others}
        size={size}
        ref={ref}
        onClick={ctx[action]}
        sx={[{ padding: 0 }, ...packSx(sx)]}
      >
        <Icon size={`calc(${getSize({ size, sizes })} / 2)`} />
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

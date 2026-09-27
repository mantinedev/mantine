import { PopoverProps } from '@mantine/core';

type PopoverMiddlewares = NonNullable<PopoverProps['middlewares']>;

export function getDatesPopoverMiddlewares(
  middlewares: PopoverProps['middlewares']
): PopoverMiddlewares {
  const userSize = middlewares?.size;

  if (userSize === false) {
    return { ...middlewares };
  }

  const userSizeOptions = typeof userSize === 'object' ? userSize : {};

  return {
    ...middlewares,
    size: {
      padding: 8,
      ...userSizeOptions,
      apply: (state) => {
        state.elements.floating.style.setProperty(
          '--dates-dropdown-max-height',
          `${state.availableHeight}px`
        );

        if (userSizeOptions.apply) {
          userSizeOptions.apply(state);
        } else if (userSize) {
          Object.assign(state.elements.floating.style, {
            maxWidth: `${state.availableWidth}px`,
            maxHeight: `${state.availableHeight}px`,
          });
        }
      },
    },
  };
}

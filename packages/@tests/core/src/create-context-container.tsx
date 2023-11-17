import React, { forwardRef } from 'react';

export function createContextContainer<T>(
  Component: React.FC<T>,
  Provider: React.FC<any>,
  providerProps?: Record<string, any>
) {
  const Container = forwardRef((props: T, ref) => (
    <Provider {...providerProps}>
      <Component {...props} ref={ref} />
    </Provider>
  ));

  Container.displayName = Component.displayName;
  (Container as any).extend = (Component as any).extend;
  (Container as any).classes = (Component as any).classes;
  return Container;
}

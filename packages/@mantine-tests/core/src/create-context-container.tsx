export function createContextContainer<T>(
  Component: React.FC<T>,
  Provider: React.FC<any>,
  providerProps?: Record<string, any>
) {
  const Container = (props: React.PropsWithoutRef<T>) => (
    <Provider {...providerProps}>
      <Component {...(props as any)} />
    </Provider>
  );

  Container.displayName = Component.displayName;
  (Container as any).extend = (Component as any).extend;
  (Container as any).classes = (Component as any).classes;
  (Container as any).withProps = (Component as any).withProps;
  return Container;
}

interface GetComponentNameInput {
  component: string;
  componentPrefix: string | undefined;
}

export function getComponentName({ component, componentPrefix }: GetComponentNameInput) {
  return componentPrefix
    ? componentPrefix === component
      ? component
      : `${componentPrefix}.${component.replace(componentPrefix, '')}`
    : component;
}

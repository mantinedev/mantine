const specialPrefixes = [{ prefix: 'MenuSub', replace: 'Menu.Sub.' }];

interface GetComponentNameInput {
  component: string;
  componentPrefix: string | undefined;
}

export function getComponentName({ component, componentPrefix }: GetComponentNameInput) {
  if (specialPrefixes.some((p) => component.startsWith(p.prefix) && component !== p.prefix)) {
    return component.replace(
      specialPrefixes.find((p) => component.startsWith(p.prefix))!.prefix,
      specialPrefixes.find((p) => component.startsWith(p.prefix))!.replace
    );
  }

  return componentPrefix
    ? componentPrefix === component
      ? component
      : `${componentPrefix}.${component.replace(componentPrefix, '')}`
    : component;
}

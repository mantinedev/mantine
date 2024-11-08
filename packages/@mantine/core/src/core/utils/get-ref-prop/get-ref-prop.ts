export function getRefProp(element: any) {
  return (element as any)?.props?.ref || (element as any)?.ref;
}

export function getDataPath(formName: string | undefined, fieldPath: PropertyKey) {
  return formName ? `${formName}-${fieldPath.toString()}` : fieldPath.toString();
}

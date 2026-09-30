export function getPersonaName(value: string | undefined) {
  return typeof value === 'string' && value.trim() !== '' ? value : undefined;
}

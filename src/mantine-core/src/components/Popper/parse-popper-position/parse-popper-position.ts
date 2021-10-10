export function parsePopperPosition(position: string) {
  if (typeof position !== 'string') {
    return { position: 'top', placement: 'center' };
  }

  const splitted = position.split('-');

  if (splitted.length === 1) {
    return { position, placement: 'center' };
  }

  return { position: splitted[0], placement: splitted[1] };
}

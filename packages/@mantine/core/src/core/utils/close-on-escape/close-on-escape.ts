import { noop } from '../noop/noop';

interface Options {
  active: boolean | undefined;
  onTrigger?: () => void;
  onKeyDown?: (event: React.KeyboardEvent<any>) => void;
}

export function closeOnEscape(
  callback?: (event: any) => void,
  options: Options = { active: true }
) {
  if (typeof callback !== 'function' || !options.active) {
    return options.onKeyDown || noop;
  }

  return (event: React.KeyboardEvent<any>) => {
    if (event.key === 'Escape') {
      callback(event);
      options.onTrigger?.();
    }
  };
}

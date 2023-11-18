import type { ConfiguratorControlOptions } from './ConfiguratorDemo';

type Values = Record<string, any>;

export function clearProps(controls: ConfiguratorControlOptions[], state: Values) {
  const normalizedControls = controls.reduce<Values>((acc, control) => {
    acc[control.prop] = control.libraryValue;
    return acc;
  }, {});

  return Object.keys(state).reduce<Values>((acc, key) => {
    if (state[key] !== normalizedControls[key]) {
      acc[key] = state[key];
    }
    return acc;
  }, {});
}

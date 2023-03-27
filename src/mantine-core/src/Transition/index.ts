import { transitions } from './transitions';

export { Transition } from './Transition';
export type { TransitionProps, TransitionOverride } from './Transition';
export type { MantineTransition } from './transitions';

export const AVAILABLE_TRANSITIONS = Object.keys(transitions) as Array<keyof typeof transitions>;

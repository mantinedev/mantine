import { transitions } from './transitions';

export { Transition } from './Transition';
export { GroupedTransition } from './GroupedTransition';

export type { TransitionProps } from './Transition';
export type { GroupedTransitionProps } from './GroupedTransition';
export type { MantineTransition } from './transitions';

export const AVAILABLE_TRANSITIONS = Object.keys(transitions) as Array<keyof typeof transitions>;

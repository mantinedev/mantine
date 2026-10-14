import {
  useCollapseTransition,
  type UseCollapseInput,
  type UseCollapseReturnValue,
  type UseCollapseState,
} from './use-collapse-transition';

export type { UseCollapseInput, UseCollapseReturnValue, UseCollapseState };

export function useCollapse(input: UseCollapseInput): UseCollapseReturnValue {
  return useCollapseTransition(input, 'height');
}

export namespace useCollapse {
  export type Input = UseCollapseInput;
  export type ReturnValue = UseCollapseReturnValue;
  export type State = UseCollapseState;
}

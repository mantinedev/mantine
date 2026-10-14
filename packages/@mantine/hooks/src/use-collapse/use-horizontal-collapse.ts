import {
  useCollapseTransition,
  type UseCollapseInput,
  type UseCollapseReturnValue,
  type UseCollapseState,
} from './use-collapse-transition';

export type UseHorizontalCollapseInput = UseCollapseInput;
export type UseHorizontalCollapseReturnValue = UseCollapseReturnValue;
export type UseHorizontalCollapseState = UseCollapseState;

export function useHorizontalCollapse(
  input: UseHorizontalCollapseInput
): UseHorizontalCollapseReturnValue {
  return useCollapseTransition(input, 'width');
}

export namespace useHorizontalCollapse {
  export type Input = UseHorizontalCollapseInput;
  export type ReturnValue = UseHorizontalCollapseReturnValue;
  export type State = UseHorizontalCollapseState;
}

import { act, renderHook } from '@testing-library/react';

interface Options<Controller> {
  /** Hook that creates the controller */
  hook: () => Controller;

  /** Names of the actions and queries that must keep the same reference for the hook lifetime */
  actions: (keyof Controller)[];

  /** Puts the controller in the state required by `changeState`, called before any assertion */
  setup?: (controller: Controller) => void;

  /** Changes the controller state. Omit for a controller with no state that can be changed from a test */
  changeState?: (controller: Controller) => void;
}

export function itSupportsControllerMemoization<Controller extends Record<string, any>>(
  options: Options<Controller>,
  name = 'supports controller memoization'
) {
  describe(name, () => {
    it('returns the same controller until the state changes', () => {
      const hook = renderHook(options.hook);
      options.setup && act(() => options.setup!(hook.result.current));

      const initial = hook.result.current;
      hook.rerender();
      expect(hook.result.current).toBe(initial);

      if (options.changeState) {
        act(() => options.changeState!(hook.result.current));
        expect(hook.result.current).not.toBe(initial);
      }
    });

    it('keeps actions stable when the state changes', () => {
      const hook = renderHook(options.hook);
      options.setup && act(() => options.setup!(hook.result.current));

      const initial = options.actions.map((action) => hook.result.current[action]);
      options.changeState && act(() => options.changeState!(hook.result.current));

      options.actions.forEach((action, index) => {
        expect(hook.result.current[action]).toBe(initial[index]);
      });
    });
  });
}

/**
 * Resolves the controller a component should use: the one passed with the `controller` prop
 * if it is set, otherwise a controller created from the component's own state props.
 *
 * The controller hook is always called, so passing or removing the `controller` prop
 * at runtime does not change the number of hooks the component calls.
 *
 * @param useControllerHook - `use<Component>` hook that creates the controller
 * @param controller - Value of the component's `controller` prop
 * @param options - Options used to create the controller when the `controller` prop is not set
 */
export function useController<Controller, Options>(
  useControllerHook: (options: Options) => Controller,
  controller: Controller | undefined,
  options: Options
): Controller {
  const selfController = useControllerHook(options);
  return controller ?? selfController;
}

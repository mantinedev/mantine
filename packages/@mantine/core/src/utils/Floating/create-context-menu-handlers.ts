import { createEventHandler } from '../../core/utils/create-event-handler/create-event-handler';

interface CreateContextMenuHandlersOptions {
  /** Props of the child element that opens the dropdown */
  childProps: Record<string, any>;

  /** If set, right-click trigger is disabled and the browser's default context menu is shown */
  disabled: boolean | undefined;

  /** Current opened state, used to set `data-expanded` on the child */
  opened: boolean;

  /** Sets the floating reference to a virtual element positioned at the cursor */
  setReference: (node: object) => void;

  /** Called to open the dropdown after the reference has been set */
  open: () => void;
}

export function createContextMenuHandlers({
  childProps,
  disabled,
  opened,
  setReference,
  open,
}: CreateContextMenuHandlersOptions) {
  const onMouseDown = createEventHandler<any>(
    childProps.onMouseDown,
    (event: React.MouseEvent<HTMLElement>) => {
      if (disabled) {
        return;
      }
      if (event.button === 2) {
        event.stopPropagation();
      }
    }
  );

  const onContextMenu = createEventHandler<any>(
    childProps.onContextMenu,
    (event: React.MouseEvent<HTMLElement>) => {
      if (disabled || event.defaultPrevented) {
        return;
      }

      event.preventDefault();
      const { clientX, clientY } = event;
      const contextElement = event.currentTarget;

      setReference({
        getBoundingClientRect: () => ({
          x: clientX,
          y: clientY,
          width: 0,
          height: 0,
          top: clientY,
          left: clientX,
          right: clientX,
          bottom: clientY,
          toJSON: () => undefined,
        }),
        contextElement,
      });

      open();
    }
  );

  return {
    onContextMenu,
    onMouseDown,
    'data-expanded': opened ? true : undefined,
  };
}

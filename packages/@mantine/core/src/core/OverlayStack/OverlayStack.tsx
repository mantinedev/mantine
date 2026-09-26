import { use, useId } from 'react';
import {
  DrawerStackContext,
  ModalStackContext,
  OverlayStackContextType,
} from './OverlayStack.context';
import {
  OverlayStackKind,
  useOverlayRegistry,
  useOverlayStackValue,
  useScopedOverlayStackValue,
} from './use-overlay-registry';

export const DEFAULT_OVERLAY_STACK_MAX_DEPTH = 5;

export interface OverlayStackOptions {
  /** Maximum number of stacked items that remain visible behind the top one, others are hidden @default 5 */
  maxDepth?: number;

  /** If set, stacked items are offset and scaled to reveal the items behind the top one @default true */
  withStackTransform?: boolean;
}

export interface OverlayStackProviderProps extends OverlayStackOptions {
  /** Context that receives the stack state, `ModalStackContext` or `DrawerStackContext` */
  context: OverlayStackContextType;

  /** Kind of overlays managed by the stack */
  kind: OverlayStackKind;

  children: React.ReactNode;
}

export function OverlayStackProvider({
  context: Context,
  kind,
  maxDepth = DEFAULT_OVERLAY_STACK_MAX_DEPTH,
  withStackTransform = true,
  children,
}: OverlayStackProviderProps) {
  const parent = use(Context);
  const scope = useId();
  const registry = useOverlayRegistry();
  const value = useOverlayStackValue(registry, kind, {
    maxDepth,
    withStackTransform,
    shared: false,
  });
  const scopedValue = useScopedOverlayStackValue(parent?.shared ? parent : null, scope);

  return <Context value={scopedValue || value}>{children}</Context>;
}

export interface SharedOverlayStacksProps extends OverlayStackOptions {
  /** If set, `ModalStackContext` is provided */
  withModalStack: boolean;

  /** If set, `DrawerStackContext` is provided */
  withDrawerStack: boolean;

  children: React.ReactNode;
}

export function SharedOverlayStacks({
  withModalStack,
  withDrawerStack,
  maxDepth = DEFAULT_OVERLAY_STACK_MAX_DEPTH,
  withStackTransform = true,
  children,
}: SharedOverlayStacksProps) {
  const registry = useOverlayRegistry();
  const options = { maxDepth, withStackTransform, shared: true };
  const modalValue = useOverlayStackValue(registry, 'modal', options);
  const drawerValue = useOverlayStackValue(registry, 'drawer', options);

  let content = children;

  if (withDrawerStack) {
    content = <DrawerStackContext value={drawerValue}>{content}</DrawerStackContext>;
  }

  if (withModalStack) {
    content = <ModalStackContext value={modalValue}>{content}</ModalStackContext>;
  }

  return <>{content}</>;
}

import { useRef } from 'react';
import cx from 'clsx';
import { useMergedRef } from '@mantine/hooks';
import { CompoundStylesApiProps, factory, Factory, useDirection, useProps } from '../../core';
import { FocusTrap } from '../FocusTrap';
import { ModalBaseContentProps, useModalBaseContext } from '../ModalBase';
import { getStackTransform } from '../OverlayStack/get-stack-transform';
import { Paper } from '../Paper';
import { Transition } from '../Transition';
import { useDrawerContext } from './Drawer.context';
import { resolvePosition, useDrawerDrag } from './use-drawer-drag';
import { getDrawerInnerStyle } from './use-drawer-transform';
import baseClasses from '../ModalBase/ModalBase.module.css';
import classes from './Drawer.module.css';

export type DrawerContentStylesNames = 'content' | 'inner' | 'panel' | 'handle';

export interface DrawerContentProps
  extends ModalBaseContentProps, CompoundStylesApiProps<DrawerContentFactory> {
  __depth?: number;
  __visible?: boolean;
  __dragProgress?: number;
  __onDragProgress?: (progress: number) => void;
  __active?: boolean;
  __instant?: boolean;
}

export type DrawerContentFactory = Factory<{
  props: DrawerContentProps;
  ref: HTMLDivElement;
  stylesNames: DrawerContentStylesNames;
  compound: true;
}>;

export const DrawerContent = factory<DrawerContentFactory>((_props) => {
  const props = useProps('DrawerContent', null, _props);
  const {
    classNames,
    className,
    style,
    styles,
    vars,
    children,
    radius,
    __depth,
    __visible,
    __dragProgress,
    __onDragProgress,
    __active,
    __instant,
    ref,
    transitionProps,
    ...others
  } = props;

  const ctx = useDrawerContext();
  const baseCtx = useModalBaseContext();
  const { dir } = useDirection();
  const Scroll: React.FC<any> = ctx.scrollAreaComponent || NativeScrollArea;

  const scrollRef = useRef<HTMLDivElement>(null);
  const contentRef = useMergedRef(ref, scrollRef);

  const position = ctx.position || 'left';
  const resolvedPosition = resolvePosition(position, dir);
  const active = __active !== undefined ? __active : baseCtx.opened;
  const stackPointerEvents: React.CSSProperties =
    __active === false ? { pointerEvents: 'none' } : {};

  const drag = useDrawerDrag({
    position,
    dir,
    enabled: !!(ctx.withSwipe && active),
    onClose: baseCtx.onClose,
    scrollRef,
    threshold: ctx.swipeThreshold,
    onProgress: __onDragProgress,
    snapPoints: ctx.snapPoints,
    activeSnapPoint: ctx.activeSnapPoint,
    defaultActiveSnapPoint: ctx.defaultActiveSnapPoint,
    onSnapPointChange: ctx.onSnapPointChange,
  });

  const stackTransform =
    __depth !== undefined
      ? getStackTransform({
          kind: 'drawer',
          position: resolvedPosition,
          depth: __depth,
          dragProgress: __dragProgress,
        })
      : null;

  const dragStyle = getDrawerInnerStyle({
    position: resolvedPosition,
    dragging: drag.dragging,
    dragOffset: drag.offset,
    baseTransform: stackTransform?.transform,
    baseOpacity: stackTransform?.opacity,
  });

  const rootProps = drag.getRootProps();
  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    others.onPointerDown?.(event);
    rootProps.onPointerDown(event);
  };

  const contentStyles = ctx.getStyles('content', { className, style, styles, classNames });
  const innerStyles = ctx.getStyles('inner', { className, style, styles, classNames });
  const panelStyles = ctx.getStyles('panel', { classNames, styles });
  const handleStyles = ctx.getStyles('handle', { classNames, styles });
  const contentProps = baseCtx.getContentProps();
  const showHandle = !!(ctx.withHandle && active);

  return (
    <Transition
      mounted={baseCtx.opened}
      transition="pop"
      {...baseCtx.transitionProps}
      onExited={() => {
        baseCtx.onExitTransitionEnd?.();
        baseCtx.transitionProps?.onExited?.();
      }}
      onEntered={() => {
        baseCtx.onEnterTransitionEnd?.();
        baseCtx.transitionProps?.onEntered?.();
      }}
      {...transitionProps}
      {...(__instant ? { exitDuration: 0 } : null)}
    >
      {(transitionStyles) => (
        <div
          {...innerStyles}
          data-stack-hidden={__visible === false || undefined}
          style={{
            ...innerStyles.style,
            ...(dragStyle.transform !== undefined && { transform: dragStyle.transform }),
            ...(dragStyle.opacity !== undefined && { opacity: dragStyle.opacity }),
            ...(dragStyle.transition !== undefined && { transition: dragStyle.transition }),
            ...(__visible === false && { display: 'none' }),
          }}
          className={cx({ [baseClasses.inner]: !baseCtx.unstyled }, innerStyles.className)}
        >
          <div
            {...panelStyles}
            className={cx(classes.panel, panelStyles.className)}
            style={{ ...panelStyles.style, ...transitionStyles }}
          >
            {showHandle && (
              <div
                {...handleStyles}
                className={cx(classes.handle, handleStyles.className)}
                data-position={resolvedPosition}
                data-snap-points={(ctx.snapPoints?.length ?? 0) > 0 || undefined}
                onPointerDown={drag.getHandleProps().onPointerDown}
              />
            )}
            <FocusTrap active={baseCtx.focusTrapActive} innerRef={contentRef}>
              <Paper
                {...contentStyles}
                {...others}
                component="section"
                {...contentProps}
                radius={radius || ctx.radius || 0}
                style={[contentStyles.style, stackPointerEvents]}
                className={cx(
                  { [baseClasses.content]: !baseCtx.unstyled },
                  contentStyles.className
                )}
                unstyled={baseCtx.unstyled}
                onPointerDown={handlePointerDown}
              >
                <Scroll style={{ height: 'calc(100vh - var(--drawer-offset) * 2)' }}>
                  {children}
                </Scroll>
              </Paper>
            </FocusTrap>
          </div>
        </div>
      )}
    </Transition>
  );
});

DrawerContent.classes = classes;
DrawerContent.displayName = '@mantine/core/DrawerContent';

function NativeScrollArea({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

import { useEffect, useRef, useState } from 'react';
import cx from 'clsx';
import { useMergedRef } from '@mantine/hooks';
import { CompoundStylesApiProps, factory, Factory, useDirection, useProps } from '../../core';
import { OverlayStackEntryContentProps } from '../../core/OverlayStack';
import { FocusTrap } from '../FocusTrap';
import { ModalBaseContentProps, useModalBaseContext } from '../ModalBase';
import { Paper } from '../Paper';
import { Transition } from '../Transition';
import { useDrawerContext } from './Drawer.context';
import { getDrawerStackStyle } from './get-drawer-stack-style';
import { useDrawerDrag } from './use-drawer-drag';
import { getDrawerInnerStyle, resolvePosition } from './use-drawer-transform';
import baseClasses from '../ModalBase/ModalBase.module.css';
import classes from './Drawer.module.css';

export type DrawerContentStylesNames = 'content' | 'inner' | 'panel' | 'handle';

export interface DrawerContentProps
  extends
    ModalBaseContentProps,
    OverlayStackEntryContentProps,
    CompoundStylesApiProps<DrawerContentFactory> {
  __onDragProgress?: (progress: number) => void;
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
    __stackActive,
    __instant,
    __topRect,
    __reportTopRect,
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
  const isHorizontal = resolvedPosition === 'left' || resolvedPosition === 'right';
  const active = __stackActive !== undefined ? __stackActive : baseCtx.opened;
  const withStackTransform = __depth !== undefined;
  const behind = withStackTransform && __depth > 0;

  const drag = useDrawerDrag({
    position,
    dir,
    enabled: !!(ctx.withSwipe && active),
    opened: baseCtx.opened,
    onClose: baseCtx.onClose,
    scrollRef,
    threshold: ctx.swipeThreshold,
    onProgress: __onDragProgress,
    snapPoints: ctx.snapPoints,
    activeSnapPoint: ctx.activeSnapPoint,
    defaultActiveSnapPoint: ctx.defaultActiveSnapPoint,
    onSnapPointChange: ctx.onSnapPointChange,
  });

  const [panelElement, setPanelElement] = useState<HTMLDivElement | null>(null);
  const [panelSize, setPanelSize] = useState<{ width: number; height: number } | null>(null);

  useEffect(() => {
    if (!withStackTransform || !panelElement) {
      return undefined;
    }

    const measure = () => {
      const size = { width: panelElement.offsetWidth, height: panelElement.offsetHeight };

      if (__depth === 0) {
        __reportTopRect?.(size);
      }

      setPanelSize((current) =>
        current && current.width === size.width && current.height === size.height ? current : size
      );
    };

    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(panelElement);

    return () => observer.disconnect();
  }, [withStackTransform, __depth, __reportTopRect, panelElement]);

  const stackStyle = withStackTransform
    ? getDrawerStackStyle({
        position: resolvedPosition,
        depth: __depth,
        dragProgress: __dragProgress,
        topSize: __topRect ? (isHorizontal ? __topRect.width : __topRect.height) : null,
        ownSize: panelSize ? (isHorizontal ? panelSize.width : panelSize.height) : null,
      })
    : null;

  const dragStyle = getDrawerInnerStyle({
    position: resolvedPosition,
    dragging: drag.dragging,
    dragOffset: drag.offset,
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

  const gestureActive = drag.dragging || (__dragProgress ?? 0) > 0;

  const stackContentStyle: React.CSSProperties = {
    ...(__stackActive === false && { pointerEvents: 'none' }),
    ...(behind && { overflow: 'hidden' }),
  };

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
      {(transitionStyles) => {
        const stackTransition: React.CSSProperties =
          !stackStyle || gestureActive
            ? {}
            : transitionStyles.transitionProperty
              ? { transitionProperty: `${transitionStyles.transitionProperty}, translate, scale` }
              : {
                  transitionProperty: 'translate, scale',
                  transitionDuration: '200ms',
                  transitionTimingFunction: 'ease',
                };

        return (
          <div
            {...innerStyles}
            data-stack-hidden={__visible === false || undefined}
            style={{
              ...innerStyles.style,
              ...(dragStyle.transform !== undefined && { transform: dragStyle.transform }),
              ...(dragStyle.transition !== undefined && { transition: dragStyle.transition }),
              ...(__visible === false && { display: 'none' }),
            }}
            className={cx({ [baseClasses.inner]: !baseCtx.unstyled }, innerStyles.className)}
          >
            <div
              ref={setPanelElement}
              {...panelStyles}
              className={cx(classes.panel, panelStyles.className)}
              style={{
                ...panelStyles.style,
                ...transitionStyles,
                ...(stackStyle && {
                  translate: stackStyle.translate,
                  scale: String(stackStyle.scale),
                  transformOrigin: stackStyle.transformOrigin,
                }),
                ...stackTransition,
              }}
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
                  data-stacked={withStackTransform || undefined}
                  {...others}
                  component="section"
                  {...contentProps}
                  aria-labelledby={others['aria-labelledby'] ?? contentProps['aria-labelledby']}
                  aria-describedby={others['aria-describedby'] ?? contentProps['aria-describedby']}
                  inert={__stackActive === false || undefined}
                  radius={radius || ctx.radius || 0}
                  style={[contentStyles.style, stackContentStyle]}
                  className={cx(
                    { [baseClasses.content]: !baseCtx.unstyled },
                    contentStyles.className
                  )}
                  unstyled={baseCtx.unstyled}
                  onPointerDown={handlePointerDown}
                >
                  <Scroll
                    style={
                      ctx.autoSize
                        ? { maxHeight: 'calc(100dvh - var(--drawer-offset) * 2)' }
                        : { height: 'calc(100vh - var(--drawer-offset) * 2)' }
                    }
                  >
                    {children}
                  </Scroll>
                </Paper>
              </FocusTrap>
            </div>
          </div>
        );
      }}
    </Transition>
  );
});

DrawerContent.classes = classes;
DrawerContent.displayName = '@mantine/core/DrawerContent';

function NativeScrollArea({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
